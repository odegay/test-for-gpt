function test1 (x: number) {
  if (x === 0) {
    console.log('x = 0');
  } else if (x === 1) {
    console.log('x = 1');
  }
}

function test2(requestUrl: string) {
  const parsedUrl = url.parse(requestUrl, true);
  const pathname = parsedUrl.pathname;
  const trimmedPath = pathname.replace(/(^\/+|\/+$)/g, '');
  return trimmedPath;
}