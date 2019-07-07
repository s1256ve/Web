<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<title>testJQuery</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

</head>

<body>

	<h1>test JQuery</h1>
	<%boolean appear=true; %>
	<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	<input type="button" value="hidden" onclick="toggle()">
	<%if(appear){ %>
	<input type="text" value="123"/>
	<%} %>
	<script type='text/javascript'>
var t="123";
$(function(){//load page and below code will be accessed
	$("input[type='button']").bind('click',function(){
		$(this).css('background-color',randColor());
		alert($(this).val());
		$(this).focus();
	});
	$("#clickme").click(function(){
		$("#test").toggle();
		$("#p0").toggle();
	});
	$("#b1").click(function(){
    	var div=$("#d1");
    	div.animate({height:'300px',opacity:'0.4'},"slow");
    	div.animate({width:'300px',opacity:'0.8'},"slow");
    	div.animate({height:'100px',opacity:'0.4'},"slow");
    	div.animate({width:'100px',opacity:'0.8'},"slow");
  	});

	$("#b2").click(function(){
		var b2=$("#b2");
		b2.hide("slow");
	});
	$("#b3").click(function(){
    	$("#div1").fadeOut();
    	$("#div2").fadeOut("slow");
    	$("#div3").fadeOut(3000);
  	});

	$("#b4").click(function(){
		t+="ABC";
		$("#textC").val(t);
	});

	$("#b5").bind('click', function(){
		alert($(this).val()+testLoad());
	});
	
	function testLoad(){			//you can't call this function out of Load Page 
		return 123+testOut();		//but you can call function out of Load Page
	}
});//end

function toggle(){

	<%appear=!appear; %>
	
}
function randColor(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}
function testOut(){
	return 456;
}

function checkRadio()
{
	alert($('input[name=radioName]:checked').val());
}
//var tOfcheck="111";
function checkBox(){
	//var cbx = new Array();
	var tOfcheck=($('input[name="check"]:checkbox:checked').map(function() {return $(this).val();}).get().join(','));
	alert(tOfcheck);
	//alert('123456789');
	//alert(tOfcheck);
}


</script>
<div id="clickme">Click me</div>
<br><div id="test">
I am test,Can you see me?
</div>
<p id="p0">p0</p>
<!--  <form id="myForm1" onsubmit="checkRadio()">-->
  <input type="radio" name="radioName" value="1" /> 1&nbsp 
  <input type="radio" name="radioName" value="2" /> 2&nbsp
  <input type="radio" name="radioName" value="3" /> 3&nbsp 
  <input type="button" value="go" onclick="checkRadio()"><br>
<!--  </form>-->
<!--  <form id="myForm2" onsubmit="checkBox()">-->
	<input type="checkbox" name="check" value="4">4&nbsp
	<input type="checkbox" name="check" value="5">5&nbsp
	<input type="checkbox" name="check" value="6">6&nbsp
	<input type="button" value="find" onclick="checkBox()">
<!--</form>-->
<div><input type="button" id="b1" value="Start Anim"/>
<br><input type="button" id="b2" value="hideButton" />
<br><input type="button" id="b3" value="fadeoutButton" />
<br><input type="button" id="b4" value="changeButton" />
<br><input type="button" id="b5" value="bindEvent" onclick="testLoad()"/>
</div>


<input class="textC" id="textC" type="text" value="123">
<div id="div1" style="width:80px;height:80px;background-color:red;"></div>
<br>
<div id="div2" style="width:80px;height:80px;background-color:green;"></div>
<br>
<div id="div3" style="width:80px;height:80px;background-color:blue;"></div>
&nbsp<div id="d1" style="background:#98bf21;height:100px;width:100px;position:absolute;">
<a href="index.html">back to index</a>
</div>



</body>
</html>