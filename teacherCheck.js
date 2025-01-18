codeEntered = "0P12413420245035"
codeEnteredArray = codeEntered.split("")
function checkCode(codeEnteredArray){
    let i=0
    let codeEnteredNum = codeEnteredArray[i]
    if(codeEnteredNum == "A" || codeEnteredNum == "B" ||codeEnteredNum == "0"  && codeEnteredArray[i+1] == "P"){
        codeEnteredNum = codeEnteredNum + 1
        for(let c =1; i<6; i++){
            if(codeEnteredNum[i] == c || codeEnteredNum[i+1] == c){
                c = 7
                if(codeEnteredNum[i] == c){
                    for (let g =21; g<30 ;i++){
                        if(g.toString().charAt(0) == codeEnteredNum[i+2].toString().charAt(0) && g.toString().charAt(1) == codeEnteredNum[i+2].toString().charAt(1)){
                            g=31
                            return "✅ code valid, round number: "+ codeEnteredNum[i+2]

                        }
                        else if(g.toString().charAt(0) == codeEnteredNum[i+3].toString().charAt(0) && g.toString().charAt(1) == codeEnteredNum[i+3].toString().charAt(1)){
                            return "✅ code valid, round number: "+ codeEnteredNum[i+2]

                        }
                    }


                }
            }
        }
    }
            return "🚫 code invalid"


}

console.log(checkCode(codeEnteredArray))