package service;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import DAO.ProductoDao;
import ec.edu.ups.pweb.demojpa.Producto;

@Path("productos")
public class ProductoService {

	@Inject
	ProductoDao daoProducto;
	
	@POST
	@Path("newPro")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String guardarProducto(Producto p) {
		try {
			daoProducto.insert(p);
		}catch(Exception e){
			return "{\"resultado\": \"ERROR\"}";
		}
		return "{\"resultado\": \"OK\"}";
	}

	@POST
	@Path("findPro")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public Producto buscarProducto(int codigo) {
		return daoProducto.read(codigo);		
	}

	@POST
	@Path("updatePro")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String actualizarPro(Producto p) {
		try {
			daoProducto.update(p);
		}catch(Exception e){
			return "{\"resultado\": \"ERROR\"}";
		}
		return "{\"resultado\": \"OK\"}";
		
		
	}
	@POST
	@Path("deletePro")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes("application/json")
	public String eliminarPro(int codigo) {
		try {
			System.out.println(codigo);
			daoProducto.delete(codigo);
		}catch(Exception e){
			return "{\"resultado\": \"ERROR\"}";
		}
		return "{\"resultado\": \"OK\"}";
		
		
	}
	
	@GET
	@Path("listPro")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Producto> getListPer(){
		return daoProducto.getList();
	}
	//Content-type=application/json
}
