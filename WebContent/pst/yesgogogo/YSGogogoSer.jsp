<%
/*--******************************************************************************
 * 
 * Remark Area                                                                
 *
 * Program name : YSGogogoSer.jsp
 * Create name	: Alma         					Create Date :2008/09/15 
 * Function		: 產生網銀福利社活動序號畫面
 * Notice       : 
 * I/O   		:
 *
 * Change List:                                                               
 * Date Modified	Modified by		Comments
 * --------------	-----------		-------------------------------------------------
 * 20090219			  Alma			修改畫面內容。
 * 20090330			  Alma			將逾時後點選網銀福利社時顯示「再試一次」回覆訊息，修改
 *                          為「登入逾時，請重新登入再試一次」。(EAI98020)
 * 20090819				Alma			修改註明文字內容。(EAI98052)
 * 20091030				Alma			修改文字間距。(EAI98058)
 * 20100127				Alma			修改底圖及顏色。(EAI99008)
 * 20100825       David     將ubot.com.tw網址修改為https開頭。(EAI99052)
 ********************************************************************************/
%>

<%@ page language="java" import="com.ubot.tom.*,org.apache.commons.lang.StringEscapeUtils" contentType="text/html; charset=BIG5"%>
<%
//String path = request.getContextPath();
//String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
//out.println(request.getParameter("OriMSG"));

Tom tObj = new Tom();
tObj.set_TxnUrl("APSVC");
tObj.set_UrlType(Tom.URLTYPEREF);
tObj.setConnType("POST");
tObj.set_TxnID("UBBANKSER");
tObj.setTA("REVE-ACTOR", StringEscapeUtils.escapeHtml(request.getParameter("sessid")));
tObj.setTA("REVE-SESSION-ID", StringEscapeUtils.escapeHtml(request.getParameter("sessid")));
tObj.setTA("REVE-ORIMSG", request.getParameter("OriMSG"));
tObj.set_TxnType(StringEscapeUtils.escapeHtml(request.getParameter("aptype")));
tObj.doTxn();
String msgid = tObj.get_SysMsg();
String retncode = tObj.get_TxnMsg();
String ubser = "" , tsize = "" ;

if( msgid.equals("0000") && retncode.equals("0000")){
	ubser = tObj.getSofData("SEND-REC", 0, "SEND-UBBANK-SER");
	tsize="80%";
}else{
	ubser = "登入逾時，請重新登入再試一次";
	tsize="98%";
}	
tObj.dispose();
tObj = null;
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <!--base href="<%//=basePath%>"-->
    
    <title>網銀福利社</title>
  <meta http-equiv="Content-Type" content="text/html; charset=big5">  
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<link rel="stylesheet" type="text/css" href="theme/yesgogogo.css">
	<STYLE type=text/css>
		.yest1 {
			FONT-SIZE: 15px; COLOR: #ff0000; LINE-HEIGHT: 20px
		}
		.yest2 {
			FONT-SIZE: 12px; COLOR: #ffff00; LINE-HEIGHT: 20px
		}
		input{			
			border:0px;background:#ffff00;font-size:15px;color:#ff0000;LINE-HEIGHT: 16px;font-weight:bold
		}
	</STYLE>	
  <script language="javascript" type="text/javascript">
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
//-->
</script>    
  </head>
  
  <body leftmargin="0" topmargin="0">
  <table width="467" height="310" border="0" cellpadding="0" cellspacing="0" id="t1">
  
    <tr>
      <td valign="top" background="image/yesgogogo01.gif">
      <!--remark-->
<TABLE cellSpacing=0 cellPadding=0 width="95%" align=center border=0>
        <TBODY>
        <TR>
          <TD height=110>&nbsp;</TD></TR>
        <TR>
          <TD class=t3>
            <TABLE cellSpacing=0 cellPadding=0 width="75%" align=center 
border=0>
              <TBODY>
              <TR>
        <TD 
                  class="t3 style1">親愛的客戶您好：<BR>自即日起登入(或加入)YesGoGoGo會員，建立(或更新)會員資料，並輸入以下活動序號，即可升級為「網銀福利社」專案會員，享YesGoGoGo全網購物優惠價。</TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>      
          <!--remark_end-->   
      <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0">             
        <tr>
          <td>
           <table width="<%=tsize%>" border="0" align="center" cellpadding="0" cellspacing="0">
            <tr>
              <td><div align="right"><img src="image/yesgogogo_td01.gif" width="10" height="25"></div></td>
              <td bgcolor="#ffff00">
              <div align="center" class="yest1">「網銀福利社」活動序號：
			  <% if (msgid.equals("0000") && retncode.equals("0000")) { %>
              <input name="ser" type="text" id="ser" value="<% out.print(ubser.substring(1)); %>"  size="16" readonly>
              <%} else { %>
              <strong><%=ubser%></strong>
              <% } %>
              </div></td>
              <td><img src="image/yesgogogo_td03.gif" width="10" height="25"></td>
            </tr>
          </table>         </td>
        </tr>
	
       <tr>
           <td height="25" colspan="2">
           <DIV align=center><A href="https://www.ubot.com.tw/ub/yesgogogo/" 
            target=_blank><img 
            onClick="" 
            height=73 src="image/yesgogogo_yes3.gif" width=167 
            border=0></A></DIV>          </td>
        </tr>   
      </table>
      
      
      
     </td>
    </tr>
    
  </table>
  </body>

<script language=javascript>
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version=b_version.split(";"); 
    var trim_Version=version[1].replace(/[ ]/g,""); 
    if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){     
        //alert("IE 7.0"); 
        window.dialogWidth="467px";
        window.dialogHeight=document.getElementById("t1").height+"px";
    }else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0"){ 
        //alert("IE 6.0"); 
        window.dialogWidth="475px";
        //window.dialogHeight="294px";
		window.dialogHeight=parseInt(document.getElementById("t1").height)+parseInt(28)+"px";		
    }else{
            if( document.body.scrollWidth > (window.screen.availWidth-100) ){ 
                window.dialogWidth = (window.screen.availWidth-100).toString() + "px" 
            }else{ 
                window.dialogWidth = (document.body.scrollWidth +25).toString() + "px" 
            }     
     
            if( document.body.scrollHeight > (window.screen.availHeight-70) ){ 
                window.dialogHeight = (window.screen.availHeight-50).toString() + "px" 
            }else{ 
                window.dialogHeight = (document.body.scrollHeight +58).toString() + "px" 
            } 
    } 
</script>
  
</html>
