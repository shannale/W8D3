const readline = require('readline');

reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Give Me A Number!', response => {
            const number = parseInt(response);
            sum += number; 
            console.log(`Partial Sum: ${sum}`); 
            addNumbers(sum, numsLeft - 1, completionCallback);

        })
    }

    if (numsLeft === 0) {
        reader.close();
        completionCallback(sum);
    }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`))
