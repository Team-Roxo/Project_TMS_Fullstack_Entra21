package br.com.entra21.teamroxo.TMSProject.template;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "link")
public class SystemLink {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private int client;
	
	private int enterprise;

	public SystemLink() {
		super();
	}

	public SystemLink(Integer id, int client, int enterprise) {
		super();
		this.id = id;
		this.client = client;
		this.enterprise = enterprise;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getClient() {
		return client;
	}

	public void setClient(int client) {
		this.client = client;
	}

	public int getEnterprise() {
		return enterprise;
	}

	public void setEnterprise(int enterprise) {
		this.enterprise = enterprise;
	}
	
}
