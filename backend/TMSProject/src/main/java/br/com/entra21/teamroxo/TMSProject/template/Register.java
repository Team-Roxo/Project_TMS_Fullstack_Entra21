package br.com.entra21.teamroxo.TMSProject.template;

public class Register {

	private String nome;
	private String user;
	private String email;
	private String senha;
	
	public Register() {
		super();
	}

	public Register(String nome, String user, String email, String senha) {
		super();
		this.nome = nome;
		this.user = user;
		this.email = email;
		this.senha = senha;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}
