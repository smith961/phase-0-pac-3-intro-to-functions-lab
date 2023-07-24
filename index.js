function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        console.log(string.toLowerCase());
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()){
        console.log(string.toUpperCase());
        return "YES INDEED!"
    }
    else if (string === "Let's have dinner together!"){
        console.log("Let's have dinner together!")
        return "I would love to!"
    }
}
   