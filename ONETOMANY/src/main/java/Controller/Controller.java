package Controller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import dao.BankAccounts;
import dto.Pancard;

public class Controller {
public static void main(String[] args) {
	EntityManagerFactory entityManagerFactory=Persistence.createEntityManagerFactory("dev");
	EntityManager entityManager=entityManagerFactory.createEntityManager();
	EntityTransaction entityTransaction=entityManager.getTransaction();
	
	Pancard pancard=new Pancard();
	pancard.setPan_id(8754);
	pancard.setName("gurucharan");
	pancard.setPhone(9876542345l);
	
	BankAccounts accounts=new BankAccounts();
	accounts.setAccount_id(987654321898l);
	accounts.setBank_name("SBI");
	accounts.setBranch_add("RAJAJINAGAR");
	
	BankAccounts accounts3=new BankAccounts();
	accounts3.setAccount_id(987654321998l);
	accounts3.setBank_name("CANARA");
	accounts3.setBranch_add("VIJAYANAGAR");
	
	BankAccounts accounts1=new BankAccounts();
	accounts1.setAccount_id(987645321898l);
	accounts1.setBank_name("ICICI");
	accounts1.setBranch_add("KALANNAGAR");
	
	BankAccounts accounts2=new BankAccounts();
	accounts2.setAccount_id(987654231898l);
	accounts2.setBank_name("KARNATAKA");
	accounts2.setBranch_add("JPNAGAR");
	
	List<BankAccounts> lsb1=new ArrayList<BankAccounts>();
	lsb1.add(accounts);
	lsb1.add(accounts3);
	lsb1.add(accounts2);
	lsb1.add(accounts1);
	
	//Mapping
	pancard.setLsb(lsb1);
	
	entityTransaction.begin();
	entityManager.persist(pancard);
	entityManager.persist(accounts);
	entityManager.persist(accounts1);
	entityManager.persist(accounts2);
	entityManager.persist(accounts3);
	entityTransaction.commit();
	
	System.out.println("OneToMany unidirection is done");
}
}
