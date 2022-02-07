'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 */

function foo(codeList, shoppingCart) {
    // Write your code here
    
    let listIndex = 0;
    let result = 0;
    let itemInListIndex = 0
    
    const numberOfCodeLists = codeList.length;
    shoppingCart.forEach(shoppingCartItem => {
        const currList = codeList[listIndex].split(' ');
        const secretListCurrItem = currList[itemInListIndex];
        if(secretListCurrItem === shoppingCartItem || secretListCurrItem === "anything"){
            itemInListIndex++;
            if(itemInListIndex === currList.length){
                itemInListIndex = 0;
                listIndex++;
                if(listIndex === numberOfCodeLists){
                    result = 1;
                    return;
                }
            }
        } else itemInListIndex = 0
    });
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const codeListCount = parseInt(readLine().trim(), 10);

    let codeList = [];

    for (let i = 0; i < codeListCount; i++) {
        const codeListItem = readLine();
        codeList.push(codeListItem);
    }

    const shoppingCartCount = parseInt(readLine().trim(), 10);

    let shoppingCart = [];

    for (let i = 0; i < shoppingCartCount; i++) {
        const shoppingCartItem = readLine();
        shoppingCart.push(shoppingCartItem);
    }

    const result = foo(codeList, shoppingCart);

    ws.write(result + '\n');

    ws.end();
}
