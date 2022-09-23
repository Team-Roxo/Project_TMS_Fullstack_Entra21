package br.com.entra21.teamroxo.TMSProject.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.teamroxo.TMSProject.interfaces.LoginRepository;
import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.Login;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/register")
public class RegisterController {

	private final String PATH = "http://localhost:8080/register";
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public @ResponseBody Pessoa register(@RequestBody Pessoa credentials){
		
		return pessoaRepository.save(credentials);
		
	}
	
	@PostMapping("/login")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Login registerLogin(@RequestBody Login credentials) {
		
		return loginRepository.save(credentials);
		
	}
	
}