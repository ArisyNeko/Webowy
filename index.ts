class Grid {
    clicks: number = 0;
    first: boolean = true;
    bombs: number = 0;
    public things: boolean[][];
    constructor() {
        this.things =[];
        //bombing
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

    //just for our convenience
    showGrid(){
        console.log(this.things);
        console.log(this.bombs);
    }
    
    //main and first funktion which handling your click
    handleClick(row:number, column:number, element:HTMLElement) {
        if(this.clicks != 0){
            if(this.things[row][column]==true){
                element.parentElement.innerHTML="<div class='solution'>X<div/>";
                const clicks = this.clicks;
                this.showResult();
                setTimeout(function(){ alert("You lost the game! Survived clicks: "+ clicks);
                window.location.reload();}, 1000);
                
            }else{
                this.clicks++;
                let quantity = this.countBombsAround(row,column,element);
                //заміняю внутрєнность кнопки (баттон) на другий дів з моїм параметром квонтіті
                element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
                // if(quantity==0){
                //     for(var i:number = -1; i < 2; i++){
                //         for(var j:number = -1; j < 2; j++){
                //             let id = (5*row)+column+1+(i*5)+j;
                //             let el = document.getElementById("a"+id.toString());
                //             console.log(el);
                //             if(el){
                //                 const row = Number(el.getAttribute("row"));
                //                 const column = Number(el.getAttribute("column"));
                //                 this.handleClick(row,column,el);
                //             }
                //         }
                //     }
                // }
                this.checkwin();
            }
        }else{
            if(this.things[row][column]==true){
            this.bombs--;
            this.things[row][column]=false;
            }
            this.clicks++;
            let quantity = this.countBombsAround(row,column,element);
            element.parentElement.innerHTML="<div class='solution'>" + quantity + "<div/>";
            
        // if(quantity==0){
        //     for(var i:number = -1; i < 2; i++){
        //         for(var j:number = -1; j < 2; j++){
        //             let id = (5*row)+column+1+(i*5)+j;
        //             let el = document.getElementById("a"+id.toString());
        //             console.log(el);
        //             if(el){
        //                 const row = Number(el.getAttribute("row"));
        //                 const column = Number(el.getAttribute("column"));
        //                 this.handleClick(row,column,el);
        //             }
        //         }
        //     }
        // }
            this.checkwin();
        }
    }

    //counts bombs around our button and returns the number, had to reveal all 0oes, but doesn't
    countBombsAround(row:number, column:number, element:HTMLElement){
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

    //cheks if we already won
    checkwin(){
        if(this.clicks==(25-this.bombs)){
            this.showResult();
            const clicks = this.clicks;
            setTimeout(function(){ alert("You won the game! Survived clicks: "+ clicks);
                window.location.reload();}, 1000);
        }
    }

    //shows all bombs
    showResult(){
        for(var i:number = 1; i<=25;i++){
            let el = document.getElementById("a"+i.toString());
            
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


let game = new Grid();
game.showGrid();

//activating the button
function takeInfo (id,event)
{
    console.log(event);
    let element = document.getElementById(id);
    //checking what is inside of our button
    if(event.ctrlKey){
        if(element.innerHTML=="F"){
            element.innerHTML = "";
        }else{
            element.innerHTML =  "F"
        }
    }else{
        if(element.innerHTML!=="F"){
            game.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")),element);
        }
    }
}