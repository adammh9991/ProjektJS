
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
const znaczki = document.querySelector("input[name='znaczki']");
const znaczki2 = document.querySelector("input[name='znaczki2']");

sliderColor.addEventListener('mousemove', showColor);

sliderDis.addEventListener('mousemove', showDis);
sliderSize.addEventListener('mousemove', showSize);

console.log(check);



let hue = 0;
var particles = [];



function show(){
	aColor.textContent = sliderColor.value;


	aDis.textContent = sliderDis.value;
	aSize.textContent = sliderSize.value;
}
show();


window.onload = function(){
const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
	 

	var texts ;

		
	var fontSize = sliderSize.value;

    canvas.height = window.screen.height/2;
    canvas.width = window.screen.width;

    var columns = canvas.width/fontSize;
    var drops = [];


    for (var x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function draw() {
		
			
		if(znaczki.checked == 1){
			texts = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡκιθηζεδγβαΩΨΧΦΥΤΣλμνξοπρςστυφχψω'.split('');
		}
		else if(znaczki2.checked == 1){
			texts = 'ぁあぃいぅうぇえぉかきぎくぐけぢちだたぞそぜせずすじしざさごこげっつづてでとどなにぬねのばはぱひびやゃもめむみまぽぼほぺべへぷぶふぴゅゆよょらりるれろゎわゐゑをんゔゕヺヹヸヷヶヵヴンヲヱヰワヮポマミムメモャヤュユョヨラリルレロ'.split('');
		}
		else{
			texts = '0123456789'.split('');
		}

		fontSize = sliderSize.value;
	
        ctx.fillStyle = 'rgba(0, 0, 0,' + sliderDis.value + ')';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

					if(check.checked == 1){
						ctx.fillStyle = 'hsl(' + hue + ',100%, 50%)';
					}
					else{
						ctx.fillStyle = 'hsl(' + sliderColor.value + ',100%, 50%)';
					}
					ctx.stroke();
					hue+=0.2;
        ctx.font = fontSize + 'px arial';
		

        for (var i = 0; i < drops.length; i++) {

            var text = texts[Math.floor(Math.random() * texts.length)];

            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height || Math.random() > 0.96) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 50);
	

}


