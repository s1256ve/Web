

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
		sRegOut = "�_";	
		sSub = "<input type='button' name='Submit1' value='�ӽ�' onClick='actApp(\""+ sAcct +"\");'>";
	}else{
		sRegOut = "�O";	
		sSub = "<input type='button' name='Submit1' value='���P' onClick='acctDisApp(\""+ sAcct +"\");'>";
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
 * �W�[�l��}�Y�P�����ԭz
 * @return String(newMsg)
 */
 
 function addMailTitle(msg){
  	var mailTitle = "<![CDATA[�����G���T���Y��&lt;u&gt;�p���Ȧ�&lt;/u&gt;�ӤH�����Ȧ�N�z����Ȥ�q���z�U�C�T���G&lt;br&gt;&lt;br&gt;";
  	var mailTitle2 = "&lt;br&gt;&lt;p&gt;���G���l��H�c�õL���H�\��A�ФŪ����^�Х�mail�I&lt;/p&gt;&lt;p align=center&gt;�p���Ȧ洣�ѱz�̶K�ߪ������A�ȡI&lt;/p&gt;&lt;p align=center&gt;�p���Ȧ���}�Ghttp://www.ubot.com.tw&lt;/p&gt;&lt;p align=center&gt;�ӤH���ĺ����}�Ghttp://mybank.ubot.com.tw&lt;/p&gt;&lt;br&gt;";
  	var mailEnd = "]]>";
  	var newMsg = mailTitle +  chkchar(msg) + mailTitle2 +mailEnd;
  	return newMsg;
}
  
/**
 * �W�[²�T�}�Y�ԭz
 * @return String(newMsg)
 */
 
 function addMobileTitle(msg){
 		var newMsg = ""
  	var mobileTitle = "<![CDATA[&lt;�p�����ȥN�z�q��&gt;";
  	var mobileEnd = "]]>";
  	newMsg = mobileTitle + chkchar(msg) + mobileEnd;
  	return newMsg;
}

function addMobileTitle2(msg,DateTime){
 		var newMsg = ""
  	var mobileTitle = "<![CDATA[&lt;"+DateTime+"�@�p�����ȥN�z�q��&gt;";
  	var mobileEnd = "]]>";
  	newMsg = mobileTitle + chkchar(msg) + mobileEnd;
  	return newMsg;
}

/**
 * �W�[��������}�Y�ԭz
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
 * �ˬd�T�����O�_��"�Ÿ��A�çאּ���Ρ�
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
 			
 			newMsg +="��";
 			//alert(newMsg);
 		}
 		else if(msg.substr(i , 1)==char2){
 			
 			newMsg +="��";
 			//alert(newMsg);
 		}
 		else if(msg.substr(i , 1)==char3){
 			
 			newMsg +="��";
 			//alert(newMsg);
 		}
 		else{
 			newMsg += msg.substr(i , 1);
 			//alert(newMsg);
 		}
 	}
 	return newMsg;
 }

/**�~������N�X�B�N���B�W���ഫ 
** fromType (��J����): "CODE"�B"NAME"�B"DESC" 
** formValue (��J����): �r��
** toType (��X������): "CODE"�B"NAME"�B"DESC" 
*/ 
function CuryMapping(fromType,fromValue,toType){
	CuryCode = new Array("01","03","04","05","06","07","08","12","13","14","15","17","18","19","20","21","99")
 	CuryName = new Array("USD","JPY","GBP","AUD","HKD","CAD","CNY","SGD","ZAR","SEK","CHF","THB","NZD","MYR","ESB","EUR","NTD")
 	CuryDesc = new Array("����","���","�^��","�D��","���","�[���j��","�����O","�s�[�Y��","���S(�n�D��)","���J��","��h�k��","����","�æ�����","���ӨȪL�N�S","��Z������","�ڤ�","�s�x��")

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
**��J �Ȧ�N�X(bcode)�B�b��(acct)�B�Ȧ�W��(bname)
**�̾ڬO�_���S�w���ľ��c�ഫ�W�١A�Ҧp�Ҧ��Ȧ�N�X520�����|���ର�p��Ϻ��|
*/
function chkBankID(bcode,acct,bname,acctdesc){
	
	if(bcode==520){
		var bname="�p��Ϻ��|";
		//return "<option value='"+bcode+"@"+acct+"@�p��Ϻ��|'>"+bcode+" �p��Ϻ��| "+acct+"</option>";
    return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==521){
		var bname="���������|";
		//return "<option value='"+bcode+"@"+acct+"@���������|'>"+bcode+" ���������| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==523){
		var bname="�̪F�����|";
		//return "<option value='"+bcode+"@"+acct+"@�̪F�����|'>"+bcode+" �̪F�����| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==614){
		var bname="���ƿ����A�|";
		//return "<option value='"+bcode+"@"+acct+"@���ƿ����A�|'>"+bcode+" ���ƿ����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==616){
		var bname="���L�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@���L�����A�|'>"+bcode+" ���L�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==617){
		var bname="�Ÿq�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@�Ÿq�����A�|'>"+bcode+" �Ÿq�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==618){
		var bname="�x�n�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@�x�n�����A�|'>"+bcode+" �x�n�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==619){
		var bname="���������A�|";
		//return "<option value='"+bcode+"@"+acct+"@���������A�|'>"+bcode+" ���������A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==620){
		var bname="�̪F�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@�̪F�����A�|'>"+bcode+" �̪F�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==621){
		var bname="�Ὤ�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@�Ὤ�����A�|'>"+bcode+" �Ὤ�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==622){
		var bname="�x�F�����A�|";
		//return "<option value='"+bcode+"@"+acct+"@�x�F�����A�|'>"+bcode+" �x�F�����A�| "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==910){
		var bname="�p�A����";
		//return "<option value='"+bcode+"@"+acct+"@�p�A����'>"+bcode+" �p�A���� "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==928){
		var bname="�O�A����";
		//return "<option value='"+bcode+"@"+acct+"@�O�A����'>"+bcode+" �O�A���� "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==951){
		var bname="�_�A����";
		//return "<option value='"+bcode+"@"+acct+"@�_�A����'>"+bcode+" �_�A���� "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==952){
		var bname="�n�A����";
		//return "<option value='"+bcode+"@"+acct+"@�n�A����'>"+bcode+" �n�A���� "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else if(bcode==954){
		var bname="�����a�ϹA���|";
		//return "<option value='"+bcode+"@"+acct+"@���A����'>"+bcode+" ���A���� "+acct+"</option>";
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
	}
	else{
		return "<option value='"+bcode+"@"+acct+"@"+bname+"@"+acctdesc+"'>"+bcode+" "+bname+" "+acct+" "+acctdesc+"</option>";
		
	}
}

/**
**��J �Ȧ�N�X(bcode)�B�b��(acct)�B�Ȧ�W��(bname)
**�̾ڬO�_���S�w���ľ��c�ഫ�W�١A�Ҧp�Ҧ��Ȧ�N�X520�����|���ର�p��Ϻ��|
**���w��J��X�d�߭����ϥ�
*/
function chkBankID2(bcode,bname,acct,acctdesc){
	if(bcode==520){
		var bname="�p��Ϻ��|";
		//return "<tr><td align='center'>�p��Ϻ��|(520)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		//return "<tr><td align='center'>�p��Ϻ��|(520)</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==521){
		var bname="���������|";
		//return "<tr><td align='center'>���������|(521)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==523){
		var bname="�̪F�����|";
		//return "<tr><td align='center'>�̪F�����|(523)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==614){
		var bname="���ƿ����A�|";
		//return "<tr><td align='center'>���ƿ����A�|(614)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==616){
		var bname="���L�����A�|";
		//return "<tr><td align='center'>���L�����A�|(616)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==617){
		var bname="�Ÿq�����A�|";
		//return "<tr><td align='center'>�Ÿq�����A�|(617)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==618){
		var bname="�x�n�����A�|";
		//return "<tr><td align='center'>�x�n�����A�|(618)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==619){
		var bname="���������A�|";
		//return "<tr><td align='center'>���������A�|(619)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==620){
		var bname="�̪F�����A�|";
		//return "<tr><td align='center'>�̪F�����A�|(620)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==621){
		var bname="�Ὤ�����A�|";
		//return "<tr><td align='center'>�Ὤ�����A�|(621)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==622){
		var bname="�x�F�����A�|";
		//return "<tr><td align='center'>�x�F�����A�|(622)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==910){
		var bname="�p�A����";
		//return "<tr><td align='center'>�p�A����(910)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==928){
		var bname="�O�A����";
		//return "<tr><td align='center'>�O�A����(928)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==951){
		var bname="�_�A����";
		//return "<tr><td align='center'>�_�A����(951)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==952){
		var bname="�n�A����";
		//return "<tr><td align='center'>�n�A����(952)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else if(bcode==954){
		var bname="���A����";
		//return "<tr><td align='center'>���A����(954)</td><td align='center'>"+acct+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td></tr>";
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"&nbsp"+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
	else{
		return "<tr><td align='center'>"+bname+"("+bcode+")</td><td align='center'>"+acct+"</td><td align='center'>"+acctdesc+"</td><td align='center'>�q�ܻȦ�B�ӤH�����Ȧ�</td><TD><INPUT type='button' value='�ק�/�s��' name='button3'  onClick=\"add("+"'"+bname+"','"+bcode+"','"+acct+"','"+acctdesc+"')\"></TD></tr>";
	}
}

function checkIdFormat(keyword){
		if((/[<>'"&]/gi).test(keyword)){
							alert("�ϥΪ̥N�������\��J  <  >  \'  \"  &  �o���دS��Ÿ�");
							window.close();
							return false;
		}else{
			return true;
		}
}