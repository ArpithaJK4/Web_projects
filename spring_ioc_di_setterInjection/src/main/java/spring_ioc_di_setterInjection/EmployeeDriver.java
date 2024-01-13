package spring_ioc_di_setterInjection;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EmployeeDriver {
	public static void main(String[] args) {
		
		ApplicationContext context= new ClassPathXmlApplicationContext("iocsetter.xml");
		Employee employee1=(Employee) context.getBean("emp");
		System.out.println(employee1);
		
		Employee employee2=(Employee) context.getBean("emp1"); 
		System.out.println(employee2);
	}

}
