function outterfunction(parameter){
    let localvar = "value in outterfunction"
    function innerfunction(){
        console.log(`parmeter of outterfunctiuon ${parameter}`);
        console.log(`value of outterfunction: ${localvar}`);
    }

    return innerfunction;
}
const outterfunctionresult = outterfunction("hello");

outterfunctionresult();