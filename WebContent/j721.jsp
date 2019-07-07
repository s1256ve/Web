<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP/Servlet/ResourceBundle,j721.jsp</h2>
	<h3>
		<form action="S721">
		Country:
		<br><select name="locale">
		<%
			String[] locales={"zh_TW","JP","KR"};
			for(String s : locales)
			{
				
				out.println("<option value='" + s + "'>" + s + "</option>");
			}
		%>
		
			</select>
		<br><input type="submit" value="Submit" />
		</form>
	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>