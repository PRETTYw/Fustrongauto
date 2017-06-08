window.onload=function backtop(){
			var btn=document.getElementById("back_top");
			var timer=null;
			var isTop=true;
			var clientHeight=document.documentElement.clientHeight;
			window.onscroll=function(){
				var osTop=document.documentElement.scrollTop||document.body.scrollTop;
				if (osTop>=clientHeight){
					btn.style.display="block";
				}else{
					btn.style.display="none";
				}
				if (!isTop){
					clearInterval(timer);
				}
				isTop=false;
			}
			btn.onclick=function(){
				timer=setInterval(function(){
					var osTop=document.documentElement.scrollTop||document.body.scrollTop;
					var speed=Math.floor(-osTop/6);
					isTop=true;
					document.documentElement.scrollTop=document.body.scrollTop=osTop+speed;
					if (osTop==0){
						clearInterval(timer);
			}
		}, 60);
	}
}