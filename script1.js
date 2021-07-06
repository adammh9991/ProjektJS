


let hue = 0;
var particles = [];


const sliderColor = document.querySelector("input[name='color']");
const aColor = document.querySelector("a[id='color']");
const showColor = () => {
	aColor.textContent = sliderColor.value
}
const sliderLength = document.querySelector("input[name='length']");
const aLength = document.querySelector("a[id='length']");
const showLength = () => {
	aLength.textContent = sliderLength.value
}
const sliderLwidth = document.querySelector("input[name='lwidth']");
const aLwidth = document.querySelector("a[id='lwidth']");
const showLwidth = () => {
	aLwidth.textContent = sliderLwidth.value
}

const sliderDis = document.querySelector("input[name='dissapprear']");
const aDis = document.querySelector("a[id='dissapprear']");
const showDis = () => {
	aDis.textContent = sliderDis.value
}
const check = document.querySelector("input[name='check']");


sliderColor.addEventListener('mousemove', showColor);
sliderLength.addEventListener('mousemove', showLength);
sliderLwidth.addEventListener('mousemove', showLwidth);
sliderDis.addEventListener('mousemove', showDis);
console.log(check);

function show(){
	aColor.textContent = sliderColor.value;
	aLength.textContent = sliderLength.value;
	aLwidth.textContent = sliderLwidth.value;
	aDis.textContent = sliderDis.value;
}
show();


window.onload = function(){
const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
	 

	var W = window.innerWidth, H = window.innerHeight/2;
	
		canvas.width = W;
		canvas.height = H;	
		
	var particles = [];
	for(var i = 0; i < 25; i++)
	{
		particles.push(new particle());
	}
	
	function particle()
	{

		this.location = {x: Math.random()*W, y: Math.random()*H};
		this.radius = 0;
		this.speed = 3;
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
			ctx.fillStyle = "white";
			ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);
			for(var n = 0; n < particles.length; n++)
			{
				var p2 = particles[n];

				var yd = p2.location.y - p.location.y;
				var xd = p2.location.x - p.location.x;
				var distance = Math.sqrt(xd*xd + yd*yd);

				if(distance < sliderLength.value)
				{
					ctx.beginPath();
					ctx.lineWidth = sliderLwidth.value;
					ctx.moveTo(p.location.x, p.location.y);
					ctx.lineTo(p2.location.x, p2.location.y);
					if(check.checked == 1){
						ctx.strokeStyle = 'hsl(' + hue + ',100%, 50%)';
					}
					else{
						ctx.strokeStyle = 'hsl(' + sliderColor.value + ',100%, 50%)';
					}
					ctx.stroke();
					hue+=0.005;
				}
			}
			
			p.location.x = p.location.x + p.speed*Math.cos(p.angle*Math.PI/180);
			p.location.y = p.location.y + p.speed*Math.sin(p.angle*Math.PI/180);

			if(p.location.x < 0) p.location.x = W;
			if(p.location.x > W) p.location.x = 0;
			if(p.location.y < 0) p.location.y = H;
			if(p.location.y > H) p.location.y = 0;
		}
	}
	
	setInterval(draw, 30);
}


