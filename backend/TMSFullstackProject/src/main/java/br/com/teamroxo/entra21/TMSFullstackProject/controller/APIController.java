package br.com.teamroxo.entra21.TMSFullstackProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.teamroxo.entra21.TMSFullstackProject.database.PacoteDados;
import br.com.teamroxo.entra21.TMSFullstackProject.template.Pacotes;

@RestController
@RequestMapping("/tms")
public class APIController {

	@Autowired
	private PacoteDados pacoteDados;
	
	@GetMapping(value = "/all")
	public List<Pacotes> getAll(){
		return pacoteDados.findAll();
	}
	
	@PostMapping(value = "/add")
	@ResponseStatus(code = HttpStatus.CREATED)
	public Pacotes post(@RequestBody Pacotes pacotes) {
		return pacoteDados.save(pacotes);
	}
	
}
