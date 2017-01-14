/*
*	@param {string } url - url of the image path
*	@return {func } promise - Return a promise.
*	@summary Takes a url string and waits for the image to load / fail and returns a promise
*/

export default function (url){
    return new Promise((resolve, reject) => {
    	
    	let img = new Image()
        
        img.onload = resolve
       
        img.onerror = reject

        img.src = url
    })
}