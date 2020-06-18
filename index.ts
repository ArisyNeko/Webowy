//window.alert("kek");
class Cells{
    private x: number;
    private y: number;
    
    one_cell(width: number, hight: number){

       this.x = width; 
       this.y = hight;
       
    }
}
class Brain {

    drow() {
        game('krk');
    }
    refresh(){
        
        setTimeout(() => {window.location.reload();}, 1000);
    }
}

function game(s: string) {
    document.getElementById('2').innerHTML = s;
};
let brain = new Brain();
let on_click = () => {
    brain.drow();
    //brain.refresh();
};