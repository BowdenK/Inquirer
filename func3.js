import inquirer from 'inquirer'

const func3 = async () => {
    let {result} = await inquirer.prompt({
        name: "result",
        type: "list",
        message: "What is your favourite colour?",
        choices: ['red', 'blue', 'green']
    })
    return result
}

const display =async () => {
    let response = await func3()
    console.log(response)
}
display()