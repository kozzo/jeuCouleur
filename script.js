newGame()

let nbGuess = 0
let nbVictory = 0
let dAffilee = 0
let record = 0

function newGame()
{
    let bonneReponse = Math.floor(Math.random()*6)+1
    //console.log(bonneReponse)

    let bonRouge = Math.floor(Math.random()*256)
    let bonVert = Math.floor(Math.random()*256)
    let bonBleu = Math.floor(Math.random()*256)

    let reponse = document.querySelector("#reponse")

    reponse.innerHTML = "rgb(" + bonRouge + ", " + bonVert + ", " + bonBleu + ")"

    for(let i=1; i<=6; i++)
    {
        if(i == bonneReponse) 
        {
            document.querySelector("#button"+i).style.backgroundColor = 
                "rgb("+ bonRouge + "," + bonVert + "," + bonBleu + ")"
        } 
        else 
        {
            let rouge = Math.floor(Math.random()*256)
            let vert = Math.floor(Math.random()*256)
            let bleu = Math.floor(Math.random()*256)
            
            document.querySelector("#button"+i).style.backgroundColor = 
                "rgb("+ rouge + "," + vert + "," + bleu + ")"
        }
    }
}

function guess(choix)
{
    nbGuess++
    let chosedButton = document.querySelector("#button"+choix)
    let bonneReponse = document.querySelector("#reponse").innerText

    console.log("chosedButton : " + chosedButton.style.backgroundColor)
    console.log("bonneReponse : " + bonneReponse)

    if(chosedButton.style.backgroundColor == bonneReponse)
    {
        chosedButton.style.border = "10px solid green"
        nbVictory++
        dAffilee++
        if(dAffilee > record) record = dAffilee
    }
    else 
    {
        chosedButton.style.border = "10px solid red"
        dAffilee = 0
    }

    let pourcentage = document.querySelector("#pourcentage")
    let nb = 100 * nbVictory/nbGuess
    pourcentage.innerHTML =  nb.toFixed() + " %"

    let Affilee = document.querySelector("#victoire")
    Affilee.innerHTML = dAffilee

    let best = document.querySelector("#record")
    best.innerHTML = record
}

function playAgain()
{
    newGame()

    for(let i=1; i<=6; i++)
    {
        document.querySelector("#button"+i).style.border = "3px solid #000000"
    }
}