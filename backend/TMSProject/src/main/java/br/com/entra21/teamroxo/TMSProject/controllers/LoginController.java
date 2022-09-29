package br.com.entra21.teamroxo.TMSProject.controllers;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import br.com.entra21.teamroxo.TMSProject.TmsProjectApplication;
import br.com.entra21.teamroxo.TMSProject.interfaces.CountVisitorsRepository;
import br.com.entra21.teamroxo.TMSProject.interfaces.LoginRepository;
import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.CountVisitors;
import br.com.entra21.teamroxo.TMSProject.template.ItemNivel3;
import br.com.entra21.teamroxo.TMSProject.template.Login;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {

	private final String PATH = "http://localhost:8080/login";
	
	@Autowired
	private LoginRepository loginRepository;
	
	@Autowired
	private CountVisitorsRepository countVisitorsRepository;
	
	@GetMapping
	public List<Login> listAll() {
		return loginRepository.findAll();
	}
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.OK)
	public @ResponseBody List<Login> login(@RequestBody Login credentials){
		
		List<Login> response = loginRepository.findLogin(credentials.getUser(), credentials.getSenha()).stream().toList();
				
		response.forEach(pessoa -> {
			setMaturidadeLvl3(pessoa);
		});
		
		if(!response.isEmpty()) {
			CountVisitors count = new CountVisitors();
			count.setUser(credentials.getUser());
			count.setTime(LocalTime.now());
			count.setDate(LocalDate.now());
			countVisitorsRepository.save(count);
		}
		
		return response;
		
	}

	private void setMaturidadeLvl3(Login pessoa) {
		
		ArrayList<String> headers = new ArrayList<>(Arrays.asList(
				
				"Accept:application/json",
				"Content-Type:application/json"
				
			));
		
		ObjectMapper mapper = new ObjectMapper();
		mapper.registerModule(new JavaTimeModule());
		mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
		mapper.setSerializationInclusion(Include.NON_NULL);
		
		pessoa.setLinks(null);
		
		try {
			
			String json = mapper.writeValueAsString(pessoa);
			pessoa.setLinks(new ArrayList<>());
			pessoa.getLinks().add(new ItemNivel3("POST", PATH+"/login", headers, json));
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
	}
	
}
