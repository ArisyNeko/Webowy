window.alert("Do not forget to play by rules");
var Main = (function () {
    function Main() {
    }
    Main.prototype.draw = function () {
        write("written");
    };
    return Main;
})();
function write(s) {
    document.getElementById('h').innerHTML = s;
}
var object = new Main();
var on_click = function () { object.draw(); };
