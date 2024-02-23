class Peca{
    contexto;
    tamanhoPeca = 20
    px = 0;
    py = 0;

    PECA = [    
                [   [0,1,0],
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
    ultimaPeca = [];
    
    COR =  ["blue",
            "orangered",
            "crimson",
            "chartreuse",
            "yellow",
            "mediumorchid",
            "magenta"
           ];

    constructor(peca,ctx){
        this.contexto = ctx;
        this.pecaAtual = this.PECA[peca];
        console.log(this.pecaAtual);

    }

    AtualizarPeca(peca){
        this.pecaAtual = this.PECA[peca];
        //console.log(this.pecaAtual);
        return this.pecaAtual;
    }

    // DesenharPeca(){
    //     // console.log(this.pecaAtual);
    //     for(var i = 0; i < this.PECA[this.tipo].length; i++){
    //         for(var j = 0; j < this.PECA[this.tipo][i].length; j++){
    //             if(this.PECA[this.tipo][i][j] != 0){
    //                 this.contexto.fillStyle = this.COR[this.PECA[this.tipo][i][j] - 1];
    //                 this.contexto.lineWidth = 2;
    //                 this.contexto.strokeStyle = "white";
    //                 this.contexto.fillRect(this.px + i*20, this.py + j*20, 20, 20);
    //                 this.contexto.strokeRect(this.px + i*20, this.py + j*20, 20, 20);
    //                 // this.contexto.fillRect(i*20, j*20, 20, 20);
    //                 // this.contexto.strokeRect(i*20,j*20, 20, 20);
    //             }
    //         }
    //     }
    // }

    DesenharPeca(){
        // console.log(this.pecaAtual);
        for(var i = 0; i < this.pecaAtual.length; i++){
            for(var j = 0; j < this.pecaAtual[i].length; j++){
                if(this.pecaAtual[i][j] != 0){
                    this.contexto.fillStyle = this.COR[this.pecaAtual[i][j] - 1];
                    this.contexto.lineWidth = 2;
                    this.contexto.strokeStyle = "white";
                    this.contexto.fillRect(this.px + i*20, this.py + j*20, 20, 20);
                    this.contexto.strokeRect(this.px + i*20, this.py + j*20, 20, 20);
                    // this.contexto.fillRect(i*20, j*20, 20, 20);
                    // this.contexto.strokeRect(i*20,j*20, 20, 20);
                }
            }
        }
    }

    GirarPeca(){
        var pecaTemporaria = [...Array(this.pecaAtual[0].length)].map(e => Array(this.pecaAtual.length));  
        //console.log(pecaTemporaria);
        for(var i = 0; i < this.pecaAtual.length; i++){
            for(var j = 0; j < this.pecaAtual[i].length; j++){
                pecaTemporaria[this.pecaAtual[i].length - 1 - j][i] = this.pecaAtual[i][j];
            }
        }
        this.pecaAtual = pecaTemporaria;
        this.ApagarPeca();
        this.DesenharPeca();
        console.log(this.pecaAtual);
    }

    MoverPeca(posx, posy){
        this.ApagarPeca();
        this.px += posx*this.tamanhoPeca;
        this.py += posy*this.tamanhoPeca;
        this.DesenharPeca();
    }

    ApagarPeca(){
        for(var i = 0; i < this.pecaAtual.length; i++){
            for(var j = 0; j < this.pecaAtual[i].length; j++){
                if(this.pecaAtual[i][j] != 0){
                    this.contexto.fillStyle = "white";
                    this.contexto.lineWidth = 2;
                    this.contexto.strokeStyle = "white";
                    this.contexto.clearRect(this.px + i*20, this.py + j*20, 20, 20);
                }
            }
        }
    }
}