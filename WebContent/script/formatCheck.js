/**
 *@Project     : EAI_IBANK
 *@File name   : formatCheck.js
 *@Description :
 * check  format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Cehn</a>
 *@Create date : 2005/05/26
 *==========================
 *@Version     : V. 1.1
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Chen</a>
 *@Modify date : 2007/10/22
 *@Modify note : 新增特殊字元" ' "阻擋。
 *==========================
 *@Version     : V. 1.2
 *@Author      : <a href="mailto:carl_chen@ubot.com.tw">Carl Chen</a>
 *@Modify date : 2010/9/20
 *@Modify note : 新增台外幣互轉性質別對應文字。
 *
 */
 String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}
 
 var CharEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var CharNum = "0123456789";
 /**
 * 檢查電子郵件格式xxx@xxx.xxx
 * 檢查電子郵件字串不得有空白
 * @return true or false
 */
 
 function chkEmail(email)
  {
 	
 	if(email == "")
 	{
 		alert("請填寫電子郵件地址!");
 		return false;
 	}
 	
 	chkMail = email.match(/^\S+@\S+\.\S+$/);	//檢查是否合乎格式xxx@xxx.xxx
 	if(!chkMail || !email)
 	{
 		alert("電子郵件位址格式不正確!");
    	    	return false;
    	}
    	
    	for(i = 0; i < email.length; i++) 
    	{
    		sub_mail = email.charAt(i);
		if(sub_mail == " ")
		{
			alert("電子郵件中不得含有空白字元!");
			return false;
		}
	}
	return true;
}

 /**
 * 檢查身分證字號格式
 * @return true or false
 */
 
 function checkID(inID)
 {
 	if(inID == "")
 	{
 		alert("請輸入身分證字號!");
 		return false;
 	}
 	if(inID < 10)
 	{
 		alert("您輸入的身分證字號長度不對!");
 		return false;
 	}
 	inID = inID.toUpperCase();		//字串轉型成大寫
 	if(CharEng.indexOf(inID.substr(1,1),0)==-1){
	  	if(checkIDArray(inID)==false)
	  	{
	  		return false;
	  	}
		else
		{
			inID = checkIDArray(inID);
		}
		if(inID.length==11)
		{
			if(CharEng.indexOf(inID.substr(10,1))==-1)
			{
	    			alert("您的身分證字號第十一碼輸入錯誤!");
	    			return false;
	  		}
	  	}
	  	return inID;
	}else{
		if(checkUnionId(inID)==false)
	  	{
	  		return false;
	  	}
	  	return inID;
	  }
  }
  
/**
中華民國國民身份證
驗證公式
第一碼英文字代表該組號碼配賦時所屬的縣市﹝非出生地﹞，第二碼數字1為男生2為女生，第3碼至第10碼為任意一串數字，
但含英文字之全部號碼可用公式加以核算該組號碼是否正確，例如R123456783，R=25，
檢查公式是：2+5*9+1*8+2*7+3*6+4*5+5*4+6*3+7*2+8*1=167，第10碼取公式結果的個位數7以10減去得3。

A=10 B=11 C=12 D=13 E=14 F=15 G=16 H=17 J=18 K=19 
L=20 M=21 N=22 P=23 Q=24 R=25 S=26 T=27 U=28 V=29 
X=30 Y=31 W=32 Z=33 I=34 O=35 

A台北市 B台中市 C基隆市 D台南市 E高雄市 F台北縣 G宜蘭縣 H桃園縣 I嘉義市 
J新竹縣 K苗栗縣 L台中縣 M南投縣 N彰化縣 O新竹市 P雲林縣 Q嘉義縣 R台南縣
S高雄縣 T屏東縣 U花蓮縣 V台東縣 W金門縣 X澎湖縣 Y陽明山 Z連江縣

身分證統一號碼在辦理出生登記時即配賦，所以應該看申報出生登記時之戶政事務所所屬縣市；
59年次以前出生的人視其該年戶籍設在何縣市，因身分證統一號碼在54年才開始配賦，期間跨年，初配賦號碼為九碼﹝含英文﹞，
配至滿十四歲人口，按村里順序配賦，58年加入第十碼﹝檢查號碼﹞，60年起全部配賦號碼，含當年出生者。
*/

function checkIDArray(inID)
{
	inID = inID.toUpperCase();		//字串轉型成大寫
	sub_inID = inID.substr(0,1);
	sun_inID2 = inID.substr(1,9);
 	if(CharEng.indexOf(sub_inID)==-1)
 	{
    		alert("您的身分證字號第一碼輸入錯誤!");
    		return false;
  	}
  	
  	if(inID.substr(1,1) != 1&& inID.substr(1,1) != 2)
  	{
  		alert("您輸入的身分證字號無法判別性別,請重新輸入!");
  		return false;
  	}
	if(sub_inID == "A") { num_inID = "10"; }
	if(sub_inID == "B") { num_inID = "11"; }
	if(sub_inID == "C") { num_inID = "12"; }
	if(sub_inID == "D") { num_inID = "13"; }
	if(sub_inID == "E") { num_inID = "14"; }
	if(sub_inID == "F") { num_inID = "15"; }
	if(sub_inID == "G") { num_inID = "16"; }
	if(sub_inID == "H") { num_inID = "17"; }
	if(sub_inID == "I") { num_inID = "34"; }
	if(sub_inID == "J") { num_inID = "18"; }
	if(sub_inID == "K") { num_inID = "19"; }
	if(sub_inID == "L") { num_inID = "20"; }
	if(sub_inID == "M") { num_inID = "21"; }
	if(sub_inID == "N") { num_inID = "22"; }
	if(sub_inID == "O") { num_inID = "35"; }
	if(sub_inID == "P") { num_inID = "23"; }
	if(sub_inID == "Q") { num_inID = "24"; }
	if(sub_inID == "R") { num_inID = "25"; }
	if(sub_inID == "S") { num_inID = "26"; }
	if(sub_inID == "T") { num_inID = "27"; }
	if(sub_inID == "U") { num_inID = "28"; }
	if(sub_inID == "V") { num_inID = "29"; }
	if(sub_inID == "W") { num_inID = "32"; }
	if(sub_inID == "X") { num_inID = "30"; }
	if(sub_inID == "Y") { num_inID = "31"; }
	if(sub_inID == "Z") { num_inID = "33"; }
	
	for (i = 0; i < sun_inID2.length; i++)
	{
		sub1 = sun_inID2.charAt(i);
		if("0123456789".indexOf(sub1,0)<0)	//利用字串比對是否有不合法的字元出現
		{
			alert("您輸入的身分證字號後九碼有誤!");
			return false;
		}
	}
	newID = num_inID + sun_inID2;
	num =  eval(newID.substr(0,1));
	for(i = 1; i < newID.length; i++)
	{
		num2 = parseInt((newID.substr(i,1))*(10-i));
		num = eval(num + num2);
	}
	num = num + "";
	if(eval(10-num.substr(num.length-1,1))%10 == inID.substr(9,1))
	{
		return inID;
	}
	else
	{
		alert("您輸入的身分證字號不合檢驗規則!");
		return false;
	}
}


 /**
 * 檢查是否為聯邦信用卡
 *1.聯邦銀行信用卡識別碼(信用卡前六碼)檢核 => chkUBCard(card)
 *2.信用卡格式檢核(VISA and Master) => checkCardArray(card)
 * @return true or false
 */

 function checkCard(card)
 {
 	if(card.trim() == "")
 	{
 		alert("請輸入信用卡號!");
 		return false;
 	}
 	if(card.length != 16)
 	{
 		alert("您輸入的卡號長度不正確,請重新輸入!");
 		return false;
 	}
 	for (i = 0; i < card.length; i++)
	{
		sub1 = card.charAt(i);
		if("0123456789".indexOf(sub1,0)<0)	//利用字串比對是否有不合法的字元出現
		{
			alert("您輸入的信用卡號有非數字出現,請重新輸入!");
			return false;
		}
	}
	if(chkUBCard(card)==false)	//聯邦銀行信用卡識別碼(信用卡前六碼)檢核
	{
		return false;
	}
 	if(checkCardArray(card)==false)	//信用卡格式檢核(VISA and Master)
 	{
 		return false;
 	}
	else
	{
		return true;
	}
}

 
/**
信用卡格式檢核方式(VISA and Master)：
1.信用卡各位數(不含檢查碼)乘上相對應之加權數(2,1,2,1,2,1...............由右算起)
2. 每一位數加權後如數值大於9則十位數與個位數相加,之後再將各個位數相加
3.用10減去步驟2所求得的數值之個位數即得檢查碼
*/ 
 
 function checkCardArray(card)
 {
 	
 	var cardArray = new Array(card.length);
 	var i = 0;
 	for(i=0; i<card.length; i++)
 	{
 		cardArray[i] = parseInt(card.charAt(i));
 	}
 	
 	for(j=card.length-2; j>=0; j-=2)		//根據規則只有單數位要乘2
 	{
 		cardArray[j] *= 2;
 		if(cardArray[j] >9)
 		{
 			cardArray[j] -=9;	//因為最多是乘2倍,所以值絕不大於20,減9等於加1
 		}
 	}
 	num=0;
 	for(k=0; k<card.length-1; k++)
 	{
 		num += parseInt(cardArray[k]);
 	}
 	num = num + "";
 	if(eval(10-num.substr(num.length-1,1))%10 == card.charAt(card.length-1))
 	{
 		return true;
 	}
	else
	{
		alert("您輸入的信用卡卡號不符合信用卡驗證規則!");
		return false;
	}
}

/**
統一證號檢核方式：

一、統一證號編列規則：
共計十碼，第一碼為區域碼(同國民身分證)、第二碼為性別碼(入出境管理局使用ＡＢ；警察局外事科/課使用ＣＤ)
、第三至九碼為流水號、第十碼為檢查號碼。

二、檢查號碼計算規則：
第一碼英文字母轉換為二位數字碼(轉換之數字與國民身分證同)，分別乘以特定數；第二碼英文字母轉換成二位數字
後，只取尾數乘以特定數；餘第三～九碼，亦分別乘以特定數。檢查號碼＝10－相乘後個位數相加總和之尾數。惟若
相乘後個位數相加總和尾數為0，則逕以「0」為檢查號碼。
	舉例：FA12345689
	(Ｆ：轉換為15，Ａ轉換為10─＞取尾數「0」)
	【第一碼區域及第二碼性別之英文碼，先依據下列數字表換算，惟性別轉換後之二位數字碼，只取尾數。】

*/
function checkUnionId(id){
    var id =id.trim();
    if(id == "")
    {
 		alert("請輸入統一證號!");
 		return false;
 	}
 	if(id.length != 10)
 	{
 		alert("您輸入的統一證號長度不對!");
 		return false;
 	}
    v = new Array();
    v[0]="A"; v[1]="B"; v[2]="C"; v[3]="D"; v[4]="E"; v[5]="F"; v[6]="G"; v[7]="H"; v[8]="J"; v[9]="K"; v[10]="L"; v[11]="M"; v[12]="N"; v[13]="P";
    v[14]="Q"; v[15]="R"; v[16]="S"; v[17]="T"; v[18]="U"; v[19]="V"; v[20]="X"; v[21]="Y"; v[22]="W"; v[23]="Z"; v[24]="I"; v[25]="O";
    var inte = -1;   
	var inte1 = -1;
	var s1 = id.charAt(0).toUpperCase();
	var s2 = id.charAt(1).toUpperCase();
	
	for(var i = 0; i < 26; i++)
	{
	    if(s1 == v[i])
	        inte = i; 
    }
    if(inte==-1) 
    {
        alert("您輸入的統一證號不符合統一證號驗證規則!");
        return false;
    }
    for(var x = 0; x < 4; x++)
    {
        if(s2 == v[x])
		    inte1 = x; 
	}
    
    if(inte1==-1) 
    {    
        alert("您輸入的統一證號不符合統一證號驗證規則!");
        return false;
    }
    var total = 0;
    all = new Array();
    
	//E統一證號第一個英文轉換的數字
	var E = inte + 10;
	
	//E1統一證號第一個英文轉換的數字的十位數
	var E1 = Math.floor(E/10);
	
	//E2統一證號第一個英文轉換的數字的個位數
	var E2 = E%10;
	//alert("E2"+E2);
	
    	all[0] = E1;
	all[1] = E2;
	all[2] = inte1;
    	for(var j = 3; j <= 10; j++)
	{
	    //統一證號英文後面的八位數
	    var string="1234567890";
	    if (string.indexOf(id.charAt(j-1))==-1)
	    {
	        alert("您輸入的統一證號後八碼有誤!");
	        return false;
	    }
	    all[j] = id.charAt(j - 1);
	    
    }
    
   	for(var k = 1; k <= 9; k++)
	 	total +=eval( (all[k] * (10 - k))%10);
	 	
    total=eval(total*1+all[0]*1+all[10]*1);

	if(total % 10 == 0)
	{
	    return true;
	}
    else
    {
        alert("您輸入的統一證號不符合統一證號驗證規則!");
        return false;
    }
	
}

/**  檢查input是否為大小寫英文+數字
*函式呼叫: 在input中加入事件 onKeypress="KeyPressChk()"		
*函式返回: 規定字元以外, return 空字串(input不顯示此字元)
*/

function KeyPressChk(){
	var iKeyCode = window.event.keyCode
	if (!(iKeyCode >= 48 && iKeyCode <=57) && !(iKeyCode >= 65 && iKeyCode <=90) && !(iKeyCode >= 97 && iKeyCode <=122)){
		window.event.keyCode = 0;
	}
}


/**
*檢核是否為聯邦銀行信用卡(一但有新卡發行就必須新增加識別卡號)
*return true or false
**/

function chkUBCard(card)
{
	ubstr = card.substr(0 , 6);
	ub = new Array();
	ub[1]="457952";ub[2]="457953";ub[3]="543381";ub[4]="540966";ub[5]="517951";
	ub[6]="451445";ub[7]="400016";ub[8]="356056";ub[9]="356356";ub[10]="400357";
	ub[11]="469531";ub[12]="410523";ub[13]="356556";ub[14]="552345";ub[15]="515709";
	ub[16]="463781";ub[17]="472635";ub[18]="472634";ub[19]="524264";ub[20]="523764";
	ub[21]="356657";ub[22]="356599";ub[23]="524132";ub[24]="356656";ub[25]="481509";
	for (i=0; i<ub.length; i++)
	{
		if(ubstr == ub[i])
		{
			return true;
		}
	}
	alert("您輸入的信用卡號不是聯邦銀行信用卡,請檢視後重新輸入!");
	return false;
}


 /**
 * 檢查是否為數字
 * @return true or false
 */
 
 function checkNumber(chkNo){
 	
 	lenNo = chkNo.length ;
 	var cmpNo = "";
 	
 	for(i =0 ; i < lenNo; i++){
 		cmpNo = chkNo.substring(i,i+1);
 		if (CharNum.indexOf(cmpNo) == -1) return false; 		
 	}
 	return true;
 	
 }

/**
*檢查是否有特殊字元" ' "
*@return true or false
*/

function chkExecptional(chkStr){
	if(chkStr.indexOf("'") != -1){
		alert("您的交易附註中含有特殊字元\" ' \"，請先移除後再送出！");
		return false;
	}
	if(chkStr.indexOf("’") != -1){
		alert("您的交易附註中含有特殊字元\" ’ \"，請先移除後再送出！");
		return false;
	}
	if(chkStr.indexOf("‵") != -1){
		alert("您的交易附註中含有特殊字元\" ‵ \"，請先移除後再送出！");
		return false;
	}
	else{
		return true;
	}
}


/**
*系統自動登出功能
*輸入登出設定時限選項(ibank: yesfund:)
*輸出登出時限
*/

var setlogout;
function checkStayTime(aptype){
	//setlogout = st;
	if(aptype=='ibank'){
		setlogout = '5:00';
		checkStayTime1();
	}
	else if(aptype=='yesfund'){
		setlogout = '2:00';
		checkStayTime1();
	}
}

function checkStayTime1(){
	var timeText;
	var currTime = setlogout.split(":");
	currTime = currTime[0]*60 + currTime[1]*1;
	if(currTime==1){
		document.forms[0].pageid.value = "IC0000998";
		document.forms[0].aptype.value="NOAP";
		document.forms[0].submit();
		//document.IC0100000.submit();
		//window.location="http://www.google.com.tw";
	}
	else{
		currTime -= 1;
		var min1 = Math.floor(currTime/60);
		var sec1 = currTime%60;
		if(currTime<30){
			timeText = '<b>'+currTime+'</font>秒後自動登出</b>';
		}
		else{
			timeText = '<b>'+currTime+'秒後自動登出</b>';
		}
		setlogout = min1+":"+sec1;
		//alert(setlogout);
		document.getElementById('readTime').innerHTML=timeText;
		setTimeout("checkStayTime1()",1000); 
	}
}
/**
判斷台外幣互轉性質別，回傳對應文字
checkBCurrType:結購
checkSCurrType:結售
**/

function checkBCurrType(currType){
	var ct = currType;
	if(ct=='A'){
		return "\'A\' 股本投資、股權投資及國外存款等投資款";
	}
	else if(ct=='B'){
		return "\'B\' 對外貸款、國外借款及發行海外公司債等";
	}
	else if(ct=='C'){
		return "\'C\' 國外投資所得";
	}
	else if(ct=='D'){
		return "\'D\' 委外加工及商仲貿易貨款收支";
	}
	else if(ct=='E'){
		return "\'E\' 國外服務收支";
	}
	else if(ct=='F'){
		return "\'F\' 國外捐贈、贍家等移轉收支";
	}
	else if(ct=='G'){
		return "\'G\' 國外薪資所得";
	}
	else if(ct=='I'){
		return "\'I\' 出進口通關及指定國內交貨之貨款收支";
	}
	else if(ct=='R'){
		return "\'R\' 國內貨款之收付";
	}
	else if(ct=='S'){
		return "\'S\' 國內外幣保單、基金、債券等投資款項之收付";
	}
	else if(ct=='T'){
		return "\'T\' 國內贍家移轉收支";
	}
	else if(ct=='X'){
		return "\'X\' 新台幣與外幣間換匯交易(SWAP)";
	}
	else if(ct=='Y'){
		return "\'Y\' 新台幣與外幣間換匯換利交易(CCS)";
	}
	else if(ct=='Z'){
		return "\'Z\' 其他";
	}
	else if(ct=='0'){
		return "\' \' 結購外匯僅作外存不再匯出";
	}
}

function checkSCurrType(currType){
	var ct = currType;
	if(ct=='A'){
		return "\'A\' 股本投資、股權投資及國外存款等投資款";
	}
	else if(ct=='B'){
		return "\'B\' 對外貸款、國外借款及發行海外公司債等";
	}
	else if(ct=='C'){
		return "\'C\' 國外投資所得";
	}
	else if(ct=='D'){
		return "\'D\' 委外加工及商仲貿易貨款收支";
	}
	else if(ct=='E'){
		return "\'E\' 國外服務收支";
	}
	else if(ct=='F'){
		return "\'F\' 國外捐贈、贍家等移轉收支";
	}
	else if(ct=='G'){
		return "\'G\' 國外薪資所得";
	}
	else if(ct=='I'){
		return "\'I\' 出進口通關及指定國內交貨之貨款收支";
	}
	else if(ct=='R'){
		return "\'R\' 國內貨款之收付";
	}
	else if(ct=='S'){
		return "\'S\' 國內外幣保單、基金、債券等投資款項之收付";
	}
	else if(ct=='T'){
		return "\'T\' 國內贍家移轉收支";
	}
	else if(ct=='X'){
		return "\'X\' 新台幣與外幣間換匯交易(SWAP)";
	}
	else if(ct=='Y'){
		return "\'Y\' 新台幣與外幣間換匯換利交易(CCS)";
	}
	else if(ct=='Z'){
		return "\'Z\' 其他";
	}
	else if(ct=='0'){
		return "\' \' 結售之外匯原係以新台幣結購存入";
	}
}

function replaceWord(num){
	var sign = '*';
	var rtn = "";
	for(i=0;i<num;i++){
		rtn = rtn + sign;
	}
	return rtn;
}

/**
t_type：電話類型，1家用、2手機
**/
function replaceWord2(phone,t_type){
	var sign = '*';
	var rtn = "";
	if(t_type==1){
		if(phone.length>7){
			for(i=0;i<phone.length-6;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,6) + rtn;
		}
		else{
			for(i=0;i<10-phone.length;i++){
				rtn = rtn + sign;
			}
			rtn = phone + rtn;
		}
	}
	else if(t_type==2){
		if(phone.length==10){
			for(i=0;i<phone.length-4;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,4) + rtn;
		}
		else if(phone.length>4&&phone.length<10){
			for(i=0;i<6;i++){
				rtn = rtn + sign;
			}
			rtn = phone.substring(0,4) + rtn;
		}
		else{
			for(i=0;i<10-phone.length;i++){
				rtn = rtn + sign;
			}
			rtn = phone + rtn;	
		}
	}
	return rtn;
}

/**
EMAIL遮蔽
**/
function replaceEmail(email){
	var mailArray = email.split("@");
	return "*****@"+mailArray[1];
}

/**
姓名遮蔽
**/
function showCName(cname){
   if(cname.length < 4){
   		cname = cname.substring(0,1)+replaceWord(cname.length-1);
   }
   else{
   		cname = cname.substring(0,2)+replaceWord(cname.length-2);
   }   
   if(cname.length > 8){      
      return cname.substring(0,8)+"(略)";
   }else{
      return cname;
   }
}

/**
部份資料遮蔽
**/
function replaceWord3(content,num){
	if(content.length > num){
		return content.substring(0,num)+replaceWord(content.length-num);
	}else{
		return content;
	}
}

/**
幣別對照表
**/
function chkCurrTable(curr){
	var currname = curr;
	if(currname=="USD"){
			return "01";
	}else if(currname=="JPY"){
		return "03";
	}else if(currname=="GBP"){
		return "04";
	}else if(currname=="AUD"){
		return "05";
	}else if(currname=="HKD"){
		return "06";
	}else if(currname=="CAD"){
		return "07";
	}else if(currname=="CNY"){
		return "08";
	}else if(currname=="SGD"){
		return "12";
	}else if(currname=="ZAR"){
		return "13";
	}else if(currname=="CHF"){
		return "15";
	}else if(currname=="NZD"){
		return "18";
	}else if(currname=="EUR"){
		return "21";
	}else{
		return currname;
	}
}

/*  繳健保、勞保、勞退、國民年金條碼驗證
*	1.健保：checkHealthInsurance()
*  2.勞保/勞退：checkLaborPensionInsurance()
*	3.國民年金：checkNationalPensionInsurance()
*/


/*  條碼英文轉數字
*	PensionType：
*	1：健保/勞保/勞退
*	2：國民年金
*/
function transerBarCode(barcode,PensionType){
	var transerBarCode='';
	var transerTable=null;
	if(PensionType == 1)
		transerTable={A:'1',B:'2',C:'3',D:'4',E:'5',F:'6',G:'7',H:'8',I:'9',J:'1',K:'2',L:'3',M:'4',N:'5',O:'6',P:'7',Q:'8',R:'9',S:'2',T:'3',U:'4',V:'5',W:'6',X:'7',Y:'8',Z:'9'};
	else
		transerTable={A:'1',B:'2',C:'3',D:'4',E:'5',F:'6',G:'7',H:'8',I:'9',J:'1',K:'2',L:'3',M:'4',N:'5',O:'6',P:'7',Q:'8',R:'9',S:'2',T:'3',U:'4',V:'5',W:'6',X:'7',Y:'8',Z:'9','/':'0','+':'1','\%':'2','-':'6','.':'7',' ':'8',$:'9'};
	var index;
	for(var count=0; count<= barcode.length-1; count++){
		index=barcode.substring(count,count+1);
		
		if(transerTable[index] != null)
			transerBarCode += transerTable[index];
		else
			transerBarCode += index;	
	}
	return transerBarCode;
}
//------計算檢核碼
function calculateVerificationCode(barcode,barcodeOdd,barcodeEven){
	for(index=0 ;index<= barcode.length-1; index+=2){
		barcodeOdd += parseInt(barcode.substring(index,index+1),10);
		if(index+1 <= barcode.length-1){
			barcodeEven += parseInt(barcode.substring(index+1,index+2),10);
		}
		else
			break;
	}
	return{
		odd:barcodeOdd,
		even:barcodeEven
	};
}
//------轉換檢核碼
function transferVerificationCode(barcodeOdd,barcodeEven){
	barcodeOdd %= 11;
	barcodeEven %= 11;
	switch(barcodeOdd){
		case 0:
			barcodeOdd='A';
			break;
		case 10:	
			barcodeOdd='B';
			break;
		default:
			barcodeOdd= barcodeOdd.toString();
			break;
	}
	switch(barcodeEven){
	case 0:
		barcodeEven='X';
		break;
	case 10:	
		barcodeEven='Y';
		break;
	default:
		barcodeEven= barcodeEven.toString();
		break;
	}
	return{
		odd:barcodeOdd,
		even:barcodeEven
	};
}
/*  比對檢核碼
 *	PensionType：
 *	1：健保/勞保/勞退
 *	2：國民年金
 */
function checkVerificationCode(barcode1,barcode2,barcode3,PensionType){
	barcode1=barcode1.toUpperCase();
	barcode2=barcode2.toUpperCase();
	barcode3=barcode3.toUpperCase();
	var validation=barcode3.substring(4,6);	 //取出檢核碼
	barcode1= transerBarCode(barcode1,PensionType);
	barcode2= transerBarCode(barcode2,PensionType);
	barcode3= barcode3.substring(0,4)+barcode3.substring(6,15);
	var barcode={
			odd:0,
			even:0
	};
	barcode=calculateVerificationCode(barcode1,barcode.odd,barcode.even);
	barcode=calculateVerificationCode(barcode2,barcode.odd,barcode.even);
	barcode=calculateVerificationCode(barcode3,barcode.odd,barcode.even);
	barcode=transferVerificationCode(barcode.odd,barcode.even);
	if(validation == barcode.odd+barcode.even)
		return true;
	else{
		alert("條碼輸入錯誤，請參考條碼輸入範例");
		return false;
	}
}
//**********   健保費條碼驗證
function checkHealthInsurance(barcode1,barcode2,barcode3){
	var month3=parseInt(barcode3.substring(2,4),10);
	//step1 檢查輸入格式是否正確
	if( !/\d{6}600/.test(barcode1) || barcode1.length != 9){
		alert("條碼一輸入錯誤，請參考條碼輸入範例");
		return false;
	}
	else if(!/\d{16}/.test(barcode2) || barcode2.length != 16){
		alert("條碼二輸入錯誤，請參考條碼輸入範例");
		return false;
	}
	else if(!/\d{4}[A-Z0-9]{2}\d{9}/.test(barcode3)|| month3>12 || month3<=0 || barcode3.length != 15){
		alert("條碼三輸入錯誤，請參考條碼輸入範例");
		return false;
	}	
	//step2 比對檢核碼
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,1);
	}
}
/*******   勞保/勞退繳費條碼驗證
 * Labor_OR_Pension: 
 *	 0：勞保
 *	 1：勞退
 */
function checkLaborPensionInsurance(barcode1,barcode2,barcode3,Labor_OR_Pension){
	var year1=1911+parseInt('1'+barcode1.substring(0,2),10);
	var month1=parseInt(barcode1.substring(2,4),10);
	var day1=parseInt(barcode1.substring(4,6),10);
	var days1_Total = new Date(year1,month1,0).getDate();
	var month3=parseInt(barcode3.substring(2,4),10);
	var regexp1 =null,regexp2=null;
	
	if(Labor_OR_Pension==0){
		regexp1=/\d{2}[0-1][0-9][0-3][0-9]6ZA/;
		regexp2=/0[A-Z0-9]{15}/;
	}	
	else if(Labor_OR_Pension==1){
		regexp1=/\d{2}[0-1][0-9][0-3][0-9]6ZB/;
		regexp2=/9[A-Z0-9]{15}/;
	}
	
	//step1 檢查輸入格式&月份&天數是否正確   
	if( !regexp1.test(barcode1) || month1 >12 || month1<=0 || days1_Total < day1 || day1<=0 || barcode1.length != 9){    
		alert("條碼一輸入錯誤，請參考條碼輸入範例");
		return false;
	}	
	else if(!regexp2.test(barcode2) || barcode2.length != 16){
		alert("條碼二輸入錯誤，請參考條碼輸入範例");
		return false;
	}
	else if(!/\d{2}[0-1][0-9][A-Z0-9]{2}\d{9}/.test(barcode3) || month3>12 || month3<=0 || barcode3.length != 15){
		alert("條碼三輸入錯誤，請參考條碼輸入範例");
		return false;
	}	
	//step2 比對檢核碼
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,1); 
	}
}
//******* 國民年金條碼驗證
function checkNationalPensionInsurance(barcode1,barcode2,barcode3){
	var year1=1911+parseInt('1'+barcode1.substring(0,2),10);
	var month1=parseInt(barcode1.substring(2,4),10);
	var day1=parseInt(barcode1.substring(4,6),10);
	var days1_Total = new Date(year1,month1,0).getDate();
	
	//step1 檢查輸入格式&月份&天數是否正確   
	if( !/\d{2}[0-1][0-9][0-3][0-9]630/.test(barcode1) || month1 >12 || month1<=0 || days1_Total < day1 || day1<=0 || barcode1.length != 9){    
		alert("條碼一輸入錯誤，請參考條碼輸入範例");
		return false;
	}	
	else if(!/[A-Z0-9/+%-. $]{16}/.test(barcode2) || barcode2.length != 16){
		alert("條碼二輸入錯誤，請參考條碼輸入範例");
		return false;
	}
	else if(!/\d{4}[A-Z0-9]{2}\d{9}/.test(barcode3) || barcode3.length != 15){
		alert("條碼三輸入錯誤，請參考條碼輸入範例");
		return false;
	}	
	//step2 比對檢核碼
	else{     
		return checkVerificationCode(barcode1,barcode2,barcode3,2); 
	}
}
//*******確認勞健保、勞退、國民年金繳費金額是否正確
function checkAmount(barcode3,amount){
	barcode3= parseInt(barcode3.substring(7,15),10);
	if(barcode3== amount)
		return true;
	else{
		alert("金額錯誤");
		return false;
	}
}