/**
 *@Project     : EAI_IBANK
 *@File name   : OptionsFmt.js
 *@Description :
 * account and card serial number format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : Connie
 *@Create date : 2004/10/14
 *@Modify date :
 *@Modify note :
 *
 * Make sure that you have include the "/script/acctfmt.js" file before using functions below.
 * For Example:
 * <SCRIPT language="JavaScript" src="script/acctfmt.js"></SCRIPT>
 *
 *
 */
 
 
/**
 * 製作 OPTIONS 
 * ex: option.Text  = "台北分行  活儲帳號 00000000000  新台幣 3000 元"
 *     option.Value = "00000000000";
 * 
 * @param selectObj	  <select> 物件
 * @param arrayFromAcct	  轉出/轉入帳號陣列
 * @param arrayAllAcct    歸戶帳號陣列
 * @param arrayAllBranch  歸戶帳號所屬分行陣列
 * @param arrayAllBalance 歸戶帳號餘額陣列
 * @param arrayAllDesc    歸戶帳號描述陣列
 * @return 
 */ 

function mkOptions_A(selectObj, arrayFromAcct, arrayAllAcct, arrayAllBranch, arrayAllBalance, arrayAllDesc){
	
	for (var i=0; i<arrayFromAcct.length; i++){
		var x = getIdx(arrayFromAcct[i], arrayAllAcct);
		if (x >= 0){
			var optText = arrayAllBranch[x] + '    ' + arrayAllBalance[x] + '   ' + getAcctStr(arrayFromAcct[i])  + '   新台幣 ' + arrayAllBalance[x]  + '  元';
			selectObj.options.add(new Option(optText,arrayFromAcct[i]));
		}else{
			selectObj.options.add(new Option(arrayFromAcct[i],arrayFromAcct[i]));
		}
	}	
	
}


/**
 * 製作 OPTIONS 
 * ex: option.Text  = optTxtArray[i];
 *     option.Value = optValArray[i];
 *
 * @param selectObj	<select> 物件
 * @param optTxtArray	OPT TEXT  陣列
 * @param optValArray   OPT VALUE 陣列
 * @return 
 */
function mkOptions_B(selectObj, optTxtArray, optValArray) {
	for (var i=0; i<optTxtArray.length; i++){
		selectObj.options.add(new Option(optTxtArray[i],optValArray[i]));		
	}	
}

/**
 * 製作 OPTIONS 
 * ex: option.Text  = "陣列子字串"
 *     option.Value = option.Text;
 *
 * @param selectObj	<select> 物件
 * @param toBidArray	約定轉出帳號的所屬分行代碼陣列
 * @param toAcctArray   約定轉出帳號陣列
 * @param allBidArray	台灣所有銀行代碼
 * @param allBnameArray 台灣所有銀行名稱
 * @return 
 */
function mkOptions_C(selectObj, toBidArray , toAcctArray, allBidArray, allBnameArray) {
	for (var i=0; i<toBidArray.length; i++){
		var bankName = getBankName(allBidArray, allBNameArray, toBidArray[i]);
		var optText  = bankName + '  ' + toBidArray[i] + '  ' + toAcctArray[i];
		var optVal   = toBidArray[i] + '@' + toAcctArray[i];
		selectObj.options.add(new Option(optText ,optVal));		
	}
} 


/**
 * 尋找某帳號(src)於帳號陣列的 index 
 * 註: 帳號格式 xxxxxxxxxxxx
 * @param src    帳號
 * @param array 帳號陣列
 * @return src 於 array 的 index, 若該帳號不存在於帳號陣列中，則回傳 -1
 */
function getIdx (src, array){

	if (src   == null ||src == '' || 
	    array == null || array.length < 1) {
		return -1;
	}
	
	for (var i=0; i<array.length; i++){
		if (src == array[i]) return i;
	}
	return -1;
}

function getBankName(idArray, nameArray, bid) {
	
	if (bid       == null || bid.length 	  < 1 ||
	    nameArray == null || nameArray.length < 1 ||
	    idArray   == null || idArray.length   < 1 ) return '';
	
	for (var i=0; i<nameArray.length; i++) {
		if (idArray[i] == bid) return nameArray[i];
	}
	return '';
}

/**
 * 將某字串切割為陣列
 * @param srcString    某字串
 * @param count        陣列大小
 * @param dot	       字串分割字元
 * @return 陣列
 */
function toArray(srcString, count, dot) {
	var srcArray = new Array(count);
	for (var i=0; i<count; i++) {
		if (srcString == null || srcString == '') {
			srcArray[i] = '';
		}else if (srcString.indexOf(dot) >= 0) {
			srcArray[i] = srcString.substring(0, srcString.indexOf(dot));
			srcString = srcString.substring(srcString.indexOf(dot)+1, srcString.length);
		}else {
			srcArray[i] = srcString;
			srcString = '';
		}
	}	
	return srcArray;
}


function countToken(srcString, dot) {
	if (srcString == null) return 0;
	var arrayLen = 1;
	while (srcString.indexOf(dot) >= 0) {
		srcString = srcString.substring(srcString.indexOf(dot)+1, srcString.length);
		arrayLen++;
	}	
	return countToken;
}