package br.com.entra21.teamroxo.TMSProject.template;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "aboutus")
public class AboutUs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String titulo;
	private String subTitulo;
	private String body;
	
	private String brunoNome;
	private String brunoFuncao;
	private String brunoFoto;
	private String brunoEmail;
	private String brunoLinkedin;
	private String brunoGithub;
	
	private String cristianNome;
	private String cristianFuncao;
	private String cristianFoto;
	private String cristianEmail;
	private String cristianLinkedin;
	private String cristianGithub;
	
	private String kalilNome;
	private String kalilFuncao;
	private String kalilFoto;
	private String kalilEmail;
	private String kalilLinkedin;
	private String kalilGithub;
	
	private String mateusNome;
	private String mateusFuncao;
	private String mateusFoto;
	private String mateusEmail;
	private String mateusLinkedin;
	private String mateusGithub;
	
	
	public AboutUs() {
		super();
		// TODO Auto-generated constructor stub
	}


	public AboutUs(Integer id, String titulo, String subTitulo, String body, String brunoNome, String brunoFuncao,
			String brunoFoto, String brunoEmail, String brunoLinkedin, String brunoGithub, String cristianNome,
			String cristianFuncao, String cristianFoto, String cristianEmail, String cristianLinkedin,
			String cristianGithub, String kalilNome, String kalilFuncao, String kalilFoto, String kalilEmail,
			String kalilLinkedin, String kalilGithub, String mateusNome, String mateusFuncao, String mateusFoto,
			String mateusEmail, String mateusLinkedin, String mateusGithub) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.subTitulo = subTitulo;
		this.body = body;
		this.brunoNome = brunoNome;
		this.brunoFuncao = brunoFuncao;
		this.brunoFoto = brunoFoto;
		this.brunoEmail = brunoEmail;
		this.brunoLinkedin = brunoLinkedin;
		this.brunoGithub = brunoGithub;
		this.cristianNome = cristianNome;
		this.cristianFuncao = cristianFuncao;
		this.cristianFoto = cristianFoto;
		this.cristianEmail = cristianEmail;
		this.cristianLinkedin = cristianLinkedin;
		this.cristianGithub = cristianGithub;
		this.kalilNome = kalilNome;
		this.kalilFuncao = kalilFuncao;
		this.kalilFoto = kalilFoto;
		this.kalilEmail = kalilEmail;
		this.kalilLinkedin = kalilLinkedin;
		this.kalilGithub = kalilGithub;
		this.mateusNome = mateusNome;
		this.mateusFuncao = mateusFuncao;
		this.mateusFoto = mateusFoto;
		this.mateusEmail = mateusEmail;
		this.mateusLinkedin = mateusLinkedin;
		this.mateusGithub = mateusGithub;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTitulo() {
		return titulo;
	}


	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getSubTitulo() {
		return subTitulo;
	}


	public void setSubTitulo(String subTitulo) {
		this.subTitulo = subTitulo;
	}


	public String getBody() {
		return body;
	}


	public void setBody(String body) {
		this.body = body;
	}


	public String getBrunoNome() {
		return brunoNome;
	}


	public void setBrunoNome(String brunoNome) {
		this.brunoNome = brunoNome;
	}


	public String getBrunoFuncao() {
		return brunoFuncao;
	}


	public void setBrunoFuncao(String brunoFuncao) {
		this.brunoFuncao = brunoFuncao;
	}


	public String getBrunoFoto() {
		return brunoFoto;
	}


	public void setBrunoFoto(String brunoFoto) {
		this.brunoFoto = brunoFoto;
	}


	public String getBrunoEmail() {
		return brunoEmail;
	}


	public void setBrunoEmail(String brunoEmail) {
		this.brunoEmail = brunoEmail;
	}


	public String getBrunoLinkedin() {
		return brunoLinkedin;
	}


	public void setBrunoLinkedin(String brunoLinkedin) {
		this.brunoLinkedin = brunoLinkedin;
	}


	public String getBrunoGithub() {
		return brunoGithub;
	}


	public void setBrunoGithub(String brunoGithub) {
		this.brunoGithub = brunoGithub;
	}


	public String getCristianNome() {
		return cristianNome;
	}


	public void setCristianNome(String cristianNome) {
		this.cristianNome = cristianNome;
	}


	public String getCristianFuncao() {
		return cristianFuncao;
	}


	public void setCristianFuncao(String cristianFuncao) {
		this.cristianFuncao = cristianFuncao;
	}


	public String getCristianFoto() {
		return cristianFoto;
	}


	public void setCristianFoto(String cristianFoto) {
		this.cristianFoto = cristianFoto;
	}


	public String getCristianEmail() {
		return cristianEmail;
	}


	public void setCristianEmail(String cristianEmail) {
		this.cristianEmail = cristianEmail;
	}


	public String getCristianLinkedin() {
		return cristianLinkedin;
	}


	public void setCristianLinkedin(String cristianLinkedin) {
		this.cristianLinkedin = cristianLinkedin;
	}


	public String getCristianGithub() {
		return cristianGithub;
	}


	public void setCristianGithub(String cristianGithub) {
		this.cristianGithub = cristianGithub;
	}


	public String getKalilNome() {
		return kalilNome;
	}


	public void setKalilNome(String kalilNome) {
		this.kalilNome = kalilNome;
	}


	public String getKalilFuncao() {
		return kalilFuncao;
	}


	public void setKalilFuncao(String kalilFuncao) {
		this.kalilFuncao = kalilFuncao;
	}


	public String getKalilFoto() {
		return kalilFoto;
	}


	public void setKalilFoto(String kalilFoto) {
		this.kalilFoto = kalilFoto;
	}


	public String getKalilEmail() {
		return kalilEmail;
	}


	public void setKalilEmail(String kalilEmail) {
		this.kalilEmail = kalilEmail;
	}


	public String getKalilLinkedin() {
		return kalilLinkedin;
	}


	public void setKalilLinkedin(String kalilLinkedin) {
		this.kalilLinkedin = kalilLinkedin;
	}


	public String getKalilGithub() {
		return kalilGithub;
	}


	public void setKalilGithub(String kalilGithub) {
		this.kalilGithub = kalilGithub;
	}


	public String getMateusNome() {
		return mateusNome;
	}


	public void setMateusNome(String mateusNome) {
		this.mateusNome = mateusNome;
	}


	public String getMateusFuncao() {
		return mateusFuncao;
	}


	public void setMateusFuncao(String mateusFuncao) {
		this.mateusFuncao = mateusFuncao;
	}


	public String getMateusFoto() {
		return mateusFoto;
	}


	public void setMateusFoto(String mateusFoto) {
		this.mateusFoto = mateusFoto;
	}


	public String getMateusEmail() {
		return mateusEmail;
	}


	public void setMateusEmail(String mateusEmail) {
		this.mateusEmail = mateusEmail;
	}


	public String getMateusLinkedin() {
		return mateusLinkedin;
	}


	public void setMateusLinkedin(String mateusLinkedin) {
		this.mateusLinkedin = mateusLinkedin;
	}


	public String getMateusGithub() {
		return mateusGithub;
	}


	public void setMateusGithub(String mateusGithub) {
		this.mateusGithub = mateusGithub;
	}



	
	
	
}