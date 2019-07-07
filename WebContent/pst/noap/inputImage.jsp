<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
String SID = "";
String ACCTNO = "";
String isError1 = "";
String SID2 = request.getParameter("SID");
String SEND_ACCT_NO = request.getParameter("SEND_ACCT_NO");
String pagefrom = request.getParameter("pagefrom");

if(SID2 != null && !SID2.equals("")) SID = SID2;
if(SEND_ACCT_NO != null && !SEND_ACCT_NO.equals("")) ACCTNO = SEND_ACCT_NO;
if(pagefrom != null && !pagefrom.equals("")){
	if(pagefrom.equals("check")){
		isError1="<font color=red>驗証碼錯誤！</font>";
	}
}

%>   
<html>   
<head>   
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">   
  <title>認證碼輸入頁面</title>   
  <meta http-equiv="Pragma" content="no-cache">   
  <meta http-equiv="Cache-Control" content="no-cache">   
  <meta http-equiv="Expires" content="0">   
</head>
<SCRIPT LANGUAGE="JAVASCRIPT" SRC="script/idcheck.js"></SCRIPT>
<script>
if(typeof String.prototype.trim=='undefined'){
    String.prototype.trim = function () {
        return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
    }   
}
	
function clrID2(){
	document.insImg.SID2.value = "";
	document.insImg.SID.value = "";
	//document.IC0000101.lastlen.value = "0";
}

function chkNum1(oldsid){
	var oldID = oldsid;
	var newID = "";
	document.getElementById("SID").value = oldID;
	for(i=0;i<oldID.length;i++){
		if(i>3&&i<8){
			newID = newID + '*';
		}else{
			newID = newID + oldID.charAt(i);
		}
	}
	document.getElementById("SID2").value = newID;
}	

function chkNum2(){
	//var oldID = document.all.SID2.value;
	var oldID = document.getElementById("SID2").value;
	var newID = "";
	//document.all.SID.value = oldID;
	document.getElementById("SID").value = oldID;
	for(i=0;i<oldID.length;i++){
		if(i>3&&i<8){
			newID = newID + '*';
		}else{
			newID = newID + oldID.charAt(i);
		}
	}
	//document.all.SID2.value = newID;
	document.getElementById("SID2").value = newID;
}

function chkSubmit(){
	var acctno = document.insImg.SEND_ACCT_NO.value	

	if (document.insImg.SID.value==""){
		alert('請輸入身份證字號');
		document.insImg.SID.focus();
		return false;
	}
	if(acctno.trim() == ""){
		alert('請輸入銀行帳號');
		document.insImg.SEND_ACCT_NO.focus();
		return false;		
	}
	if(document.insImg.insrand.value==""){
		alert('請輸入圖形驗證碼');
		document.insImg.insrand.focus();
		return false;
	}
	if(!CheckID(document.insImg.SID.value)){
		alert('身份證字號格式錯誤');
		document.insImg.SID.value = "";
		document.insImg.SID2.focus();
		return false;
  }else{
    //if(document.insImg.SID.value.lenght==10){
    	document.insImg.SID.value=document.insImg.SID.value.toUpperCase()+"A";
  	//}
		document.insImg.submit();
  }
}

function KeyPressChk1(){
	var iKeyCode = window.event.keyCode
	if (!(iKeyCode >= 48 && iKeyCode <=57)){
		window.event.keyCode = 0;
	}
}
</script>
 
  <body oncontextmenu="window.event.returnValue=false">   
    <form method="post" action="check.jsp" name="insImg">   
      身分證字號：<input type="text" id="SID2" name="SID2" size="25"  onFocus="clrID2();"  onBlur="chkNum2();" onpaste="return false" autocomplete="off"><br>
      帳號：<input type="text" name="SEND_ACCT_NO" autocomplete="off" value='<%=ACCTNO%>' maxlength="12" onKeypress="KeyPressChk1()" onpaste="return false;" style="ime-mode:disabled" /><br>
      出生年月日：<input type="text" name="SEND_BIRTHDAY" maxlength="8"  autocomplete="off" value='' /><br>
      留存手機號碼：<input type="text" name="SEND_MOBILE" maxlength="10"  autocomplete="off" value='' /><br>
      圖形驗證碼：<img src="newImage.jsp" alt="New Image" id="randimg"/> (<a href="#" id="randimg"  onClick="reloadIdentify()">重新產生</a>)<br>   
      輸入認證碼：<input type="text" id="insrand" name="insrand" maxlength="4"  autocomplete="off" size="5"/><%=isError1%><br>   
      <input type="button" value="Submit" onClick="chkSubmit();">
      <input type="hidden" id=SID name="SID" maxlength="11" value='<%=SID%>' />  
<script>
function reloadIdentify(){
        //document.getElementById('inputCode').value = "";     //將輸入欄位清空
        //document.getElementById('inputCode').focus(); 
        document.getElementById('randimg').src = document.getElementById('randimg').src + "?reload=" + new Date().getTime();       //重新設定 src 
}
</script> 
    </form>
    <%
    if(SID2 != null && !SID2.equals("")){
    %>
    <script>
    	chkNum1('<%=SID%>');	
    </script> 
    <%}%>  
  </body>   
</html>   
