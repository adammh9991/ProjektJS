const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;
const particlesArray = [];
let hue = 0;
var particles = [];

const slider = document.querySelector("input[name='okregi']");
const p = document.querySelector("span[id='kolo']");
const showNumber = () => {
	p.textContent = slider.value
}
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
const check = document.querySelector("input[name='check']");


slider.addEventListener('mousemove', showNumber);
sliderColor.addEventListener('mousemove', showColor);
sliderSize.addEventListener('mousemove', showSize);
sliderLength.addEventListener('mousemove', showLength);
sliderLwidth.addEventListener('mousemove', showLwidth);

console.log(check);

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight/2;
});


const mouse = {
	x: undefined,
	y: undefined,
}

canvas.addEventListener('click', function(event){
	mouse.x = event.x;
	mouse.y = event.y;

	for(let i = 0; i <slider.value; i++){
		particlesArray.push(new Particle());
	}

});

canvas.addEventListener('mousemove', function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	for(let i = 0; i <slider.value; i++){
		particlesArray.push(new Particle());

	}
});

function show(){
	p.textContent = slider.value;
	aColor.textContent = sliderColor.value;
	aSize.textContent = sliderSize.value;
	aLength.textContent = sliderLength.value;
	aLwidth.textContent = sliderLwidth.value;
}
show();

class Particle {
	constructor(){
		this.x = mouse.x;
		this.y = mouse.y;
		this.size = sliderSize.value; 
		this.speedX = Math.random() * 3 - 1.5;
		this.speedY = Math.random() * 3 - 1.5;

		if(check.checked == true){
			this.color = 'hsl(' + hue + ',100%, 50%)';
		}
		else{
			this.color = 'hsl(' + sliderColor.value + ',100%, 50%)';
		}
	}
	update(){
		this.x += this.speedX;
		this.y += this.speedY;
		if(this.size > 0.2)this.size -= 0.1;
	}
	draw(){

			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fill();
		}

	
}

console.log(particlesArray);

function handleParticles(){
	for(let i = 0; i < particlesArray.length; i++){
		particlesArray[i].update();
		particlesArray[i].draw();
		for(let j = i; j < particlesArray.length; j++){
			const dx = particlesArray[i].x - particlesArray[j].x;
			const dy = particlesArray[i].y - particlesArray[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if(distance < sliderLength.value){			
				ctx.beginPath();
				ctx.strokeStyle = particlesArray[i].color;
				ctx.lineWidth = sliderLwidth.value;   
				ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
				ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
				ctx.stroke();
			}
		}	
		if(particlesArray[i].size <= 0.3){
			particlesArray.splice(i, 1);
			i--;
		}
	}
}

function animate(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(check.checked == true){
		hue+=5;					// zwiększamy zmienna aby zmieniać kolor
	}
	
	handleParticles();
	requestAnimationFrame(animate);
	
}
animate();


