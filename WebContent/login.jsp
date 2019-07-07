<%@ include file="banner.jsp"%>

<center>

	<div>
		<h2>login.jsp</h2>
		<form action="j_security_check" method="POST">
		UserName:<input type="text" name="j_username" value="jsp" /><br>
		Password:<input type="password" name="j_password" value="1234" /><br>
		<input type="submit" value="Login" /><br>
		
		</form>
	</div>
</center>



<%@ include file="footer.jsp"%>