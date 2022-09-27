package br.com.entra21.teamroxo.TMSProject.controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/ship")
public class ShipController {

	final String GOOGLE = "https://maps.googleapis.com/maps/api/directions/json?origin=";
	
	@GetMapping("/{cepOrigem}/{cepDestino}")
	public JsonNode getGoogleAPI(@PathVariable ("cepOrigem") int param1, @PathVariable ("cepDestino") int param2 ){
		
		try {

            String APIUrl = GOOGLE+param1+"&destination="+param2+"&key=AIzaSyCKNjLUI0d01M0SfoDjIov4vZlR3DprotM"; 

            URL url = new URL(APIUrl);
            HttpsURLConnection get = (HttpsURLConnection) url.openConnection();

            BufferedReader response = new BufferedReader(new InputStreamReader(get.getInputStream()));

            String jsonEmString = converteJsonEmString(response);

            ObjectMapper mapper = new ObjectMapper();
            JsonNode node = mapper.readTree(jsonEmString);


            return node;

        }catch (Exception e) {

            return null;

        }
		
	}
	
	public static String converteJsonEmString(BufferedReader buffereReader) throws IOException {
		
        String resposta;
        String json = "";
        
        while ((resposta = buffereReader.readLine()) != null) {
            
        	json += (resposta);
            
        }
        
        return json;
        
    }
	
}
