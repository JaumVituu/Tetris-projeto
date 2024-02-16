const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth-50;
ctx.canvas.height = window.innerHeight-50;
var tamanhoTela = [300, 500];
var larguraLinha = 10;
var fps = 60;

ctx.lineWidth = larguraLinha;
ctx.beginPath();
ctx.moveTo(window.innerWidth/2 - larguraLinha - tamanhoTela[0]/2, 25-larguraLinha);
ctx.lineTo(window.innerWidth/2 - larguraLinha - tamanhoTela[0]/2, 25 +tamanhoTela[1] + larguraLinha);
ctx.lineTo(window.innerWidth/2 + larguraLinha + tamanhoTela[0]/2, 25 +tamanhoTela[1] + larguraLinha);
ctx.lineTo(window.innerWidth/2 + larguraLinha + tamanhoTela[0]/2, 25 - larguraLinha);
ctx.lineTo(window.innerWidth/2 - larguraLinha*1.5 - tamanhoTela[0]/2, 25 -larguraLinha);

var peca = new Peca();
var x = 0;

peca.DesenharPeca(ctx,0);

//function Atualizar(){
    console.log("Teste");
    document.addEventListener('keydown', event => {
        if(event.keyCode == 32){
            ctx.clearRect(0,0,200,200);
            x++;
            if(x > 6){
                x = 0;
            }
            console.log(x);
            peca.DesenharPeca(ctx,x);
        }
    })
//}


//setInterval(Atualizar, 1000/fps);
ctx.stroke();