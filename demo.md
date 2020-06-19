<!--
import: https://github.com/fjangfaragesh/liaRandomSelector/raw/master/import.md
script: https://github.com/fjangfaragesh/liaRandomSelector/raw/master/randomVisibility.js
-->
# Random Content Demo

Ich habe ein kleines programm geschieben, welches die Sichtbarkeit einzelner HTML Elemente ändert.
Es ist möglich HTML Elemene zu Gruppen zusammen zu fügen und dann aus einer Gruppe eine Anzahl bestimmter Elemente an zu zeigen. (Hier 2 Fragen aus 7)

Zum neu Würfeln der Fragen einfach an der Seite auf `Random Content Demo` und dann wieder auf `Quiz` klicken.

Das ist erst mal nur ein Test, ich würde am liebsten Teile des Codes in eine seperate Datei packen, um die LiaScript datei übersichtlich zu halten, weiß aber nicht, ob das hier so einfach geht...

Die Makros funktionieren auch noch nicht so, wie ich will, es ist anscheinend nicht möglich HTML Tags ein zu fügen.


**TODO:**
* Script sollte ein mal global geladen werden, anstatt auf der jeweiligen seite einzeln
* Makros für `<div id="@0">` und `</div>` sollten funktionieren
* code sicherer machen
* Makro für Element zufalls Gruppen Element auswahl (gruppenId, anzahlGruppenmitglieder, wie viele sollen ausgewählt werden)
* bessere Doumentation
## Quiz
<script>
/* can change the visibility of html elements with id
 * 
 * you can create groups of elements, from which random elements can be displayed
 * 
 * group element id: group id followed by _ and running index
 */ 

    
// TODO checks for Illegal Arguments
 
//example configuration   
const EXAMPLE_QUIZ_GROUP_ID = "quiz";
const EXAMPLE_QUIZ_SIZE = 7;
const EXAMPLE_NUMBER_OF_VISIBLES = 2;
    
window.setTimeout(runExample,1);
function runExample() {
//    alert("doing...");
    showRandom(EXAMPLE_QUIZ_GROUP_ID,
               EXAMPLE_QUIZ_SIZE,
               EXAMPLE_NUMBER_OF_VISIBLES);
}   
    
    
//code
const HIDDEN = "none";
const VISIBLE = "inline";
const GROUP_SEPERATOR = "_"; //seperates group id and index

function showRandom(groupId, groupSize, numberOfVisibleMembers) {
    let invisibles = [];
    for (let i = 0; i < groupSize; i++) invisibles.push(i);
    let visibles = [];
    for (let i = 0; i < numberOfVisibleMembers; i++) {
        let r = Math.floor(Math.random()*invisibles.length);
        visibles.push(invisibles.splice(r, 1)[0]);
    }
    showGroupMembers(groupId,groupSize,visibles);
}
    
function showGroupMembers(groupId, groupSize, visibleIndexs) {
    //TODO faster solution
    for (let i = 0; i < groupSize; i++) {
        hideGroupElement(groupId,i);
    }
    for (let i of visibleIndexs) {
        showGroupElement(groupId,i);
    }
}    

function hideGroupElement(groupId, index){
    hideId(""+groupId + GROUP_SEPERATOR + index)
}
function showGroupElement(groupId, index) {
    showId(""+groupId + GROUP_SEPERATOR + index)
}
function hideId(id) {hideElm(gElm(id));}
function showId(id) {showElm(gElm(id));}
    
function hideElm(elm) {
    if (elm == undefined) return;
    elm.style.display = HIDDEN;
}
function showElm(elm) {
    if (elm == undefined) return;
    elm.style.display = VISIBLE; 
}
function gElm(id) {
    return document.getElementById(id);
}


</script>

<input type="button" value="reload questions" onclick="runExample()">
(The button is broken because it was pushed too deep)

<div id="quiz_0">
** stupid question: **

[( )] answer a
[( )] answer b
[(X)] Ei äm bäd in inglisch

</div>

<div id="quiz_1">
** boring question: **

[( )] meeh
[( )] mah
[(X)] MÄH
</div>

<div id="quiz_2">
** irrelevant question: **

[(X)] I like computer science
[(X)] I like computer science
[(X)] I like computer science
</div>

<div id="quiz_3">
** hard question: **

[( )] yes
[( )] no
[( )] both
[( )] nothing
[( )] all (including both and nothing)
[(X)] I don't know :(
</div>

<div id="quiz_4">
** important question: **

[[X]] computer science
[[X]] math
[[X]] english
[[X]] TU Berkakademie Freiberg
</div>

<div id="quiz_5">
** interesting question: **

[[X]] matrices
[[ ]] cleaning the appartment
[[X]] electrical stuff
[[X]] trains
[[ ]] sleeping

</div>

<div id="quiz_6">
** no question: **

[(X)] cats
[( )] dogs

</div>
## test zone
...
