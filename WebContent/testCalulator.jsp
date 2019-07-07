<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>testCalulator</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>


	<form name="form1"  METHOD="POST"  action="testResult.jsp">
		Number1<input type="text" name="n1"><br>
		
		&nbsp;&nbsp;<select id="operation" name="operation">
			<option value="add">+</option>
			<option value="minus">-</option>
			<option value="muti">*</option>
			<option value="div">/</option>
			<option value="modulus">%</option>
		</select><br>
		Number2<input type="text" name="n2"><br>
		<input type="submit" value="ok">
	</form>
	<!--<div class="flex-row">
		<input type="text" class="calc-result-input"/><br>
    	<button class="calc-btn">1</button>
    	<button class="calc-btn">2</button>
    	<button class="calc-btn">3</button>
    	<button class="calc-btn">4</button>
    	<button class="calc-btn">5</button><br>
    	<button class="calc-btn">6</button>
    	<button class="calc-btn">7</button>
    	<button class="calc-btn">8</button>
    	<button class="calc-btn">9</button>
    	<button class="calc-btn">0</button><br>
    	<button class="calc-btn">+</button>
    	<button class="calc-btn">-</button>
    	<button class="calc-btn">*</button>
    	<button class="calc-btn">/</button>
    	<button class="calc-btn">=</button><br>
	</div>-->
  	<form name="c1" id="c1">
		<input id="resultT" name="resultT" type="text" readonly="readonly" value="0"><br>
		<button class="btn" id="1" name="1">1</button>
		<button class="btn" id="2" name="2">2</button>
		<button class="btn" id="3" name="3">3</button><br>
		<button class="btn" id="4" name="4">4</button>
		<button class="btn" id="5" name="5">5</button>
		<button class="btn" id="6" name="6">6</button><br>
		<button class="btn" id="7" name="7">7</button>
		<button class="btn" id="8" name="8">8</button>
		<button class="btn" id="9" name="9">9</button>
		<button class="btn" id="0" name="0">0</button>
		<button class="btn" id="." name=".">.</button><br>
		<button class="opr" id="add" name="add">+</button>
		<button class="opr" id="min" name="min">-</button>
		<button class="opr" id="mul" name="mul">*</button>
		<button class="opr" id="div" name="div">/</button>
		<button class="opr" id="mod" name="mod">%</button><br>
		<button class="eql" id="eql" name="eql">=</button>
		<button class="cl" id="cl" name="cl">Clear</button>	
	</form>
	<a href="index.html">Back to index</a>
	<script type="text/javascript">
	var str="",num1=0,num2=0,opr="",result=0;
	$(document).ready(function() {
		$(".btn").click(function(){
			
			$("#resultT").val(parseFloat(str+=String($(this).attr("id"))));
			return false;
			//$("#resultT").val($(this).attr("id"));
			//$("input[name='resultT']").val(parseInt($(this).attr("id")));
		});
	});
	$(document).ready(function(){
		$(".cl").click(function(){
			$("#resultT").val(0);
			str="";
			num1=0;
			num2=0;
			opr="";
			result=0;
		});
	});
	$(document).ready(function() {
		$(".opr").click(function(){
			opr=String($(this).attr("id"));
			//alert(!(str=""));
			//if(!(str=""||str.equals(null))){
			//	num1=parseFloat(str);
			//}else{
			num1=parseFloat($("#resultT").val());
			//}
			//alert(num1);
			str="";
				
			
				
				
			//alert(opr);	
			//if(!(str=""||str.equals(null)))
			//	num1=str;
			//else
			//	num1=0;
			return false;
			//$("#resultT").val($(this).attr("id"));
			//$("input[name='resultT']").val(parseInt($(this).attr("id")));
		});
	});
	$(document).ready(function(){
		$(".eql").click(function(){
			num2=parseFloat($("#resultT").val());
			//alert(num2);
			if(!(opr=="add"||opr=="min"||opr=="mul"||opr=="div"||opr=="mod")){
				//opr="";//do nothing
			}
			else{
				if(opr=="add"){
					result=parseFloat(num1+num2);
					//alert(result);
					$("#resultT").val(parseFloat(result));
				}
				else if(opr=="min"){
					result=parseFloat(num1-num2);
					//alert(result);
					$("#resultT").val(parseFloat(result));
				}
				else if(opr=="mul"){
					result=parseFloat(num1*num2);
					//alert(result);
					$("#resultT").val(parseFloat(result));
				}
				else if(opr=="div"){
					result=parseFloat(num1/num2);
					//alert(result);
					$("#resultT").val(parseFloat(result));
				}
				else if(opr=="mod"){
					result=parseFloat(num1%num2);
					//alert(result);
					$("#resultT").val(parseFloat(result));
				}
				//str="";
			}
			return false;
		});
	});
/*let num1 = '';
let num2 = '';
let operator = '';
let total = '';
$(document).ready(function() {
    $('button').on('click',function(e) {
    	alert("click");
        let btn = e.target.innerHTML;
        if (btn >= '0' && btn <= '9') {
            handleNumber(btn);
        } else {
            handleOperator(btn);
        }
    });
});
function handleNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    displayButton(num);
}
function handleOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        handleTotal();
        operator = oper;
    }
}
function handleTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayButton(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayButton(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayButton(total);
            break;
        case 'X':
            total = +num1 * +num2;
            displayButton(total);
            break;
    }
    updateVariables();
}
function displayButton(btn) {
    $('.calc-result-input').text(btn);
}
function updateVariables() {
    num1 = total;
    num2 = '';
}*/
	</script>
	<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
</body>
</html>