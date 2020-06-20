class Animal {
    clicks: number = 0;
    first: boolean = true;
    bombs: number = 0;
    public things: boolean[][];
    constructor() {
        this.things =[];
        
        for(var i: number = 0; i <= 4; i++) {
            this.things[i]=[];
            
            for(var j: number = 0; j<= 4 ; j++) {
                if(Math.floor(Math.random() * Math.floor(11))<3){
                    this.things[i][j] = true;
                    this.bombs++;
                }else{
                    this.things[i][j] = false;
                }
            } 
        }
    }
    showGrid(){
        console.log(this.things);
        console.log(this.bombs);
        
    }

    handleClick(row:number, column:number, element:HTMLElement) {

        this.clicks++;


        if(this.clicks != 1){
            if(this.things[row][column]==true){
                element.parentElement.innerHTML="<div class='solution'>X<div/>";
                alert("You lost the game! Score: "+ this.clicks);
                window.location.reload();
            }else{
                let quantity = this.countBombsAround(row,column);
                //заміняю внутрєнность кнопки (баттон) на другий дів з моїм параметром квонтіті
                element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
                this.checkwin();
            }
        }else{
            this.bombs--;
            this.things[row][column]=false;
            let quantity = this.countBombsAround(row,column);
            element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
            this.checkwin();
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
    checkwin(){
        console.log("bombs: ");
        console.log(25-this.bombs);
        console.log("clicks: ");
        console.log(this.clicks);
        if(this.clicks==(24-this.bombs)){
            alert("You win this game! Score: "+ this.clicks)
            window.location.reload();
        }
    }
    
}


let dog = new Animal();
dog.showGrid();


function takeInfo (id:number)
{
    let element = document.getElementById(id.toString());
    //беру целый елемент див, ниже подтверджение что это такое
    //console.log(element)

    dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")),element);
}