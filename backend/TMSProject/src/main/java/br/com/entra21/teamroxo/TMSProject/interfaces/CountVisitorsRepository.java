package br.com.entra21.teamroxo.TMSProject.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.CountVisitors;

@Repository
@EnableJpaRepositories
public interface CountVisitorsRepository extends JpaRepository<CountVisitors, Integer> {

	@Query(value = "UPDATE CountVisitors SET bounceRate = 0 WHERE id = :idUser")
	void updateBounce(@Param("idUser") int idUser);
	
}
