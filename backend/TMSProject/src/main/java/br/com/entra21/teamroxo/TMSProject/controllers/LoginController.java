package br.com.entra21.teamroxo.TMSProject.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.entra21.teamroxo.TMSProject.TmsProjectApplication;
import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.ItemNivel3;
import br.com.entra21.teamroxo.TMSProject.template.Login;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {

	private final String PATH = "http://localhost:8080/login";
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.OK)
	public @ResponseBody List<Login> login(@RequestBody Login credentials){
		
		List<Login> response = new ArrayList<Login>(pessoaRepository.findAll()).stream()
				.filter(login -> (login.getUser().equals(credentials.getUser())) &&
						login.getSenha().equals(credentials.getSenha()))
				.toList();
		response.forEach(pessoa -> {
			setMaturidadeLvl3(pessoa);
		});
		
		return response;
		
	}
	
	@PostMapping("/register")
	@ResponseStatus(code = HttpStatus.CREATED)
	public @ResponseBody Pessoa register(@RequestBody Pessoa credentials){
		return pessoaRepository.save(credentials);
	}

	private void setMaturidadeLvl3(Login pessoa) {
		
		ArrayList<String> headers = new ArrayList<>(Arrays.asList(
				
				"Accept:application/json",
				"Content-Type:application/json"
				
			));
		
		ObjectMapper mapper = new ObjectMapper();
		
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
