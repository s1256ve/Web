if(window.history.forward(1) != null) window.history.forward(1);

function getLeftmenu(){
	var leftmenu = '<div><div class="con1_left"><a accesskey="L" name="L" id="AL" title="����϶�" href="#L" style="text-decoration:none;color:#666;">::: </a></div><div class="con1_right"><a href="LoadAP3?aptype=IBANK&pageid=AC0201000" target="_self"><img src="Accessible/left_button_01.gif" title="�Q�v�d��" alt="�Q�v�d��" width="233" height="60" border="0"></a></div></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC0203000" target="_self"><img src="Accessible/left_button_02.gif" title="�ײv�d��" alt="�ײv�d��" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=IC000000B" target="_self"><img src="Accessible/left_button_03.gif" title="�b��A��" alt="�b��A��" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC0704100" target="_self"><img src="Accessible/left_button_04.gif" title="���w��b���" alt="���w��b���" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC1005000" target="_self"><img src="Accessible/left_button_05.gif" title="�ϥΪ̥N���ܧ�" alt="�ϥΪ̥N���ܧ�" width="233" height="60" border="0"></a></div><div><a href="LoadAP3?aptype=IBANK&pageid=AC1006000" target="_self"><img src="Accessible/left_button_06.gif" title="�ϥΪ̱K�X�ܧ�" alt="�ϥΪ̱K�X�ܧ�" width="233" height="60" border="0"></a></div>';
	document.write(leftmenu);
}

function getLeftmenu2(){
	var leftmenu = '<div><div class="con1_left"><a accesskey="L" name="L" id="AL" title="����϶�" href="#L" style="text-decoration:none;color:#666;">::: </a></div><div class="con1_right"><img src="Accessible/left_button_01.gif" title="�Q�v�d��" alt="�Q�v�d��" width="233" height="60" border="0"></div></div><div><img src="Accessible/left_button_02.gif" title="�ײv�d��" alt="�ײv�d��" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_03.gif" title="�b��A��" alt="�b��A��" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_04.gif" title="���w��b���" alt="���w��b���" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_05.gif" title="�ϥΪ̥N���ܧ�" alt="�ϥΪ̥N���ܧ�" width="233" height="60" border="0"></div><div><img src="Accessible/left_button_06.gif" title="�ϥΪ̱K�X�ܧ�" alt="�ϥΪ̱K�X�ܧ�" width="233" height="60" border="0"></div>';
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
		window.alert("����إ�XMLHttpRequest��H���.");
		return false;
	}		
	http_request.onreadystatechange = processRequest;
	http_request.open("POST", url, false);	
	http_request.setRequestHeader("If-Modified-Since","0"); 
	http_request.send(null);
};

//  �B�z��^�T�����禡
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
 				alert("�A�w�W�L���d�ɶ��A�t�αN���z�n�X");
 				chkSubmit99();
 			}        
		} else {
			alert("�z�ҽШD�����������`�C" + http_request.status);
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
		alert("�w�W�L�i�ϥήɶ��A�t�αN���z�n�X");
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
	if(confirm("���d�ɶ��Y�N�����A�p�G�ݭn�����Ы��T�w")){
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
		window.alert("����إ�XMLHttpRequest��H���.");
		return false;
	}		
	http_request.onreadystatechange = processRequest2;
	http_request.open("POST", url, false);	
	http_request.setRequestHeader("If-Modified-Since","0"); 
	http_request.send(null);
};

//  �B�z��^�T�����禡
function processRequest2() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
 			var certText = http_request.responseText;
 			//alert(certText.indexOf("0000@0000"));
 			if(certText.indexOf("0000@0000")==-1){
 				chkSessStatus('session���s�b');
 			}else{
 				chkSessStatus('0');
 			}        
		} else {
			alert("�z�ҽШD�����������`�C" + http_request.status);
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