


let hue = 0;
var particles = [];


const sliderColor = document.querySelector("input[name='color']");
const aColor = document.querySelector("a[id='color']");
const showColor = () => {
	aColor.textContent = sliderColor.value
}
const sliderSize = document.querySelector("input[name='size']");
const aSize = document.querySelector("a[id='size']");
const showSize = () => {
	aSize.textContent = sliderSize.value
}


const sliderDis = document.querySelector("input[name='dissapprear']");
const aDis = document.querySelector("a[id='dissapprear']");
const showDis = () => {
	aDis.textContent = sliderDis.value
}
const check = document.querySelector("input[name='check']");


sliderColor.addEventListener('mousemove', showColor);

sliderDis.addEventListener('mousemove', showDis);
sliderSize.addEventListener('mousemove', showSize);

console.log(check);

function show(){
	aColor.textContent = sliderColor.value;


	aDis.textContent = sliderDis.value;
	aSize.textContent = sliderSize.value;
}
show();


window.onload = function(){
const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
	 

	var W = window.innerWidth, H = window.innerHeight/2;
	

		canvas.width = W;
		canvas.height = H;		


	

	var particles = [];
	for(var i = 0; i < 30; i++)
	{
		particles.push(new particle());
	}
	
	function particle()
	{

		this.location = {x: Math.random()*W, y: Math.random()*H};
		this.radius = 3;
		this.speed = 2;
		this.angle = Math.random()*360;
		
	}
	
	function draw()
	{

		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "rgba(0, 0, 0," + sliderDis.value +")";
		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		
		for(var i = 0; i < particles.length; i++)
		{
			var p = particles[i];
			p.radius = sliderSize.value;
					if(check.checked == 1){
						ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
					}
					else{
						ctx.fillStyle = 'hsl(' + sliderColor.value + ',100%, 50%)';
					}
					ctx.stroke();
					hue+=0.05;
			ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);
			

			p.location.x = p.location.x + p.speed*Math.cos(p.angle*Math.PI/180);
			p.location.y = p.location.y + p.speed*Math.sin(p.angle*Math.PI/180);

			
			if(p.location.x < 0) p.location.x = W;
			if(p.location.x > W) p.location.x = 0;
			if(p.location.y < 0) p.location.y = H;
			if(p.location.y > H) p.location.y = 0;
		}
	}
	
	setInterval(draw, 20);
}


