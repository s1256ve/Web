
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<center>
	<font color="red">&lt;%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %&gt;</font>
	<br>----------------------<br> 
	<font color="red">&lt;c:set var="salary" scope="session" value="${2000*2}"/&gt;</font>
	 <c:set var="salary" scope="session" value="${2000*2}" />
	<br>----------------------<br> 
	<font color="red">&lt;c:out value="${salary}"/&gt;</font>
	<c:out value="${salary}" />
	<br>----------------------<br> 
	<font color="red">&lt;c:forEach var="i" begin="1" end="5"&gt;
	<br> Item &lt;c:out value="${i}"/&gt;
	<br> &lt;/c:forEach&gt;
	<br></font>
	
	<c:forEach var="i" begin="1" end="5">
		Item <c:out value="${i}" />
	</c:forEach>
	<br>----------------------<br> 
	<font color="red">&lt;c:forTokens items="google,runoob,taobao" delims="," var="name"&gt;
	<br> &lt;c:out value="${name}"/&gt;
	<br> &lt;/c:forTokens&gt;
	<br></font>
	<c:forTokens items="google,runoob,taobao" delims="," var="name">
			<c:out value="${name}" />
	</c:forTokens>
	<br>----------------------<br> 
	<font color="red">&lt;c:url var="myURL" value="EL_practice.jsp"&gt;
	<br> &lt;c:param name="name" value="Runoob"/&gt;
	<br> &lt;c:param name="url" value="www.runoob.com"/&gt;
	<br> &lt;/c:url&gt;
	<br></font>
	<c:url var="myURL" value="">
		<c:param name="name" value="Runoob" />
		<c:param name="url" value="www.runoob.com" />
	</c:url>
	<a href="/<c:out value='${myURL}'/>"> use&lt;c:param&gt; </a> 
</center>