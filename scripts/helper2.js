1:  // Remove unused import of 'http'
2: 
3: function test1 (x: number) {
4:   if (x === 0) {
5:     console.log('x = 0');
6:   } else if (x === 1) {
7:     console.log('x = 1');
8:   }
9: }
10: 
11: function test2(requestUrl: string) {
12:   const parsedUrl = url.parse(requestUrl, true);
13:   const pathname = parsedUrl.pathname;
14:   const trimmedPath = pathname.replace(/(^\/+|\/+$)/g, '');
15:   return trimmedPath;
16: }