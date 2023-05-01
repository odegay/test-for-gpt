function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Divide by zero error");
    } else {
        return a / b;
   }
}

function test1(asdasd: string): string {
    return asdasd;
}

export default test1;