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
                if(Math.floor(Math.random() * Math.floor(11))<2){
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
        if(this.clicks != 0){
            if(this.things[row][column]==true){
                element.parentElement.innerHTML="<div class='solution'>X<div/>";
                const clicks = this.clicks;
                this.showResult();
                setTimeout(function(){ alert("You lost the game! Score: "+ clicks);
                window.location.reload();}, 1000);
                
            }else{
                this.clicks++;
                let quantity = this.countBombsAround(row,column,element);
                //заміняю внутрєнность кнопки (баттон) на другий дів з моїм параметром квонтіті
                element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
                this.checkwin();
            }
        }else{
            this.clicks++;
            if(this.things[row][column]==true){
            this.bombs--;
            this.things[row][column]=false;
            }
            let quantity = this.countBombsAround(row,column,element);
            element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
            this.checkwin();
        }
    }

    countBombsAround(row:number, column:number, element:HTMLElement){
        let quantity:number = 0;
        for(var i:number = -1; i < 2; i++){
            for(var j:number = -1; j < 2; j++){
                
                if(this.things[row+i]&&this.things[row+i][column+j]==true){
                    quantity++;
                }
                //console.log("quantity: "+quantity);
                //if(quantity==0){
                //    this.handleClick(row+i, column+j, element);
                //}
            }
        }
        return quantity;
    }

    reveal(row:number, column:number){
        for(var i:number = -1; i < 2; i++){
            for(var j:number = -1; j < 2; j++){
                if(this.things[row+i]&&this.things[row+i][column+j]==true){

                }
            }
        }
    }

    checkwin(){
        if(this.clicks==(25-this.bombs)){
            this.showResult();
            const clicks = this.clicks;
            setTimeout(function(){ alert("You won the game! Score: "+ clicks);
                window.location.reload();}, 1000);
        }
    }

    showResult(){

        let el;
        for(var i:number = 1; i<=25;i++){

            el = document.getElementById("a"+i.toString());
            if(el){

                const row = Number(el.getAttribute("row"));
                const column = Number(el.getAttribute("column"));
                if(this.things[row][column] == true) {
                    el.parentElement.innerHTML = "<div class='solution'>X<div/>";
                }
            }
        }
    }
}


let dog = new Animal();
dog.showGrid();


function takeInfo (id:number,event)
{
    console.log(event);
    let element = document.getElementById(id.toString());
    if(event.ctrlKey){
        if(element.innerHTML=="F"){
            element.innerHTML = "";
        }else{
            element.innerHTML =  "F"
        }
    }else{
        if(element.innerHTML!=="F"){
            dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")),element);
        }
    }
}