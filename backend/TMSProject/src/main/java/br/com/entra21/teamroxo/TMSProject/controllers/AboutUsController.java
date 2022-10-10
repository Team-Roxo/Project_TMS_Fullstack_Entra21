package br.com.entra21.teamroxo.TMSProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.entra21.teamroxo.TMSProject.interfaces.AboutUsRepository;
import br.com.entra21.teamroxo.TMSProject.template.AboutUs;



	
	
	@RestController
	@CrossOrigin(origins = "*")
	@RequestMapping("/aboutus")
	public class AboutUsController {

		@Autowired
		private AboutUsRepository aboutUsRepository;
		
		@GetMapping()
		public List<AboutUs> listAboutUs(){
			return aboutUsRepository.findAll() ;
			
		}

}

