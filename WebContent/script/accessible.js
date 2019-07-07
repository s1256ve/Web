if(window.history.forward(1) != null) window.history.forward(1);

function getLeftmenu(){
	var leftmenu = '<div><div class="con1_left"><a accesskey="L" name="L" id="AL" title="左方區塊" href="#L" style="text-decoration:none;color:#666;">::: </a></div><div class="con1_right"><a href="LoadAP3?aptype=IBANK&pageid=AC0201000" target="_self"><img src="Accessible/left_button_01.gif" title="利率查詢" alt="利率查詢" width="233" height="60" border="0"></a></div></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC0203000" target="_self"><img src="Accessible/left_button_02.gif" title="匯率查詢" alt="匯率查詢" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=IC000000B" target="_self"><img src="Accessible/left_button_03.gif" title="帳戶服務" alt="帳戶服務" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC0704100" target="_self"><img src="Accessible/left_button_04.gif" title="約定轉帳交易" alt="約定轉帳交易" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC1005000" target="_self"><img src="Accessible/left_button_05.gif" title="使用者代號變更" alt="使用者代號變更" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC1006000" target="_self"><img src="Accessible/left_button_06.gif" title="使用者密碼變更" alt="使用者密碼變更" width="233" height="60" border="0"></a></div>';
	document.write(leftmenu);
}

function getLeftmenu2(){
	var leftmenu = '<div><div class="con1_left"><a accesskey="L" name="L" id="AL" title="左方區塊" href="#L" style="text-decoration:none;color:#666;">::: </a></div><div class="con1_right"><img src="Accessible/left_button_01.gif" title="利率查詢" alt="利率查詢" width="233" height="60" border="0"></div></div><div><img src="Accessible/left_button_02.gif" title="匯率查詢" alt="匯率查詢" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_03.gif" title="帳戶服務" alt="帳戶服務" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_04.gif" title="約定轉帳交易" alt="約定轉帳交易" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_05.gif" title="使用者代號變更" alt="使用者代號變更" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_06.gif" title="使用者密碼變更" alt="使用者密碼變更" width="233" height="60" border="0"></div>';
	document.write(leftmenu);
}

function reCheck(){  
	http_request = false;
	var url ="LoadAP3?aptype=IBANK&pageid=IP9999999";
	if(window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) {
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!http_request) {
		window.alert("不能建立XMLHttpRequest對象實例.");
		return false;
	}		
	http_request.onreadystatechange = processRequest;
	http_request.open("POST", url, false);	
	http_request.setRequestHeader("If-Modified-Since","0"); 
	http_request.send(null);
};

//  處理返回訊息的函式
function processRequest() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
 			var certText = http_request.responseText;
 			if(certText.indexOf("0000@0000")>-1){
 				clearTimeout(countdownid);
 				countdownnumber=600;
 				initial();
 			}else{
 				clearTimeout(countdownid);
 				alert("你已超過停留時間，系統將為您登出");
 				chkSubmit99();
 			}        
		} else {
			alert("您所請求的頁面有異常。" + http_request.status);
  	}
	}
};

var countdownnumber=600;
var countdownid;
function initial(){ countdownfunc(); }
function countdownfunc(){
	if (countdownnumber==30){
		RC();
	}
	if (countdownnumber==0){ 
		clearTimeout(countdownid);
		alert("已超過可使用時間，系統將為您登出");
		//chkSubmit99();
		location.replace('http://211.20.59.54');
	}else{
		countdownnumber--;
		if(countdownid){
		 	clearTimeout(countdownid);
		}
		countdownid=setTimeout(countdownfunc,1000);
	}
};

function RC(){
	if(confirm("停留時間即將結束，如果需要延長請按確定")){
		reCheck();
	}
};

function reCheck2(){  
	http_request = false;
	var url ="LoadAP3?aptype=IBANK&pageid=IP9999999";
	if(window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) {
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!http_request) {
		window.alert("不能建立XMLHttpRequest對象實例.");
		return false;
	}		
	http_request.onreadystatechange = processRequest2;
	http_request.open("POST", url, false);	
	http_request.setRequestHeader("If-Modified-Since","0"); 
	http_request.send(null);
};

//  處理返回訊息的函式
function processRequest2() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
 			var certText = http_request.responseText;
 			//alert(certText.indexOf("0000@0000"));
 			if(certText.indexOf("0000@0000")==-1){
 				chkSessStatus('session不存在');
 			}else{
 				chkSessStatus('0');
 			}        
		} else {
			alert("您所請求的頁面有異常。" + http_request.status);
  	}
	}
};

document.onkeydown = keyDown;

function keyDown(e) {
	var event=e||window.event;
	var keyCode = event.which ? event.which : event.keyCode;
	//alert(keyCode);
	if (keyCode == 116) {
		if(event.which){
			keyCode = 0;
			event.returnValue = false;
		}else{
			window.event.keyCode = 0;
			window.event.returnValue=false;
		}
	}
};

function keyDown2(event) {
	var keyCode;
	//alert(window.event.keyCode);
	if ((window.event.keyCode == 116)) {
		window.event.keyCode = 0;
		window.event.returnValue=false;
	}
};