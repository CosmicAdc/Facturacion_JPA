package ec.edu.ups.pweb.demojpa;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Producto implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@JoinColumn(name="pro_codigo")
	private int pro_codigo;
	private double pro_precio;
	private int pro_stock;
	private String pro_nombre;	
	public int getPro_codigo() {
		return pro_codigo;
	}
	public void setPro_codigo(int pro_codigo) {
		this.pro_codigo = pro_codigo;
	}
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
	
	public String getPro_nombre() {
		return pro_nombre;
	}
	public void setPro_nombre(String pro_nombre) {
		this.pro_nombre = pro_nombre;
	}
	
}
