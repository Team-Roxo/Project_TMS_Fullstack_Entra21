package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.SystemLink;

@Repository
@EnableJpaRepositories
public interface SystemLinkRepository extends JpaRepository<SystemLink, Integer> {

	@Query("FROM SystemLink WHERE sender = :id")
	List<SystemLink> getLinks(@Param("id") int id);
	
}
