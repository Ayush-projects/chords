const wordStack = [];

function getValueFromInput() {

    var allInputs = document.getElementsByTagName("input");

    for (var x = 0; x < allInputs.length; x++) {
        if(allInputs[x].value != null || allInputs[x] != ""){
            return allInputs[x].value.split(" ");
        }   
    }
    
}

function getValueFromTextArea() {
  
    var allTextArea = document.getElementsByTagName("textarea");

    for (var x = 0; x < allTextArea.length; x++) {
        if(allTextArea[x] != null || allTextArea != ""){
            return allTextArea[x].value.split(" ");
        }
    }
}

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


const data =createStack();

console.log(data);

localStorage.setItem("stack",data);
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//         var my_stack = createStack();
//         sendResponse({response: "hello"});
// })