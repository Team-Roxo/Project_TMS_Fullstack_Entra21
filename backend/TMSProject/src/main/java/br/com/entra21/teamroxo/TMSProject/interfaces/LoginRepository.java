package br.com.entra21.teamroxo.TMSProject.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.entra21.teamroxo.TMSProject.template.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {

}
