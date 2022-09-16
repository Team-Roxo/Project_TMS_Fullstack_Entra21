package br.com.entra21.teamroxo.TMSProject.template;

public class Login extends MaturidadeNivel3Richardson {

	private String user;
	private String senha;
	private boolean admin;
	private boolean enterprise;
	
	public Login() {
		super();
	}

	public Login(String user, String senha, boolean admin, boolean enterprise) {
		super();
		this.user = user;
		this.senha = senha;
		this.admin = admin;
		this.enterprise = enterprise;
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
	
}
