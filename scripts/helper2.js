import * as http from 'http';

function test1 (x: int) {
  if (x == 0) {
    console.log('x = 0');
  } else if (x == 1) {
    console.log('x = 1');
  }
}

function test2(pathname: string) {
  const trimmedPath = pathname.replace(/^\/+|\/+$/g, ''); 
  return trimmedPath;
}