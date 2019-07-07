/**
 *@Project     : EAI_IBANK
 *@File name   : format.js
 *@Description :
 * 
 * =========================
 *@Version     : V. 1.0
 *@Author      : Alma
 *@Create date : 2008/10/20
 *@Modify date :
 *@Modify note : 定義格式化
 *
 */

 function formatUBAcctno(acctno) {
 	if(acctno.length != 12) {
 		return acctno;
 	}
 	var tmp = "";
 	try {
	 	tmp = acctno.substring(0, 3) +"-"+ acctno.substring(3,5) + "-" + acctno.substring(5,13);
	 	return tmp; 
 	}catch(e) {
 		return acctno;
 	}
 }
 
 function formatAmount(amt) {
 	var tmp = "";
 	var len = amt.length;
 	if(len<=3) {
 		return amt;
 	}
 	for(len-=3; len>0; len-=3) {
 		if((len+3)==amt.length) {
	 		tmp = amt.substring(len, len+3);
 		}else {
	 		tmp = amt.substring(len, len+3) +","+ tmp;
 		}
 	}
 	if(len<=0) {
 		tmp = amt.substring(0, len+3) +","+ tmp;
 	}
 	return tmp;
 }
 
 function formatDSPCDATE(src) {
 	if(src.length < 6) {
 		return src;
 	}
 	var tmp = "";
 	tmp = src.substring(0, src.length -4) +"/" +src.substring(src.length -4, src.length -2) +"/" +src.substring(src.length -2, src.length);
 	return tmp;
 }