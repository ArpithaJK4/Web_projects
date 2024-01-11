package dto;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import dao.BankAccounts;

@Entity
public class Pancard {
@Id
private int pan_id;
private String name;
private long phone;

@OneToMany
List<BankAccounts> lsb;

public int getPan_id() {
	return pan_id;
}

public void setPan_id(int pan_id) {
	this.pan_id = pan_id;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public long getPhone() {
	return phone;
}

public void setPhone(long phone) {
	this.phone = phone;
}

public List<BankAccounts> getLsb() {
	return lsb;
}

public void setLsb(List<BankAccounts> lsb) {
	this.lsb = lsb;
}
}