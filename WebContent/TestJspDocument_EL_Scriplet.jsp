<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>TestJspDocument_EL_Scriplet</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	Scriptlet:&lt;% ... %&gt;<br>
	==JSP document:&lt;jsp:scriptlet&gt;...&lt;/jsp:scriptlet&gt;<br><br>
	&nbsp;&nbsp;declaration:&lt;%! String s="1"; %&gt;<br>
	&nbsp;&nbsp;==&lt;jsp:declaration&gt;declaration;&lt;/jsp:declaration&gt;<br><br>
	&nbsp;&nbsp;expression:&lt;%=s %&gt;<br>
	&nbsp;&nbsp;==&lt;jsp:expression&gt;s&lt;/jsp:expression&gt;<br><br>
	&nbsp;&nbsp;comment:&lt;%-- comment in here --%&gt;<br>
	&nbsp;&nbsp;==&lt;!-- --&gt;<br><br>
	&nbsp;&nbsp;JSP指令:(directive.)&lt;%@指令標籤="" %&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;1.page:&lt;%@page import="java.util.Date"%&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;==&lt;jsp:directive.page attribute="value"/&gt;<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;2.include:&lt;%@include file="relative url"%&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;==&lt;jsp:directive.include attribute="value"/&gt;<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;3.taglib:&lt;%@taglib uri="uri" prefix="prefixOfTag"%&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;==&lt;jsp:directive.taglib uri="uri" prefix="prefixOfTag" /&gt;<br><br>
	----------------以下沒有代表性的scriptlet----------<br>
	&nbsp;&nbsp;JSP動作:&lt;jsp:action_name /&gt;<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:include page="relative URL" flush="true" /&gt;<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:useBean id="myName" class="package.class" &gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:setProperty name="myName" property="someProperty" .../&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:useBean&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:getProperty name="myName" property="someProperty" .../&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:forward page="Relative URL" /&gt;<br><br>
	
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:plugin type="applet" codebase="dirname" code="MyApplet.class"
                           width="60" height="80"&gt;<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:param name="fontcolor" value="red" /&gt;<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:param name="background" value="black" /&gt;<br>
 
   &nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:fallback&gt;<br>
      &nbsp;&nbsp;Unable to initialize Java Plugin<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:fallback&gt;<br>
 
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:plugin&gt;<br><br>
	
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:element name="xmlElement"&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:attribute name="xmlElementAttr"&gt;<br>
   &nbsp;&nbsp;Value for the attribute<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:attribute&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:body&gt;<br>
   &nbsp;&nbsp;Body for XML element<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:body&gt;<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/jsp:element&gt;<br><br>
	
	&nbsp;&nbsp;==<br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;xmlElement xmlElementAttr="Value for the attribute"&gt;<br>
   &nbsp;&nbsp;Body for XML element<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/xmlElement&gt;<br><br>
	
	&nbsp;&nbsp;&nbsp;&nbsp;&lt;jsp:text>&lt;![CDATA[&lt;br&gt;]]&gt;&lt;/jsp:text&gt;<br>
</body>
</html>