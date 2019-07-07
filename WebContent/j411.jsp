<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<title>Insert title here</title>
<style type="text/css">
	div{
		width:80%;
		height:300px;
		margin-left:150px;
	}
</style>
</head>
<body>
<%@ include file="banner.jsp"%>
	<div align="center" id="div1">
		<h2>JSP/JSTL/DB,j411.jsp</h2>
		
		<h3>
		
		<sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/cost" user="root" password="1234"/>
		
		<sql:query var="rs" dataSource="${db }">
			SELECT * FROM t_cost;
			
		</sql:query>
		<%-- 
		<sql:update dataSource="${db}" sql="DELETE FROM t_cost WHERE no=?">
			<sql:param value="${14 }"/>
		</sql:update>--%>
		
		
		<table width="80%" border="1">
			<tr><td width="10%">#</td><td width="50%">name</td><td width="10%">price</td><td width="10%">qty</td><td width="20%">date</td></tr>
			<c:forEach var="row" items="${rs.rows }">
				<tr><td escapeXml="false"><c:out value="${row.no }"></c:out></td>
				<td escapeXml="false"><c:out value="${row.name }"></c:out></td>
				<td escapeXml="false"><c:out value="${row.price }"></c:out></td>
				<td escapeXml="false"><c:out value="${row.qty }"></c:out></td>
				<td escapeXml="false"><c:out value="${row.date }"></c:out></td></tr>
			</c:forEach>
			
		</table>
		
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>