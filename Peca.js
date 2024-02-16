class Peca{
    
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
    
    COR =  ["blue",
            "orangered",
            "crimson",
            "chartreuse",
            "yellow",
            "mediumorchid",
            "magenta"
           ];

    constructor(){
    }

    DesenharPeca(ctx,peca){
        for(var i = 0; i < this.PECA[peca].length; i++){
            for(var j = 0; j < this.PECA[peca][i].length; j++){
                if(this.PECA[peca][i][j] != 0){
                    ctx.fillStyle = this.COR[this.PECA[peca][i][j] - 1];
                    ctx.fillRect(i*20,j*20, 20, 20);
                }
            }
        }
    }
}