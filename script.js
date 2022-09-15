const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();

img.src='./media/flappy-bird-set.png';

// Settings => add feature to manipulate settings with inputs ? 

let gamePlaying = false;
const gravity = .4;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

// pipes settings 

const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) +pipeWidth;

let index = 0,
    bestScore = 0,
    currentScore = 0,
    pipes = [],
    flight,
    flyHeight;


    const setup = () => {
        currentScore = 0;
        flight = jmup;
        flyHeight = (canvas.height / 2) - (size[1] / 2);

        pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeWidth)), pipeLoc()])
    }

const render = () => {
    index ++ ;

    // background animation

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height)


    if(gamePlaying){
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1] , ...size, cTenth, flyHeight, ...size);
        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);

    }
    
    else{
        // bird animation
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1] , ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
        flyHeight = (canvas.height / 2) - (size[1] / 2);

        // Text

        ctx.fillText(`Meilleur score : ${bestScore}`, 55, 245);
        ctx.fillText('Cliquez pour jouer', 48, 535);
        ctx.font = "bold 30px courier"
    }
    

    window.requestAnimationFrame(render);
}


setup();
img.onload = render;

document.addEventListener('click', () => gamePlaying = true );
window.onclick = () => {flight = jump}