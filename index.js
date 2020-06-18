//window.alert("kek");
var Cells = (function () {
    function Cells() {
    }
    Cells.prototype.one_cell = function (width, hight) {
        this.x = width;
        this.y = hight;
    };
    return Cells;
})();
var Brain = (function () {
    function Brain() {
    }
    Brain.prototype.drow = function () {
        game('krk');
    };
    Brain.prototype.refresh = function () {
        setTimeout(function () { window.location.reload(); }, 1000);
    };
    return Brain;
})();
function game(s) {
    document.getElementById('2').innerHTML = s;
}
;
var brain = new Brain();
var on_click = function () {
    brain.drow();
    //brain.refresh();
};
