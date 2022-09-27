package br.com.entra21.teamroxo.TMSProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.teamroxo.TMSProject.interfaces.CarriersRepository;
import br.com.entra21.teamroxo.TMSProject.template.Carriers;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/carriers")
public class CarriersControllers {

	@Autowired
	private CarriersRepository carriersRepository;
	
	@GetMapping()
	public List<Carriers> listCarriers(){
		
		return carriersRepository.findAll();
		
	}
	
	@PostMapping()
	public Carriers postCarrier(@RequestBody Carriers carrier) {
		
		return carriersRepository.save(carrier);
		
	}
	
}
