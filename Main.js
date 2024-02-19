const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth-50;
ctx.canvas.height = window.innerHeight-50;
var tamanhoTela = [300, 500];
var larguraLinha = 10;
var fps = 60;

ctx.lineWidth = larguraLinha;
ctx.strokeStyle = "black";
ctx.strokeRect(ctx.canvas.width/2 - tamanhoTela[0]/2 - larguraLinha, ctx.canvas.heigth + 200 - larguraLinha, tamanhoTela[0], tamanhoTela[1]);
var x = 0;
var peca = new Peca(x,ctx);

peca.DesenharPeca();

function Atualizar(){
    //document.addEventListener('keydown', event => {
       // if(event.keyCode == 32){
            ctx.clearRect(0,0,200,200);
            x++;
            if(x > 6){
                x = 0;
            }
            console.log(peca.AtualizarPeca(x));
            
            peca.DesenharPeca();
        //}
    //})
}


setInterval(Atualizar, 1000);
ctx.stroke();