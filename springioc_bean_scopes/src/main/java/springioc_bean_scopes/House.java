package springioc_bean_scopes;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class House {
	
	public static void main(String[] args) {
		
		ApplicationContext applicationcontext= new ClassPathXmlApplicationContext("MyXml.xml");
		
		Window window=(Window) applicationcontext.getBean("win");
		window.open();
		Window window1=(Window) applicationcontext.getBean("win");
		window.open();
	}

}
