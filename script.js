// variables

/**
 * holds the current water level value
 */
let level = getComputedStyle(document.documentElement).getPropertyValue('--level');

/**
 * stored the change in levels 
 */
const change = 25;

/**
 * boolean tracking if popup is hidden or not
 */
let hidden = true;

// functions

/**
 * controls visibily of popup
 */
function warning() {
    if (hidden) {
        document.getElementById('warning').style.display = "block";
    } else {
        document.getElementById('warning').style.display = "none";
    }
    hidden = !hidden;
}

/**
 * Increases the water level and sends it to the CSS
 */
function addWater() {    
    // converts level from a string to an int
    level = parseInt(level);

    // checks if bottle is full, then warns the user and resets level
    if (level == 0){
        level = 200;
        warning();
    } 

    level = level - change;

     // converts level back to a string and sets new value
     level = String(level);
     level += 'px';
     document.documentElement.style.setProperty('--level', level);
}

// function calls
document.getElementById('addBtn').addEventListener("click", addWater);
document.getElementById('warning-btn').addEventListener("click", warning);