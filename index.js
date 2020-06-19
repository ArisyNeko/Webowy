var Animal = (function () {
    function Animal() {
        this.clicks = 0;
        this.first = true;
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
    Animal.prototype.showGrid = function () {
        console.log(this.things);
    };
    Animal.prototype.handleClick = function (row, column) {
        this.clicks++;
        console.log("clicks: " + this.clicks);
        if (this.clicks != 1) {
            if (this.things[row][column] == true) {
                console.log("you lose");
            }
            else {
                var quantity = this.countBombsAround(row, column);
                console.log("quantity: " + quantity);
            }
        }
        else {
            this.things[row][column] = false;
            var quantity = this.countBombsAround(row, column);
            console.log("quantity: " + quantity);
        }
    };
    Animal.prototype.countBombsAround = function (row, column) {
        var quantity = 0;
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (this.things[row + i] && this.things[row + i][column + j] == true) {
                    quantity++;
                }
            }
        }
        return quantity;
    };
    return Animal;
})();
var dog = new Animal();
dog.showGrid();
function takeInfo(id) {
    var element = document.getElementById(id.toString());
    //беру целый елемент див, ниже подтверджение что это такое
    //console.log(element)
    dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")));
}
