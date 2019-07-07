var vTTS1;

(function(){
    var randstr = function(length){
        //依據指定數量(length)產生圖形驗證碼之數值
        var key = {
 						//去除易搞混的0 o 1 l
            /**
            str : [
                'b','c','d','f','g','h','j','k','m',
                'p','q','r','s','x','v','y','z','w','n',
                '2','3','4','5','6','7','8','9'
            ],
            **/
            str : [
                '1','2','3','4','5','6','7','8','9','0'
            ],
 
            randint : function(n,m){
                var c = m-n+1;
                var num = Math.random() * c + n;
                return  Math.floor(num);
            },
 						
 						//亂數產生數值
            randStr : function(){
                var _this = this;
                //leng：str陣列數量
                var leng = _this.str.length - 1;
                var randkey = _this.randint(0, leng);
                return _this.str[randkey];
            },
 						
 						//依據指定數量(len)產生圖形驗證碼之數值
            create : function(len){
                var _this = this;
                var l = len || 10;
                var str = '';
 
                for(var i = 0 ; i<l ; i++){
                    str += _this.randStr();
                }
 								//alert("圖形驗證碼："+str);
                return str;
            }
 
        };
 
        length = length ? length : 10;

        return key.create(length);
    };
 
    var randint = function(n,m){
        var c = m-n+1;
        var num = Math.random() * c + n;
        return  Math.floor(num);
    };
 
    var captcha = function(dom, options){
        this.codeDoms = [];
        this.lineDoms = [];
        this.initOptions(options);
        this.dom = dom;
        this.init();
        this.addEvent();
        this.update();
        this.mask();
    };
 
    captcha.prototype.init = function(){
        this.dom.style.position = "relative";
        this.dom.style.overflow = "hidden";
        this.dom.style.cursor = "pointer";
        this.dom.title = "點選更換驗證碼";
        this.dom.style.background = this.options.bgColor;
        this.w = this.dom.clientWidth;
        this.h = this.dom.clientHeight;
        this.uW = this.w / this.options.len;
    };
 
    captcha.prototype.mask = function(){
        var dom = document.createElement("div");
        dom.style.cssText = [
            "width: 100%",
            "height: 100%",
            "left: 0",
            "top: 0",
            "position: absolute",
            "cursor: pointer",
            "z-index: 9999999"
        ].join(";");
 
        dom.title = "點選更換驗證碼";
 
        this.dom.appendChild(dom);
    };
 
    captcha.prototype.addEvent = function(){
        var _this = this;
        if(_this.dom.addEventListener){
	        _this.dom.addEventListener("click", function(){
	            _this.update.call(_this);
	        });
      	}else if(_this.dom.attachEvent){
      		_this.dom.attachEvent("onclick", function(){
	            _this.update.call(_this);
	        });
      	}
    };
 
    captcha.prototype.initOptions = function(options){
 
        var f = function(){
            this.len = 5;
            this.fontSizeMin = 15;
            this.fontSizeMax = 30;
            this.colors = [
                "#0C18C3",
                "#AA0000",
                "#01410C"
            ];
            this.bgColor = "#D1E9ED";
            this.fonts = [
                "Times New Roman",
                "cursive",
                "Serif",
                "sans-serif",
                "arial",
                "monospace",
                "Comic Sans MS"
            ];
            this.lines = 8;
            this.lineColors = [
                "#1954F6",
                "#19F620",
                "#F65B19",
                "#F61954"
            ];
 
            this.lineHeightMin = 2;
            this.lineHeightMax = 30;
            this.lineWidthMin = 1;
            this.lineWidthMax = 80;
        };
 
        this.options = new f();
 
        if(typeof options === "object"){
            for(i in options){
                this.options[i] = options[i];
            }
        }
    };
 
    captcha.prototype.update = function(){
        for(var i=0; i<this.codeDoms.length; i++){
            this.dom.removeChild(this.codeDoms[i]);
        }
        for(var i=0; i<this.lineDoms.length; i++){
            this.dom.removeChild(this.lineDoms[i]);
        }
        this.createCode();
        this.draw();
    };
 
    captcha.prototype.createCode = function(){
        this.code = randstr(this.options.len);
        vTTS1 = this.code;
    };
 
    captcha.prototype.verify = function(code){
        return this.code === code;
    };
 		
    captcha.prototype.draw = function(){
        this.codeDoms = [];
				//var setcolor = this.options.colors[randint(0,  this.options.colors.length - 1)];
        for(var i=0; i<this.code.length; i++){
          var setcolor = this.options.colors[randint(0,  this.options.colors.length - 1)];
          if(this.code[i]==undefined){          	
          	if(i!=0){
          		this.codeDoms.push(this.drawCode(this.code.substr(i,1), i, setcolor));
          	}else{
          		this.codeDoms.push(this.drawCode(this.code.substr(0,1), i, setcolor));
          	}
          }else{
          	this.codeDoms.push(this.drawCode(this.code[i], i, setcolor));
          }
        }
 				
 				if(this.code[i]==undefined){
 					this.drawLines2();
 				}else{
        	this.drawLines();
      	}
        //this.drawLines();
    };
 
    captcha.prototype.drawCode = function(code, index, col){
        var dom = document.createElement("span");
 				//alert(code);
        dom.style.cssText = [
            "font-size:" + randint(this.options.fontSizeMin, this.options.fontSizeMax) + "px",
            "color:" + col,
            "position: absolute",
            "left:" + randint(this.uW * index, this.uW * index + this.uW - 15) + "px",
            "top:" + randint(0, this.h - 30) + "px",
            "transform:rotate(" + randint(-30, 30) + "deg)",
            "-ms-transform:rotate(" + randint(-30, 30) + "deg)", /* IE以上9*/
            "-moz-transform:rotate(" + randint(-30, 30) + "deg)", /* Firefox */
            "-webkit-transform:rotate(" + randint(-30, 30) + "deg)", /* Safari and Chrome */
            "-o-transform:rotate(" + randint(-30, 30) + "deg)", /* Opera */
            "font-family:" + this.options.fonts[randint(0, this.options.fonts.length - 1)],
            "font-weight:" + randint(400, 900)
        ].join(";");
 				
        dom.innerHTML = code;
        this.dom.appendChild(dom);
 
        return dom;
    };
 
    captcha.prototype.drawLines = function(){
        this.lineDoms = [];
        for(var i=0; i<this.options.lines; i++){
            var dom = document.createElement("div");

            dom.style.cssText = [
                "position: absolute",
                "opacity: " + randint(3, 8) / 10,
                "width:" + randint(this.options.lineWidthMin, this.options.lineWidthMax) + "px",
                "height:" + randint(this.options.lineHeightMin, this.options.lineHeightMax) + "px",
                "background: " + this.options.lineColors[randint(0, this.options.lineColors.length - 1)],
                "left:" + randint(0, this.w - 20) + "px",
                "top:" + randint(0, this.h) + "px",
                "transform:rotate(" + randint(-30, 30) + "deg)",
                "-ms-transform:rotate(" + randint(-30, 30) + "deg)",
                "-moz-transform:rotate(" + randint(-30, 30) + "deg)",
                "-webkit-transform:rotate(" + randint(-30, 30) + "deg)",
                "-o-transform:rotate(" + randint(-30, 30) + "deg)",
                "font-family:" + this.options.fonts[randint(0, this.options.fonts.length - 1)],
                "font-weight:" + randint(10, 20)
            ].join(";");
            this.dom.appendChild(dom);
 
            this.lineDoms.push(dom);
        }
    };
    
    captcha.prototype.drawLines2 = function(){
        this.lineDoms = [];
        for(var i=0; i<this.options.lines; i++){
            var dom = document.createElement("div");
 						var ht = randint(this.options.lineHeightMin, this.options.lineHeightMax);

            dom.style.cssText = [
                "position: absolute",
                "opacity: " + randint(3, 8) / 10,
                "width:" + randint(this.options.lineWidthMin, this.options.lineWidthMax) + "px",
                "height:1px", // + ht + "px",
                "zoom:1",
                "overflow:hidden",
                "background: " + this.options.lineColors[randint(0, this.options.lineColors.length - 1)],
                "left:" + randint(0, this.w - 20) + "px",
                "top:" + randint(0, this.h) + "px",
                "transform:rotate(" + randint(-30, 30) + "deg)",
                "-ms-transform:rotate(" + randint(-30, 30) + "deg)",
                "-moz-transform:rotate(" + randint(-30, 30) + "deg)",
                "-webkit-transform:rotate(" + randint(-30, 30) + "deg)",
                "-o-transform:rotate(" + randint(-30, 30) + "deg)",
                "font-family:" + this.options.fonts[randint(0, this.options.fonts.length - 1)],
                "font-weight:" + randint(10, 20)
            ].join(";");
            this.dom.appendChild(dom);
 
            this.lineDoms.push(dom);
        }
    };
 
    this.captcha = captcha;
 
}).call(this);

var captchaCode;
function getCaptcha(){
  var container1 = document.getElementById("captchaPic");
  captchaCode = new captcha(container1);
};

function chkCaptcha(){
	if(!captchaCode.verify(document.getElementById("captchaValue").value)){
		alert("圖形驗證碼錯誤！");
		captchaCode.update();
		return false;
	}else{
		return true;
	}
};

var tts = new TTS();
function getTTS(){
    tts.ConvertCustom(vTTS1,"playVoice","Theresa","80","-5","0","0","5");
};