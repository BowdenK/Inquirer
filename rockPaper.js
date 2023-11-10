import inquirer from 'inquirer'

let num = 0;

const func = async () => {
    let {result} = await inquirer.prompt({
        name: "result",
        type: "list",
        message: "Choose your weapon?",
        choices: ['Rock', 'Paper', 'Scissors']
    })
    return result
}

const display =async () => {
    let response = await func()    
    console.log(`You chose: ${response}`)
    gameLogic(response);
}
display()

function gameLogic(response){
    num = Math.floor(Math.random()*3)
    let other = ''
    if(num == 0){other = 'Rock'}
    if(num == 1){other = 'Paper'}
    if(num == 2){other = 'Scissors'}
    
    console.log(`I choose: ${other}`)

    if(response == other){console.log(`It is a Draw`)}
    else if(response == 'Rock' && other == 'Scissors'){console.log(`You Win!`)}
    else if(response == 'Scissors' && other == 'Paper'){console.log(`You Win!`)}
    else if(response == 'Paper' && other == 'Rock'){console.log(`You Win!`)}
    else {console.log(`You Lose!`)}
    
}