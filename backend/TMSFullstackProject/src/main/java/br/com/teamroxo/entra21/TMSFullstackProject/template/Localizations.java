package br.com.teamroxo.entra21.TMSFullstackProject.template;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Localizations {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String remetente;
	
	@Column
	private String destinatario;
	
	@ManyToOne
	public Package pack;
	
}
