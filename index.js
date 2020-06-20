var Animal = (function () {
    function Animal() {
        this.clicks = 0;
        this.first = true;
        this.bombs = 0;
        this.things = [];
        for (var i = 0; i <= 4; i++) {
            this.things[i] = [];
            for (var j = 0; j <= 4; j++) {
                if (Math.floor(Math.random() * Math.floor(11)) < 3) {
                    this.things[i][j] = true;
                    this.bombs++;
                }
                else {
                    this.things[i][j] = false;
                }
            }
        }
    }
    Animal.prototype.showGrid = function () {
        console.log(this.things);
        console.log(this.bombs);
    };
    Animal.prototype.handleClick = function (row, column, element) {
        this.clicks++;
        if (this.clicks != 1) {
            if (this.things[row][column] == true) {
                element.parentElement.innerHTML = "<div class='solution'>X<div/>";
                alert("You lost the game! Score: " + this.clicks);
                window.location.reload();
            }
            else {
                var quantity = this.countBombsAround(row, column);
                //заміняю внутрєнность кнопки (баттон) на другий дів з моїм параметром квонтіті
                element.parentElement.innerHTML = "<div class='solution'>" + quantity + "<div/>";
                this.checkwin();
            }
        }
        else {
            this.bombs--;
            this.things[row][column] = false;
            var quantity = this.countBombsAround(row, column);
            element.parentElement.innerHTML = "<div class='solution'>" + quantity + "<div/>";
            this.checkwin();
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
    Animal.prototype.checkwin = function () {
        console.log("bombs: ");
        console.log(25 - this.bombs);
        console.log("clicks: ");
        console.log(this.clicks);
        if (this.clicks == (24 - this.bombs)) {
            alert("You win this game! Score: " + this.clicks);
            window.location.reload();
        }
    };
    return Animal;
})();
var dog = new Animal();
dog.showGrid();
function takeInfo(id) {
    var element = document.getElementById(id.toString());
    //беру целый елемент див, ниже подтверджение что это такое
    //console.log(element)
    dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")), element);
}
