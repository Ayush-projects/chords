/**
 * This script is for tracking words input by the user and they are stored in the local storage.
 */

const wordStack = [];

//This function takes the input from all input tags in the current DOM.
function getValueFromInput() {

    var allInputs = document.getElementsByTagName("input");

    for (var x = 0; x < allInputs.length; x++) {
        if(allInputs[x].value != null || allInputs[x] != ""){
            return allInputs[x].value.split(" ");
        }   
    }
    
}

//It may be possible that user typed in some textarea field, so taking values from textArea.
function getValueFromTextArea() {
  
    var allTextArea = document.getElementsByTagName("textarea");

    for (var x = 0; x < allTextArea.length; x++) {
        if(allTextArea[x] != null || allTextArea != ""){
            return allTextArea[x].value.split(" ");
        }
    }
}

//This function creates the stack from the values taken from input and textArea fields.
function createStack() {

    var inputResult = getValueFromInput();
    if(inputResult != undefined){
        for (var i = inputResult.length - 1; i >= 0; i--) {
            wordStack.push(inputResult[i]);
        }
    }

    var textAreaResult = getValueFromTextArea();
    if(textAreaResult != undefined){
        for (var i = textAreaResult.length - 1; i >= 0; i--) {
            wordStack.push(textAreaResult[i]);
        }
    }
    
    return wordStack;
}

// calling createStack whenever user has completed typing.
const data =createStack();

console.log(data);

// Storing the current data in local storage.
localStorage.setItem("stack",data);
