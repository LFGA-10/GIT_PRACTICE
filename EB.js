const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        }, 1000);
    }, 1000);
}, 1000);

const btn;
btn.addEventListener('click', () => {
})