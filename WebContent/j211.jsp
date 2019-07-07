<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Insert title here</title>
</head>
<body>
	<h2>EL, j211.jsp</h2>
	<h3>
	7+17=${7+17 }<br>
	7-17=${7-17 }<br>
	7*17=${7*17 }<br>
	7/17=${7/17 }<br>
	
	7%17=${7%17 }<br>
	
	7/0=${7/0 }<%-- infinity --%><br>
	<%-- 7%0=${7%0}<br> expection --%>
	
	
	
	7==17: ${7 eq 17}<br>
	7!=17 ${7 != 17 }<br>
	7>17: ${7>17}<br>
	
	
	
	true and false ${true && false }<br>
	true && false ${true and false }<br>
	true or false ${true || false }<br>
	true || false ${true or false }<br>
	
	empty null ${empty null}
	</h3>
</body>
</html>