package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import br.com.entra21.teamroxo.TMSProject.template.Carriers;

public interface CarriersRepository extends JpaRepository<Carriers, Integer> {
	
//	@Query("FROM carriers WHERE idade >= :idadeParam")
//	List<Carriers> maiorIdade (@Param("idadeParam")Integer idade);

}
