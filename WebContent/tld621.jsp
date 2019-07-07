
<%@ taglib prefix="ex1" uri="/WEB-INF/tlds/add.tld" %>
<%@ taglib prefix="ex2" uri="/WEB-INF/tlds/nf.tld" %>

<%@ include file="banner.jsp"%>
<div align="center">
	<h2>JSP,TLD/tld621.jsp</h2>
	<h3>
	<font color="red">
	rtexprvalue== runtime expression value ==>use JSP?(meaning) <br>
	</font>
	<ex1:add x="6" y="4.4" /><br>
	<ex2:nf number="124.6789" format="#,###.##" /><br>
	
	</h3>
</div>
<%@ include file="footer.jsp"%>
