function test1(x: number) {
  if (x === 0) {
    console.log('x = 0');
  } else if (x === 1) {
    console.log('x = 1');
  }
}

function test2(parsedUrlPath: string) {
  const trimmedPath = parsedUrlPath.replace(/(^\/+)|(\/+$)/g, ''); 
  return trimmedPath;
}