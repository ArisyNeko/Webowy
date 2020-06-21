var Animal = (function () {
    function Animal() {
        this.clicks = 0;
        this.first = true;
        this.bombs = 0;
        this.things = [];
        for (var i = 0; i <= 4; i++) {
            this.things[i] = [];
            for (var j = 0; j <= 4; j++) {
                if (Math.floor(Math.random() * Math.floor(11)) < 2) {
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
        if (this.clicks != 0) {
            if (this.things[row][column] == true) {
                element.parentElement.innerHTML = "<div class='solution'>X<div/>";
                var clicks = this.clicks;
                this.showResult();
                setTimeout(function () {
                    alert("You lost the game! Score: " + clicks);
                    window.location.reload();
                }, 1000);
            }
            else {
                this.clicks++;
                var quantity = this.countBombsAround(row, column, element);
                //заміняю внутрєнность кнопки (баттон) на другий дів з моїм параметром квонтіті
                element.parentElement.innerHTML = "<div class='solution'>" + quantity + "<div/>";
                this.checkwin();
            }
        }
        else {
            this.clicks++;
            if (this.things[row][column] == true) {
                this.bombs--;
                this.things[row][column] = false;
            }
            var quantity = this.countBombsAround(row, column, element);
            element.parentElement.innerHTML = "<div class='solution'>" + quantity + "<div/>";
            this.checkwin();
        }
    };
    Animal.prototype.countBombsAround = function (row, column, element) {
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
    Animal.prototype.reveal = function (row, column) {
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (this.things[row + i] && this.things[row + i][column + j] == true) {
                }
            }
        }
    };
    Animal.prototype.checkwin = function () {
        if (this.clicks == (25 - this.bombs)) {
            this.showResult();
            var clicks = this.clicks;
            setTimeout(function () {
                alert("You won the game! Score: " + clicks);
                window.location.reload();
            }, 1000);
        }
    };
    Animal.prototype.showResult = function () {
        var el;
        for (var i = 1; i <= 25; i++) {
            el = document.getElementById("a" + i.toString());
            if (el) {
                var row = Number(el.getAttribute("row"));
                var column = Number(el.getAttribute("column"));
                if (this.things[row][column] == true) {
                    el.parentElement.innerHTML = "<div class='solution'>X<div/>";
                }
            }
        }
    };
    return Animal;
})();
var dog = new Animal();
dog.showGrid();
function takeInfo(id, event) {
    console.log(event);
    var element = document.getElementById(id.toString());
    if (event.ctrlKey) {
        if (element.innerHTML == "F") {
            element.innerHTML = "";
        }
        else {
            element.innerHTML = "F";
        }
    }
    else {
        if (element.innerHTML !== "F") {
            dog.handleClick(Number(element.getAttribute("row")), Number(element.getAttribute("column")), element);
        }
    }
}
