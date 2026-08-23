const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown() {
  await delay(1000);
  console.log('3');
  await delay(1000);
  console.log('2');
  await delay(1000);
  console.log('1');
}

countdown();