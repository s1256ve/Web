<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>bankMoney</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
	Money<input name="money" id="money" type="text" value="0" onchange="cM(this.value)"><br>
	Rate<input name="rate" id="rate" type="text" value="0" onchange="cR(this.value)"><br>
	Period(Month)<input name="period" id="period" type="text" value="0" onchange="cP(this.value)"><br>
	Result:<input name="result" id="result" type="text" readonly="readonly"><br>
	
	<script type="text/javascript">
	$("#result").width("50%");
		var m=0,r=0,p=0;
		function cM(money){
			m=parseFloat(money);
			cal();
		}
		function cR(rate){
			r=parseFloat(rate);
			cal();
		}
		function cP(period){
			p=parseFloat(period);
			cal();
		}
		function cal(){
			var result=0;
			result=m*(Math.pow(1+r,p));
			$("#result").val(result.toFixed(2));
			
		}
	</script>
</body>
</html>