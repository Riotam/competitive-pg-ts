export {};

function Main(input: string) {
    input.trim();
    const res = (input.match(/1/g) || []).length;
    console.log(res);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));