<!--

import: https://raw.githubusercontent.com/fjangfaragesh/liaRandomSelector/master/import.md

script: https://raw.githubusercontent.com/fjangfaragesh/liaRandomSelector/master/randomVisibility.js

-->

# Random Content Demo

Ich habe ein kleines programm geschieben, welches die Sichtbarkeit einzelner HTML Elemente ändert.
Es ist möglich HTML Elemene zu Gruppen zusammen zu fügen und dann aus einer Gruppe eine Anzahl bestimmter Elemente an zu zeigen. (Hier 2 Fragen aus 7)

Zum neu Würfeln der Fragen einfach an der Seite auf `Random Content Demo` und dann wieder auf `Quiz` klicken.

Die Makros funktionieren auch noch nicht so, wie ich will, es ist anscheinend nicht möglich HTML Tags ein zu fügen.


**TODO:**
* Makro `@ranVisReload` sollte funktionieren 
* Makros für `<div id="@0">` und `</div>` (wenn das überhaupt möglich ist)
* code sicherer machen
* bessere Doumentation
* festlegen der REPO_POSITION
* vielleicht attribut `class` anstatt `id` verwenden

## Benutzung

Im Hauptkommentar muss `import: REPO_POSITION/import.md` und `script: REPO_POSITION/randomVisibility.js` eingefügt werden.
Alle Einträge, aus denen eine bestimmte Anzahl zufällig angezeigt werden soll, müssen zwischen `<div id="gruppenId_index>` und `</div>` stehen
(wobei gruppenId durch den Inhalt der Gruppe und Index ein laufindex beginnend mit 0 ist. Das erste Element hätte den Index 0, das zweite den Index 1 und so weiter.
Zudem müssen sie sich alle auf einer Seite befinden. Auf der selben seite muss noch `@ranVis(gruppenId,anzahlAnElementenDerGruppe,anzahlDieAngezeigWird)` befinden (anzahlAnElementenDerGruppe und anzahlDieAngezeigWird duch die richtigen Zahlen ersetzen).

Mit `@ranVisReload(gruppenId,anzahlAnElementenDerGruppe,anzahlDieAngezeigWird)` wird ein Button erzeugt. Klickt man auf diesen, werden die sichtbaren Elemente neu gewürfelt.

## Quiz

@ranVis(quiz,7,2)

@ranVisReload(quiz,7,2)
(This button does not exist because it was eaten by a cat.)

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
