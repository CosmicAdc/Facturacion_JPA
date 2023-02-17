package DAO;
import java.io.Serializable;
import java.util.List;

import javax.persistence.Query;

import ec.edu.ups.pweb.demojpa.TBL_Producto;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
@Stateless
public class Producto_DAO  implements Serializable{
		private static final long serialVersionUID=1L ;
		@PersistenceContext
		private EntityManager ex;
		
		public void crear(TBL_Producto producto) {
			ex.persist(producto);
		}
		public TBL_Producto buscar(Integer codigo) {
			TBL_Producto p= ex.find(TBL_Producto.class, codigo);
			return p;
		}
		public void actualizar(TBL_Producto producto) {
			ex.merge(producto);
		}
		public void eliminar(Integer codigo) {
			TBL_Producto p=buscar(codigo);
			ex.remove(p);		
		}
		
		public List<TBL_Producto> listar() {
			String jsql="SELECT p FROM TBL_Producto p";
			Query query=ex.createQuery(jsql,TBL_Producto.class);
			List<TBL_Producto> lista= query.getResultList();
			return lista;		
		}
		
		
}
