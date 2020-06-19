/* can change the visibility of html elements with id
 * 
 * you can create groups of elements, from which random elements can be displayed
 * 
 * group element id: group id followed by _ and running index
 */ 
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
