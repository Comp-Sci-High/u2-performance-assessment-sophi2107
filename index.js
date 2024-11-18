const prompt = require('prompt-sync')()

let OPENAI_API_KEY = "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"
let openAIURL = " https://api.openai.com/v1/chat/completions"
let requestURL = "https://dog.ceo/api/breeds/image/random"

//Dog async function
async function fetchPics(){
const response = await fetch (requestURL)
const data = await response.json()
   console.log(data)
}





async function fetchContent(imageData){
    

    
        
    const options = {
        method: "POST",
        headers: {
            Authorization: "Bearer " + OPENAI_API_KEY,
            'Content-Type':   "application/json",
    
                },
                body:JSON.stringify(imageData)
              }
              const response = await fetch ("https://api.openai.com/v1/images/generations", options)
        const data = await response.json()
        console.log(data)
    }
async function main(){

let isRunning = true;
const response = await fetch(fetchPics, fetchContent)
const data = await response.json()
    console.log(data)

    fetchContent({
        prompt: "Dog pictures",
        model: "dall-e-3"
    })
 

   

    console.log("Welcome to the DOG picture chat bot!!!!!!!")
    console.log("Here are two pictures of dogs")
    fetchPics()

    let question = prompt("Which is the AI generated dog pic, 1 or 2: ")
if(question == 2 ){
    console.log("YESSSSS, your right!!!!!")
}else{
    console.log("Sorry wrong answer it was the second pic")
}
}
main()