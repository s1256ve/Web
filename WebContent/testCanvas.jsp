<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
<title>testCanvas</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style>
        body,input { font-size: 9pt; }
        #dCanvas,#dLine { clear: both; }
        .option
        {
            float: left; width: 20px; height: 20px; border: 2px solid #cccccc;
            margin-right: 4px; margin-bottom: 4px;
        }
        .active { border: 2px solid black; }
        .lw { text-align: center; vertical-align: middle; }
        
    </style>

</head>
<body>
	<h1>Test Canvas</h1>
	<div id="dPallete"></div>
	<div id="dLine"></div>
	<div></div>
	<canvas id="canvs" width="800" height="300" style="border:1px solid #c3c3c3;">
	Your browser does not support the canvas element.
	</canvas><br>
	<input type="button" value="drawLine" onclick="drawLineRandom()">&nbsp
	<input type="button" value="drawRect" onclick="drawRectRandom()">&nbsp
	<input type="button" value="drawCircle" onclick="drawCircleRandom()">&nbsp
	<input type="button" value="drawTriangle" onclick="drawTriRandom()">
	<br>steps:<input type="text" id="step" name="step" value="1">
	<input type="button" value="drawPictureRandom" onclick="randPic()">
	<input type="button" value="Clean Canvas" onclick="clean()">
	<br><img src="image">
	<a href="#" download="pic.png" onclick="this.href=downloadPic();">Download</a>
	<a id="dl" download="pic.png"><button type="submit" onclick="downloadBtn()">Download!</button></a><br>
	Weight<input type="input" id="w" name="w" value="800">&nbspHeight<input type="input" id="h" name="h" value="300"> &nbsp<input type="button" id="set" name="set" value="set" onclick="setHW()">
	<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript">
	
	var c=document.getElementById("canvs");
	var cxt=c.getContext("2d");
	
	var x=0,y=0,x1=0,y1=0,h=300,w=800;
	
	
	
	function setHW(){
		h=parseInt($("#h").val());
		w=parseInt($("#w").val());
		$("#canvs").width(w);
		$("#canvs").height(h);
		$("#canvs").attr("width",w);
		$("#canvs").attr("height",h);
	}
	
	function clean(){
		cxt.clearRect(0,0,$("#canvs").width(),$("#canvs").height());
	}
	function drawLineRandom(){
		
			//var b=(Math.floor(Math.random()*30))%3==0;
			//alert(b+randColor());
			cxt.globalAlpha=Math.random();
			cxt.strokeStyle=randColor();
			
			//alert(randColor());
			var x=Math.floor(Math.random()*800),y=Math.floor(Math.random()*300),x1=Math.floor(Math.random()*800),y1=Math.floor(Math.random()*300);
			//alert(x+","+y+","+x1+","+y1);
			cxt.moveTo(parseInt(x),parseInt(y));
			cxt.lineTo(parseInt(x1),parseInt(y1));
				
				//cxt.fillRect(0,0,150,20);
			
			cxt.stroke();
	}
	function drawRectRandom(){
		
			//var b=(Math.floor(Math.random()*30))%3==0;
			//alert(b+randColor());
			cxt.globalAlpha=Math.random();
			cxt.fillStyle=randColor();
			
			//alert(randColor());
			var x=Math.floor(Math.random()*800),y=Math.floor(Math.random()*300),w=Math.floor(Math.random()*800),h=Math.floor(Math.random()*300);
			//alert(x+","+y+","+x1+","+y1);
			//cxt.moveTo(parseInt(x),parseInt(y));
			//cxt.lineTo(parseInt(x1),parseInt(y1));
				
			cxt.fillRect(x,y,w,h);
			
			//cxt.stroke();
	}
	function drawCircleRandom(){
		
			//var b=(Math.floor(Math.random()*30))%3==0;
			//alert(b+randColor());
			cxt.globalAlpha=Math.random();
			cxt.fillStyle=randColor();
			
			//alert(randColor());
			var x=Math.floor(Math.random()*800),y=Math.floor(Math.random()*300),w=Math.floor(Math.random()*800),h=Math.floor(Math.random()*300);
			//alert(x+","+y+","+x1+","+y1);
			//cxt.moveTo(parseInt(x),parseInt(y));
			//cxt.lineTo(parseInt(x1),parseInt(y1));
			//,Math.PI*2
			cxt.beginPath();
			
			cxt.arc(x/2,y/2,w/2,h/2,Math.PI*2,true);
			cxt.closePath();
			cxt.fill();	
			//cxt.fillRect(x,y,w,h);
			
			//cxt.stroke();
	}
	function drawTriRandom(){
		cxt.globalAlpha=Math.random();
		cxt.fillStyle=randColor();
		var x=Math.floor(Math.random()*800),y=Math.floor(Math.random()*300),x1=Math.floor(Math.random()*800),y1=Math.floor(Math.random()*300),x2=Math.floor(Math.random()*800),y2=Math.floor(Math.random()*300);
		
		cxt.beginPath();
		
		cxt.moveTo(x,y);
		cxt.lineTo(x1,y1);
		cxt.lineTo(x2,y2);
		
		cxt.fill();
	}
	var step=0;
	function randPic(){
		step=parseInt($("#step").val());
		//alert(step);
		var count=step;
		if(!(step>0))
			count=0;
		cxt.globalCompositeOperation="destination-over"; //"destination-over"	"xor"
		while(count!=0){
			switch(count%4){
				case 0:
					drawLineRandom();
					break;
				case 1:
					drawRectRandom();
					break;
				case 2:
					drawCircleRandom();
					break;
				case 3:
					drawTriRandom();
					break;	
			}
			count--;
		}
	}
	function randColor(){
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}
	function downloadPic(){
		var image=document.getElementById('image');
		
		return canvs.toDataURL('image/png');
	}
	function downloadBtn(){
		var dl = document.getElementById("dl");
		var dlImage = document.getElementById("canvs").toDataURL("image/png").replace("image/png", "image/octet-stream");
		dl.setAttribute("href", dlImage);
	}
	$(function(){
		var colors =
	        "aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow".split(',');
	        var sb = [];
	        $.each(colors, function (i, v) {
	            sb.push("<div class='option' style='background-color:" + v + "'></div>");
	        });
	        sb.push("<div id='rand' class='option'style='background-color:" + randColor() + "'></div>");
	        
	        $("#dPallete").html(sb.join("\n"));
	        //產生不同尺寸的方格當作線條粗細選項
	        sb = [];
	        for (var i = 1; i <= colors.length; i++){
	            sb.push("<div class='option lw'>" +
	     "<div style='margin-top:#px;margin-left:#px;width:%px;height:%px'></div></div>"
	            .replace(/%/g, i).replace(/#/g, colors.length - i / 2));
	            }
	        $("#dLine").html(sb.join('\n'));
	        var $clrs = $("#dPallete .option");
	        var $lws = $("#dLine .option");
	        //點選調色盤時切換焦點並取得顏色存入p_color，
	        //同時變更線條粗細選項的方格的顏色
	        var rand=$("#dPallete #rand");
	        $clrs.click(function () {
	            $clrs.removeClass("active");
	            $(this).addClass("active");
	            
	            p_color = this.style.backgroundColor;
	            
	            
	            $lws.children("div").css("background-color", p_color);
	        }).first().click();
	        
	        rand.click(function(){
	        	rand.removeClass("active");
	            $(this).addClass("active");
	            this.style.backgroundColor= randColor()
	            p_color =this.style.backgroundColor;
	            
	            
	            $lws.children("div").css("background-color", p_color);
	        }).first().click();
	        
	        //點選線條粗細選項時切換焦點並取得寬度存入p_width
	        $lws.click(function () {
	            $lws.removeClass("active");
	            $(this).addClass("active");
	            p_width =
	                $(this).children("div").css("width").replace("px", "");

	        }).eq(3).click();
	        var $canvas = $("#canvs");
	        var ctx = $canvas[0].getContext("2d");
	        ctx.lineCap = "round";
	        ctx.fillStyle = "white"; //整個canvas塗上白色背景避免PNG的透明底色效果
	        ctx.fillRect(0, 0, $canvas.width(), $canvas.height());
	        var drawMode = false;
	        //canvas點選、移動、放開按鍵事件時進行繪圖動作
	        $canvas.mousedown(function (e) {
	            ctx.beginPath();
	            ctx.strokeStyle = p_color;
	            ctx.lineWidth = p_width;
	            ctx.moveTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
	            drawMode = true;
	        })
	        .mousemove(function (e) {
	            if (drawMode) {
	                ctx.lineTo(e.pageX - $canvas.position().left, e.pageY - $canvas.position().top);
	                ctx.stroke();
	            }
	        })
	        .mouseup(function (e) {
	            drawMode = false;
	        });
    
	});	
	
	
	</script>
</body>
</html>