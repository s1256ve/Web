/**
 *@Project     : EAI_IBANK
 *@File name   : datefmt.js
 *@Description :
 * Date format tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.3
 *@Author      : <a href="mailto:whinelin@mail2000.com.tw">Maple Lin</a>
 *@Create date : 2004/1/30
 *@Modify date : 2004/2/3
 *@Modify note : add new function getMaxDays,getNowTime,getNowDate
 *@Modify date : 2004/2/5
 *@Modify note : add new function chkBeforeToday
 *@Modify date : 2004/2/10
 *@Modify note : add new function addZero
 *@Modify date : 2004/2/12
 *@Modify note : add new function chkDateRule,parseToDateObj
 *@Modify date : 2007/12/6
 *@Modify note : add new function DateDiff(DateA,DateB)
 *@Modify date : 2009/7/23 EAI98050  Carl
 *@Modify note : add new function getTimeAlert(Time,Date)
 *
 */


/**
 * 共用區域
 * keyStr 設定分割關鍵字
 */
var keyStr = new Array("/","-",".","年月日");

/**
 * 檢核日期規則
 * @param Date String 第一組檢核日期字串
 * @param Date String 第二組檢核日期字串
 * @param Date String 可改變日期基準點
 * @param Date String 依基準點所下的年範圍
 * @param Date String 依基準點所下的月範圍
 * @param Date String 依基準點所下的日範圍
 * @param Date String 第一組及第二組日期間的年範圍
 * @param Date String 第一組及第二組日期間的月範圍
 * @param Date String 第一組及第二組日期間的日範圍
 * @return Boolean 合規則return true 否則return false
 */
function chkDateRule(firDate,secDate,inNowDate,ruleYear,ruleMonth,ruleDay,rangeYear,rangeMonth,rangeDay){
	var chkRule = true;
	var nowDate = new Date();
	nowDate = new Date(nowDate.getFullYear(),nowDate.getMonth(),nowDate.getDate());
	if(inNowDate){
		nowDate = parseToDateObj(inNowDate);
	}
	var fDateObj = nowDate;
	if(firDate){
		fDateObj = parseToDateObj(firDate);
	}
	var sDateObj = nowDate;
	if(secDate){
		sDateObj = parseToDateObj(secDate);
	}
	//--------------------------------------------Rule Date Start
	var ruYear = 0;
	if(ruleYear){
		ruYear = parseInt(ruleYear,10);
	}
	var ruMonth = 0;
	if(ruleMonth){
		ruMonth = parseInt(ruleMonth,10);
	}
	var ruDay = 0;
	if(ruleDay){
		ruDay = parseInt(ruleDay,10);
	}
	//--------------------------------------------Rule Date Stop
	//--------------------------------------------Range Date Start
	var raYear = 0;
	if(rangeYear){
		raYear = parseInt(rangeYear,10);
	}
	var raMonth = 0;
	if(rangeMonth){
		raMonth = parseInt(rangeMonth,10);
	}
	var raDay = 0;
	if(rangeDay){
		raDay = parseInt(rangeDay,10);
	}
	//--------------------------------------------Range Date Stop
	var standDateObj = new Date(nowDate.getFullYear()+ruYear,
								nowDate.getMonth()+ruMonth,
								nowDate.getDate()+ruDay);
	//chk兩日期是否在Range之內---------------------Start
	if(nowDate>standDateObj){								//當設定時間點在今日之前
		if(fDateObj>nowDate||sDateObj>nowDate){				//當兩日期在今日之後
			return false;
		}
		if(fDateObj<standDateObj||sDateObj<standDateObj){	//當兩日期在設定時間點之前
			return false;
		}
	}else if(nowDate<standDateObj){							//當設定時間點在今日之後
		if(fDateObj<nowDate||sDateObj<nowDate){				//當兩日期在今日之前
			return false;
		}
		if(fDateObj>standDateObj||sDateObj>standDateObj){	//當兩日期在設定時間點之後
			return false;
		}
	}
	//chk兩日期是否在Range之內---------------------Stop
	//chk兩日期間是否在Range內--------------------Start
	if(fDateObj>sDateObj){
		var sxDateObj = new Date(sDateObj.getFullYear()+raYear,
								 sDateObj.getMonth()+raMonth,
								 sDateObj.getDate()+raDay);
		if(sxDateObj<fDateObj){
			return false;
		}
	}else if(fDateObj<sDateObj){
		var fxDateObj = new Date(fDateObj.getFullYear()+raYear,
								 fDateObj.getMonth()+raMonth,
								 fDateObj.getDate()+raDay);
		if(fxDateObj<sDateObj){
			return false;
		}
	}
	//chk兩日期間是否在Range內--------------------Stop
	return chkRule;
}

/**
 * 日期字串轉換成日期物件
 * @param Date String
 * @return Date Obj
 */
function parseToDateObj(inDate){
	var inDateAry = getADDateAry(inDate);
	var outDateObj = new Date(inDateAry[0], inDateAry[1]-1, inDateAry[2]);
	return outDateObj;
}

/**
 * 月份及日數補零
 * @param Date Array
 * @return Date Array
 */
function addZero(inDateAry){
	var len = inDateAry.length;
	for(var i=0 ; i<len ; i++){
		if(inDateAry[i].length<2){
			inDateAry[i] = "0" + inDateAry[i];
		}
	}
	return inDateAry;
}

/**
 * 檢查日期是否沒有超過今天
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @return True or False
 */
function chkBeforeToday(inDate){
	var contDate = convertDate(inDate);
	var contYear = eval(""+contDate[0]);
	var contMonth = eval(""+contDate[1]+"-1");
	var contDay = eval(""+contDate[2]);
	var todayDate = new Date();
	var comDate = new Date(contYear,contMonth,contDay+1);
	if(comDate<todayDate){
		return true;
	}
	return false;
}
/**
 * 取得日期最大天數
 * @param 輸入年份可接受 yyyy or yyy or yy
 * @param 輸入月份可接受 1~12
 * @return Date String
 */
function getMaxDays(inYear,inMonth){
	var maxDays = 27;
	if(!inYear.length>3){
		inYear = eval(inYear+"+1911");
	}
	var chkDate = new Date( eval(inYear) , eval(inMonth+"-1") , eval(maxDays) );
	var chkMonthA = chkDate.getMonth()+1;
	while(inMonth==chkMonthA){
		maxDays += 1;
		chkDate = new Date( eval(inYear) , eval(inMonth+"-1") , eval(maxDays) );
		chkMonthA = chkDate.getMonth()+1;
	}
	return maxDays-1;
}

/**
 * 取得目前時間字串
 * @return Date String ex. yy/mm/dd hh:mm:ss
 */
function getNowTime(){
	var printStr = "";
	var nowDate=new Date();
	var nowYear=nowDate.getFullYear()-1911;
	var nowMonth=""+(nowDate.getMonth()+1);
	if(nowMonth.length!=2){
		nowMonth = "0" + nowMonth;
	}
	var nowDay=""+nowDate.getDate();
	if(nowDay.length!=2){
		nowDay = "0" + nowDay;
	}
	var nowHour=nowDate.getHours()+"";
	var nowMin=nowDate.getMinutes()+"";
	var nowSec=nowDate.getSeconds()+"";

	if(nowHour.length<2){
		nowHour = "0" + nowHour;
	}
	if(nowMin.length<2){
		nowMin = "0" + nowMin;
	}
	if(nowSec.length<2){
		nowSec = "0" + nowSec;
	}
	printStr = nowYear+"/"+nowMonth+"/"+nowDay+"  "+nowHour+":"+nowMin+":"+nowSec;
	return printStr;
}

/**
 * 取得目前時間字串
 * @return Date String ex. yy/mm/dd
 */
function getNowDate(){
	var printStr = "";
	var nowDate=new Date();
	var nowYear=nowDate.getFullYear()-1911;
	var nowMonth=""+(nowDate.getMonth()+1);
	if(nowMonth.length!=2){
		nowMonth = "0" + nowMonth;
	}
	var nowDay=""+nowDate.getDate();
	if(nowDay.length!=2){
		nowDay = "0" + nowDay;
	}
	printStr = nowYear+"/"+nowMonth+"/"+nowDay;
	return printStr;
}

/**
 * 取得民國日期
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param 選擇輸出日期類型式 -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy年mm月dd日
 * @return Date String
 */
function getRCDateStr(inDate,choType){
	if(!inDate){
		return inDate;
	}
	var contDate = convertDate(inDate);
	
	contDate = addZero(contDate);
	var contYear = contDate[0];
	contDate[0] = eval(contYear+"-1911");
	var dateStr = markDateStr(contDate,choType);
	if(dateStr.indexOf("undefined")!=-1){
		return inDate;
	}
	return dateStr;
}

function getRCTimeStr(inTime,choType){
	var contTime ;
	if (choType=="0"){ //時分秒
		contTime = inTime.substring(0,2) + ":" + inTime.substring(2,4) + ":" + inTime.substring(4,6);
	}else if(choType=="1"){ //時分
		contTime = inTime.substring(0,2) + ":" + inTime.substring(2,4) ;
	} 
	return contTime;	
	}
	
function get12RCTimeStr(inTime, choType){
		var curTime = getRCTimeStr(inTime,choType);
		var iHour = parseInt(curTime.substring(0,2));
		var iHour12 = 0;
		if (iHour == 12){
			iHour12 = 12;			
		}else if(iHour > 12){
			iHour12 = iHour - 12;
		}
		
		if (iHour < 12){
				return "上午 " + iHour12 + curTime.substring(2,5); 
		}else{
				return "下午 " + iHour12 + curTime.substring(2,5); 
		}	
		
	}	

/**
 * 取得西元日期
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param 選擇輸出日期類型式 -1=yyyymmdd, 0=yyyy/mm/dd, 1=yyyy-mm-dd, 2=yyyy.mm.dd, 3=yyyy年mm月dd日
 * @return Date String
 */
function getADDateStr(inDate,choType){
	if(!inDate){
		return inDate;
	}
	var contDate = convertDate(inDate);
	contDate = addZero(contDate);
	var dateStr = markDateStr(contDate,choType);
	if(dateStr.indexOf("undefined")!=-1){
		return inDate;
	}
	return dateStr;
}

/**
 * 取得西元日期
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param 選擇輸出日期類型式 -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy年mm月dd日
 * @return Date String
 */
function getRCDateStr2(inDate,choType){
	if(!inDate){
		return inDate;
	}
	var contDate = convertDate(inDate);
	
	contDate = addZero(contDate);
	var contYear = contDate[0];
	contDate[0] = parseInt(contYear,10)+1911;
	var dateStr = markDateStr(contDate,choType);
	if(dateStr.indexOf("undefined")!=-1){
		return inDate;
	}
	return dateStr;
}

/**
 * 取得民國日期Array
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
  * @return Date Array(3)
 */
function getRCDateAry(inDate){
	if(!inDate){
		return inDate;
	}
	var contDate = convertDate(inDate);
	contDate = addZero(contDate);
	var contYear = contDate[0];
	contDate[0] = eval(contYear+"-1911");
	return contDate;
}

/**
 * 取得西元日期Array
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
  * @return Date Array(3)
 */
function getADDateAry(inDate){
	if(!inDate){
		return inDate;
	}
	var contDate = convertDate(inDate);
	contDate = addZero(contDate);
	return contDate;
}

/**
 * 檢查兩個日期 inDateA > inDateB = true else false
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param includeS 是否包含當日
 * @return True or False
 */
function chkTwoDate(inDateA,inDateB,includeS){
	var contDateA = convertDate(inDateA);
	var contDateB = convertDate(inDateB);

	var contYearA = eval(""+contDateA[0]);
	var contMonthA = eval(""+contDateA[1]+"-1");
	var contDayA = eval(""+contDateA[2]);

	var contYearB = eval(""+contDateB[0]);
	var contMonthB = eval(""+contDateB[1]+"-1");
	var contDayB = eval(""+contDateB[2]);

	var comDateA = new Date(contYearA,contMonthA,contDayA);
	var comDateB = new Date(contYearB,contMonthB,contDayB);

	if(includeS==1){
		if(comDateA>=comDateB){
			return true;
		}
	}else{
		if(comDateA>comDateB){
			return true;
		}
	}
	return false;
}

/**
 * 檢查日期是否有超過今天
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @return True or False
 */
function chkOverToday(inDate){
	var contDate = convertDate(inDate);
	var contYear = eval(""+contDate[0]);
	var contMonth = eval(""+contDate[1]+"-1");
	var contDay = eval(""+contDate[2]);
	var todayDate = new Date();
	var comDate = new Date(contYear,contMonth,contDay);
	if(comDate>todayDate){
		return true;
	}
	return false;
}

/**
 * 組成日期字串
 * @param Date Array
 * @param 選擇輸出日期類型式 -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy年mm月dd日
 * @return Date String
 */
function markDateStr(dateArray,choType){
	var dateStr = "";
	var key = "";
	var len = dateArray.length;
	var keyLen = 0;
	if(choType!=-1){
		key = keyStr[choType];
	}
	keyLen = key.length;
	if(keyLen>1){
		for(var i=0 ; i<len ; i++){
			dateStr += dateArray[i] + key.substring(i,i+1);
		}
	}else{
		for(var i=0 ; i<len-1 ; i++){
			dateStr += dateArray[i] + key;
		}
		dateStr += dateArray[len-1];
	}
	return dateStr;
}

/**
 * 日期標準化
 * @param 可接受keyStr中所列字元分割之日期(yy/mm/dd) or yymmdd or yyymmdd or yyyymmdd
 * @return Array[3] index 0 = yyyy, 1 = mm , 2 = dd
 */
function convertDate(inDate){
	var contDate = splitDate(inDate);
	var contYear = contDate[0];
	if(contYear.length==3||contYear.length==2){
		contDate[0] = eval(contYear+"+1911");
	}
	return contDate;
}

/**
 * 檢查日期類型
 * @param 西元或民國日期可接受 yy/mm/dd, yy-mm-dd, yy.mm.dd, yy年mm月dd日, yymmdd
 * @return -1(yymmdd),0(yy/mm/dd),1(yy-mm-dd),2(yy.mm.dd),3(yy年mm月dd日)
 */
function chkDateType(inDate){
	for(var i=0 ; i<keyStr.length ; i++){
		var keyCount=0;
		if(keyStr[i].length==1){
			for(var j=0 ; j<inDate.length ; j++){
				if(inDate.substring(j,j+1)==keyStr[i]){
					keyCount+=1;
				}
			}
			if(keyCount==2){
				return i;
			}
		}else{
			for(var j=0 ; j<keyStr[i].length ; j++){
				if(inDate.indexOf(keyStr[i].substring(j,j+1))!=-1){
					keyCount+=1
				}
			}
			if(keyCount==3){
				return i;
			}
		}
	}
	return -1;
}

/**
 * 分割日期
 * @param 可接受西元及民國日期
 * @return Array[3] index 0 = yyyy or yy , 1 = mm , 2 = dd
 */
function splitDate(inDate){
	var dateType = chkDateType(inDate);
	var key = "";
	if(dateType!=-1){
		key = keyStr[dateType];
	}
	var dateArray = new Array(3);
	if(key.length==1){
		dateArray = inDate.split(key);
	}else if(key.length>1){
		var aPot = 0;
		var bPot = 0;
		for(var i=0;i<key.length;i++){
			var sinKey = key.substring(i,i+1);
			bPot = inDate.indexOf(sinKey);
			dateArray[i] = inDate.substring(aPot,bPot);
			aPot = bPot + 1;
		}
	}else if(key.length==0){
		if(inDate.length==8){
			dateArray[0] = inDate.substring(0,4);
			dateArray[1] = inDate.substring(4,6);
			dateArray[2] = inDate.substring(6,8);
		}else if(inDate.length==7){
			dateArray[0] = inDate.substring(0,3);
			dateArray[1] = inDate.substring(3,5);
			dateArray[2] = inDate.substring(5,7);
		}else if(inDate.length==6){
			dateArray[0] = inDate.substring(0,2);
			dateArray[1] = inDate.substring(2,4);
			dateArray[2] = inDate.substring(4,6);
		}else{
			dateArray[0] = inDate;
		}
	}
	return dateArray;
}

/**
 * 檢查時間是否超過營業時間(15:00:00)
 * @param  接受時間格式 "165102"  下午4點51分2秒 
 * @return  "Y":超過    "N":未超過
 */
 function chkBusTime(chkTime){
 	var iRefTime = 150000 - chkTime;
 	if(iRefTime >= 0){
 		return "N"
 	}
 	else{
 		return "Y" 	
 	}	
 }

/**
 * 檢查時間是否超過預定提醒時間diffTime(15:20:00)
 * 檢查時間是否超過預定提醒時間diffTime2(15:30:00)
 * @param  接受時間格式 "165102"  下午4點51分2秒 
 */
var diffTime = 1520;
var diffTime2 = 1530;

//不判斷是否為六日
function getTimeAlert(nowTime){
	var tt = nowTime.substr(0,4);
	var timeStr = getRCTimeStr(nowTime,1);
	if(tt>diffTime){
		//alert("貴客戶您好\n提醒您，目前時間為"+timeStr+"，因本行帳務係於營業日下午15:30進行切帳，\n如您執行交易時已超過該營業日切帳時間，該筆交易將會記為次一營業日之交易。");
			alert("提醒您，目前時間為"+timeStr+"，因自動化設備帳務劃分點為營業日15:30，\n逾該劃分點即為次一營業日帳務，轉入之款項（含轉入支票存款帳戶）\n將於次一營業日方能動用，請再次確認是否仍執行本交易。\n另，交易限額清算時間為每日凌晨00:00，清算後交易限額將重新累計。");
	}
}

//判斷是否為六日
function getTimeAlert(nowTime,nowDate){
	var tt = nowTime.substr(0,4);
	var d1 = nowDate.substr(0,4);
	var d2 = nowDate.substr(4,2);
	var d3 = nowDate.substr(6,2);
	nowDate2 = new Date(d1,d2-1,d3);
	if(nowDate2.getDay()==0||nowDate2.getDay()==6){
		return flase;
	}else{
		var timeStr = getRCTimeStr(nowTime,1);
		if(tt>diffTime && tt<diffTime2){
			//alert("貴客戶您好\n提醒您，目前時間為"+timeStr+"，因本行帳務係於營業日下午15:30進行切帳，\n如您執行交易時已超過該營業日切帳時間，該筆交易將會記為次一營業日之交易。");
			alert("提醒您，目前時間為"+timeStr+"，若本交易逾15：30銀行自動化設備清算時間完成，轉入金額是否可動用，將依轉入銀行規定辦理，請再次確認是否仍執行本交易。");
		}else if(tt>diffTime2){
			alert("本交易已逾15：30銀行自動化設備清算時間，交易款項將立即從您的帳戶扣款，轉入金額是否可動用，將依轉入銀行規定辦理，請再次確認是否仍執行本交易。");
		}
	}
}

 /**
 * 新增信用卡到期年份(Select物件)
 * @SelectObj 輸入Select物件
 * @sDate 起始日期:接受格式 "20041005"
 * @addYears 新增年份數量 接受格式 int
 */
 function addYearOption(SelectObj, sDate, addYears){
	var iYear = sDate.substring(0,4)
	var sYear = 0
	var i = 0
	for(i=0;i <= addYears; i++){
		sYear = parseInt(iYear) + i ;
		SelectObj[i] = new Option(sYear.toString() , sYear.toString());
	}
}

 /**
 *時間推算
 *輸入想要推算的數值，正數往後，負數往前，它會回傳計算後的時間
 *@inYear：輸入-X到X
 *@inMonth：輸入-X到X
 *@inDay：輸入-X到X
 */
 function countDate(inYear,inMonth,inDay){
	var tmpDate = new Date();
	var tmpYear = tmpDate.getFullYear() + eval(inYear);
	var tmpMonth = tmpDate.getMonth() + 1 + eval(inMonth);
	var tmpDay = tmpDate.getDate() + eval(inDay);
	var reDate = new Date(tmpYear, (tmpMonth-1), tmpDay);
	var reDateStr = getRCDateStr(reDate.getFullYear() + "/" + (reDate.getMonth()+1) + "/" + reDate.getDate(),0);
	return reDateStr;
}


 /**
 *計算二日期間之天數
 *輸入二個日期做計算
 *@DateA：日期A
 *@DateB：日期B
 *@return：相差的天數
 */
 function DateDiff(DateA,DateB){
	var diffA = new Date(DateA);
	var diffB = new Date(DateB);
	//二個date相減為毫秒差，再將它除(1000*60*60*24)
	return (diffA.valueOf() - diffB.valueOf()) / (1000*60*60*24);
 }