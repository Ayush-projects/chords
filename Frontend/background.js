const InputWordsStack = [];

function trackWords(textInput){
    console.log("Hellooo");
    textInput.addEventListener('keydown', function onEvent(event) {
        if (event.keyCode === 13) {
            alert("Enter is pressed");
            addToStack(textInput.value);
            return;
        }
    });
}

function addToStack(userInput){
    const tempList = userInput.split(" ");
    for(var index = tempList.length ; index>0; index++){
        InputWords.append(tempList[index]);
    }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("HEY THERE");
    if(request.todo == "trackInput"){

        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            
        });
        const textInput = document.activeElement;
        console.log(textInput);
        trackWords(textInput);
        console.log(InputWordsStack);
    }
});