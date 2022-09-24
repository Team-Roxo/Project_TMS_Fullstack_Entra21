package br.com.entra21.teamroxo.TMSProject.template;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "register")
public class RegisterQuote {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private float price;
	private byte await;
	private String origin;
	private String destiny;
	private byte carrier_id;
	private float cub_height;
	private int pessoa_id;

	public RegisterQuote() {
		super();
	}

	public RegisterQuote(Integer id, float price, byte await, String origin, String destiny, byte carrier_id,
			float cub_height, int pessoa_id) {
		super();
		this.id = id;
		this.price = price;
		this.await = await;
		this.origin = origin;
		this.destiny = destiny;
		this.carrier_id = carrier_id;
		this.cub_height = cub_height;
		this.pessoa_id = pessoa_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public byte getAwait() {
		return await;
	}

	public void setAwait(byte await) {
		this.await = await;
	}

	public String getOrigin() {
		return origin;
	}

	public void setOrigin(String origin) {
		this.origin = origin;
	}

	public String getDestiny() {
		return destiny;
	}

	public void setDestiny(String destiny) {
		this.destiny = destiny;
	}

	public byte getCarrier_id() {
		return carrier_id;
	}

	public void setCarrier_id(byte carrier_id) {
		this.carrier_id = carrier_id;
	}

	public float getCub_height() {
		return cub_height;
	}

	public void setCub_height(float cub_height) {
		this.cub_height = cub_height;
	}

	public int getPessoa_id() {
		return pessoa_id;
	}

	public void setPessoa_id(int pessoa_id) {
		this.pessoa_id = pessoa_id;
	}

}
