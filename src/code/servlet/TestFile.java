package code.servlet;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.sun.xml.internal.ws.wsdl.writer.document.Port;

/**
 * Servlet implementation class TestFile
 */
@WebServlet("/TestFile")
public class TestFile extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestFile() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		out.println("<center><h1>Test File(Write File & Read File)</h1>");
		String UPLOAD_DIR="temp";
		String path1=request.getServletContext().getRealPath(""),path2=path1+File.separator+UPLOAD_DIR;
		File f=new File(path2);
		if(!f.exists())
			f.mkdirs();
		/*for(Part p:request.getParts())
		{
			String fname=getFileName(p);
			p.write(path2+File.separator+fname);
			request.setAttribute("msg","File upload OK");
			getServletContext().getRequestDispatcher("/j612.jsp").forward(request,response); 
		}*/
		
		out.println("</center>");
	}
	private String getFileName(Part p)
	{
		String content=p.getHeader("content-disposition");
		String[] tokens=content.split(";");
		for(String t:tokens)
		{
			if(t.trim().startsWith("filename"))
			{
				return t.substring(t.indexOf("=")+2,t.length()-1);
			}
		}
		return "";	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
