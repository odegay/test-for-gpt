import * as url from 'url';

function test1(x: number) {
  if (x === 0) {
    console.log('x = 0');
  } else if (x === 1) {
    console.log('x = 1');
  }
}

function test2(urlPath: string) {
  const parsedUrl = url.parse(urlPath, true);
  const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g, ''); 
  return trimmedPath;
}