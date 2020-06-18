window.alert("Do not forget to play by rules");

class Main{
    draw(){
        write("written22")
    }
}


function write(s: string) {
    document.getElementById('h').innerHTML = s;
}

let object = new Main();

let on_click = () => { object.draw();}