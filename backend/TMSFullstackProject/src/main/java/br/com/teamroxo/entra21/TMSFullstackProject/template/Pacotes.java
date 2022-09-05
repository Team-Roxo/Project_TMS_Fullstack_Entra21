package br.com.teamroxo.entra21.TMSFullstackProject.template;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import br.com.teamroxo.entra21.TMSFullstackProject.List.Localizations;

@Entity
public class Pacotes {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column
	private String codigo;
	
	@Column
	private Float price;
	
	@Column
	private Float weight;
	
	@Column
	private LocalDate envio;
	
	@Column
	@OneToMany(mappedBy = "pack", targetEntity = Localizations.class)
	private List<Localizations> enderecos;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Float getWeight() {
		return weight;
	}

	public void setWeight(Float weight) {
		this.weight = weight;
	}

	public LocalDate getEnvio() {
		return envio;
	}

	public void setEnvio(LocalDate envio) {
		this.envio = envio;
	}

	public List<Localizations> getEnderecos() {
		return enderecos;
	}

	public void setEnderecos(List<Localizations> enderecos) {
		this.enderecos = enderecos;
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
		Pacotes other = (Pacotes) obj;
		return Objects.equals(id, other.id);
	}
	
}
