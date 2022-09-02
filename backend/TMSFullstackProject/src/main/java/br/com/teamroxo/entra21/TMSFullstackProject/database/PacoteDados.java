package br.com.teamroxo.entra21.TMSFullstackProject.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.teamroxo.entra21.TMSFullstackProject.template.Package;

@Repository
public interface PacoteDados extends JpaRepository<Package, Long>{
	
}
