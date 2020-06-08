export {};

// std input and main
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main(input: string) {
    console.log(input)
}

// getStringsByString は文字列を、半角スペース区切りの配列に変換する
function getStringsByString(input: string) :string[] {
    return input.split(' ', -1);
}