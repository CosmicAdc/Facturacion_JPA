package service;

import java.util.ArrayList;
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

import DAO.Factura_DAO;
import ec.edu.ups.pweb.demojpa.TBL_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Persona;

@Path("/facturas")
public class Factura_Service {
	@Inject
	private Factura_DAO daoFactura_DAO;
	
	@GET
	@Path("/listar")
	@Consumes("application/json")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TBL_Factura> getFactura(){
		return daoFactura_DAO.listar();
	}
	
	@POST
	@Path("/crear")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public Integer crearFactura(TBL_Factura p) {
		Integer codigo=-1;
		try {			
			codigo=daoFactura_DAO.crear(p);
		}catch (Exception e) {			
			return codigo;
		}
		return codigo;
	}
	
	@POST
	@Path("/anular")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String anularFactura(Integer codigo) {
		System.out.println("llego"+codigo);
		TBL_Factura p=daoFactura_DAO.buscar(codigo);
		System.out.println(p.getFac_Codigo()+"--"+p.getActivo());
		p.setActivo("F");
		try {		
			daoFactura_DAO.actualizar(p);
		}catch (Exception e) {			
				return "{\"Anular\": \"ERROR\"}";
		}
		return "{\"Anular\": \"OK\"}";
	}
		
	/*@GET
	@Consumes("application/json")
	@Produces(MediaType.APPLICATION_JSON)
	public List<TBL_Factura> getFacturas(){
		List<TBL_Factura> fact = daoFactura_DAO.listar();
		
		List<TBL_Factura> aux= new ArrayList<TBL_Factura>();
		for(TBL_Factura fac=new TBL_Factura())
	}*/
	
	
}
