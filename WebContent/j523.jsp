<%@page import="java.io.*,java.util.*" import="java.sql.*"%>
<%@page import="javax.servlet.*,javax.servlet.http.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ include file="banner.jsp"%>
<div align="center">
	<h2>JSP/DB/Cost,j523.jsp</h2>
	<h3>
	<sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/cost" user="root" password="1234" />
	
	<sql:query dataSource="${db}" var="rs">
		SELECT * FROM t_cost;
	</sql:query>

	<table width="80%" border="1">
		<tr><td width="10%">#</td><td width="50%">name</td><td width="10%">price</td><td width="10%">qty</td><td width="20%">Date</td></tr>
		<c:forEach var="row" items="${rs.rows}">
			<tr>
				<td><c:out value="${row.no}"/></td>
				<td><c:out value="${row.name}"/></td>
				<td><c:out value="${row.price}"/></td>
				<td><c:out value="${row.qty}"/></td>
				<td><c:out value="${row.date}"/></td>
				
			</tr>
		</c:forEach>
	</table>
	</h3>
</div>
<%@ include file="footer.jsp"%>
