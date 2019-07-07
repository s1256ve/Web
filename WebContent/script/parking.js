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

//�h�b�Ϊť�
String.prototype.trim = function () {return this.replace(/^\s+|\s+$/g, "");}
//�h���Ϊť�
function removeSpace(str01){
	var tmpStr = "";
	var rtnStr = "";
	tmpStr = str01.trim();
	for(i=0; i<tmpStr.length; i++)
 	{
 		if(tmpStr.charAt(i)!="�@")
 		{
 			rtnStr = rtnStr + tmpStr.charAt(i);
 		}
 	} 	
 	return rtnStr;
}

//�q���覡���

function notifyMap(type1){
if (type1=="0") return "���q��";
if (type1=="2") return "�q�l�l�� :"+email; 
if (type1=="1"&&mphone==""){
        return "²�T : �L���X";
    }else if(type1=="1"){
        return "²�T : "+mphone;
    }
}

function getRegion(type){
    var desc = '';
    if (type=='01') desc = '�x�n��';
    if (type=='02') desc = '�s�_��';
    if (type=='03') desc = '�x�_��';
    return desc;
}

function getAreaCode(type){
    var code = '';
    if (type=='�x�n��') code = '01';
    if (type=='�s�_��') code = '02';
    if (type=='�x�_��') code = '03';
    return code;
}

function vehtypeMap(type){
    if (type=="�T��") return "1";
    if (type=="����") return "2";   
}

function getVEHTYPE(type){
    var desc = '';
    if (type=='1'){
        desc = '�T��';
    }
    if (type=='2'){
        desc = '����';
    }   
    return desc; 
}

function duplicate(carnumber,region){
    //��郞���O�_����,�A���a�ϬO�_����
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
                    if (region2[j]=='01') region2desc = '�x�n��';
                    if (region2[j]=='02') region2desc = '�s�_��';
                    if (region2[j]=='03') region2desc = '�x�_��';
                    alert('�z������('+carnumber+')�w�󥻦�ӽ�'+region2desc+'���޳B���w�Nú�A�P�@������P�@�a�Ϥ��o���ХӽСA�Ьd���᭫�s�n���C')
                    return false;
                }
            }
        }
    }
    return true;
}

