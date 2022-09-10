package br.com.entra21.teamroxo.TMSProject.template;

public class Pessoa extends MaturidadeNivel3Richardson{

	private String nome;
	private String email;
	private byte idade;
	
	
	
	//CONSTRUCTORS
	
	public Pessoa() {
		super();
	}
	
	public Pessoa(String nome, String email, byte idade) {
		super();
		this.nome = nome;
		this.idade = idade;
		this.email = email;
	}

	// GETTERS...
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(byte idade) {
		this.idade = idade;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
}
