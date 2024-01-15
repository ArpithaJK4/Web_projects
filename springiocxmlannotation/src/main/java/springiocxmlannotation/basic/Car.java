package springiocxmlannotation.basic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Car {
	
	@Autowired 
	Engine engine;

	
	
	
	

}
