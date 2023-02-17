package ec.edu.ups.pweb.demojpa;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class TBL_Producto implements Serializable{
		private static final long serialVersionUID=1L ;
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		@Column(name = "pro_codigo")
		private int pro_codigo;
		private double pro_precio;
		private int pro_stock;		
		
		public double getPro_precio() {
			return pro_precio;
		}
		public void setPro_precio(double pro_precio) {
			this.pro_precio = pro_precio;
		}
		public int getPro_stock() {
			return pro_stock;
		}
		public void setPro_stock(int pro_stock) {
			this.pro_stock = pro_stock;
		}
		
		
		
		
}
