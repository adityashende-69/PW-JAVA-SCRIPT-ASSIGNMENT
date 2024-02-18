function extractDataParts(pattern,inputString){
    const regex = new RegExp(pattern);
    constmatch = inputString.match(regex);
    if(match){
        const group = match.slice(1)
        console.log("matched groups:",group);
        return group;
    }
    else{
        console.log("no match found");
        return null;
    }
}
const datePattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
const dateString = "12/31/2022";

extractDataParts(datePattern,dateString);