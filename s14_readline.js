const readline = require('readline')
var fs = require('fs')

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

// rl.question('input a word:', (answer) => {
//     console.log('you have input the word ' + answer.toUpperCase())
//     rl.close()
// })

rl = readline.createInterface({
    input: fs.createReadStream('./s1_http_file_server.js'),
})

rl.on('line', (line) => {
    console.log('the line is ' + line);
})

function completer(line) {
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];

    // 输入为空，或者为npm的一部分，则tab补全为npm
    if(line.length < command.length){
        return [command.indexOf(line) === 0 ? [command] : [], line];
    }

    // 输入 npm，tab提示 help init install
    // 输入 npm in，tab提示 init install
    let hits = subCommands.filter(function(subCommand){ 
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
    })

    if(hits.length === 1){
        hits = hits.map(function(hit){
            return [command, hit].join(' ');
        });
    }
  
    return [hits.length ? hits : subCommands, line];
}

rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
});

rl.prompt();