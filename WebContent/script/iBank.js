

/***********************************************************************
* Remark Area
* Create name	: YiSyun  
* Change List:
*SerialNo           Date Modified  Modified by   
*-------------      ----------     ----------
*EAI98053						2009.08.25		 YiSyun  
*EAI98056						2009.10.13		 David  
***********************************************************************/

String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}

/*
if(window.history.forward(1) != null)
                 window.history.forward(1);
*/

function iBnakExport(AccNo){
	var rtnStr = ""
	rtnStr = AccNo;
	i = i + 1;	
	return rtnStr;
}
function iBnakExpNo(){



}

function chgcode(str01)
{
    array01 = new Array("10","11","12","13","14","15","16","17","34","18","19",
                  "20","21","22","35","23","24","25","26","27","28","29","32","30",
                  "31","33");
    var int01 =  str01.charCodeAt() -65;                
    return array01[int01] ;
  
}

function removeSpace(str01){
	var tmpStr = ""
	var rtnStr = ""
	tmpStr = str01.trim();
	for(i=0; i<tmpStr.length; i++)
 	{
 		if(tmpStr.charAt(i)!=" ")
 		{
 			rtnStr = rtnStr + tmpStr.charAt(i);
 		}
 	} 	
 	return rtnStr;
}

var HalfshapeString = 
        "0123456789-" +
        "abcdefghijklmnopqrstuvwxyz" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ,.()+<>\"&";

function HalfshapeToFullshape(strSource) {
        var newString = "";
        var searchIndex = -1;
        for(var i = 0; i < strSource.length; i++) {
                searchIndex = HalfshapeString.indexOf(strSource.charAt(i));
                if(searchIndex != -1) {
                        newString += String.fromCharCode(strSource.charAt(i).charCodeAt() + 65248);
                }
                else {
                        newString += strSource.charAt(i);
                }
        }
        return newString;
}

function dispAI99001(sAcct, sReg){
	var sRegOut = ""
	var sSub = ""
	var rtnStr = ""
	
	if (sReg == "0"){
		sRegOut = "否";	
		sSub = "<input type='button' name='Submit1' value='申請' onClick='actApp(\""+ sAcct +"\");'>";
	}else{
		sRegOut = "是";	
		sSub = "<input type='button' name='Submit1' value='註銷' onClick='acctDisApp(\""+ sAcct +"\");'>";
	}		
	if (sAcct.substring(3,6) != "508"){	
	 rtnStr = "<tr><td width='23%' height='2'><div align='center'>"+ getAcctStr(sAcct) +"</div></td><td width='49%' height='2'><div align='center'>"+ sRegOut +"</div>" +
          "</td><td colspan='2' height='2'><div align='center'>"+ sSub +"</div></td></tr>";
        }  
        return rtnStr;
          
}


/*
function setParentIFrameSize(iFrameName, isW, isH) { 
	
	//var out = setInterval('setIFrameSize(theDoc,iFrameName, isW, isH, out);', 500);
	
	
	if ((parent.document.getElementById) && 
	    (parent.document.getElementById(iFrameName)) ){
	    	if (isW) parent.document.getElementById(iFrameName).style.width = parseInt(this.document.body.scrollWidth, 10);
	    	if (isH) parent.document.getElementById(iFrameName).style.height = parseInt(this.document.body.scrollHeight, 10);
	    	//alert("setParentIFrameSize: " + iFrameName + ":" +parent.document.getElementById(iFrameName).style.width + ":" + parent.document.getElementById(iFrameName).style.height);
	}else {
		alert("Error: parent.document.getElementById");
	}
	
	
}

function setIFrameSize(thisDoc, iFrameName, isW, isH) { 
	
	if (thisDoc.readyState == "complete") {
		
		clearInterval(Timeout_ID);
		
		if ((parent.document.getElementById) && 
		    (parent.document.getElementById(iFrameName)) ){
		    	if (isW) parent.document.getElementById(iFrameName).style.width = parseInt(this.document.body.scrollWidth, 10);
		    	if (isH) parent.document.getElementById(iFrameName).style.height = parseInt(this.document.body.scrollHeight, 10);
		    	//alert("setParentIFrameSize: " + iFrameName + ":" +parent.document.getElementById(iFrameName).style.width + ":" + parent.document.getElementById(iFrameName).style.height);
		}else {
			alert("Error: parent.document.getElementById");
		}
	}	
}

function checkLoaded(doc, iFrameName, isW, isH) {
	if (document.readyState && document.readyState == "complete"){
		setParentIFrameSize(iFrameName, isW, isH);	
	}
}

function checkIFrameSize(doc, iFrameName, isW, isH) {
	var count = 0;

	//setTimeout("checkLoaded(" + doc + ", " + iFrameName + ", " + isW + ", "isH + " );", 500);	

}
*/

/**
 * 增加郵件開頭與結尾敘述
 * @return String(newMsg)
 */
 
 function addMailTitle(msg){
  	var mailTitle = "<![CDATA[說明：本訊息係由&lt;u&gt;聯邦銀行&lt;/u&gt;個人網路銀行代理本行客戶通知您下列訊息：&lt;br&gt;&lt;br&gt;";
  	var mailTitle2 = "&lt;br&gt;&lt;p&gt;註：本郵件信箱並無收信功能，請勿直接回覆本mail！&lt;/p&gt;&lt;p align=center&gt;聯邦銀行提供您最貼心的網路服務！&lt;/p&gt;&lt;p align=center&gt;聯邦銀行網址：http://www.ubot.com.tw&lt;/p&gt;&lt;p align=center&gt;個人金融網網址：http://mybank.ubot.com.tw&lt;/p&gt;&lt;br&gt;";
  	var mailEnd = "]]>";
  	var newMsg = mailTitle +  chkchar(msg) + mailTitle2 +mailEnd;
  	return newMsg;
}
  
/**
 * 增加簡訊開頭敘述
 * @return String(newMsg)
 */
 
 function addMobileTitle(msg){
 		var newMsg = ""
  	var mobileTitle = "<![CDATA[&lt;聯邦網銀代理通知&gt;";
  	var mobileEnd = "]]>";
  	newMsg = mobileTitle + chkchar(msg) + mobileEnd;
  	return newMsg;
}

function addMobileTitle2(msg,DateTime){
 		var newMsg = ""
  	var mobileTitle = "<![CDATA[&lt;"+DateTime+"　聯邦網銀代理通知&gt;";
  	var mobileEnd = "]]>";
  	newMsg = mobileTitle + chkchar(msg) + mobileEnd;
  	return newMsg;
}

/**
 * 增加交易附註開頭敘述
 * @return String(newMsg)
 */
 
 function addMemoTitle(msg){
 		var newMsg = ""
  	var memoTitle = "<![CDATA[";
  	var memoEnd = "]]>";
  	newMsg = memoTitle + chkchar(msg) + memoEnd;
  	return newMsg;
}

/**
 * 檢查訊息中是否有"符號，並改為全形”
 * @return msg
 */

  var char1="\""
  var char2="<"
  var char3=">"
 function chkchar(msg){
	/**
 	if(char1.indexOf(msg)==-1){
 		return msg;
 	}
	*/
 	var newMsg = "";
 	for(i = 0; i<msg.length; i++){

 		if(msg.substr(i , 1)==char1){
 			
 			newMsg +="”";
 			//alert(newMsg);
 		}
 		else if(msg.substr(i , 1)==char2){
 			
 			newMsg +="＜";
 			//alert(newMsg);
 		}
 		else if(msg.substr(i , 1)==char3){
 			
 			newMsg +="＞";
 			//alert(newMsg);
 		}
 		else{
 			newMsg += msg.substr(i , 1);
 			//alert(newMsg);
 		}
 	}
 	return newMsg;
 }

/**外幣交易代碼、代號、名稱轉換 
** fromType (輸入類型): "CODE"、"NAME"、"DESC" 
** formValue (輸入的值): 字串
** toType (輸出的類型): "CODE"、"NAME"、"DESC" 
*/ 
function CuryMapping(fromType,fromValue,toType){
	CuryCode = new Array("01","03","04","05","06","07","08","12","13","14","15","17","18","19","20","21","99")
 	CuryName = new Array("USD","JPY","GBP","AUD","HKD","CAD","CNY","SGD","ZAR","SEK","CHF","THB","NZD","MYR","ESB","EUR","NTD")
 	CuryDesc = new Array("美金","日幣","英鎊","澳幣","港幣","加拿大幣","奧先令","新加坡幣","蘭特(南非幣)","瑞典克郎","瑞士法郎","泰銖","紐西蘭幣","馬來亞林吉特","西班牙比塞塔","歐元","新台幣")

	var Index1 = -1
	
	if(fromType == "CODE"){
		for(var i = 0 ; i < CuryCode.length; i++) if(CuryCode[i]==fromValue) Index1 = i;
	}else if(fromType == "NAME"){
		for(var i = 0 ; i < CuryName.length; i++) if(CuryName[i]==fromValue) Index1 = i;
	}else if(fromType == "DESC"){	
		for(var i = 0 ; i < CuryDesc.length; i++) if(CuryDesc[i]==fromValue) Index1 = i;	
	}
	
	if(toType == "CODE"){
		return CuryCode[Index1];
	}else if(toType == "NAME"){
		return CuryName[Index1];
	}else if(toType == "DESC"){	
		return CuryDesc[Index1];	
	}
	
	return "9990";
} 

/**
**輸入 銀行代碼(bcode)、帳號(acct)、銀行名稱(bname)
**依據是否為特定金融機構轉換名稱，例如所有銀行代碼520的漁會皆轉為小港區漁會
*/
function chkBankID(bcode,acct,bname,acctdesc){
	
	if(bcode==520){
		var bname="小港區漁會";
		//return "<option value='"+bcode+"@"+acct+"@小港區漁會'>"+bcode+" 小港區漁會 "+acct+"</option>";
    return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==521){
		var bname="高雄縣漁會";
		//return "<option value='"+bcode+"@"+acct+"@高雄縣漁會'>"+bcode+" 高雄縣漁會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==523){
		var bname="屏東縣漁會";
		//return "<option value='"+bcode+"@"+acct+"@屏東縣漁會'>"+bcode+" 屏東縣漁會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==614){
		var bname="彰化縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@彰化縣市農會'>"+bcode+" 彰化縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==616){
		var bname="雲林縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@雲林縣市農會'>"+bcode+" 雲林縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==617){
		var bname="嘉義縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@嘉義縣市農會'>"+bcode+" 嘉義縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==618){
		var bname="台南縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@台南縣市農會'>"+bcode+" 台南縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==619){
		var bname="高雄縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@高雄縣市農會'>"+bcode+" 高雄縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==620){
		var bname="屏東縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@屏東縣市農會'>"+bcode+" 屏東縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==621){
		var bname="花蓮縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@花蓮縣市農會'>"+bcode+" 花蓮縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==622){
		var bname="台東縣市農會";
		//return "<option value='"+bcode+"@"+acct+"@台東縣市農會'>"+bcode+" 台東縣市農會 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==910){
		var bname="聯農中心";
		//return "<option value='"+bcode+"@"+acct+"@聯農中心'>"+bcode+" 聯農中心 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==928){
		var bname="板農中心";
		//return "<option value='"+bcode+"@"+acct+"@板農中心'>"+bcode+" 板農中心 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==951){
		var bname="北農中心";
		//return "<option value='"+bcode+"@"+acct+"@北農中心'>"+bcode+" 北農中心 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==952){
		var bname="南農中心";
		//return "<option value='"+bcode+"@"+acct+"@南農中心'>"+bcode+" 南農中心 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==954){
		var bname="中部地區農漁會";
		//return "<option value='"+bcode+"@"+acct+"@中農中心'>"+bcode+" 中農中心 "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else{
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
		
	}
}

/**
**輸入 銀行代碼(bcode)、帳號(acct)、銀行名稱(bname)
**依據是否為特定金融機構轉換名稱，例如所有銀行代碼520的漁會皆轉為小港區漁會
**約定轉入轉出查詢頁面使用
*/
function chkBankID2(bcode,bname,acct,acctdesc){
	if(bcode==520){
		var bname="小港區漁會";
		//return "<tr><td align='center'>小港區漁會(520)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		//return "<tr><td align='center'>小港區漁會(520)</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==521){
		var bname="高雄縣漁會";
		//return "<tr><td align='center'>高雄縣漁會(521)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==523){
		var bname="屏東縣漁會";
		//return "<tr><td align='center'>屏東縣漁會(523)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==614){
		var bname="彰化縣市農會";
		//return "<tr><td align='center'>彰化縣市農會(614)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==616){
		var bname="雲林縣市農會";
		//return "<tr><td align='center'>雲林縣市農會(616)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==617){
		var bname="嘉義縣市農會";
		//return "<tr><td align='center'>嘉義縣市農會(617)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==618){
		var bname="台南縣市農會";
		//return "<tr><td align='center'>台南縣市農會(618)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==619){
		var bname="高雄縣市農會";
		//return "<tr><td align='center'>高雄縣市農會(619)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==620){
		var bname="屏東縣市農會";
		//return "<tr><td align='center'>屏東縣市農會(620)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==621){
		var bname="花蓮縣市農會";
		//return "<tr><td align='center'>花蓮縣市農會(621)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==622){
		var bname="台東縣市農會";
		//return "<tr><td align='center'>台東縣市農會(622)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==910){
		var bname="聯農中心";
		//return "<tr><td align='center'>聯農中心(910)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==928){
		var bname="板農中心";
		//return "<tr><td align='center'>板農中心(928)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==951){
		var bname="北農中心";
		//return "<tr><td align='center'>北農中心(951)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==952){
		var bname="南農中心";
		//return "<tr><td align='center'>南農中心(952)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==954){
		var bname="中農中心";
		//return "<tr><td align='center'>中農中心(954)</td><td align='center'>"+acct+"</td><td align='center'>電話銀行、個人網路銀行</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else{
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"</td><td align='center'>電話銀行、個人網路銀行</td><TD><INPUT type='button' value='修改/編輯' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
}

function checkIdFormat(keyword){
		if((/[<>'"&]/gi).test(keyword)){
							alert("使用者代號不允許輸入  <  >  \'  \"  &  這五種特殊符號");
							window.close();
							return false;
		}else{
			return true;
		}
}