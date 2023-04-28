import * as url from 'url';

function test1 (x: number) {
  if (x === 0) {
    console.log('x = 0');
  } else if (x === 1) {
    console.log('x = 1');
  }
}

function test2(urlString: string) {
  const parsedUrl = url.parse(urlString, true);
  const path: string = (parsedUrl.pathname || '').replace(/^\/+|\/+$/g, ''); 
  return path;
}