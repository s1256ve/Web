<!DOCTYPE HTML><%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
<html>
<head>
<title>testXmlJsonParser</title>
<meta http-equiv="Content-Type" content="text/html; charset=Utf-8">
<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
	<%
		String test="test123";
		request.setAttribute("test", test);
	 %>
	
	<div style="position:absolute; top:0px; left:150px;">Json</div><div style="position:absolute; top:0px; left:500px;">XML</div><br>
	<textarea id="json" name="json" cols="40"  onkeyup="autogrow(this);"></textarea>
	<textarea id="xml" name="xml" cols="40"  onkeyup="autogrow(this);"></textarea>
	</div>
	<input type="button" id="j2x" name="j2x" value="Json to Xml" style="position:absolute; top:70px; left:700px;" onclick="jClick()"/>
	<input type="button" id="x2j" name="x2j" value="Xml to Json" style="position:absolute; top:100px; left:700px;" onclick="xClick()"/>
	
	

	<script type="text/javascript">//JSON.stringify
		//var json={"Customer": {"address": {"street": "NANTERRE CT","postcode": 77471},"People": {"name": "Mary","content": ["p1","p2"],"age": 37}}}
		//alert(JSON.stringify(json));
function autogrow(textarea){
	var adjustedHeight=textarea.clientHeight;
    adjustedHeight=Math.max(textarea.scrollHeight,adjustedHeight);
    if (adjustedHeight>textarea.clientHeight){
        textarea.style.height=adjustedHeight+'px';
    }


}
	function jClick(){
		var test='${test}';
		alert("Test:"+test);
		alert($("#json").val());
		var jTmp=$("#json").val();
		
		alert(JSON.stringify(jTmp));
		
		var jObj=JSON.parse(jTmp);
		var j=JSON.stringify(jTmp);
		
		alert(j);
		$("#xml").val(j);
		
		var x="{\"SEND\":{\"TxnID\":{\"SEND-RETN-CODE\":2,\"SEND-CODE\":1,\"#text\":[\"Txnid\",\"test\"]},\"SYSMSG\": {\"MSG-ID\": 3,\"MSG-DESC\": 4}}}";
		
		alert("x:"+x);
		
		
	}
	
	function xClick(){
		alert($("#xml").val());
	}
	</script>
</body>
</html>