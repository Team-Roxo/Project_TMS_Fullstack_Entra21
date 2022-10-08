package br.com.entra21.teamroxo.TMSProject.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.AboutUs;
import br.com.entra21.teamroxo.TMSProject.template.Carriers;


@Repository
@EnableJpaRepositories
public interface AboutUsRepository extends JpaRepository<AboutUs, String>{

	@Query("FROM AboutUs")
	public void AboutUs();
	
}


