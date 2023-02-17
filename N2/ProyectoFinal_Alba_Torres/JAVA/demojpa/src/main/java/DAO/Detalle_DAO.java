package DAO;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.pweb.demojpa.TBL_Detalle_Factura;
@Stateless
public class Detalle_DAO implements Serializable  {
	private static final long serialVersionUID=1L ;
	@PersistenceContext
	private EntityManager ex;
	public void crear(TBL_Detalle_Factura factura) {
		ex.persist(factura);
	}
	public TBL_Detalle_Factura buscar(Integer codigo) {
		TBL_Detalle_Factura p= ex.find(TBL_Detalle_Factura.class, codigo);
		return p;
	}
	public void actualizar(TBL_Detalle_Factura factura) {
		ex.merge(factura);
	}
	public void eliminar(int codigo) {
		TBL_Detalle_Factura p=buscar(codigo);
		ex.remove(p);		
	}
	
	public List<TBL_Detalle_Factura> listar(Integer codigo) {		
		String jsql="SELECT p FROM TBL_Detalle_Factura p where p.fac_codigo="+codigo;
		Query query=ex.createQuery(jsql,TBL_Detalle_Factura.class);
		List<TBL_Detalle_Factura> lista= query.getResultList();
		return lista;		
	}
	
}
