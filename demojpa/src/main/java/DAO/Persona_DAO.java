package DAO;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transaction;
import javax.transaction.Transactional;
import javax.transaction.UserTransaction;

import ec.edu.ups.pweb.demojpa.TBL_Persona;

import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class Persona_DAO implements Serializable{
	private static final long serialVersionUID=1L ;
	@PersistenceContext
	private EntityManager ex;

	public void crear(TBL_Persona persona) {
		ex.persist(persona);
	}
	public TBL_Persona buscar(Integer codigo) {
		TBL_Persona p= ex.find(TBL_Persona.class, codigo);
		return p;
	}
	
	public void actualizar(TBL_Persona persona) {		
		ex.merge(persona);	
	}
	
	public void eliminar(Integer codigo) {
		TBL_Persona p=buscar(codigo);
		try {
			ex.remove(p);	
		}catch (Exception e) {
			System.out.println("Veamos que onda");
		}		
	}
	public TBL_Persona buscarCedula(String cedula) {
		String jsql="Select p from TBL_Persona p where p.per_cedula='"+cedula+"'";
		Query query=ex.createQuery(jsql,TBL_Persona.class);
		List<TBL_Persona> lista= query.getResultList();
		return lista.get(0);	
	}
	public List<TBL_Persona> listar() {
		String jsql="SELECT p FROM TBL_Persona p";
		Query query=ex.createQuery(jsql,TBL_Persona.class);
		List<TBL_Persona> lista= query.getResultList();
		return lista;		
	}	
}
