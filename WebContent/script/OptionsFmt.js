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
 * �s�@ OPTIONS 
 * ex: option.Text  = "�x�_����  ���x�b�� 00000000000  �s�x�� 3000 ��"
 *     option.Value = "00000000000";
 * 
 * @param selectObj	  <select> ����
 * @param arrayFromAcct	  ��X/��J�b���}�C
 * @param arrayAllAcct    �k��b���}�C
 * @param arrayAllBranch  �k��b�����ݤ���}�C
 * @param arrayAllBalance �k��b���l�B�}�C
 * @param arrayAllDesc    �k��b���y�z�}�C
 * @return 
 */ 

function mkOptions_A(selectObj, arrayFromAcct, arrayAllAcct, arrayAllBranch, arrayAllBalance, arrayAllDesc){
	
	for (var i=0; i<arrayFromAcct.length; i++){
		var x = getIdx(arrayFromAcct[i], arrayAllAcct);
		if (x >= 0){
			var optText = arrayAllBranch[x] + '    ' + arrayAllBalance[x] + '   ' + getAcctStr(arrayFromAcct[i])  + '   �s�x�� ' + arrayAllBalance[x]  + '  ��';
			selectObj.options.add(new Option(optText,arrayFromAcct[i]));
		}else{
			selectObj.options.add(new Option(arrayFromAcct[i],arrayFromAcct[i]));
		}
	}	
	
}


/**
 * �s�@ OPTIONS 
 * ex: option.Text  = optTxtArray[i];
 *     option.Value = optValArray[i];
 *
 * @param selectObj	<select> ����
 * @param optTxtArray	OPT TEXT  �}�C
 * @param optValArray   OPT VALUE �}�C
 * @return 
 */
function mkOptions_B(selectObj, optTxtArray, optValArray) {
	for (var i=0; i<optTxtArray.length; i++){
		selectObj.options.add(new Option(optTxtArray[i],optValArray[i]));		
	}	
}

/**
 * �s�@ OPTIONS 
 * ex: option.Text  = "�}�C�l�r��"
 *     option.Value = option.Text;
 *
 * @param selectObj	<select> ����
 * @param toBidArray	���w��X�b�������ݤ���N�X�}�C
 * @param toAcctArray   ���w��X�b���}�C
 * @param allBidArray	�x�W�Ҧ��Ȧ�N�X
 * @param allBnameArray �x�W�Ҧ��Ȧ�W��
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
 * �M��Y�b��(src)��b���}�C�� index 
 * ��: �b���榡 xxxxxxxxxxxx
 * @param src    �b��
 * @param array �b���}�C
 * @return src �� array �� index, �Y�ӱb�����s�b��b���}�C���A�h�^�� -1
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
 * �N�Y�r����ά��}�C
 * @param srcString    �Y�r��
 * @param count        �}�C�j�p
 * @param dot	       �r����Φr��
 * @return �}�C
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