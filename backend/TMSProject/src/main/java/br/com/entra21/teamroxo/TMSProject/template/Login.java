package br.com.entra21.teamroxo.TMSProject.template;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class Login extends MaturidadeNivel3Richardson {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String user;
	private String senha;
	private boolean admin;
	private boolean enterprise;
	private Integer pessoa_id;
	
	public Login() {
		super();
	}

	public Login(Integer id, String user, String senha, boolean admin, boolean enterprise, Integer pessoa_id) {
		super();
		this.id = id;
		this.user = user;
		this.senha = senha;
		this.admin = admin;
		this.enterprise = enterprise;
		this.pessoa_id = pessoa_id;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public boolean isAdmin() {
		return admin;
	}

	public void setAdmin(boolean admin) {
		this.admin = admin;
	}

	public boolean isEnterprise() {
		return enterprise;
	}

	public void setEnterprise(boolean enterprise) {
		this.enterprise = enterprise;
	}

	public Integer getPessoa_id() {
		return pessoa_id;
	}

	public void setPessoa_id(Integer pessoa_id) {
		this.pessoa_id = pessoa_id;
	}	
	
}
