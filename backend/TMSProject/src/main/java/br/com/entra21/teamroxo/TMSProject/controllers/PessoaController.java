package br.com.entra21.teamroxo.TMSProject.controllers;

import java.time.LocalDate;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import br.com.entra21.teamroxo.TMSProject.TmsProjectApplication;
import br.com.entra21.teamroxo.TMSProject.interfaces.CountVisitorsRepository;
import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.CountVisitors;
import br.com.entra21.teamroxo.TMSProject.template.ItemNivel3;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;
import br.com.entra21.teamroxo.TMSProject.template.RegisterQuote;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class PessoaController {

	private final String PATH = "http://localhost:8080/user";
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private CountVisitorsRepository countVisitorsRepository;
	
	@GetMapping()
	@ResponseStatus(code = HttpStatus.OK)
	public List<Pessoa>listAll(){
		return obterListaCompleta();
	}
	
	@GetMapping("/{id}")
	public Optional<Pessoa> list(@PathVariable int id){
		return pessoaRepository.findById(id);
	}
	
	@GetMapping("/countClients")
	public long numberClients() {
		return pessoaRepository.count();
	}
	
	@GetMapping("/countVisitors")
	public List<CountVisitors> numberVisitors() {
		return countVisitorsRepository.findAll();
	}
	
	@GetMapping("/birthnow")
	public List<Pessoa> birthNow(){
		return pessoaRepository.findBirth(LocalDate.now());
	}
	
	@GetMapping("/birthmonth")
	public List<Pessoa> birthMonth(){
		return pessoaRepository.findBirthMonth(LocalDate.now().withMonth(LocalDate.now().getMonthValue()).with(TemporalAdjusters.firstDayOfMonth()), 
				LocalDate.now().withMonth(LocalDate.now().getMonthValue()).with(TemporalAdjusters.lastDayOfMonth()));
	}
	
	@GetMapping("/bounce")
	public float bounceRate() {
		List<CountVisitors> bounce = new ArrayList<CountVisitors>(countVisitorsRepository.findAll().stream()
				.filter(count -> count.getBounceRate() == true)
				.toList());
		
		return (bounce.size()*100)/countVisitorsRepository.count();
		
	}
	
	@PostMapping("/disbounce/{id}")
	public boolean disBounce(@PathVariable("id") int id) {
		countVisitorsRepository.updateBounce(id);
		return false;
	}
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public Pessoa register(@RequestBody Pessoa dados) {
		return pessoaRepository.save(dados);
	}
	
	@DeleteMapping("/{id}")
	public void deletePessoa(@PathVariable("id") int id){
		pessoaRepository.deleteById(id);
	}

	private List<Pessoa> obterListaCompleta() {

		List<Pessoa> response = pessoaRepository.findAll();
		response.forEach(pessoa -> {
			setMaturidadeNivel3(pessoa);
		});

		return response;

	}

	private void setMaturidadeNivel3(Pessoa pessoa) {

		ArrayList<String> headers = new ArrayList();
		headers.add("Accept : application/json");
		headers.add("Content-type : application/json");
		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new JavaTimeModule());
		mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
		mapper.setSerializationInclusion(Include.NON_NULL);

		try {

			pessoa.setLinks(null);
			String json = mapper.writeValueAsString(pessoa);
			pessoa.setLinks(new ArrayList<>());
			pessoa.getLinks().add(new ItemNivel3("GET", PATH, null, null));
			pessoa.getLinks().add(new ItemNivel3("GET", PATH + "/" + pessoa.getNome(), null, null));
			pessoa.getLinks().add(new ItemNivel3("POST", PATH, headers, json));
			pessoa.getLinks().add(new ItemNivel3("PUT", PATH + "/" + pessoa.getNome(), headers, json));

		} catch (JsonProcessingException e) {

			e.printStackTrace();

		}

	}
	
	

}
