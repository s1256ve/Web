<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="UTF-8"%>
<html>
<head>
<title>testApplet</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
</head>
<body>
	<h1>Test Applet</h1>
	<!--<jsp:plugin type="applet" code="processShape.class" codebase="./applet" width="500" height="500" />-->
	<!--<applet code="processShape.class" archive="applet/processShape.jar"></applet>
	<jsp:plugin type="applet" name="processShape" code="processShape.class" codebase="./applet" width="500" height="500">
	
	</jsp:plugin>
	<embed type="application/x-java-applet;version=1.7" code="processShape.class" codebase="http://localhost:8080/testApache/applet" archive="processShape.jar"></embed>-->
	    <h4>Message from applet:</h4>
    <div id="containerToWriteTo">
         
    </div>
     
    <h4>The applet</h4>
    <applet code="processShape.class" codebase="./applet" archive="applet/processShape.jar" height="350" width="350"></applet>
            
            
    <p>You have to activate Java in order to view this proof of concept</p>
    </applet>
     
    <script type="text/javascript">
        function writeToContainer(msg) {
            $('#containerToWriteTo').html(msg);
        }
    </script>
</body>
</html>