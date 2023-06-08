enemiesMade = 0;
hr = 8;
min = 0;
pm = false;

function updatePlayerData(){

if(min == 60){
    min = 0;
    hr++;
    if(hr == 13){
        hr = 1;
        pm = true;
    }
}

let timeShow = "CURRENT TIME: " + hr + ":" + (min != 0 ? "": "0") + min + (pm ? " pm" : " am");
/*
let dataToShow = "ENEMIES MADE: "+ enemiesMade;
io.writeIntoElement(dataToShow,"playerData")
*/
io.writeIntoElement(timeShow,"playerData")
}