import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;


public class Test {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Connection conn=createConnection();
		
	}
	private static String connType;
	private static String dsn;
	private static String driverType;
	private static String id;
	private static String pwd;
	private static Connection dbCon;
	private static int ConnectionTimeout;
	public static Connection createConnection(){
		
		
		
			
			connType="driver";
			
			
			dsn="jdbc:db2://172.16.45.119:50000/POTTXN";
			
			
			id="db2ibank";
			pwd="db2ibank";	
				try{
					Class.forName("com.ibm.db2.jcc.DB2Driver");
					
					dbCon = DriverManager.getConnection(dsn,id,pwd);
					System.out.println("********dbCon:"+dbCon+"***************");
				}catch(SQLException e){
					e.printStackTrace();
					System.err.println("DBAccess::SQLException createConnection fail");
				}catch(ClassNotFoundException e){
					e.printStackTrace();
					System.err.println("DBAccess::ClassNotFoundException createConnection fail");
				}catch(Exception e){
					e.printStackTrace();
					System.err.println(e.getMessage());	
				}
			
		
		return dbCon;		
	}

}
