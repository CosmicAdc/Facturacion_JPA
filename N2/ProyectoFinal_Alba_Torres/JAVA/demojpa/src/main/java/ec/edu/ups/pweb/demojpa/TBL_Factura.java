package ec.edu.ups.pweb.demojpa;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
public class TBL_Factura implements Serializable{		
	private static final long serialVersionUID=1L ;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "fac_Codigo")
	private int fac_Codigo; 
	private Integer per_id;
	@Temporal(TemporalType.DATE)
	private Date fac_fecha;
	private String activo;   
	public Integer getPer_id() {
		return per_id;
	}
	public void setPer_id(Integer per_id) {
		this.per_id = per_id;
	}
	public Date getFac_fecha() {		
		return fac_fecha;
	}
	public void setFac_fecha(Date fac_fecha) {

		this.fac_fecha = fac_fecha;
	}
	public Integer getFac_Codigo() {
		return fac_Codigo;
		
	}
	
	public String getActivo() {
		return activo;
	}
	public void setActivo(String activo) {
		this.activo = activo;
	}
	@ManyToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "per_id", referencedColumnName = "per_id", insertable = false, updatable = false)
	private TBL_Persona persona; 
}
