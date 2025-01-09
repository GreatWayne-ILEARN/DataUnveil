
export default async function () {
    // Get for the token 
    let token = document.getElementById("Token");

    // Get Values form TextArea
    let value = token.value;

    if ( value ==="" || value == null) {
        // setTimeout(() => {
            console.log("this is the first message");
            alert("Input Your Token ")
            document.getElementById("error").innerHTML = "Input Your Token!";
        // }, 5000);
    }

    //Display the Value in payload
    const arrayToken = value.split('.');
    
    /*
        JSON.parse function converts a JSON strings to objects
        atob() decodes a string of data that has been encoded using Base64 encoding
    */

    // identify the signature encoded
    const header = JSON.parse(atob(arrayToken[0]))
    // identify and decode the payload 
    const tPayload = JSON.parse(atob(arrayToken[1]));


    document.getElementById("Header").innerHTML = JSON.stringify(header)
    document.getElementById("Payload").innerHTML = JSON.stringify(tPayload);

    // console.log(tPayload);
    // console.log(header);
}

