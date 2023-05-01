function test1 (x: number) {
  if (x === 0) {
    console.log('x = 0');
  } else if (x === 1) {
    console.log('x = 1');
  }
}

function test2(originalPath: string) {
  const parsedUrl = url.parse(originalPath, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/(^\/+|\/+$)/g, ''); 
  return trimmedPath;
}