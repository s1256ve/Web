<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
* {
	padding: 0;
	margin: 0;
}

canvas {
	background: #eee;
	display: block;
	margin: 0 auto;
}
</style>
</head>
<body>
	<canvas id="myCanvas" width="480" height="320"></canvas>
	<button onclick="newBall()">draw</button>
	<script type="text/javascript">
		var canvas = document.getElementById("myCanvas");
		var context = canvas.getContext("2d");
		//var balls=[];
		//var ball=new Object();
		
		//ball.ballRadius = 10;
		//ball.x = canvas.width / 2;
		//ball.y = canvas.height - 30;
		//ball.dx = 2;
		//ball.dy = -2;
		//ball.color="blue";
		//balls.push(ball);

		function randColor(){
			return '#'+Math.floor(Math.random()*16777215).toString(16);
		}
		
		function Ball(x,y,r,color,speedx,speedy){
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
            this.speedx = speedx;
            this.speedy = speedy;
        }
        Ball.prototype.draw=function(){
            context.beginPath();
            context.fillStyle = this.color;
            context.arc(this.x,this.y,this.r,0,Math.PI*2);
            context.fill();
        }
        Ball.prototype.move=function(){
            this.x +=this.speedx;
            this.y +=this.speedy;
            //碰壁检测
            if(this.x<this.r||this.x>canvas.width-this.r){
                this.speedx *=-1;
            }
            if(this.y<this.r||this.y>canvas.height-this.r){
                this.speedy *=-1;
            }
        }
        var balls=[];
        function newBall(){
        	var Ball1 = new Ball(Math.floor(Math.random()*canvas.width),Math.floor(Math.random()*canvas.height),Math.floor(Math.random()*10),randColor(),1,3);
            balls.push(Ball1);
            //act1();    
        }
        function act1(){
            context.clearRect(0,0,canvas.width,canvas.height);
            
            for(var i=0;i<balls.length;i++){
            	var Ball1=balls[i];
            	
            	for(var j=0;j<balls.length;j++){
            		var Ball2=balls[j];
            		if(Ball1!=Ball2){
                		if(Math.sqrt(Math.pow(Ball1.x-Ball2.x,2)+Math.pow(Ball1.y-Ball2.y,2))<Ball1.r+Ball2.r){
                            if(Ball1.x>Ball2.x){
                            	if(Ball1.y>Ball2.y){//1在2的右上方
                            		Ball1.speedx *=1;
                                    Ball1.speedy *=1;
                                    Ball2.speedx *=-1;
                                    Ball2.speedy *=-1;
                            	}else{//1在2的右下方
                            		Ball1.speedx *=1;
                                    Ball1.speedy *=-1;
                                    Ball2.speedx *=-1;
                                    Ball2.speedy *=1;
                            	}
                            }
                            else{
                            	if(Ball1.y>Ball2.y){//1在2的左上方
                            		Ball1.speedx *=-1;
                                    Ball1.speedy *=1;
                                    Ball2.speedx *=1;
                                    Ball2.speedy *=-1;
                            	}else{//1在2的左下方
                            		Ball1.speedx *=-1;
                                    Ball1.speedy *=-1;
                                    Ball2.speedx *=1;
                                    Ball2.speedy *=1;
                            	}
                            }
                			//Ball1.speedx *=-1;
                            //Ball1.speedy *=-1;
                            //Ball2.speedx *=-1;
                            //Ball2.speedy *=-1;
                        }
                	}
            	}
            	Ball1.draw();
                Ball1.move();
                Ball2.draw();
                Ball2.move();	
            }
            //碰撞检测
            
            //window.requestAnimationFrame(act1);
        }
        setInterval(act1, 100);
        //act1();
		
		/*function newBall(){
			var ball=new Object();
			ball.color=randColor();
			ball.ballRadius = Math.floor(Math.random()*10);
			ball.x = Math.floor(Math.random()*canvas.width);
			ball.y = Math.floor(Math.random()*canvas.height);
			ball.dx =(ball.x%2==0?1:-1)*Math.floor(Math.random()*5+1);
			ball.dy =(ball.y%2==0?1:-1)*Math.floor(Math.random()*5+1);
			//alert("new");
			balls.push(ball);
			
		}
		
		function drawBall(ball) {
			ctx.beginPath();
			ctx.arc(ball.x, ball.y, ball.ballRadius, 0, Math.PI * 2);
			ctx.fillStyle = ball.color;
			ctx.fill();
			ctx.closePath();
		}

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for(var i=0;i<balls.length;i++){
				//alert(balls[i]);
				if(detectHix(balls[i]))
					alert("hit");
				drawBall(balls[i]);
				if (balls[i].x + balls[i].dx > canvas.width - balls[i].ballRadius || balls[i].x + balls[i].dx < balls[i].ballRadius) {
					balls[i].dx = -(balls[i].dx);
				}
				if (balls[i].y + balls[i].dy > canvas.height - balls[i].ballRadius || balls[i].y + balls[i].dy < balls[i].ballRadius) {
					balls[i].dy = -(balls[i].dy);
				}
				
				balls[i].x += balls[i].dx;
				balls[i].y += balls[i].dy;
			}
		}
		
		function detectHix(ball){
			for(var i=0;i<balls.length;i++){
				if(ball!=balls[i]){
					var tx=ball.x-balls[i].x;
					var ty=ball.y-balls[i].y;
					var d=Math.sqrt(tx*tx+ty*ty);
					if(d<ball.ballRadius+balls[i].ballRadius){
						return true;
					}else{
						return false;
					}
				}
			}
		}
		
		setInterval(draw, 10);*/
	</script>
</body>
</html>