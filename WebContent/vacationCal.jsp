<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>vacationCal</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<h1>Vacation Calculator</h1>
	Message:<input type="text" id="msg" readonly="readonly"><br>
	Work Days of a cycle:<input type="text" id="work" value="0" onchange="change()"><br>
	Not Work Days of a cycle:<input type="text" id="notWork" value="0" onchange="change()"><br>
	Vacation:<input type="text" id="vac" value="0" onchange="change()">
	<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type='text/javascript'>
		$("#msg").width("50%");
	
		var total=0,work=0,not=0,cycle=0,vac=0;
		function change(){
			vac=parseInt($("#vac").val());
			work=parseInt($("#work").val());
			not=parseInt($("#notWork").val());
			cycle=work+not;
			total=(365-vac);
			cycle=(total/cycle);
			
			$("#msg").val("Work day: "+work*Math.floor(cycle)+"\tNot work day: "+not*Math.floor(cycle)+"\tCycle: "+cycle.toFixed(2)+"\tVacation: "+vac+"\tTotal: "+total);
		}
	</script>
</body>
</html>