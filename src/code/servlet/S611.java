package code.servlet;

import javax.servlet.http.Part;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.RequestDispatcher;


import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/S6112")
/*
@MultipartConfig(fileSizeThreshold=1024*1024*2,maxFileSize=1024*1024*10,maxRequestSize=1024*1024*10)
//1024*1024*2==2MB
*/
public class S611 extends HttpServlet
{

	private static final String UPLOAD_DIR="upload";
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();
		
		fileUpload(request,response);
		/*
		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>ContentParameter,S511</h2><h3>");		
		out.println("重點1: "+getServletContext().getInitParameter("p1")+"<br>");
		out.println("重點2: "+getServletContext().getInitParameter("p2")+"<br>");
		out.println("重點3: "+getServletContext().getInitParameter("p3")+"<br>");
		out.println("</h3></div></center>");
		//
		*/	
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

	protected void fileUpload(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		String path1=request.getServletContext().getRealPath("");
		String path2=path1+File.separator+UPLOAD_DIR;
		File f=new File(path2);
		if(!f.exists())
		{
			f.mkdirs();
		}
		
		for(Part p:request.getParts())
		{
			String fname=getFileName(p);
			p.write(path2+File.separator+fname);
			request.setAttribute("msg","File upload OK");
			getServletContext().getRequestDispatcher("/j612.jsp").forward(request,response); 		
		}
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
}