<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>testJQueryMobile</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="http://code.jquery.com/mobile/1.3.2/jquery.mobile-1.3.2.min.js"></script>
</head>
<body>
<div data-role="page" id="pageone">
  <div data-role="header">
    <h1>my page</h1>
  </div>

  <div data-role="content">
    <p>welcome</p>
    <a href="#pagetwo" data-rel="dialog">to page 2</a>
  </div>

  <div data-role="footer">
  <h1>footer</h1>
  </div>
</div> 

<div data-role="page" id="pagetwo">
  <div data-role="header">
    <h1>message box</h1>
  </div>

  <div data-role="content">
    <p>test text1234</p>
    <a href="#pageone">to page 1</a>
  </div>

  <div data-role="footer">
  <h1>footer</h1>
  </div>
</div> 
</body>
</html>