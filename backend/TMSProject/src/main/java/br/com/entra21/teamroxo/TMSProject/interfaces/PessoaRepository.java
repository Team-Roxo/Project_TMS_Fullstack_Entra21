package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.Pessoa;

@Repository
@EnableJpaRepositories
public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

	@Query("FROM Pessoa WHERE birth = :now")
	List<Pessoa> findBirth (@Param("now") LocalDate now);
	
	@Query("FROM Pessoa WHERE birth BETWEEN :firstDay and :lastDay")
	List<Pessoa> findBirthMonth (@Param("firstDay") LocalDate first, @Param("lastDay") LocalDate last);
	
}
