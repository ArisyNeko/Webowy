var Animal = (function () {
    function Animal() {
        this.things = [];
        for (var i = 0; i <= 4; i++) {
            this.things[i] = [];
            for (var j = 0; j <= 4; j++) {
                if (Math.floor(Math.random() * Math.floor(11)) < 3) {
                    this.things[i][j] = true;
                }
                else {
                    this.things[i][j] = false;
                }
            }
        }
    }
    Animal.prototype.handleClick = function (row, column) {
        console.log(this.things);
        if (this.things[row][column] == true) {
            console.log("you lose");
        }
    };
    return Animal;
})();
var dog = new Animal();
function ChangeCellBoolean(id) {
    var element = document.getElementById(id.toString());
    console.log(element);
    dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")));
}
