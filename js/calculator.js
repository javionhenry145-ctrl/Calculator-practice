function toScreen(buttonValue) {
    screen=document.getElementById("display");
    screen.value += buttonValue;
}
function calculate() {
    if( screen.value === "" || screen.value === undefined ){
        screen.value = "0";
    }
    else {
        screen.value = eval(screen.value);
    }


}
