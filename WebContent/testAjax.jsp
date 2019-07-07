<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<%@ page import="java.util.*" %>
<html>
<head>
<title>testAjax</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<div>
	Test header:<br>
	<% 
		Enumeration<String> e = request.getHeaderNames();
		while(e.hasMoreElements()) {
    		String param = e.nextElement();
    		
   			out.println(param+":"+request.getHeader(param)+"<br>");
		}
	%>
	<br>
	Test Ajax<br>
	<input type="text" id="param1" />
	<input type="text" id="param2" />
	<button onclick="ajax()">Go!</button>
	</div>
	Test URL-rewriting<a href='<c:url value="testAjax.jsp"/>'>test</a>
	<br>Test loop for scriptlet
	<% for(int i = 0; i < 10; i++){ %>
		<font size="<%=i+1%>"><%=i+1%></font>
	<%} %>
	<script>
	//创建Ajax对象，不同浏览器有不同的创建方法，其实本函数就是一个简单的new语句而已。  
	function createXMLHttpRequest() {
		var XMLHttpRequest1;
		if (window.XMLHttpRequest) {
			XMLHttpRequest1 = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			try {
				XMLHttpRequest1 = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				XMLHttpRequest1 = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return XMLHttpRequest1;
	}
	function ajax() {
		//param1与param2就是用户在输入框的两个参数
		var param1=document.getElementById("param1").value;
		var param2=document.getElementById("param2").value;
		var XMLHttpRequest1 = createXMLHttpRequest();
		//指明相应页面  
		var url = "./ajaxRequest";
		XMLHttpRequest1.open("POST", url, true);
		//这里没法解释，你所有JavaScript的请求头都这样写就对了，不会乱码  
		XMLHttpRequest1.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");
		//对于ajaxRequest，本js.html将会传递param1与param2给你。  
		XMLHttpRequest1.send("param1=" + param1 + "param2=" + param2);
		//对于返回结果怎么处理的问题  
		XMLHttpRequest1.onreadystatechange = function() {
			//这个4代表已经发送完毕之后  
			if (XMLHttpRequest1.readyState == 4) {
				//200代表正确收到了返回结果  
				if (XMLHttpRequest1.status == 200) {
					//弹出返回结果  
					alert(XMLHttpRequest1.responseText);
				} else {
					//如果不能正常接受结果，你肯定是断网，或者我的服务器关掉了。  
					alert("Disconnect！");
				}
			}
		};
	}
</script>
</body>
</html>