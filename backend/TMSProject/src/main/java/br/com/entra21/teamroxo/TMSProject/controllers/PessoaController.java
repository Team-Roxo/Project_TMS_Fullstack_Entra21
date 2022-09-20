package br.com.entra21.teamroxo.TMSProject.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.com.entra21.teamroxo.TMSProject.TmsProjectApplication;
import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.ItemNivel3;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/user")
public class PessoaController {

	private final String PATH = "http://localhost:8080/users";
	
	@Autowired
	private PessoaRepository pessoaRepository;
	
	@GetMapping()
	@ResponseStatus(code = HttpStatus.OK)
	public List<Pessoa>listAll(){
		return obterListaCompleta();
	}
	
	@GetMapping("/{user}")
	public List<Pessoa>list(@PathVariable String user){
		return null;
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
