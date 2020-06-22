<!--
@ranVis

<script>
//TODO escape parameters!!!!!!

const EXAMPLE_QUIZ_GROUP_ID = "@0";
const EXAMPLE_QUIZ_SIZE = @1;
const EXAMPLE_NUMBER_OF_VISIBLES = @2;
    
window.setTimeout(runExample,1);
function runExample() {
    showRandom(EXAMPLE_QUIZ_GROUP_ID,
               EXAMPLE_QUIZ_SIZE,
               EXAMPLE_NUMBER_OF_VISIBLES);
}

</script>
@end

@ranVisReload: <input type="button" onclick='showRandom("@0",@1,@2)' value="rerandomize @0"/>

-->

# RanVis

Contains Makros `ranVis(groupId,numberOfGroupMembers,numberOfVisibles)` and `@ranVisReload(groupId,numberOfGroupMembers,numberOfVisibles)`
