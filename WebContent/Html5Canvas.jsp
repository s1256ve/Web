<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
 
<html>
<head>
    <title>HTML5 Canvas塗鴉板</title>
    <script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js">
    </script>
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
        img.output { border: 1px solid green; }
        #cSketchPad { cursor: arrow; }
    </style>
    <script>
        $(function () {
            //產生不同顏色的div方格當作調色盤選項
            var colors =
            "aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow".split(',');
            var sb = [];
            $.each(colors, function (i, v) {
                sb.push("<div class='option' style='background-color:" + v + "'></div>");
            });
            $("#dPallete").html(sb.join("\n"));
            //產生不同尺寸的方格當作線條粗細選項
            sb = [];
            for (var i = 1; i <= colors.length; i++)
                sb.push("<div class='option lw'>" +
         "<div style='margin-top:#px;margin-left:#px;width:%px;height:%px'></div></div>"
                .replace(/%/g, i).replace(/#/g, colors.length - i / 2));
            $("#dLine").html(sb.join('\n'));
            var $clrs = $("#dPallete .option");
            var $lws = $("#dLine .option");
            //點選調色盤時切換焦點並取得顏色存入p_color，
            //同時變更線條粗細選項的方格的顏色
            $clrs.click(function () {
                $clrs.removeClass("active");
                $(this).addClass("active");
                p_color = this.style.backgroundColor;
                $lws.children("div").css("background-color", p_color);
            }).first().click();
            //點選線條粗細選項時切換焦點並取得寬度存入p_width
            $lws.click(function () {
                $lws.removeClass("active");
                $(this).addClass("active");
                p_width =
                    $(this).children("div").css("width").replace("px", "");
 
            }).eq(3).click();
            //取得canvas context
            var $canvas = $("#cSketchPad");
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
            //利用.toDataqURL()將繪圖結果轉成圖檔
            $("#bGenImage").click(function () {
                $("#dOutput").html(
                $("<img />", { src: $canvas[0].toDataURL(),
                    "class": "output"
                }));
            });
        });
        
        function SetHW(){
        	var h=parseInt($("#h").val());
    		var w=parseInt($("#w").val());
    		$("#cSketchPad").width(w);
    		$("#cSketchPad").height(h);
    		$("#cSketchPad").attr("width",w);
    		$("#cSketchPad").attr("height",h);
    		//canvas.setAttribute("width",width)
            //canvas.setAttribute("height",height)
        }
    </script>
</head>
<body>
<div id="dPallete"></div>
<div id="dLine"></div>
<div id="dCanvas">
<canvas id="cSketchPad" width="300" height="300" style="border: 2px solid gray" />
</div>
<input type="button" id="bGenImage" value="Generate Image" />
<div id="dOutput"></div>
Width<input type="text" id="w" name="w" value="300">Height<input type="text" id="h" name="h" value="300"><input type="button" value="Set" onclick="SetHW()">
</body>
</html>