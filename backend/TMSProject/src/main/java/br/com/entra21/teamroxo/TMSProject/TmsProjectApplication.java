package br.com.entra21.teamroxo.TMSProject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class TmsProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(TmsProjectApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		String content;

		URL url = new URL("https://team-roxo.github.io/assets/mark.html");

		BufferedReader page = new BufferedReader(new InputStreamReader(url.openStream()));
		System.out.println("\n");
		while ((content = page.readLine()) != null) {
			System.out.println(content);
		}

		System.out.println("\n");
		
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;

	}

}
