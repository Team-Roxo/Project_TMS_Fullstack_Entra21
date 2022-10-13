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
	
	private int sender;
	
	private int receiver;

	public SystemLink() {
		super();
	}

	public SystemLink(Integer id, int client, int enterprise) {
		super();
		this.id = id;
		this.sender = client;
		this.receiver = enterprise;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getSender() {
		return sender;
	}

	public void setSender(int client) {
		this.sender = client;
	}

	public int getReceiver() {
		return receiver;
	}

	public void setReceiver(int enterprise) {
		this.receiver = enterprise;
	}
	
}
