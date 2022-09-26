package br.com.entra21.teamroxo.TMSProject.template;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "carriers")
public class Carriers {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String razao;
	private String email;
	private String cnpj;
	private float taxa;
	
	public Carriers() {
		super();
	}

	public Carriers(Integer id, String razao, String email, String cnpj, float taxa) {
		super();
		this.id = id;
		this.razao = razao;
		this.email = email;
		this.cnpj = cnpj;
		this.taxa = taxa;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getRazao() {
		return razao;
	}

	public void setRazao(String razao) {
		this.razao = razao;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public float getTaxa() {
		return taxa;
	}

	public void setTaxa(float taxa) {
		this.taxa = taxa;
	}
	
}
