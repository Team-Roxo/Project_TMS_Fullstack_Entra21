package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.Carriers;

@Repository
@EnableJpaRepositories
public interface CarriersRepository extends JpaRepository<Carriers, Integer> {
	
	@Query("FROM Carriers WHERE id = :idCarrier")
	public Carriers findCarrierName(@Param("idCarrier") int idCarrier);

}
