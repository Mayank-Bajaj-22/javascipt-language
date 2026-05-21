const requestUrl = "https://api.github.com/users/mayank-bajaj-22";

const xhr = new XMLHttpRequest()
// XMLHttpRequest is a built-in browser object used to send HTTP requests.

xhr.open('GET', requestUrl)
// Request is prepared
// But NOT sent yet

//overwritting onreadystatechange
xhr.onreadystatechange = function(){
    // This function runs every time the request state changes.
    // XHR has different states during its lifecycle.

    console.log(xhr.readyState);   
        
    if (this.readyState === 4){
        const data = this.responseText
        console.log(typeof data);  // the data comes in string from the api most of the times
        const dataInJSON = JSON.parse(data)  
        console.log(typeof dataInJSON);  
        console.log(dataInJSON.followers);  
        console.log(dataInJSON.avatar_url)         
    }
}

xhr.send()  //request starts (non-blocking)