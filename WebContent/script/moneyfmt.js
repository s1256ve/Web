/**********************************************************************
*SerialNo           Date           Name
*-------------      ----------     ----------
*EAI99063           2010/10/18     David 
*Modify note : add function moneyAddDot3()
***********************************************************************/
/**
 *@Project     : EAI_IBANK
 *@File name   : moneyfmt.js
 *@Description :
 * Money format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.1
 *@Author      : <a href="mailto:whinelin@mail2000.com.tw">Maple Lin</a>
 *@Create date : 2004/1/30
 *@Modify date : 2004/2/3
 *@Modify note : add function moneyTrimDot, moneyAddDot, trimSpStr, trimDecimal
 *@Modify note : fix function moneyFormat
 *
 */

/**
 * ȥ��С��λ��
 * @param Source String 100000.00
 * @return String ex. 100000
 */
function trimDecimal(srcStr){
	if(srcStr.indexOf(".") > -1){
		srcStr = srcStr.substring(0,srcStr.indexOf("."));
	}
	if (srcStr == "-0"){ 
		srcStr = "0";
	}
	return srcStr;
}


/**
 * �����~�ִ�����"," , �aС���c.00
 * @param Source String 100000.00
 * @return String ex. 100,000.00
 */
function moneyAddDot(inStr){
	var tempStr = "00";
	if (inStr=='') return inStr;
	if(inStr.indexOf(".")){
		var inStrArray = inStr.split(".");
		tempStr = inStrArray[1];
		inStr = inStrArray[0];
	}
	
	inStr = moneyTrimDot(inStr, ",");
	
	var conStr = "";
	var negFlag = false;       //ؓ���Д� 
	if (inStr.indexOf("-")==0){
		negFlag = true;
		inStr  = inStr.substr(1,inStr.length-1);	//����ֵȡ���� ��"-"̖ؓ�ų�����	
	}	
	
	for(var i = inStr.length ; 0 < i ; i--){
		var pot = (inStr.length-i+1)%3;
		if(pot==0 && i!=1){
			conStr = ","+inStr.substring(i-1,i)+conStr;
		}else{
			conStr = inStr.substring(i-1,i)+conStr;		
		}
	}
	if (tempStr == "" || tempStr == null) {
		tempStr = "00";
	}
	if(tempStr!=""){
		conStr += "." + tempStr;
	}
	
	if (negFlag) conStr = "-" + conStr; 
	return conStr;
}


/**
 * �����~�ִ�����"," , ���aС���c
 * @param Source String 100000.00
 * @return String ex. 100,000
 */
 
function moneyAddDot2(inStr){
	if (isNaN(inStr)) return inStr;
	var tempStr = "";
	var tempS = "";
	if(inStr.indexOf(".")){
		var inStrArray = inStr.split(".");
		tempStr = inStrArray[1];
		inStr = inStrArray[0];
		if (inStr.indexOf("-")==0){
			tempS = "-";
			inStr = inStr.substr(1,inStr.length-1);
		}
		inStr = moneyTrimDot(inStr, ",");
	}
	var conStr = "";
	for(var i = inStr.length ; 0 < i ; i--){
		var pot = (inStr.length-i+1)%3;
		if(pot==0&&i!=1){
			conStr = ","+inStr.substring(i-1,i)+conStr;
		}else{
			conStr = inStr.substring(i-1,i)+conStr;
		}
	}
	if(tempStr){
		conStr = tempS + conStr + "." + tempStr;
	}else{
		conStr = tempS + conStr	;
	}
	return conStr;
}

/**
 * �����~�ִ�����"," ����С���t���������oС���t����С��
 * @param Source String 100000.00
 * @return String ex. 100,000.00
 * @param Source String 100000
 * @return String ex. 100,000
 */
function moneyAddDot3(s){
    if(/[^0-9\.\-]/.test(s)) return "invalid value";
    s=s.replace(/^(\d*)$/,"$1.");
    s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    s=s.replace(".",",");
    var re=/(\d)(\d{3},)/;
    while(re.test(s))
        s=s.replace(re,"$1,$2");
    s=s.replace(/,(\d\d)$/,".$1");
    return s.replace(/^\./,"0.")
    }
    
    
/**
 * ȥ���ִ���������Ԫ
 * @param Source String ex. 100,000.00
 * @param trim Key ex. ","
 * @return String ex. 100000.00
 */
function moneyTrimDot(inStr,key){
	var conStr = "";
	var inStrArray = inStr.split(key);
	for(var i = 0 ; i < inStrArray.length ; i ++){
		conStr += inStrArray[i];
	}
	return conStr;
}
/**
 * �D�Q�������н��~��ʽ
 * @param ������Ľ��~String ex. ****1000000 or ----1000000
 * @return Ex. 100,000 or (100,000)
 */
function moneyFormat(srcStr){
	if(srcStr==""||srcStr==null){
		return "";
	}
	
	if(srcStr.indexOf("-")>=0){
		var tempStr = trimSpStr(srcStr,"-");		
		tempStr = moneyAddDot(tempStr);
		tempStr = "(" + tempStr + ")";
		return tempStr;
	} else{
		var tempStr = trimSpStr(srcStr,"*");
		tempStr = moneyAddDot(tempStr);
		return tempStr;
	}
	
}

function moneyFormat2(srcStr) {
	
	if(srcStr==""||srcStr==null){
		return "";
	}

	if(srcStr.indexOf("-")>=0){
		var tempStr = trimSpStr(srcStr,"-");	
		tempStr = moneyAddDot2(tempStr);
		tempStr = trimDecimal(tempStr);
		tempStr = "(" + tempStr + ")";
		return tempStr;
	} else{
		var tempStr = trimSpStr(srcStr,"*");
		tempStr = moneyAddDot2(tempStr);
		tempStr = trimDecimal(tempStr);
		return tempStr;
	}	
	
	return srcStr;
	
}

/**
 * �D�Q�������н��~��ʽ
 * @param ������Ľ��~String ex. ****1000000 or ----1000000
 * @return Ex. 100,000 or (100,000) or -100,000(ֵؓ�����һ��̖ؓ)
 */

function moneyFormat3(srcStr) {		
	if(srcStr.indexOf("*")>=0){
		var tempStr = trimSpStr(srcStr,"*");
		tempStr = moneyAddDot2(tempStr);
		tempStr = trimDecimal(tempStr);
		return tempStr;
	}else if(srcStr.indexOf("-")>=0){
		var tempStr = trimSpStr(trim(srcStr,","),"-");
		var tempStr2 = trimSpStr(trim(srcStr,","),"-");
		tempStr = moneyAddDot2(tempStr);
		tempStr = trimDecimal(tempStr);
		if(eval(tempStr2)>0){
			tempStr = "-" + tempStr;
		}
		return tempStr;
	}
	return moneyAddDot2(srcStr);
}

/**
 * trim Stringǰ�����Ԫ
 * @param String ex. ****1000000 or ----1000000
 * @param String key word ex. "*" or "-"
 * @return String Ex. 1000000
 */
function trimSpStr(srcStr,trimKey){
	var pot001 = srcStr.lastIndexOf(trimKey);
	var pot002 = srcStr.length;
	return srcStr.substring(pot001+1,pot002);
}

/**
 * trim Stringǰ����0��Ԫ
 * @param String ex. 00001000000 
 * @param String key word ex. "*" or "-"
 * @return String Ex. 1000000
 */
function trimSpStr1(srcStr){
	 var pot001 = parseInt(srcStr,10);
	 return pot001.toString();
}



/**
 * ȥ���ִ���������Ԫ
 * @param srcStr ex. 100,00.00
 * @param key    ex. ","
 * @return String ex. 10000.00 
*/

function trim(srcStr, key){
	if (srcStr==null || srcStr=="") {
		return "";
	}
	
	var strArray = srcStr.split(key);
	var desStr = "";
	for (var i=0; i<strArray.length; i++) {
		desStr += strArray[i];
	}
	return desStr;
}

function sumMoney(objArray, deci, seperator) {
	var val = 0;
	if (objArray == null) {
		return val;	
	}
 	if (!isArray(objArray)){
 		val = toFloat(objArray.value);
 	} else{
	 	for (var i=0; i<objArray.length; i++) {
	 		val += toFloat(objArray[i].value);	
	 	}
 	}
	return val; 
}

/**
 * �����~��ʽ�D�鸡�c��
 * @param srcStr ex. 100,00.00
 * @return float ex. 10000.00
*/
function toFloat(srcStr){
	
	if (srcStr=="" || srcStr==null || (srcStr.indexOf( "(" ) >=0) ) {
		return 0;
	}
	
	srcStr = trim(srcStr,",");
	
	var srcFloat = 0;
	
	if (srcStr.indexOf("*")>=0) {	srcStr = trim(srcStr, "*");	}	
	if (srcStr.indexOf("+")>=0) {	srcStr = trim(srcStr, "+");	}
	if (srcStr.indexOf("-")>=0) {		
		srcFloat = 0 - parseFloat(trim(srcStr, "-"));
	}else{
		srcFloat = parseFloat(trim(srcStr, "-"));
	}
	if (isNumeric(srcFloat)) {
		return srcFloat;
	}else{
		return 0;
	}
	
}


function roundFloat (f, places) {
	var shift = Math.pow(10, places);
	f = (Math.round(f*shift))/shift;
    	return f;
}

function isNumeric(val) {return (parseFloat(val,10)==(val*1));			}
function isNull(val)	{return (val==null);  					}
function isArray(obj)	{ 
 if (obj == null) { return false; }
 return (typeof(obj.length)=="undefined")?false:true;	
}

