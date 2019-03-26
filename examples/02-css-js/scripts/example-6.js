/**
 * example-6.js
 *
 * JavaScript loops & if statements
 *
 * @author David Kelly
 */

var population = 100;
if ( population > 99 ) {  // < > <= >= === !== 
    console.log( '1. Population less than 100 ');
} else {
    console.log( '1. Population greater than 100 ');
}


//-------------------------
//  If / else statements
//-------------------------
var name = 'Ireland';

if (name === 'Ireland') {
    console.log( '2. Success! The country name was Ireland ');
} else {
    console.log( '2. Not Ireland! ');
}

if (name !== 'Belgium') {
    console.log( '3. The country name was not Belgium ');
} else {
    console.log( '3. It was Belgium! ');
}


//-------------------------
// For Loop
//-------------------------
var data = ['France', 'Ireland', 'England'];

console.log("4. Looping through array elements...")
for (var i = 0; i < data.length; i++ ) {
    console.log(i, data[i]);
}