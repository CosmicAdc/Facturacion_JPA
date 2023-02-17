package service;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import DAO.Detalle_DAO;
import DAO.Persona_DAO;
import ec.edu.ups.pweb.demojpa.Producto;
import ec.edu.ups.pweb.demojpa.TBL_Detalle_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Persona;
@Path("/detalles")
public class Detalles_Services {
	
	@Inject
	private Detalle_DAO detalle ;
	@GET
	@Path("/listar")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TBL_Detalle_Factura> getListadoPersonas(@QueryParam("codigo")Integer codigo){
		return detalle.listar(codigo);
	}
	@POST
	@Path("/creaDetalles")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String guardarProducto(TBL_Detalle_Factura p) {
		try {
			detalle.crear(p);
		}catch(Exception e){
			return "{\"resultado\": \"ERROR\"}";
		}
		return "{\"resultado\": \"OK\"}";
	}
}
