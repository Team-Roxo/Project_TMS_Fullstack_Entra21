package br.com.entra21.teamroxo.TMSProject;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import br.com.entra21.teamroxo.TMSProject.interfaces.PessoaRepository;
import br.com.entra21.teamroxo.TMSProject.template.Login;
import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@SpringBootApplication
public class TmsProjectApplication implements CommandLineRunner {
	
	private static PessoaRepository pessoaRepository;
	
	public static ArrayList<Login> login = new ArrayList();
	
	@Autowired
	private JdbcTemplate jdbc;
	
	public static void main(String[] args) {
		SpringApplication.run(TmsProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}

}
