class Animal {
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
    
    
    handleClick(row:number, column : number) {
        console.log(this.things);
        
        if(this.things[row][column]==true){
            console.log("you lose");
        }
    }

}


let dog = new Animal();


function ChangeCellBoolean (id : number)
{
    let element = document.getElementById(id.toString());
    console.log(element)

    dog.handleClick( Number(element.getAttribute("row")), Number(element.getAttribute("column")));
}