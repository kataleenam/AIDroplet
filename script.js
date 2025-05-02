// variables

/**
 * holds the current water level value
 */
let level = getComputedStyle(document.documentElement).getPropertyValue('--level');

/**
 * stored the change in levels 
 */
const change = 25;

// functions

function alertUser() {

}

/**
 * Increases the water level and sends it to the CSS
 */
function addWater() {    
    // converts level from a string to an int
    level = parseInt(level);

    level = level - change;

     // converts level back to a string and sets new value
     level = String(level);
     level += 'px';
     document.documentElement.style.setProperty('--level', level);


    // checks if bottle is full, then warns the user and resets level
    if (level == '0px'){
        level = '200px';
    } 
}

// functioncalls
document.getElementById('addBtn').addEventListener("click", addWater);