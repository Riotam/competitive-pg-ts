export {};

function Main(input: string) {
    const strings = input.split(' ', -1);
    const numbers = strings.map(str => Number(str));
    const multiplication = numbers[0] * numbers[1];

    if (multiplication % 2 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));