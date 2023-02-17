package ec.edu.ups.pweb.demojpa;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class TBL_Persona implements Serializable{
	private static final long serialVersionUID=1L ;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "per_id")
	private int per_id;
	 @Column(name = "per_cedula", unique=true)
	private String per_cedula;
	private String per_Nombre;
	private String per_Direccion;
	public int getPer_id() {
		return per_id;
	}
	public void setPer_id(int per_id) {
		this.per_id = per_id;
	}
	public String getPer_cedula() {
		return per_cedula;
	}
	public void setPer_cedula(String per_cedula) {
		this.per_cedula = per_cedula;
	}
	public String getPer_Nombre() {
		return per_Nombre;
	}
	public void setPer_Nombre(String per_Nombre) {
		this.per_Nombre = per_Nombre;
	}
	public String getPer_Direccion() {
		return per_Direccion;
	}
	public void setPer_Direccion(String per_Direccion) {
		this.per_Direccion = per_Direccion;
	}
}
