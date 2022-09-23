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
import br.com.entra21.teamroxo.TMSProject.template.Register;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/register")
public class RegisterController {
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@Autowired
	private LoginRepository loginRepository;
	
	@PostMapping()
	@ResponseStatus(code = HttpStatus.CREATED)
	public @ResponseBody Login register(@RequestBody Register credentials){
		
		Pessoa pessoa = new Pessoa();
		Login login = new Login();
		
		pessoa.setNome(credentials.getNome());
		pessoa.setEmail(credentials.getEmail());
		login.setPessoa_id(pessoaRepository.save(pessoa).getId());
		login.setUser(credentials.getUser());
		login.setSenha(credentials.getSenha());
		return loginRepository.save(login);
		
	}
	
}
