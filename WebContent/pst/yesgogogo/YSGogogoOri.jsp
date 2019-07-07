<%
/*--******************************************************************************
 * 
 * Remark Area                                                                
 *
 * Program name : YSGogogoOri.jsp
 * Create name	: Alma         					Create Date :2009/02/19 
 * Function		: 網銀福利社活動之訊息來源畫面
 * Notice       : 
 * I/O   		:
 *
 * Change List:                                                               
 * Date Modified	Modified by		Comments
 * --------------	-----------		-------------------------------------------------
 * 20091030				Alma			    修改背景顏色及文字間距。(EAI98058)
 * 20100127				Alma			修改底圖及顏色。(EAI99008)
 *
 ********************************************************************************/
%>
<%@ page language="java" import="com.ubot.tom.*" contentType="text/html; charset=BIG5"%>
<html>
  <head>
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
		.radio {
			border-top-style: none;
			border-right-style: none;
			border-bottom-style: none;
			border-left-style: none;
			background-color: #94122f;
		}
	</STYLE>	

  <SCRIPT LANGUAGE="JAVASCRIPT" SRC="./script/Dialog.js"></SCRIPT>
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
  
  function Submit_Form(){
  		var radiosize = document.YSGogogoSor.ori.length;
		for(var i=0 ; i< radiosize ; i++){		    
			if(document.YSGogogoSor.ori[i].checked){			    
				document.YSGogogoSor.OriMSG.value=document.YSGogogoSor.ori[i].value;
    		window.name="self";
    		window.open('./YSGogogoSer.jsp?sessid=<%=request.getParameter("sessid")%>&aptype=IBANK&OriMSG='+document.YSGogogoSor.OriMSG.value,"self");
        return;				
			}else{
    		//alert(document.YSGogogoSor.ori[i].value);
			}	
		}
		alert("請選擇訊息來源!");
		
/*		showDialog('./YSGogogoSer.jsp?sessid=<%//=request.getParameter("sessid")%>&aptype=IBANK&OriMSG='+document.YSGogogoSor.OriMSG.value,'','resizable:yes;status:no;dialogWidth=467px;dialogHeight=260px;center=yes;help=no');	*/
	}
//-->  
  </script>
 </head> 
  <body leftmargin="0" topmargin="0" >
  <form name="YSGogogoSor" method="post" action="YSGogogoSer.jsp">
  <table width="467" height="310" border="0" cellpadding="0" cellspacing="0" id="t1">
    <tr>
      <td valign="top" background="image/yesgogogo01.gif">
      <table width="70%" border="0" align="center" cellpadding="0" cellspacing="0">
	          <TBODY>
        <TR>
          <TD height=115>&nbsp;</TD></TR>
        <TR>
          <TD 
          class=t3>親愛的客戶您好：<BR>為利您取得本活動之專屬「活動序號」，請先點選下列您獲得本活動之訊息來源 
            (單選)：<BR><BR></TD></TR></TBODY></TABLE>
      <TABLE cellSpacing=0 cellPadding=0 width="95%" align=center border=0>
        <TBODY>
        <TR>
          <TD class=t3 height=38>
            <TABLE cellSpacing=0 cellPadding=0 align=center border=0>
              <TBODY>
              <TR>
                <TD class=t3>
		   		  <INPUT type=radio value=1 name=ori class="radio"> 報章媒體 
	              <INPUT type=radio value=2 name=ori class="radio"> 網路廣告 
                  <INPUT type=radio value=3 name=ori class="radio"> 電話行銷 
                  <INPUT type=radio value=4 name=ori class="radio"> 簡訊通知<BR>
				  <INPUT type=radio value=5 name=ori class="radio"> 分行廣告 
				  <INPUT type=radio value=6 name=ori class="radio"> 行員告知 
				  <INPUT type=radio value=7 name=ori class="radio"> 其他
				 </TD>
			   </TR>
			  </TBODY>
			</TABLE></TD></TR>
        <TR>
          <TD>
            <DIV align=center></DIV></TD></TR>
        <TR>
          <TD class=t3>&nbsp;</TD></TR>
        <TR>
          <TD vAlign=bottom colSpan=2 height=25>
            <DIV align=center>
							<A onMouseOver="MM_swapImage('Image001','','image/yesgogogo_yes2.gif',1)" onmouseout=MM_swapImgRestore() href="#">
							   <IMG id=Image001 onClick="Submit_Form();" height=19 hspace=5  src="image/yesgogogo_yes.gif" width=73 border=0 name=Image001></A>
							<A onMouseOver="MM_swapImage('Image002','','image/yesgogogo_close2.gif',1)" onmouseout=MM_swapImgRestore() href="#"> 
					<IMG id=Image002 onClick="window.close();" height=19 hspace=5 src="image/yesgogogo_close.gif" width=73 border=0  name=Image002></A> 
						</DIV>
					</TD>
			</TR></TBODY></TABLE>
	  
</td>
    </tr>
  </table>
  	<input type="hidden" name="OriMSG" value="" >  
  </form>
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
