var btnTranslator = document.querySelector(".btn-translate");
var inputElement = document.querySelector("#inputText");
var outputElement=document.querySelector(".outputText");



function errorHandler(error)
{
    console.log("error occured",error);
    alert("something went wrong! Please try after sometime")
}
function urlGenerator(text)
{
    return "https://api.funtranslations.com/translate/british.json" + "?"+"text="+text
}
function clickHandler(inputText)
{
    var inputText=inputElement.value;
    
    fetch(urlGenerator(inputText))
    .then(response => response.json())
    .then(json => {
        
        var minionText =json.contents.translated;
        outputElement.innerText=minionText;
    })
    .catch(errorHandler)
}
btnTranslator.addEventListener('click',clickHandler);