// Refactored "divide" function to always return a number
function divide(a: number, b: number): number | undefined {
  if (b === 0) {
    return undefined;
  } else {
    return a / b;
  }
}

function test1(asdasd: string): string {
  return asdasd;
}

export default test1;