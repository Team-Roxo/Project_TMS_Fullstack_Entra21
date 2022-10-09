package br.com.entra21.teamroxo.TMSProject.controllers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.teamroxo.TMSProject.interfaces.RecentQuoteRepository;
import br.com.entra21.teamroxo.TMSProject.interfaces.RegisterQuoteRepository;
import br.com.entra21.teamroxo.TMSProject.template.RecentQuote;
import br.com.entra21.teamroxo.TMSProject.template.RegisterQuote;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/quote")
public class QuoteController {

	@Autowired
	private RegisterQuoteRepository registerQuoteRepository;
	
	@Autowired
	private RecentQuoteRepository recentQuoteRepository;
	
	@PostMapping("/recent")
	public RecentQuote recentPackage(@RequestBody RecentQuote quote) {
		return recentQuoteRepository.save(quote);
	}
	
	@GetMapping("/recent/{id}")
	public List<RecentQuote> recentQuote(@PathVariable("id") int id){
		return recentQuoteRepository.findOwnQuote(id);
	}
	
	@DeleteMapping("/recent/{id}")
	public void deleteQuote(@PathVariable("id") int id){
		recentQuoteRepository.deleteById(id);
	}
	
	@PostMapping("/register")
	public RegisterQuote registerPackage(@RequestBody RegisterQuote quote) {
		quote.setPost(LocalDate.now());
		return registerQuoteRepository.save(quote);
	}
	
	@GetMapping("/packs/user/{id}")
	public List<RegisterQuote> getAllMyPacks(@PathVariable("id") int id){
		return registerQuoteRepository.findPackByUserId(id);
	}
	
	@GetMapping("/packs/carrier/{id}")
	public List<RegisterQuote> getAllCarrierPacks(@PathVariable("id") int id){
		return registerQuoteRepository.findPackByCarrierId(id);
	}
	
	@GetMapping("/packs/user/recent/{id}")
	public List<RegisterQuote> getRecentUserPacks(@PathVariable("id") int id){
		return registerQuoteRepository.findPackByUserIdRecent(id, LocalDate.now(), LocalDate.now().minusDays(7));
	}
	
	@GetMapping("/packs/carrier/recent/{id}")
	public List<RegisterQuote> getRecentCarrierPacks(@PathVariable("id") int id){
		return registerQuoteRepository.findPackByCarrierIdRecent(id, LocalDate.now(), LocalDate.now().minusDays(7));
	}
	
	@GetMapping("/go")
	public int goingPackages() {
		
		List<RegisterQuote> response = new ArrayList<RegisterQuote>(registerQuoteRepository.findAll().stream()
				.filter(quote -> (quote.getPost().plusDays(quote.getAwait()).isAfter(LocalDate.now()) || 
						quote.getPost().plusDays(quote.getAwait()).isEqual(LocalDate.now())))
				.toList());
		
		return response.size();
		
	}
	
	
	
}
