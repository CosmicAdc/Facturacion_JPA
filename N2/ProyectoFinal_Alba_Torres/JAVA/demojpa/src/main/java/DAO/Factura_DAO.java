package DAO;

import java.io.Serializable;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.pweb.demojpa.TBL_Factura;

@Stateless
public class Factura_DAO implements Serializable {
	private static final long serialVersionUID=1L ;
	@PersistenceContext
	private EntityManager ex;
	
	public Integer crear(TBL_Factura factura) {
		ex.persist(factura);
		return factura.getFac_Codigo();
	}
	public TBL_Factura buscar(Integer codigo) {
		TBL_Factura p= ex.find(TBL_Factura.class, codigo);
		return p;
	}
	public void actualizar(TBL_Factura factura) {
		ex.merge(factura);
	}
	public void eliminar(Integer codigo) {
		TBL_Factura p=buscar(codigo);
		ex.remove(p);		
	}
	
	public List<TBL_Factura> listar() {
		String jsql="SELECT p FROM TBL_Factura p where p.activo='T'";
		Query query=ex.createQuery(jsql,TBL_Factura.class);
		List<TBL_Factura> lista= query.getResultList();
		return lista;		
	}
	
/*	public List<TBL_Factura> listaCompleta() {
		String jsql="SELECT p FROM TBL_Factura p";
		Query query=ex.createQuery(jsql,TBL_Factura.class);
		List<TBL_Factura> lista= query.getResultList();
		if(lista.size()>0) {
			lista.get(0).get
		}
		return lista;		
	}*/
	
}
