let _Text = document.querySelector(".text");

function MyFunction(value){
   if(value == 1){
        january()
   } 
   else if(value == 2){
        february()
   } 
   else if(value == 3){
        march()
    }
    else if(value == 4){
        april()
    }
    else if(value == 5){
        may()
    }
    else if(value == 6){
        june()
    }
    else if(value == 7){
        july()
    }
    else if(value == 8){
        august()
    }
    else if(value == 9){
        september()
    }
    else if(value == 10){
        october()
    }
    else if(value == 11){
        november()
    }
    else if(value == 12){
        december()
    } 
}



function january() {
    _Text.innerHTML = `January`.fontcolor("orange");
}

function february() {
    _Text.innerHTML = `February`.fontcolor("blue");
}

function march() {
    _Text.innerHTML = `March`.fontcolor("green");
}

function april() {
    _Text.innerHTML = `April`.fontcolor("red");
}

function may() {
    _Text.innerHTML = `May`.fontcolor("violet");
}

function june() {
    _Text.innerHTML = `June`.fontcolor("black");
}

function july() {
    _Text.innerHTML = `July`.fontcolor("grey");
}

function august() {
    _Text.innerHTML = `August`.fontcolor("dark green");
}

function september() {
    _Text.innerHTML = `September`.fontcolor("orange");
}

function october() {
    _Text.innerHTML = `October`.fontcolor("yellow");
}

function november() {
    _Text.innerHTML = `November`.fontcolor("brown");
}

function december() {
    _Text.innerHTML = `December`.fontcolor("pink");
}



