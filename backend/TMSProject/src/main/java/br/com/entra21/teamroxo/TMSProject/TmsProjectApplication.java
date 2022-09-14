package br.com.entra21.teamroxo.TMSProject;

import java.util.ArrayList;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@SpringBootApplication
public class TmsProjectApplication implements CommandLineRunner {

	public static ArrayList<Pessoa> pessoas=new ArrayList();
	
	public static void main(String[] args) {
		SpringApplication.run(TmsProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		pessoas.add(new Pessoa("Kalil", "kjfakhouri@gmail.com", (byte) 21));
		pessoas.add(new Pessoa("Kalil", "kjfakhouri@gmail.com", (byte) 21));
		pessoas.add(new Pessoa("Kalil", "kjfakhouri@gmail.com", (byte) 21));
		pessoas.add(new Pessoa("Kalil", "kjfakhouri@gmail.com", (byte) 21));
		pessoas.add(new Pessoa("Kalil", "kjfakhouri@gmail.com", (byte) 21));
		
	}

}
