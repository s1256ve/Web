/**
 *@Project     : EAI_IBANK
 *@File name   : idcheck.js
 *@Description :
 * ID format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : <a href="mailto:whinelin@mail2000.com.tw">Maple Lin</a>
 *@Create date : 2004/1/30
 *@Modify date :
 *@Modify note :
 *
 */


/**
 * 共用區域
 * CharEng 設定英文單字
 */
var CharEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * 檢核身份證字號並產生EAI ID格式
 * @param 身份證字串
 * @return EAI ID String
 */

function getEAIID(inID){
	inID = inID.toUpperCase();
	if(inID.length==10){ //字碼為10碼
		var firstStr = inID.charAt(0);
		if(CharEng.indexOf(firstStr)==-1){ //辦別第一碼是否為英文
			var eightStr = inID.charAt(8);
			var nineStr = inID.charAt(9);
			if((CharEng.indexOf(eightStr)!=-1)&&(CharEng.indexOf(nineStr)!=-1)){ //辦別最後兩碼其中之一是否為數字
				inID += "C"; //外國身份
			}else{
				inID = "Error ID";
			}
		}else{
			if(CheckID(inID)){
				inID += "A"; //自然人身份
			}else{
				inID = "Error ID";
			}
		}
	}else if(inID.length==8){ //字碼為8碼
		if(!isNaN(inID)){
			inID += "A"; //企業用戶
		}else{
			inID = "Error ID";
		}
	}
	return inID;
}

/**
 * 檢核身份證字號
 * @param 身份證字串
 * @return True or False
 */
function CheckID(inID){
	inID = inID.toUpperCase();
	if(inID.length != 10){
		//alert("身分證字號字數不對 !");
		return false;
	}
	var IDdigit = new Array(10);
	for (var i=0; i<10; i++){
		IDdigit[i] = inID.charAt(i);
	}

	IDdigit[0] = CharEng.indexOf(IDdigit[0]);
	if(IDdigit[0] == -1){
		//alert("身分證字號第一位為錯誤英文字母 !");
		return false;
	}
	if(IDdigit[1] !=1 && IDdigit[1] !=2){
		//alert("身分證字號無法辨識性別 !");
		return false;
	}
	var Array1 = new Array(26);
		Array1[0] = 1 ; Array1[1] = 10; Array1[2] = 19;
		Array1[3] = 28; Array1[4] = 37; Array1[5] = 46;
		Array1[6] = 55; Array1[7] = 64; Array1[8] = 39;
		Array1[9] = 73; Array1[10] = 82; Array1[11] = 2 ;
		Array1[12] = 11; Array1[13] = 20; Array1[14] = 48;
		Array1[15] = 29; Array1[16] = 38; Array1[17] = 47;
		Array1[18] = 56; Array1[19] = 65; Array1[20] = 74;
		Array1[21] = 83; Array1[22] = 21; Array1[23] = 3 ;
		Array1[24] = 12; Array1[25] = 30;
	var result = Array1[IDdigit[0]];
	for (var i=1; i<10; i++){
		var Number = "0123456789";
		IDdigit[i] = Number.indexOf(IDdigit[i]);
		if (IDdigit[i] == -1){
			//alert("身分證字號錯誤 !");
			return false;
		}else{
			result += IDdigit[i] * (9-i);
		}
	}
	result += 1 * IDdigit[9];
	if (result % 10 != 0){
		//alert("身分證字號錯誤 !");
		return false;
	}else{
		return true;
	}
}
