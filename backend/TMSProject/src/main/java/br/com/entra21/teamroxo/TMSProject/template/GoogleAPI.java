package br.com.entra21.teamroxo.TMSProject.template;

import java.util.List;

public class GoogleAPI {

	private List<String> geocoded_waypoints;
	private List<String> routes;
	private String status;

	public GoogleAPI() {
		super();
	}

	public GoogleAPI(List<String> geocoded_waypoints, List<String> routes, String status) {
		super();
		this.geocoded_waypoints = geocoded_waypoints;
		this.routes = routes;
		this.status = status;
	}

	public List<String> getGeocoded_waypoints() {
		return geocoded_waypoints;
	}

	public void setGeocoded_waypoints(List<String> geocoded_waypoints) {
		this.geocoded_waypoints = geocoded_waypoints;
	}

	public List<String> getRoutes() {
		return routes;
	}

	public void setRoutes(List<String> routes) {
		this.routes = routes;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}
