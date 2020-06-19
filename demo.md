<!--
import: https://raw.githubusercontent.com/fjangfaragesh/liaRandomSelector/master/import.md
script: https://raw.githubusercontent.com/fjangfaragesh/liaRandomSelector/master/randomVisibility.js
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

@randomVisibility()

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
