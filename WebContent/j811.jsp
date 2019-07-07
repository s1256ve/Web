<%@page import="java.io.*,java.util.*" import="java.sql.*"%>
<%@page import="javax.servlet.*,javax.servlet.http.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>


<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP/ContractUs,j811.jsp</h2>
	<h3>
		<a href="j812.jsp"><img src="add.gif" /></a><br>
		<sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/memo" user="root" password="1234" />
		<sql:query dataSource="${db}" var="rs">
			SELECT * FROM t_memo;
		</sql:query>

		<table border="1" width="100%">
			<tr>
				<td>#</td>
				<td>name</td>
				<td>email</td>
				<td>subject</td>
				<td>memo</td>
				<td>date</td>
			</tr>
	

		<c:forEach var="row" items="${rs.rows}">
			<tr>
				<td><c:out value="${row.no}" /></td>
				<td><c:out value="${row.name}" /></td>
				<td><c:out value="${row.subject}" /></td>
				<td><c:out value="${row.memo}" /></td>
				<td><c:out value="${row.date}" /></td>
			</tr>
		</c:forEach>
	</table>
	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>