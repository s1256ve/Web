function createRequest(){
  try{
    request= new XMLHttpRequest();
  } catch (tryMS){
    try{
      request = new ActiveXObject("Msxm12.XMLHTTP");
    } catch (otherMS){
      try{
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(failed){
        request = null;
      }
    }
  }
  return request;
};

function removeAllChild(obj){
	if ( obj.hasChildNodes() )
	{
		while ( obj.childNodes.length >= 1 )
		{
			obj.removeChild( obj.firstChild );       
		} 
	}
	
	return 1;
};

function getElementsByClassName(Name){
	var nodes=[];
	var allTags = document.getElementsByTagName("*");
	for(var key in allTags){
		if(allTags[key].nodeType==1&&allTags[key].className==Name){
			nodes.push(allTags[key]);
		}
	}
	return nodes;
};
function getElementsByDefined(Name){
	var nodes=[];
	var allTags = document.getElementsByTagName("*");
	for(var key in allTags){
		if(allTags[key].nodeType==1&&allTags[key].getAttribute(Name)=="true"){
			nodes.push(allTags[key]);
		}
	}
	return nodes;
};
String.prototype.strip_tags = function(){
	tags = this;
	stripped = tags.replace(/<[\/\!\?]?([\w_-]*)[^>]*>/igm, "");
	return stripped;
};

var Sys = {};
var ua = navigator.userAgent.toLowerCase();
var s;  
(s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :  0;
(s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :  0;
(s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :  0;
(s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :  0;
(s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0; 
a=navigator.userAgent||navigator.vendor||window.opera;
Sys.mobile = (/ipad|android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) ? 1 : 0;

	var resultCode=new Array();
	var resultString=new Array();
	var resultConvertID = new Array();
	var statusCode= new Array();
	var status = new Array();
	var resultUrl=new Array();

function TTS(){
	var inDomId;
	var interval;
	var interval2;
	/*var resultCode=new Array();
	var resultString=new Array();
	var resultConvertID = new Array();
	var statusCode= new Array();
	var status = new Array();
	var resultUrl=new Array();*/
	var cache = new Date().getTime();
	var convertIcon;
	return {
		key:"75*2688*2A*14*2Afcmedll5",
		ConverterIndex:"http://tts.itri.org.tw//TTScript/",
		muteTag:"",
        thisCache:cache,
		PlayerSet:{
			width:200,
			height:30,
			hidden:true,
			outtype:"wav"
		},
		getNottsAry:function(){
					var obj=this;
					var everyNotts;
					var noTTSTmpary = new Array();
					var nottsAttary = getElementsByDefined("noTTS");
					var scriptTagAry = document.getElementsByTagName("script");
					var index=0;
					/**
					if(obj.muteTag!=""){
						everyNotts = obj.muteTag.split("|");
						//everyNotts[] = getElementsByDefined("noTTS");
						for(var i=0;i<everyNotts.length;i++){
							if(everyNotts[i].indexOf(":")!=-1){
								var SpecAtt = everyNotts[i].split(":")[0];
								var AttValue = everyNotts[i].split(":")[1];
								//alert(SpecAtt);
								//alert(AttValue);
								if(SpecAtt == "id"){
									if(document.getElementById(AttValue))noTTSTmpary[index++] = document.getElementById(AttValue).innerHTML;
								}else if(SpecAtt=="class"){
									var tmp2ary = getElementsByClassName(AttValue);
									for(var j=0;j<tmp2ary.length;j++){
										noTTSTmpary[index++]=tmp2ary[j].innerHTML;
									}
								}else if(SpecAtt=="name"){
									var tmp3ary = document.getElementsByName(AttValue);
									for(var j=0;j<tmp3ary.length;j++){
										noTTSTmpary[index++]=tmp3ary[j].innerHTML;
									}							
								}
							}
						}
					}
					**/
					for(var i=0;i<nottsAttary.length;i++){
						noTTSTmpary[index++] = nottsAttary[i].innerHTML;
							//alert(nottsAttary[i].innerHTML);
					}
						//alert(nottsAttary[0].innerHTML);
					return noTTSTmpary;
		},
		ConvertInit:function(StringOrObj,mediaID,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale){
			inDomId = mediaID;
			var obj=this;
			var Status = document.createElement("div");
			document.getElementById(inDomId).appendChild(Status);
			var newImg = document.createElement("img");
			newImg.src=this.ConverterIndex+"images/playing.png";
			newImg.id="loading"+cache;
           	newImg.width = "32";
            newImg.height = "32";
			Status.appendChild(newImg);
			
			var string = getString(StringOrObj,obj.getNottsAry());
			//alert(string);
		
			convertIcon=true;			

			newImg.onclick=function(){
				obj.ConvertText(string,inDomId,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale);
			}
		},
		ConvertCustomIconDef:function(StringOrObj,mediaID,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale){
			inDomId = mediaID;
			var obj=this;
			var string = getString(StringOrObj,obj.getNottsAry());

			convertIcon=true;	

			obj.ConvertText(string,inDomId,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale);
		},
		ConvertCustom:function(StringOrObj,mediaID,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale){
			inDomId = mediaID;
			var obj=this;
			var string = getString(StringOrObj,obj.getNottsAry());

			convertIcon=false;	

			obj.ConvertText(string,inDomId,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale);
		},
		ConvertText:function(string,inDomId,speaker,Volume,speed,pitchLevel,pitchSign,pitchScale){

			if(resultCode[cache]!="") resultCode[cache]="";
			if(resultString[cache]!="") resultString[cache]="";
			if(resultConvertID[cache]!="") resultConvertID[cache]="";
			if(statusCode[cache]!="") statusCode[cache]="";
			if(status[cache]!="") status[cache]="";
			if(resultUrl[cache]!="") resultUrl[cache]="";

			//alert("xx");
			//alert(string);
			//if(resultUrl!="")resultUrl="";
			//if(document.getElementById("newMediaPanel"+cache)) removeAllChild(document.getElementById("newMediaPanel"+cache));
			//alert(cache);
			
			var inDomIdchildNodes = document.getElementById(inDomId).childNodes;
			for(var i=0;i<inDomIdchildNodes.length;i++){
				if(inDomIdchildNodes[i].id.match("newMediaPanel")){
					removeAllChild(inDomIdchildNodes[i]);
				}
			}
			
			var obj=this;
			if(convertIcon)document.getElementById("loading"+cache).src=obj.ConverterIndex+"images/loading.gif";
			string=encodeURIComponent(string);
			if(interval)clearInterval(interval);
			if(interval2)clearInterval(interval2);
			window.loadingScripts=1;
			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src","http://tts.itri.org.tw/"+"php/webtts.php?t=4&w="+string+"&m="+speaker+"&v="+Volume+"&s="+speed+"&pl="+pitchLevel+"&psi="+pitchSign+"&psc="+pitchScale+"&f="+obj.PlayerSet.outtype+"&idx="+cache+"&k="+obj.key+"&cache=" +new Date().getTime());
			document.getElementsByTagName("head").item(0).appendChild(fileref);
			interval = setInterval(
				function(){
					if(window.loadingScripts == 0){
						clearInterval(interval);
						//alert(resultCode[cache]);
						if(resultCode[cache]==0){
					
							var cid = resultConvertID[cache];
							//alert(resultConvertID);
							//alert(cid);
							//window.loadingScripts=1;

							var time=0;
							 interval2 = setInterval(
								function(){
										var fileref2=document.createElement('script');
										fileref2.setAttribute("type","text/javascript");
										fileref2.setAttribute("src","http://tts.itri.org.tw/"+"php/webtts.php?t=3&i="+cid+"&idx="+cache+"&k="+obj.key+"&cache=" +new Date().getTime());
										document.getElementsByTagName("head").item(0).appendChild(fileref2);
									
										time++;
                                        //alert(time);
                                        if(time == 60){
                                            //alert(time);
        										var sendmail=document.createElement('script');
        										sendmail.setAttribute("type","text/javascript");
        										sendmail.setAttribute("src","http://tts.itri.org.tw/"+"php/whenerrorsendmail.php?cache=" +new Date().getTime());
        										document.getElementsByTagName("head").item(0).appendChild(sendmail);                      
                                            
                                        }
										//document.getElementById(inDomId).innerHTML=status+"..."+time;
										//alert(status);										
										//alert(resultCode);
										//alert(resultString+resultUrl);
									
											if(resultUrl[cache]!=""){
												clearInterval(interval2);
												//alert(resultUrl[cache]);
												if(!Sys.mobile){
													if(convertIcon)document.getElementById("loading"+cache).src=obj.ConverterIndex+"images/playing.png";
													var mediaplayerwidth = 0;
													var mediaplayerheight = 0;

													if(!obj.PlayerSet.hidden){
														removeAllChild(document.getElementById(inDomId));
														mediaplayerwidth = obj.PlayerSet.width;

														mediaplayerheight = obj.PlayerSet.height;
													}
													if(!Sys.ie){
														var newaudio = document.createElement("audio");	

														if(!obj.PlayerSet.hidden)newaudio.setAttribute('controls','controls');	
														var newMediaPanel = document.createElement("div");
														newMediaPanel.id="newMediaPanel"+cache;
														document.getElementById(inDomId).appendChild(newMediaPanel);
														
														newaudio.id="ttsplayer"+cache;
														newMediaPanel.appendChild(newaudio);
														newaudio.setAttribute('autoplay','autoplay');						
														newaudio.style.width=mediaplayerwidth+"px";						

														newaudio.style.height=mediaplayerheight+"px";
														
														document.getElementById("ttsplayer"+cache).src=resultUrl[cache];
														newaudio.play();

													}else{
														var newMediaPanel = document.createElement("div");
														newMediaPanel.id="newMediaPanel"+cache;
														//document.getElementById(inDomId).appendChild(newMediaPanel);

			
														var inner = function(){
															newMediaPanel.innerHTML='<object id="MIDIPlayer"'+cache+' name="MIDIPlayer" data="'+resultUrl[cache]+'" type="video/x-ms-wmv" width="'+mediaplayerwidth+'" height="'+mediaplayerheight+'">'+

																									'<PARAM name="fileName" value="'+resultUrl[cache]+'">'+
																									'<param name="AutoStart" value="1">'+
																									'<param name="AutoRewind" value="-1">'+

																									'<param name="AnimationAtStart" value="false">'+
																									'<param name="ShowControls" value="true">'+
																									'<param name="ClickToPlay" value="false">'+
																									'<param name="EnableContextMenu" value="true">'+

																									'<param name="EnablePositionControls" value="false">'+
																									'<param name="Balance" value="0">'+
																									'<param name="ShowStatusBar" value="false">'+

																									'<param name="AutoSize" value="0">'+
																									'</object>';
														}
														setTimeout(inner,1000);
													}
												}else{
													//location.href=resultUrl;
												}
											}
									
								},
								1000
							);
						}else{
							//document.getElementById(inDomId).innerHTML=resultCode+"...";
						}

					}else{
						//removeAllChild(document.getElementById(inDomId));
						//document.getElementById(inDomId).innerHTML="�еy��...";
					}
				},	
				100
			);
		}
	}
};

function getString(StringOrObj,nottsary){
		nottsary = nottsary || "";
		var string="";
		var Colon=StringOrObj.indexOf(":");

		if(Colon==-1){
			string=StringOrObj;
		}else{
			var SpecAtt = StringOrObj.substring(0,Colon);
			var AttValue = StringOrObj.substring(Colon+1);
			
			if(SpecAtt=="id"){
					var stringIDtag = document.getElementById(AttValue);
					var stringIDtagname = stringIDtag.tagName;
					if(stringIDtagname == "DIV" || stringIDtagname == "A" || stringIDtagname == "LI" || stringIDtagname == "SPAN"){			
						string = stringIDtag.innerHTML;
					
						/*var noTTSaryClass = getElementsByClassName("noTTS");
						for(var i=0;i<noTTSaryClass.length;i++){
							string = string.replace(noTTSaryClass[i].innerHTML,"");
						}
						var noTTSaryName = document.getElementsByName("noTTS");
						for(var i=0;i<noTTSaryName.length;i++){
							string = string.replace(noTTSaryName[i].innerHTML,"");
						}*/
								
					}else if(stringIDtagname == "INPUT" || stringIDtagname == "TEXTAREA" ){
						string = stringIDtag.value;
					}			
			}else if(SpecAtt=="class"){
					var stringClasstagAry = getElementsByClassName(AttValue);
					for(var i=0;i<stringClasstagAry.length;i++){
						if(stringClasstagAry[i].tagName == "DIV" || stringClasstagAry[i].tagName == "A" || stringClasstagAry[i].tagName == "LI" || stringClasstagAry[i].tagName == "SPAN"){
							string += stringClasstagAry[i].innerHTML;
						}else if(stringClasstagAry[i].tagName == "INPUT" || stringClasstagAry[i].tagName == "TEXTAREA" ){
							string += stringClasstagAry[i].value;	
						}
					}
			}else if(SpecAtt=="name"){
					var stringNametagAry = document.getElementsByName(AttValue);
					for(var i=0;i<stringNametagAry.length;i++){
						if(stringNametagAry[i].tagName == "DIV" || stringNametagAry[i].tagName == "A" || stringNametagAry[i].tagName == "LI" || stringNametagAry[i].tagName == "SPAN"){
							string += stringNametagAry[i].innerHTML;
						}else if(stringNametagAry[i].tagName == "INPUT" || stringNametagAry[i].tagName == "TEXTAREA" ){
							string += stringNametagAry[i].value;	
						}
					}			
			}
		}
		for(var j=0;j<nottsary.length;j++){
				string = string.replace(nottsary[j],"");
				
		}
		//alert(string.strip_tags());
		return string.strip_tags();
};

var tts = new TTS();
function getTTS(){
    tts.ConvertCustom(vTTS1,"playVoice","Theresa","80","-5","0","0","5");
};