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
import ec.edu.ups.pweb.demojpa.TBL_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Persona;
import javax.ws.rs.Path;

@Path("/clientes2")
public class Cliente_Service2 {
	@Inject
	private Persona_DAO persona ;
	
	
	@GET
	@Path("/buscaCliente")
	@Produces(MediaType.APPLICATION_JSON)
	public TBL_Persona buscaCedula(@QueryParam("cedula")String cedula) {	
		return persona.buscarCedula(cedula);		
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String guardarPersonaObjeto(TBL_Persona p) {		
		try {		
			persona.eliminar(p.getPer_id());
		}catch (Exception e) {			
				return"{\"Eliminar\": \"ERROR\"}";
		}
		return"{\"Eliminar\": \"OK\"}";
	}
	
	@POST
	@Path("/actualizar")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String editarPersonaObjeto(TBL_Persona p) {		
		try {		
			persona.actualizar(p);
		}catch (Exception e) {			
				return"{\"Editar\": \"ERROR\"}";
		}
		return"{\"Editar\": \"OK\"}";
	}
	

	
		
}
