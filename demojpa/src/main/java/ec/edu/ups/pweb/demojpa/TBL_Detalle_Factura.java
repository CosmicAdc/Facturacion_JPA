package ec.edu.ups.pweb.demojpa;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Entity
public class TBL_Detalle_Factura implements Serializable{
		private static final long serialVersionUID=1L ;
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		@Column(name = "det_codigo")
		private int det_codigo;
		private int fac_codigo;
		private int pro_codigo;
		private int det_cantidad;
		private double det_precio;
		
		public int getFac_codigo() {
			return fac_codigo;
		}
		public void setFac_codigo(int fac_codigo) {
			this.fac_codigo = fac_codigo;
		}
		public int getPro_codigo() {
			return pro_codigo;
		}
		public void setPro_codigo(int pro_codigo) {
			this.pro_codigo = pro_codigo;
		}
		public int getDet_cantidad() {
			return det_cantidad;
		}
		public void setDet_cantidad(int det_cantidad) {
			this.det_cantidad = det_cantidad;
		}
		public double getDet_precio() {
			return det_precio;
		}
		public void setDet_precio(double det_precio) {
			this.det_precio = det_precio;
		}
		
		@ManyToOne(cascade = {CascadeType.ALL})
		@JoinColumn(name = "fac_codigo",referencedColumnName = "fac_codigo", insertable = false, updatable = false)
		private TBL_Factura factura ;
		
		@ManyToOne(cascade = {CascadeType.ALL})
		@JoinColumn(name = "pro_codigo",referencedColumnName = "pro_codigo", insertable = false, updatable = false)
		private Producto producto ; 
		
		
}
	