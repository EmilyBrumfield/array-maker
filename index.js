//HANDLE SPACES AFTER SEMICOLONS
//HANDLE LAST ENTRY
//IMPLEMENT LOOPS AND ACTUAL CODE

"use strict";

//HTML ID tags for input and output text areas
const InputTextArea = "text-input";
const OutputTextArea = "text-output";

function makeArray(rawData){
  var finalText = "[ \n";
  //find first semicolon, cut out everything up to that

  do {
    //cutting stuff up
    finalText += '"' + rawData.slice(0, rawData.indexOf(";")).trim() + '", \n'; // cuts out the section of text, appends it to "finalText" with formatting
    rawData = rawData.substring(rawData.indexOf(";") + 1); //removes the appended chunk of text from rawData, plus the semicolon

  } while (rawData.indexOf(";") != -1); //stops the looping once there's no more semicolons

  finalText += '"' + rawData.trim() + '"\n]'; //adds the remainder after the semicolon; closes off the array

  return finalText;

  //finishes final section of text

  //DO MORE TO MAKE THIS ACTUALLY WORK
  
}


function handleCRClick(CR){
  document.getElementById(OutputTextArea).value = makeArray(document.getElementById(InputTextArea).value);
}


//OUTPUT FUNCTIONS
//Outputs data stored in "content" to HTML element with id matching "target."

function outputReplace(target, content) {  //Replaces existing target content with new content
  document.getElementById(target).innerHTML = content;
}

function outputAdd(target, content) {  //Adds new content to existing target content
  document.getElementById(target).innerHTML += content;
}

function outputAddLine(target, content) {  //Adds new content to existing target content, in a new line
  document.getElementById(target).innerHTML += "<br \>" + content;
}

//DATA
/*Loosely based on data from a book, but modified for this alternate monster creation method
Data is split into multiple arrays to make it easier to maintain
*/

var armorClass = [
    13, //CR 0, index 0
    13, //CR 1/8, index 1
    13, //CR 1/4, index 2
    13, //CR 1/2, index 3
    13, //CR 1, index 4
    13, //CR 2, index 5
    13, //CR 3, index 6
    14, //CR 4, index 7
    14, //CR 5, index 8
    14, //CR 6, index 9
    15, //CR 7, index 10
    15, //CR 8, index 11
    15, //CR 9, index 12
    16, //CR 10, index 13
    16, //CR 11, index 14
    16, //CR 12, index 15
    17, //CR 13, index 16
    17, //CR 14, index 17
    17, //CR 15, index 18
    18, //CR 16, index 19
    18, //CR 17, index 20
    18, //CR 18, index 21
    19, //CR 19, index 22
    19, //CR 20, index 23
    19, //CR 21, index 24
    20, //CR 22, index 25
    20, //CR 23, index 26
    20, //CR 24, index 27
    21, //CR 25, index 28
    21, //CR 26, index 29
    21, //CR 27, index 30
    21, //CR 28, index 31
    22, //CR 29, index 32
    22 //CR 30, index 33
];

var hitPoints = [
  4, //CR 0, index 0
  8, //CR 1/8, index 1
  12, //CR 1/4, index 2
  18, //CR 1/2, index 3
  30, //CR 1, index 4
  50, //CR 2, index 5
  70, //CR 3, index 6
  90, //CR 4, index 7
  110, //CR 5, index 8
  130, //CR 6, index 9
  150, //CR 7, index 10
  170, //CR 8, index 11
  190, //CR 9, index 12
  210, //CR 10, index 13
  230, //CR 11, index 14
  250, //CR 12, index 15
  270, //CR 13, index 16
  290, //CR 14, index 17
  310, //CR 15, index 18
  330, //CR 16, index 19
  350, //CR 17, index 20
  370, //CR 18, index 21
  390, //CR 19, index 22
  410, //CR 20, index 23
  430, //CR 21, index 24
  450, //CR 22, index 25
  470, //CR 23, index 26
  490, //CR 24, index 27
  510, //CR 25, index 28
  530, //CR 26, index 29
  550, //CR 27, index 30
  570, //CR 28, index 31
  590, //CR 29, index 32
  610 //CR 30, index 33
];

var attackBonus = [
  3, //CR 0, index 0
  4, //CR 1/8, index 1
  4, //CR 1/4, index 2
  4, //CR 1/2, index 3
  4, //CR 1, index 4
  5, //CR 2, index 5
  5, //CR 3, index 6
  6, //CR 4, index 7
  6, //CR 5, index 8
  7, //CR 6, index 9
  7, //CR 7, index 10
  8, //CR 8, index 11
  8, //CR 9, index 12
  9, //CR 10, index 13
  9, //CR 11, index 14
  10, //CR 12, index 15
  10, //CR 13, index 16
  11, //CR 14, index 17
  11, //CR 15, index 18
  12, //CR 16, index 19
  13, //CR 17, index 20
  13, //CR 18, index 21
  14, //CR 19, index 22
  14, //CR 20, index 23
  15, //CR 21, index 24
  15, //CR 22, index 25
  16, //CR 23, index 26
  16, //CR 24, index 27
  17, //CR 25, index 28
  17, //CR 26, index 29
  18, //CR 27, index 30
  18, //CR 28, index 31
  19, //CR 29, index 32
  19 //CR 30, index 33
];

var damage = [
  2, //CR 0, index 0
  3, //CR 1/8, index 1
  3, //CR 1/4, index 2
  4, //CR 1/2, index 3
  7, //CR 1, index 4
  13, //CR 2, index 5
  20, //CR 3, index 6
  25, //CR 4, index 7
  30, //CR 5, index 8
  40, //CR 6, index 9
  45, //CR 7, index 10
  50, //CR 8, index 11
  55, //CR 9, index 12
  60, //CR 10, index 13
  70, //CR 11, index 14
  75, //CR 12, index 15
  80, //CR 13, index 16
  85, //CR 14, index 17
  90, //CR 15, index 18
  95, //CR 16, index 19
  105, //CR 17, index 20
  110, //CR 18, index 21
  115, //CR 19, index 22
  120, //CR 20, index 23
  130, //CR 21, index 24
  135, //CR 22, index 25
  140, //CR 23, index 26
  145, //CR 24, index 27
  150, //CR 25, index 28
  160, //CR 26, index 29
  165, //CR 27, index 30
  170, //CR 28, index 31
  175, //CR 29, index 32
  180, //CR 30, index 33
];

  //CR 0, index 0
  //CR 1/8, index 1
  //CR 1/4, index 2
  //CR 1/2, index 3
  //CR 1, index 4
  //CR 2, index 5
  //CR 3, index 6
  //CR 4, index 7
  //CR 5, index 8
  //CR 6, index 9
  //CR 7, index 10
  //CR 8, index 11
  //CR 9, index 12
  //CR 10, index 13
  //CR 11, index 14
  //CR 12, index 15
  //CR 13, index 16
  //CR 14, index 17
  //CR 15, index 18
  //CR 16, index 19
  //CR 17, index 20
  //CR 18, index 21
  //CR 19, index 22
  //CR 20, index 23
  //CR 21, index 24
  //CR 22, index 25
  //CR 23, index 26
  //CR 24, index 27
  //CR 25, index 28
  //CR 26, index 29
  //CR 27, index 30
  //CR 28, index 31
  //CR 29, index 32
  //CR 30, index 33