// JScript 檔
function setDevice(devid, url, argv) {
//debugger
    var url = url;
    var pars = argv;
    new Ajax.Request(url, 
        {   asynchronous:false,
            method: 'post',
            parameters: pars,
            onSuccess: function(transport) {
                ret_setDevice(transport, devid);
            }
        }
    );
}

function ret_setDevice(resp, dev) {
    //$(dev).innerText = resp.responseText
	//debugger
    $(dev).innerHTML = resp.responseText
}

function getDeviceValue() {
//debugger
    var url = "./MM003_1.aspx";
    var i = 0;
    for(i=0; i<device.length; i++) {
        var pars = "device="+device[i]+"&devicetype="+devicetype[i]+"&on="+deviceon[i]+"&off="+deviceoff[i];
        new Ajax.Request(url, 
            {   asynchronous:false,
                method: 'post',
                parameters: pars,
                onSuccess: function(transport) {
                    updateNodeStatus(transport, device[i]);
                }
            }
        );
    }
}


function updateNodeStatus(resp, dev) {
    if(resp.responseText.indexOf("STATUS:SUCCESS")>=0)  {  //  
        var tmp = resp.responseText.split(":");
        if(resp.responseText.indexOf("IMAGE")>=0)  {  
            $(dev).src = tmp[3];
        }else {
            $(dev).innerText = tmp[3];
        }
    }
}

//==================div顯示在物件下方==================
function Point(_x,_y) {	 
	this.x = _x;	 
	this.y = _y;	 
}	 
function getObjPosition(obj) {	 
	var pos = new Point(0,0);	 
	while (obj) {	 
		pos.x += obj.offsetLeft;	 
		pos.y += obj.offsetTop;	 
		obj = obj.offsetParent;	 
	}	 
	return pos;	 
} 

function showBlock(obj,divname) { 
	var pos = getObjPosition(obj); 
	var div = document.getElementById(divname); 
	//div.setAttribute(document.all?"className":"class","css1"); 
	div.style.width = obj.offsetWidth; 
	div.style.left = pos.x; 
	div.style.top = pos.y + obj.offsetHeight; 
	//document.body.appendChild(div); 
} 
//=======================================================