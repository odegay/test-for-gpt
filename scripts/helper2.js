import * as http from 'http';
import * as url from 'url';

function test1 (x: int) {
  if (x == 0) {
    console.log('x = 0');
  } else if (x == 1) {
    console.log('x = 1');
  }
}

function test2(path: string) {
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, ''); 
  return trimmedPath;
}

function test3(number: int) {
  const digit = 26;
  let divisor = 2;
  return digit/divisor;  
}
