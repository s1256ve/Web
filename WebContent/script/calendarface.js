/**
 *@Project     : EAI_IBANK
 *@File name   : calendarface.js
 *@Description :
 * Calendar tools for EAI_IBANK
 * =========================
 *@Version     : V. 1.0
 *@Author      : <a href="mailto:whinelin@mail2000.com.tw">Maple Lin</a>
 *@Create date : 2004/2/11
 *=========================
 *@Version		:V. 1.1
 *@Author		:Carl
 *@Modify date :2008/9/23
 *@Modify note :1.增設欄位ID值，確保非IE瀏覽器可以使用。
 *						 2.加大欄位限制至9碼，以確保民國百年之後之日期顯示正常。
 *=========================
 *@Version		:V. 1.2
 *@Author		:Carl
 *@Modify date :2009/3/4
 *@Modify note :加大欄為長度，使Safari等瀏覽器可以看到完整欄位內容。
 */


/**
 * 將所建立的Text及Button Obj Disabled or Enabled
 * @param Form Name
 * @param 0 = Disabled , 1 = Enabled
 * @param 當Disabled時所顯示的字串(日期)
 */
function lockCalSelObj(formName,inValue,inDate){
	var formObj = eval("document."+formName+";");
	var eLen = formObj.elements.length;
	var inDateAry = inDate.split(",");
	var j = 0;
	for(var i=0 ; i<eLen ; i++){
		var objName = formObj.elements[i].name;
		if(objName.indexOf("cal_Date_")!=-1){
			if(inValue>=0){
				formObj.elements[i].disabled=true;
				if(inDateAry[j]){
					formObj.elements[i].value=inDateAry[j];
				}
				j += 1;
			}else{
				formObj.elements[i].disabled=false;
			}
		}else if(objName.indexOf("calendar")!=-1){
			if(inValue>=0){
				formObj.elements[i].disabled=true;
			}else{
				formObj.elements[i].disabled=false;
			}
		}
	}
}

/**
 * 建立Text及Button Obj For Calendar
 * @param Text Obj Name
 */
function crtDateInputObj(setName){
	if(!setName){
		alert("未設定Obj Name");
		return;
	}
	var t_defName="cal_Date_";
	var t_type="\"text\"";
	var t_name="\""+t_defName+setName+"\"";
	var t_value="\"\"";
	var t_maxlength="\"9\"";
	var t_size="\"7\"";
	document.write(
		"<input type="+t_type
		+" name="+t_name
		+" value="+t_value
		+" maxlength="+t_maxlength
		+" size="+t_size
		+" id="+t_name
		+">"
	);
	var d_type="\"button\"";
	var d_name="\"calendar\"";
	var d_value="\"選擇\"";
	var o_name=t_defName+setName;
	var d_onclick="\"return showCalendar(\'"+o_name+"\', \'y/mm/dd\');\"";
	document.write(
		"<input type="+d_type
		+" name="+d_name
		+" value="+d_value
		+" onclick="+d_onclick
		+">"
	);
	var h_type="\"hidden\"";
	var h_name="\""+setName+"\"";
	var h_value="\"\"";
	document.write(
		"<input type="+h_type
		+" name="+h_name
		+" value="+h_value
		+">"
	);
}

/**
 * 從Text Obj中將日期轉成yyyymmdd
 * @param Form Name
 */
function onSend(formName){
	var formObj = eval("document."+formName+";");
	var eLen = formObj.elements.length;
	for(var i=0 ; i<eLen ; i++){
		var objName = formObj.elements[i].name;
		if(objName.indexOf("cal_Date_")!=-1){
			var objValue = formObj.elements[i].value;
			var targetObjName = replaceString("cal_Date_","",objName);
			var targetObj = eval("formObj."+targetObjName+";");
			if(!targetObj.name){
				alert("有重覆的欄位名稱！");
				return;
			}
			targetObj.value = getADDateStr(objValue,-1);
		}
	}
}

/**
 * 替換字元
 * @param old String
 * @param new String
 * @param Source String
 * @return String
 */
function replaceString(oldS,newS,fullS){
	for(var i=0; i<fullS.length; i++){
		if(fullS.substring(i,i+oldS.length)==oldS){
			fullS = fullS.substring(0,i)+newS+fullS.substring(i+oldS.length,fullS.length);
		}
	}
	return fullS;
}
