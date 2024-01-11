package dao;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class BankAccounts {
@Id
private long account_id;
private String bank_name;
private String branch_add;


public long getAccount_id() {
	return account_id;
}
public void setAccount_id(long account_id) {
	this.account_id = account_id;
}
public String getBank_name() {
	return bank_name;
}
public void setBank_name(String bank_name) {
	this.bank_name = bank_name;
}
public String getBranch_add() {
	return branch_add;
}
public void setBranch_add(String branch_add) {
	this.branch_add = branch_add;
}
}

