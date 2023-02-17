package business;

import java.sql.Date;
import java.util.GregorianCalendar;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;

import DAO.Detalle_DAO;
import DAO.Factura_DAO;
import DAO.Persona_DAO;
import DAO.Producto_DAO;
import ec.edu.ups.pweb.demojpa.TBL_Detalle_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Factura;
import ec.edu.ups.pweb.demojpa.TBL_Persona;
import ec.edu.ups.pweb.demojpa.TBL_Producto;
import service.Cliente_Service;
@Singleton
@Startup	
public class DomeInicio {
	@Inject
	private Detalle_DAO daoDetalle; 
	@Inject
	private Persona_DAO daoPersona; 	
	@Inject
	private Producto_DAO daoProducto; 	
	@Inject
	private Factura_DAO daoFactura; 
	@SuppressWarnings("deprecation")
	@PostConstruct
	public void init() {
		System.out.println("Iniciando");
		TBL_Persona p= new TBL_Persona();
		TBL_Producto pro= new TBL_Producto();
		TBL_Factura fac= new TBL_Factura();	
		TBL_Detalle_Factura det= new TBL_Detalle_Factura();	
		String cedula="112";
		p.setPer_cedula(cedula);
		p.setPer_Nombre("Juanito");	
		p.setPer_Direccion("Octavio Cordero");	
		pro.setPro_stock(25);
		pro.setPro_precio(12.6);
		fac.setPer_id(105);
		try {
			fac.setFac_fecha(new Date(123,1,31));
		} catch (Exception e) {
			e.printStackTrace();
		}
		det.setDet_cantidad(10);
		det.setDet_precio(26.5);
		det.setFac_codigo(20);
		det.setPro_codigo(17);
		//daoDetalle.crear(det);
		//daoPersona.eliminar(Integer.valueOf(cedula));
		//daoProducto.crear(pro);
		//daoFactura.crear(fac);

		//daoPersona.crear(p);
		//daoFactura.listar();
		//daoProducto.crear(pro);
		//daoPersona.eliminar(cedula);
		/*daoProducto.listar();
		TBL_Producto pr=daoProducto.buscar(17);
		System.out.println(pr.getPro_precio());
		
		Cliente_Service CliService = new Cliente_Service();
		String a=CliService.saludar(cedula);
		System.out.println(a);*/
	}
}
