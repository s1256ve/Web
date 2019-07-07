/**
 *@Project     : EAI_IBANK
 *@File name   : acctfmt.js
 *@Description :
 * account and card serial number format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : <a href="mailto:whinelin@mail2000.com.tw">Maple Lin</a>
 *@Create date : 2004/1/30
 *@Modify date :
 *@Modify note :
 *
 */


/**
 * 轉成帳號格式 xxx-xx-xxxxxxx
 * @param 12位帳號數字
 * @return Account String xxx-xx-xxxxxxx
 */
function getAcctStr(inAcctNum){
	
	var acctStr   = inAcctNum;
	var acctArray = "";

	if ((!isNaN(inAcctNum))  && (inAcctNum.length==12) ){		
		acctArray = splitAcct(inAcctNum);
		acctStr = acctArray[0] + "-" + acctArray[1] + "-" + acctArray[2];
	}else if ((inAcctNum.length == 14) && 
		  (inAcctNum.indexOf("(") ==  0) && 
		  (inAcctNum.indexOf(")") == 13) ){
			inAcctNum = inAcctNum.substring(1,13);			
			acctArray = splitAcct(inAcctNum);
			acctStr = "("+ acctArray[0] + "-" + acctArray[1] + "-" + acctArray[2] + ")";
	}else{;}
	return acctStr;
}

/**
 * 轉成信用卡帳號格式 xxxx-xxxx-xxxx-xxxx
 * @param 16位信用卡帳號數字
 * @return Card SN String xxxx-xxxx-xxxx-xxxx
 */
function getCardStr(inCardNum){
	//var cardStr = "Error Card Serial Number";
	var cardStr = inCardNum;
	//if((!isNaN(inCardNum))&&(inCardNum.length==16)){
	if(inCardNum.length==16){
		var cardArray = splitCard(inCardNum);
		cardStr = cardArray[0] + "-" + cardArray[1] + "-" + cardArray[2] + "-" + cardArray[3];
	}
	return cardStr;
}

/**
 * 取得帳號Array
 * @param 12位帳號數字
 * @return Account Array(3)
 */
function getAcctArray(inAcctNum){
	var acctArray = new Array(3);
	if((!isNaN(inAcctNum))&&(inAcctNum.length==12)){
		acctArray = splitAcct(inAcctNum);
	}
	return acctArray;
}

/**
 * 取得信用卡帳號Array
 * @param 16位信用卡帳號數字
 * @return Card SN Array(4)
 */
function getCardArray(inCardNum){
	var cardArray = new Array(4);
	if((!isNaN(inCardNum))&&(inCardNum.length==16)){
		cardArray = splitCard(inCardNum);
	}
	return cardArray;
}

/**
 * 分割帳號成Array
 * @param 12位帳號數字
 * @return Account Array(3)
 */
function splitAcct(inAcctNum){
	var acctArray = new Array(3);
	acctArray[0] = inAcctNum.substring(0,3);
	acctArray[1] = inAcctNum.substring(3,5);
	acctArray[2] = inAcctNum.substring(5,12);
	return acctArray;
}

/**
 * 分割信用卡帳號成Array
 * @param 16位信用卡帳號數字
 * @return Card SN Array(4)
 */
function splitCard(inCardNum){
	var cardArray = new Array(4);
	cardArray[0] = inCardNum.substring(0,4);
	cardArray[1] = inCardNum.substring(4,8);
	cardArray[2] = inCardNum.substring(8,12);
	cardArray[3] = inCardNum.substring(12,16);
	return cardArray;
}

/**
 * 分割信用卡到期日
 * @param 輸入到期日 200904
 * @return 04月 2009年
 */
function ExpCard(sExp){
	return sExp.substring(4,6)+"月 "+sExp.substring(0,4) + "年";	
}