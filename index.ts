class Animal {
    clicks: number = 0;
    first: boolean = true;
    public things: boolean[][];
    constructor() {
        this.things =[];
        
        for(var i: number = 0; i <= 4; i++) {
            this.things[i]=[];
            
            for(var j: number = 0; j<= 4 ; j++) {
                if(Math.floor(Math.random() * Math.floor(11))<3){
                    this.things[i][j] = true;
                }else{
                    this.things[i][j] = false;
                }
            } 
        }
    }
    showGrid(){
        console.log(this.things);
    }

    handleClick(row:number, column:number) {

        this.clicks++;
        console.log("clicks: "+this.clicks);


        if(this.clicks != 1){
            if(this.things[row][column]==true){
                console.log("you lose");
            }else{
                let quantity = this.countBombsAround(row,column);
                console.log("quantity: "+quantity);
            }
        }else{
            this.things[row][column]=false;

            let quantity = this.countBombsAround(row,column);
            console.log("quantity: "+quantity);
        }
    }

    countBombsAround(row:number, column:number){
        let quantity:number = 0;
        for(var i:number = -1; i < 2; i++){
            for(var j:number = -1; j < 2; j++){
                
                if(this.things[row+i]&&this.things[row+i][column+j]==true){
                    quantity++;
                }
            }
        }
        return quantity;
    }
    
}


let dog = new Animal();
dog.showGrid();


function takeInfo (id:number)
{
    let element = document.getElementById(id.toString());
    //беру целый елемент див, ниже подтверджение что это такое
    //console.log(element)

    dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")));
}