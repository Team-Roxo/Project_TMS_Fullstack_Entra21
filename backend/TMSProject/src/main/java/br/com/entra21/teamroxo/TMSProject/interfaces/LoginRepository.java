package br.com.entra21.teamroxo.TMSProject.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.entra21.teamroxo.TMSProject.template.Login;

@Repository
@EnableJpaRepositories
public interface LoginRepository extends JpaRepository<Login, Integer> {

	@Query("FROM Login WHERE user = :usuario and senha = :password")
	List<Login> findLogin(@Param("usuario") String usuario, @Param("password") String password);
	
}
