package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.RecentQuote;

@Repository
@EnableJpaRepositories
public interface RecentQuoteRepository extends JpaRepository<RecentQuote, Integer> {

	@Query("FROM RecentQuote WHERE pessoa_id = :idUser")
	List<RecentQuote> findOwnQuote(@Param("idUser") int idUser);
	
}
