package br.com.entra21.teamroxo.TMSProject.template;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class AboutUs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String titulo = "Sobre o Projeto";
	private String subTitulo = "Licença, disponibilidade e finalidade";
	private String body = "Esse projeto foi desenvolvido pelo grupo Roxo da Turma Java Noturno de 2022, composto por Bruno Roberto, Cristian Schauffert, Kalil Fakhouri e Mateus Felipe com a mentoria do professor Oliota, visando apenas a demonstração dos conhecimentos técnicos adquiridos durante o curso e a apresentação da etapa final à empresas.\r\n"
			+ "\r\n"
			+ "A cópia do recurso está disponível a todos, podendo ser modificada e alterada. Fica proibida a venda, distribuição ou repasse da mesma. A maioria dos recurso e tecnologias são de código livre (open-source) ou teste de avaliação por tempo determinado (Google Cloud), afim de trazer a melhor experiência do uso de um software funcional.\r\n"
			+ "\r\n"
			+ "Devido ao nosso objetivo de comprovar os conhecimentos adquiridos, algumas partes do software são simulados devido ao tempo e resposta que levaria na realidade, acelerando, assim, o processo de entrega, por exemplo, para que possa ser vista em tempo real o processamento de dados, tanto localmente quanto em nuvem.";
	
	private String brunoNome = "Bruno Roberto";
	private String brunoFuncao = "Frontend Dev";
	
	private String cristianNome = "Cristian Schauffert";
	private String cristianFuncao = "Web Designer";
	
	private String kalilNome = "Kalil J. Fakhouri";
	private String kalilFuncao = "Lead Developer";
	
	private String mateusNome = "Mateus Felipe";
	private String mateusFuncao = "Lead Developer";
	
	
	
	
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
	public AboutUs() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AboutUs(String titulo, String subTitulo, String body, String brunoNome, String brunoFuncao,
			String cristianNome, String cristianFuncao, String kalilNome, String kalilFuncao, String mateusNome,
			String mateusFuncao) {
		super();
		this.titulo = titulo;
		this.subTitulo = subTitulo;
		this.body = body;
		this.brunoNome = brunoNome;
		this.brunoFuncao = brunoFuncao;
		this.cristianNome = cristianNome;
		this.cristianFuncao = cristianFuncao;
		this.kalilNome = kalilNome;
		this.kalilFuncao = kalilFuncao;
		this.mateusNome = mateusNome;
		this.mateusFuncao = mateusFuncao;
	}
	public List<AboutUs> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	
	
	
}
