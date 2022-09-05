package br.com.teamroxo.entra21.TMSFullstackProject.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.teamroxo.entra21.TMSFullstackProject.template.Pacotes;

@Repository
public interface PacoteDados extends JpaRepository<Pacotes, Long>{
	
}
