/**
 *@Project     : EAI_IBANK
 *@File name   : parking.js
 *@Description :
 * about parking's page check and mapping for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : Josephine
 *@Create date : 2006/3/10
 *@Modify date :
 *@Modify note :
 *
 */

//去半形空白
String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}
//去全形空白
function removeSpace(str01){
	var tmpStr = "";
	var rtnStr = "";
	tmpStr = str01.trim();
	for(i=0; i<tmpStr.length; i++)
 	{
 		if(tmpStr.charAt(i)!="　")
 		{
 			rtnStr = rtnStr + tmpStr.charAt(i);
 		}
 	} 	
 	return rtnStr;
}

//通知方式對照

function notifyMap(type1){
if (type1=="0") return "不通知";
if (type1=="2") return "電子郵件 :"+email; 
if (type1=="1"&&mphone==""){
        return "簡訊 : 無號碼";
    }else if(type1=="1"){
        return "簡訊 : "+mphone;
    }
}

function getRegion(type){
    var desc = '';
    if (type=='01') desc = '台南市';
    if (type=='02') desc = '新北市';
    if (type=='03') desc = '台北市';
    return desc;
}

function getAreaCode(type){
    var code = '';
    if (type=='台南市') code = '01';
    if (type=='新北市') code = '02';
    if (type=='台北市') code = '03';
    return code;
}

function vehtypeMap(type){
    if (type=="汽車") return "1";
    if (type=="機車") return "2";   
}

function getVEHTYPE(type){
    var desc = '';
    if (type=='1'){
        desc = '汽車';
    }
    if (type=='2'){
        desc = '機車';
    }   
    return desc; 
}

function duplicate(carnumber,region){
    //比對車號是否重複,再比對地區是否重複
    var precarnumberarray = tempCarno.split(';');
    var preregionarray = tempArea.split(';');
    for (i = 0 ; i<precarnumberarray.length ; i++){
        if (precarnumberarray[i]==carnumber){
            var region2 = region.split(',');
            for (j = 0 ; j<region2.length ; j++){
                //alert('preregionarray['+i+']='+preregionarray[i]);
                //alert('region2['+j+']='+region2[j]);
                if (preregionarray[i].indexOf(region2[j])>-1){
                    var region2desc = '';
                    if (region2[j]=='01') region2desc = '台南市';
                    if (region2[j]=='02') region2desc = '新北市';
                    if (region2[j]=='03') region2desc = '台北市';
                    alert('您的車號('+carnumber+')已於本行申請'+region2desc+'停管處約定代繳，同一車號於同一地區不得重覆申請，請查明後重新登錄。')
                    return false;
                }
            }
        }
    }
    return true;
}

