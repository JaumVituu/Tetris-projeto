class Peca{
    tipo;
    contexto;

    PECA = [    [   [0,1,0],
                    [1,1,1]
                ],
                [
                    [2,2,0],   
                    [0,2,2]
                ],
                [
                    [3,3],
                    [3,3]
                ],
                [
                    [4,4,4,4]
                ],
                [
                    [0,5,5],
                    [5,5,0]
                ],
                [
                    [6,0],
                    [6,0],
                    [6,6]
                ],
                [
                    [0,7],
                    [0,7],
                    [7,7]
                ]
            ];

    pecaAtual = [];
    
    COR =  ["blue",
            "orangered",
            "crimson",
            "chartreuse",
            "yellow",
            "mediumorchid",
            "magenta"
           ];

    constructor(peca,ctx){
        this.tipo = peca;
        this.contexto = ctx;
        this.pecaAtual = this.PECA[this.tipo];

    }
    
    AtualizarPeca(peca){
        this.tipo = peca;
        this.pecaAtual = this.PECA[this.tipo];
        //console.log(this.pecaAtual);
        return this.pecaAtual;
    }

    DesenharPeca(){
        // console.log(this.pecaAtual);
        for(var i = 0; i < this.PECA[this.tipo].length; i++){
            for(var j = 0; j < this.PECA[this.tipo][i].length; j++){
                if(this.PECA[this.tipo][i][j] != 0){
                    this.contexto.fillStyle = this.COR[this.PECA[this.tipo][i][j] - 1];
                    this.contexto.lineWidth = 2;
                    this.contexto.strokeStyle = "white";
                    this.contexto.fillRect(i*20,j*20, 20, 20);
                    this.contexto.strokeRect(i*20,j*20, 20, 20);
                }
            }
        }
    }
}