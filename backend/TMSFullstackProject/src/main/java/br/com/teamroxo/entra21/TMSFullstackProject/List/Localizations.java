package br.com.teamroxo.entra21.TMSFullstackProject.List;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import br.com.teamroxo.entra21.TMSFullstackProject.template.Pacotes;

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
	public Pacotes pack;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRemetente() {
		return remetente;
	}

	public void setRemetente(String remetente) {
		this.remetente = remetente;
	}

	public String getDestinatario() {
		return destinatario;
	}

	public void setDestinatario(String destinatario) {
		this.destinatario = destinatario;
	}

	public Pacotes getPack() {
		return pack;
	}

	public void setPack(Pacotes pack) {
		this.pack = pack;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Localizations other = (Localizations) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
}
