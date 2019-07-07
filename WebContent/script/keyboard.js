/**
 *@Project     : EAI_IBANK
 *@File name   : keyboard.js
 *@Description :
 * for 螢幕密碼頁面使用
 * =========================
 *@Version     : V. 1.0
 *@Author      : Josephine
 *@Create date : 2004/8/13
 *@Modify date :
 *@Modify note :
 *
 */

/***********************************************************************
* Remark Area
* Create name	: Carl 
* Change List:
*SerialNo           Date Modified  Modified by   
*-------------      ----------     ----------
*EAI98050						2009.07.23		 Carl 
***********************************************************************/

var kb_key = "" ;
var key_count = "" ;

function addKey(key){
    kb_key = kb_key + key ;
    key_count = key_count + key.substring(0,1);
    document.form2.PWD.value = key_count;
    var result = document.getElementById("chkCount");
    if(result != undefined){
	    if(document.form2.PWD.value.length<13){
	    	result.innerHTML = "您已輸入"+document.form2.PWD.value.length+"位密碼";
	  	}else if(document.form2.PWD.value.length>12){
	  		result.innerHTML = "您已輸入超過12位數密碼，請重新輸入！！";
	  	}
  	}
}
function reSet(){
    document.form2.PWD.value = "";
    kb_key = "" ;
    key_count = "" ; 
    var result = document.getElementById("chkCount");
    if(result != undefined){
    	result.innerHTML = "目前您尚未輸入任何密碼";
  	}
}

var kbWin = null;
function getKeyBoard(sFormName, sPWD, sREVE_PWD, sREVE_KB_KEYCODE, sREVE_KB_KEYLETTER)
{
 var Mytype="width=450,height=250,scrollbars=auto,center=yes,border=thin,help=no,status=no";
 var PWD = "window.opener.document."+ sFormName +"."+ sPWD +".value";  //show在畫面上的密碼個數
 var KBPWD = "window.opener.document."+ sFormName +"."+ sREVE_PWD +".value";  //User真正key的密碼
       kbWin = window.open( "LoadAP?pageid=IP2001000&PWD="+PWD+"&KBPWD="+KBPWD+"&REVE_KB_KEYCODE="+ sREVE_KB_KEYCODE +"&REVE_KB_KEYLETTER=" + sREVE_KB_KEYLETTER ,"newWindow",Mytype);
}

function getKeyBoard2(sFormName, sPWD, sREVE_PWD, sREVE_KB_KEYCODE, sREVE_KB_KEYLETTER)
{
 var Mytype="width=230,height=280,scrollbars=auto,center=yes,border=thin,help=no,status=no";
 var PWD = "window.opener.document."+ sFormName +"."+ sPWD +".value";  //show在畫面上的密碼個數
 var KBPWD = "window.opener.document."+ sFormName +"."+ sREVE_PWD +".value";  //User真正key的密碼
 var DESC = "語音";
 kbWin = window.open("LoadAP?pageid=IP2001001&PWD="+PWD+"&KBPWD="+KBPWD+"&DESC="+DESC+"&REVE_DESC=&REVE_KB_KEYCODE="+ sREVE_KB_KEYCODE +"&REVE_KB_KEYLETTER="+ sREVE_KB_KEYLETTER,"newWindow",Mytype);
}

function getKeyBoard3(sFormName, sPWD, sREVE_PWD, sREVE_KB_KEYCODE, sREVE_KB_KEYLETTER)
{
 var Mytype="width=230,height=280,scrollbars=auto,center=yes,border=thin,help=no,status=no";
 var PWD = "window.opener.document."+ sFormName +"."+ sPWD +".value";  //show在畫面上的密碼個數
 var KBPWD = "window.opener.document."+ sFormName +"."+ sREVE_PWD +".value";  //User真正key的密碼
 var DESC = "動態簡訊";
 kbWin = window.open("LoadAP?pageid=IP2001001&PWD="+PWD+"&KBPWD="+KBPWD+"&DESC="+DESC+"&REVE_DESC=&REVE_KB_KEYCODE="+ sREVE_KB_KEYCODE +"&REVE_KB_KEYLETTER="+ sREVE_KB_KEYLETTER,"newWindow",Mytype);
}

function getKeyBoard4(sFormName, sPWD, sREVE_PWD, sREVE_KB_KEYCODE, sREVE_KB_KEYLETTER)
{
 var Mytype="width=230,height=280,scrollbars=auto,center=yes,border=thin,help=no,status=no";
 var PWD = "window.opener.document."+ sFormName +"."+ sPWD +".value";  //show在畫面上的密碼個數
 var KBPWD = "window.opener.document."+ sFormName +"."+ sREVE_PWD +".value";  //User真正key的密碼
 var DESC = "";
 kbWin = window.open("LoadAP?pageid=IP2001001&PWD="+PWD+"&KBPWD="+KBPWD+"&DESC="+DESC+"&REVE_DESC=&REVE_KB_KEYCODE="+ sREVE_KB_KEYCODE +"&REVE_KB_KEYLETTER="+ sREVE_KB_KEYLETTER,"newWindow",Mytype);
}

function onTop() {
  	if (kbWin==null) return;
  	if (kbWin != null && (!kbWin.closed)){
  		kbWin.focus();	
  	}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}