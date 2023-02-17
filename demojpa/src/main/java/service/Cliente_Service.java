package service;


import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import DAO.Persona_DAO;
import ec.edu.ups.pweb.demojpa.Producto;
import ec.edu.ups.pweb.demojpa.TBL_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Persona;



@Path("/clientes")
public class Cliente_Service {
	@Inject
	private Persona_DAO persona ;
	/*
	@GET
	@Path("/saludo")
	public String saludar(@QueryParam("name") String nombre) {
		return "Hola " + nombre;
	}
	
	@GET
	@Path("/suma")
	public String suma(int a) {
	
		return "Resultado" + (a);
	}
	@GET
	@Path("/Holamundo")
	public String saludomundo() {
	
		return "Hola mundo";
	}
	
	
	
	@GET
	@Path("sumar/{a}/{b}")
	public String sumar(@PathParam("a") int a, @PathParam("b") int b ) {
		return "Resultado: " + (a);
	}
	
	*/
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String guardarPersonaObjeto(TBL_Persona p) {
		try {			
			persona.crear(p);
		}catch (Exception e) {			
				return"{\"resultado\": \"ERROR\"}";
		}
		return"{\"resultado\": \"OK\"}";
	}
		


	//CLIENTE SERVICES
	@GET
	@Path("/listado")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TBL_Persona> getListadoPersonas(){
		return persona.listar();
	}
	


	

	
	
}                                     
