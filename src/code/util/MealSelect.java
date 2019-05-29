package code.util;

import java.util.List;
import java.util.ArrayList;

import code.util.MealType;

public class MealSelect
{
	public List getAvailableStore(MealType type)
	{
		List store=new ArrayList();

		if(type.equals(MealType.BREAKFAST))
		{
			store.add("7-11");
			store.add("Family");
		}else if(type.equals(MealType.LUNCH))
		{
			store.add("麥當勞");
			store.add("吉野家");
			store.add("7-11");
		}else if(type.equals(MealType.DINNER))
		{
			store.add("Pizza Hut");
			store.add("7-11");
		}else
		{
			store.add("暫不提供服務");
		}
		return store;
	}
	
}
