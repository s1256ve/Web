package code.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class TestParameter
 */
@WebServlet("/TestParameter")
public class TestParameter extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestParameter() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		File f=new File("myfile.txt");
		f.createNewFile();
		if(f.exists())
			System.out.println("File Create");
		PrintWriter out=response.getWriter();
		/* in BUSService/page/az
		HttpSession session=request.getSession();
		CVarList cVar=new CVarList();
		CVarList sessionVar=(CVarList)session.getAttribute("ADDUSER");
		cVar.replace("userName",sessionVar.get("userName"));
		cVar.replace("orgUserId",sessionVar.get("orgUserId"));
		cVar.replace("userId",sessionVar.get("userId"));
		cVar.replace("passwd",sessionVar.get("passwd"));
		cVar.replace("passwdCfm",sessionVar.get("passwdCfm"));
		cVar.replace("REVE_PWD",sessionVar.get("REVE_PWD"));
		
		cVar.replace("SVCID","IC0000002");
		session.setAttribute("REVE-KB-IDX", cVar.get("SEND-KB-IDX"));
		*/
		//testLoadParameter.jsp	LoadAP	IP0907998
		
		//ｸﾌｭｱPOTTXN ･i･Hｬd
		//request.getSession().getId();//"+request.getSession().getId()+"
		out.println("<center><h1>Test LoadAp Parameter</h1>");
		out.println("<form name='IP0907999' id='IP0907999' method='get' action='LoadAP' />");//IC0000102(maybe sessionid,LoadAP Login)
		//out.println("sessid:<input type='text' name='sessid' id='sessid' value='sessid' />");		//success IP0702298/IC000000A/IP0702320(ibank)
		out.println("pageid:<input type='text' name='pageid' id='pageid' value='IP0702298' />");//IBKSDGAVTRTQ/IP0907998
		out.println("aptype:<input type='text' name='aptype' id='aptype' value='ibank' />");//IP0702320->TOM(TXNID:IBKADPUCPM9340)->action:1.SSOCHKSES(APService)2.ADPUCPM9340
		out.println("del:<input type='text' name='del' id='del' value='Y' />");				//IP0702299(ibank)
		
		out.println("<br><a href='index.html'>back to index</a>");
		out.println("<input type='submit' value='send' />");
		out.println("</form></center>");
		
		//test action ACCTDESCMAP	USER
		
		//request.setAttribute("pageid", "IP0907998");
		//request.setAttribute("aptype", "noap");
		//RequestDispatcher rd=request.getRequestDispatcher("LoadAP");
		//rd.include(request, response);
		
		//------------------------------XML------------------------------//
		StringBuffer sb=new StringBuffer();
		//sb.append("<?xml version='1.0' encoding='BIG5'?>\n");
		//sb.append("<catalog xmlns='http://www.uitc.com.tw/catalog/TOM/IVR'>\n");
		//sb.append("<field id='3060i01'>\n<name>REVE-CODE</name>\n<length>4</length>\n<type>String</type>\n<description>ｻyｭｵ･\ｯ爭NｽX</description>\n</field>");
		//sb.append("<field id='3060i02'>\n<name>REVE-ID-NO</name>\n<length>10</length>\n<type>String</type>\n<description>･ｿ･dｨｭ､ﾀﾃﾒｦrｸｹ</description>\n</field>");
		//sb.append("<field id='3060i03'>\n<name>REVE-STMT-DATE</name>\n<length>6</length>\n<type>String</type>\n<description>ｱbｳ讎~､�</description>\n</field>");
		//sb.append("<field id='3060i50'>\n<name>IPADDR</name>\n<length>15</length>\n<type>String</type>\n<description>IP Address</description>\n</field>");
		//sb.append("<field id='3060i51'>\n<name>TXNTYPE</name>\n<length>20</length>\n<type>String</type>\n<description>Transaction Type</description>\n</field>");
		//sb.append("<field id='3060i52'>\n<name>PBX-SID</name>\n<length>5</length>\n<type>String</type>\n<description>ｻyｭｵｽuｸｹｽX</description>\n</field>");
		//sb.append("<field id='3060i53'>\n<name>TXN-SNO</name>\n<length>16</length>\n<type>String</type>\n<description>･讖ﾇｸｹ</description>\n</field>");
		//sb.append("\n</catalog>");
		//out.println(sb.toString());
		//out.flush();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
