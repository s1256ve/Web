<!DOCTYPE HTML>

<%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
<html>
<head>
<title>testCalculatorMoney</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

</head>

<body>

<div align="center">
	<form name="testForm" action="testResult.jsp">
		Goal of moeny<input type="text" name="goal" value="1000000"> <br>
		earn of month<br><input type="text" name="earn" value="30000"><br>
		cost of a day<br>
		meal<input type="text" name="meal" value="0"><br>
		traffic<input type="text" name="traffic" value="0"><br>
		
		test Onchange Event<br>
		<input type="text" name="textfield1" id="textfield1" size="70" onchange="fillTextbox()" />

		<input type="text" name="textfield2" id="textfield2" size="70"  readonly="readonly" onclick="clickE()" onchange="stringEdit()"/>
		
		<br><label>label here</label>
		<input type="hidden" name="ttt" />
		<input type="hidden" name="t1" value="123456"/>
		<br>test add textbox<br>
		<span id="responce"></span>
		<input type="button" onclick="addInput()" value="add TextBox"/><br>
		<input type="button" onclick="addCheck()" value="add CheckBox"/><br>

		
		
		<input type="submit" value="send to result" onclick="testSet()"/><br>
		<%
			String arr=request.getParameter("t1");
			String rt="";
			rt+=arr;
		 %>
		
		
	</form><br>
	<form  action="#"><input type="submit" value="refresh"></form>
	</div>
	
	<script type="text/javascript">
	
	
	var countBox =0,countCheck=0;
	var boxName = "",checkName="";
	var testText="";
	
	function stringEdit(){
		testText=document.testForm.textfield2.value;
		
		alert(testText);
		document.testForm.t1.value=testText;
	}
	
	
	function testSet(){
		document.testForm.ttt.value="<center>123<h1>456</h1></center>";
		document.testForm.submit();
	}
	
	function addInput()
	{
 	    boxName="textBox"+countBox; 
		document.getElementById('responce').innerHTML+='<br><input type="text" id="'+boxName+'" name="'+boxName+'" onclick="clickFunction()" readonly="readonly" value="0"/><br>';
 	    countBox += 1;
 	    //alert(boxName);
	}

	function addCheck()
	{
 	    checkName="check"+countCheck; 
		document.getElementById('responce').innerHTML+='<br><input type="checkbox" id="'+checkName+'" name="check" value="'+checkName+'"/>'+checkName+'<br>';
 	    countCheck += 1;
 	    //alert(boxName);
	}
	
	function fillTextbox(){
		var tf1=document.getElementById("textfield1").value;
		document.getElementById("textfield2").value=tf1;
	}
	function $(obj){
		return document.getElementById(obj);
		
	}
	function clickE()
	{
		
		alert(parseFloat($("textfield2").value));
		
	}
	
	function clickFunction(){
		
		
		$(boxName).value=parseInt($(boxName).value)+1;
	}
	
	
	
	
	</script>

</body>
</html>