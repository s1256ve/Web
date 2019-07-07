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
 * �@�ΰϰ�
 * keyStr �]�w��������r
 */
var keyStr = new Array("/","-",".","�~���");

/**
 * �ˮ֤���W�h
 * @param Date String �Ĥ@���ˮ֤���r��
 * @param Date String �ĤG���ˮ֤���r��
 * @param Date String �i���ܤ������I
 * @param Date String �̰���I�ҤU���~�d��
 * @param Date String �̰���I�ҤU����d��
 * @param Date String �̰���I�ҤU����d��
 * @param Date String �Ĥ@�դβĤG�դ�������~�d��
 * @param Date String �Ĥ@�դβĤG�դ��������d��
 * @param Date String �Ĥ@�դβĤG�դ��������d��
 * @return Boolean �X�W�hreturn true �_�hreturn false
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
	//chk�����O�_�bRange����---------------------Start
	if(nowDate>standDateObj){								//��]�w�ɶ��I�b���餧�e
		if(fDateObj>nowDate||sDateObj>nowDate){				//������b���餧��
			return false;
		}
		if(fDateObj<standDateObj||sDateObj<standDateObj){	//������b�]�w�ɶ��I���e
			return false;
		}
	}else if(nowDate<standDateObj){							//��]�w�ɶ��I�b���餧��
		if(fDateObj<nowDate||sDateObj<nowDate){				//������b���餧�e
			return false;
		}
		if(fDateObj>standDateObj||sDateObj>standDateObj){	//������b�]�w�ɶ��I����
			return false;
		}
	}
	//chk�����O�_�bRange����---------------------Stop
	//chk�������O�_�bRange��--------------------Start
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
	//chk�������O�_�bRange��--------------------Stop
	return chkRule;
}

/**
 * ����r���ഫ���������
 * @param Date String
 * @return Date Obj
 */
function parseToDateObj(inDate){
	var inDateAry = getADDateAry(inDate);
	var outDateObj = new Date(inDateAry[0], inDateAry[1]-1, inDateAry[2]);
	return outDateObj;
}

/**
 * ����Τ�Ƹɹs
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
 * �ˬd����O�_�S���W�L����
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
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
 * ���o����̤j�Ѽ�
 * @param ��J�~���i���� yyyy or yyy or yy
 * @param ��J����i���� 1~12
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
 * ���o�ثe�ɶ��r��
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
 * ���o�ثe�ɶ��r��
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
 * ���o������
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param ��ܿ�X��������� -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy�~mm��dd��
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
	if (choType=="0"){ //�ɤ���
		contTime = inTime.substring(0,2) + ":" + inTime.substring(2,4) + ":" + inTime.substring(4,6);
	}else if(choType=="1"){ //�ɤ�
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
				return "�W�� " + iHour12 + curTime.substring(2,5); 
		}else{
				return "�U�� " + iHour12 + curTime.substring(2,5); 
		}	
		
	}	

/**
 * ���o�褸���
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param ��ܿ�X��������� -1=yyyymmdd, 0=yyyy/mm/dd, 1=yyyy-mm-dd, 2=yyyy.mm.dd, 3=yyyy�~mm��dd��
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
 * ���o�褸���
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param ��ܿ�X��������� -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy�~mm��dd��
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
 * ���o������Array
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
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
 * ���o�褸���Array
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
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
 * �ˬd��Ӥ�� inDateA > inDateB = true else false
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
 * @param includeS �O�_�]�t���
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
 * �ˬd����O�_���W�L����
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd...) or yymmdd or yyymmdd or yyyymmdd
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
 * �զ�����r��
 * @param Date Array
 * @param ��ܿ�X��������� -1=yymmdd, 0=yy/mm/dd, 1=yy-mm-dd, 2=yy.mm.dd, 3=yy�~mm��dd��
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
 * ����зǤ�
 * @param �i����keyStr���ҦC�r�����Τ����(yy/mm/dd) or yymmdd or yyymmdd or yyyymmdd
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
 * �ˬd�������
 * @param �褸�Υ������i���� yy/mm/dd, yy-mm-dd, yy.mm.dd, yy�~mm��dd��, yymmdd
 * @return -1(yymmdd),0(yy/mm/dd),1(yy-mm-dd),2(yy.mm.dd),3(yy�~mm��dd��)
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
 * ���Τ��
 * @param �i�����褸�Υ�����
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
 * �ˬd�ɶ��O�_�W�L��~�ɶ�(15:00:00)
 * @param  �����ɶ��榡 "165102"  �U��4�I51��2�� 
 * @return  "Y":�W�L    "N":���W�L
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
 * �ˬd�ɶ��O�_�W�L�w�w�����ɶ�diffTime(15:20:00)
 * �ˬd�ɶ��O�_�W�L�w�w�����ɶ�diffTime2(15:30:00)
 * @param  �����ɶ��榡 "165102"  �U��4�I51��2�� 
 */
var diffTime = 1520;
var diffTime2 = 1530;

//���P�_�O�_������
function getTimeAlert(nowTime){
	var tt = nowTime.substr(0,4);
	var timeStr = getRCTimeStr(nowTime,1);
	if(tt>diffTime){
		//alert("�Q�Ȥ�z�n\n�����z�A�ثe�ɶ���"+timeStr+"�A�]����b�ȫY����~��U��15:30�i����b�A\n�p�z�������ɤw�W�L����~����b�ɶ��A�ӵ�����N�|�O�����@��~�餧����C");
			alert("�����z�A�ثe�ɶ���"+timeStr+"�A�]�۰ʤƳ]�Ʊb�ȹ����I����~��15:30�A\n�O�ӹ����I�Y�����@��~��b�ȡA��J���ڶ��]�t��J�䲼�s�ڱb��^\n�N�󦸤@��~����ʥΡA�ЦA���T�{�O�_�����楻����C\n�t�A������B�M��ɶ����C����00:00�A�M��������B�N���s�֭p�C");
	}
}

//�P�_�O�_������
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
			//alert("�Q�Ȥ�z�n\n�����z�A�ثe�ɶ���"+timeStr+"�A�]����b�ȫY����~��U��15:30�i����b�A\n�p�z�������ɤw�W�L����~����b�ɶ��A�ӵ�����N�|�O�����@��~�餧����C");
			alert("�����z�A�ثe�ɶ���"+timeStr+"�A�Y������O15�G30�Ȧ�۰ʤƳ]�ƲM��ɶ������A��J���B�O�_�i�ʥΡA�N����J�Ȧ�W�w��z�A�ЦA���T�{�O�_�����楻����C");
		}else if(tt>diffTime2){
			alert("������w�O15�G30�Ȧ�۰ʤƳ]�ƲM��ɶ��A����ڶ��N�ߧY�q�z���b�ᦩ�ڡA��J���B�O�_�i�ʥΡA�N����J�Ȧ�W�w��z�A�ЦA���T�{�O�_�����楻����C");
		}
	}
}

 /**
 * �s�W�H�Υd����~��(Select����)
 * @SelectObj ��JSelect����
 * @sDate �_�l���:�����榡 "20041005"
 * @addYears �s�W�~���ƶq �����榡 int
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
 *�ɶ�����
 *��J�Q�n���⪺�ƭȡA���Ʃ���A�t�Ʃ��e�A���|�^�ǭp��᪺�ɶ�
 *@inYear�G��J-X��X
 *@inMonth�G��J-X��X
 *@inDay�G��J-X��X
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
 *�p��G��������Ѽ�
 *��J�G�Ӥ�����p��
 *@DateA�G���A
 *@DateB�G���B
 *@return�G�ۮt���Ѽ�
 */
 function DateDiff(DateA,DateB){
	var diffA = new Date(DateA);
	var diffB = new Date(DateB);
	//�G��date�۴�@��t�A�A�N����(1000*60*60*24)
	return (diffA.valueOf() - diffB.valueOf()) / (1000*60*60*24);
 }