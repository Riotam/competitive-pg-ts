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

// getNumbersByStrings は文字列の配列を、数値の配列に変換する
function getNumbersByStrings(input: string[]) :number[] {
    return input.map(str => Number(str));
}

// countString は文字列の中で対象の文字列が存在する数を取得する regexの例->'/1/g'
function countString(input :string, regex :string) :number {
    return (input.match(regex) || []).length;
}