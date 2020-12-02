<!--
author:   Fabian Bär & André Dietrich

email:    LiaScript@web.de

version:  0.0.2

language: en

narrator: US English Male

logo:     https://upload.wikimedia.org/wikipedia/commons/a/af/Who_is_the_Devil%3F%3F.jpg

comment:  Import this course, if you want to define quiz-banks and randomize
          the appearance of quizzes or randomize, something else...

@Random.random: @Random.base(@uid,random,@0,@1)

@Random.static: @Random.base(@uid,static,@0,@1)

@Random.base
<script>
  let random = document.getElementsByClassName("random")
  let quizzes = [...random]
  let array = []

  // tha last parameter is optional, check if filtering should be applied
  let filter = "@3"
  filter = filter.trim().toLowerCase()

  if(filter == "true") {
    // filter all quizzes that are not solved yet
    random = quizzes.filter( quiz =>
      [...quiz.children].filter( e => e.className.includes("open") ).length != 0
    )
  }

  // apply sorting based on the given wheights
  for(let i = 0; i<random.length; i++) {
    let prop = random[i].getAttribute("data-propability")

    array.push([i, Math.random() *  (prop ? parseFloat(prop) : 1) ])
  }

  array = array.sort(
        (a, b) => {
          if (a[1] < b[1])
            return 1
          else if (a[1] > b[1])
            return -1
          else
            return 0
      })
      .map( e => e[0])


  // if application applied as static, restore stored ids
  if ("@1".trim().toLowerCase() == "static") {
    if (!window.randomBank) {
      window.randomBank = {}
    }

    if (!window.randomBank["@0"])
      window.randomBank["@0"] = array
    else {
      random = quizzes
      array = window.randomBank["@0"]
    }
  }


  // all quizzes in the bank are solved? then show all
  if (array.length == 0)
    quizzes.map(quiz => { quiz.style="" })
  else {
    quizzes.map(quiz => { quiz.style="display:none" })
    array.slice(0,@2).map(i => { random[i].style="" })
  }
  console.log("done")
</script>
@end

-->

# Random - Template

                         --{{0}}--
This document defines some Macros, which allow to randomize parts of your
course. You can use it to define randomize quiz-banks, randomize the visibility
of images, surveys, or something totally different.

__Try it on LiaScript:__

https://liascript.github.io/course/?https://github.com/liaTemplates/Random

__See the project on Github:__

https://github.com/liaTemplates/Random

                         --{{1}}--
There are three ways to use this template. The easiest way is to use the
`import` statement and the url of the raw text-file of the master branch or any
other branch or version. But you can also copy the required functionionality
directly into the header of your Markdown document, see therefor the
[last slide](#Implementation). And of course, you could also clone this project
and change it, as you wish.


                           {{1}}
1. Load the macros via

   `import: https://github.com/liaTemplates/Random/README.md`

2. Copy the definitions into your Project

3. Clone this repository on GitHub


## `@Random.static`

                         --{{0}}--
Use this macro if you want to keep the elements you have selected through the
entire "lifetime" of your course. Lifetime in this case means, until the user
refreshes the browser. This macro uses two parameters, the first is mandatory
and defines the number of quizzes your user should see. The second is optional
and used for quizzes. Set the parameter to true, if you want to apply filtering,
so that only quizzes are visible that have not been solved or resolved yet.

                         --{{1}}--
You will have to place your quizzes or other content into HTML `div`s or `span`s
and use the class definition `random` to tell the script, that this little peace
of content should be randomized and you can optionally define a propability. The
default propability is 1, you can tweak this by setting the value manually, a
value of 10 for example means, that this element should appear 10 times out of
11. Set it to 0, if you want to let it appear, if no more quizzes are available.


``` Markdown
@Random.static(2,true)

...

<div class="random" data-propability="10">

** 1 stupid question: **

    [( )] answer a
    [( )] answer b
    [(X)] Ei äm bäd in inglisch

</div>

<div class="random">
...
```

--------------------------------------------------------------------------------

Some examples:

@Random.static(2, true)


<div class="random" data-propability="20">

** 1 stupid question: **

    [( )] answer a
    [( )] answer b
    [(X)] Ei äm bäd in inglisch

</div>

<div class="random">

** 2 boring question: **

    [( )] meeh
    [( )] mah
    [(X)] MÄH

</div>

<div class="random">

** 3 irrelevant question: **

    [(X)] I like computer science
    [(X)] I like computer science
    [(X)] I like computer science

</div>

<div class="random">

** 4 hard question: **

    [( )] yes
    [( )] no
    [( )] both
    [( )] nothing
    [( )] all (including both and nothing)
    [(X)] I don't know :(

</div>

<div class="random">

** 5 important question: **

    [[X]] computer science
    [[X]] math
    [[X]] english
    [[X]] TU Berkakademie Freiberg
</div>

<div class="random">

** 6 interesting question: **

    [[X]] matrices
    [[ ]] cleaning the appartment
    [[X]] electrical stuff
    [[X]] trains
    [[ ]] sleeping

</div>

<div class="random">

** 7 no question: **

    [(X)] cats
    [( )] dogs

</div>



## `@Random.random`

                         --{{0}}--
Use this macro if you want to change the selection every time this specific page
gets rendered, which means, if you go on to the next slide and return, other
elements/quizzes should be visible. Everything else equal to the former macro.


``` Markdown
@Random.random(2,true)

...

<div class="random" data-propability="5">

** 1 stupid question: **

    [( )] answer a
    [( )] answer b
    [(X)] Ei äm bäd in inglisch

</div>

<div class="random">
...
```

--------------------------------------------------------------------------------

Some examples:

@Random.random(2, true)


<div class="random" data-propability="5">

** 1 stupid question: **

    [( )] answer a
    [( )] answer b
    [(X)] Ei äm bäd in inglisch

</div>

<div class="random">

** 2 boring question: **

    [( )] meeh
    [( )] mah
    [(X)] MÄH

</div>

<div class="random">

** 3 irrelevant question: **

    [(X)] I like computer science
    [(X)] I like computer science
    [(X)] I like computer science

</div>

<div class="random">

** 4 hard question: **

    [( )] yes
    [( )] no
    [( )] both
    [( )] nothing
    [( )] all (including both and nothing)
    [(X)] I don't know :(

</div>

<div class="random">

** 5 important question: **

    [[X]] computer science
    [[X]] math
    [[X]] english
    [[X]] TU Berkakademie Freiberg
</div>

<div class="random">

** 6 interesting question: **

    [[X]] matrices
    [[ ]] cleaning the appartment
    [[X]] electrical stuff
    [[X]] trains
    [[ ]] sleeping

</div>

<div class="random">

** 7 no question: **

    [(X)] cats
    [( )] dogs

</div>



## Implementation

                         --{{0}}--
The code shows how the macros were implemented by applying the hidden macro
`@Random.base`.

``` html
@Random.random: @Random.base(@uid,random,@0,@1)

@Random.static: @Random.base(@uid,static,@0,@1)

@Random.base
<script>
  let random = document.getElementsByClassName("random")
  let quizzes = [...random]
  let array = []

  // tha last parameter is optional, check if filtering should be applied
  let filter = "@3"
  filter = filter.trim().toLowerCase()

  if(filter == "true") {
    // filter all quizzes that are not solved yet
    random = quizzes.filter( quiz =>
      [...quiz.children].filter( e => e.className.includes("open") ).length != 0
    )
  }

  // apply sorting based on the given wheights
  for(let i = 0; i<random.length; i++) {
    let prop = random[i].getAttribute("data-propability")

    array.push([i, Math.random() *  (prop ? parseFloat(prop) : 1) ])
  }

  array = array.sort(
        (a, b) => {
          if (a[1] < b[1])
            return 1
          else if (a[1] > b[1])
            return -1
          else
            return 0
      })
      .map( e => e[0])


  // if application applied as static, restore stored ids
  if ("@1".trim().toLowerCase() == "static") {
    if (!window.randomBank) {
      window.randomBank = {}
    }

    if (!window.randomBank["@0"])
      window.randomBank["@0"] = array
    else {
      random = quizzes
      array = window.randomBank["@0"]
    }
  }


  // all quizzes in the bank are solved? then show all
  if (array.length == 0)
    quizzes.map(quiz => { quiz.style="" })
  else {
    quizzes.map(quiz => { quiz.style="display:none" })
    array.slice(0,@2).map(i => { random[i].style="" })
  }
</script>
@end
```


                         --{{1}}--
If you want to minimize loading effort in your LiaScript project, you can also
copy this code and paste it into your main comment header, see the code in the
raw file of this document.

{{1}} https://raw.githubusercontent.com/liaTemplates/Random/master/README.md
