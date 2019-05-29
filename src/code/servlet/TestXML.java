package code.servlet;

import java.io.IOException;
import java.io.LineNumberReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.StringReader;

import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.xml.internal.stream.buffer.stax.StreamReaderBufferCreator;

/**
 * Servlet implementation class TestXML
 */
@WebServlet("/TestXML")
public class TestXML extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestXML() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String companyname="company",contactname="contact",address="addr",city="ct",country="contry";
		PrintWriter out = response.getWriter();
		 StringBuffer sb=new StringBuffer();
		sb.append("<?xml version='1.0' encoding='ISO-8859-1'?>\n");
		sb.append("<company>");
		sb.append("<compname>" +companyname+ "</compname>\n");
		sb.append("<contname>" +contactname+ "</contname>\n");
		sb.append("<address>" +address+ "</address>\n");
		sb.append("<city>" +city+"</city>\n");
		sb.append("<country>" +country+ "</country>\n");
		sb.append("</company>"); 
		//StringReader sr=new StringReader(sb.toString());
		//LineNumberReader lnr=new LineNumberReader(sr);
		out.println(sb.toString());
		out.flush();
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
