<!--
@randomVisibility
<script>
alert("test")
</script>
@end
-->

```
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
```
