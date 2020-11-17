// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// function createSquare1(config: SquareConfig): { color: string; area: number } {
//   return { color: config.color || "red", area: config.width ? config.width * config.width : 20 };
// }
// let mySquare1 = createSquare({ width: 100, opacity: 0.5, color: 'red' }); // 提示错误
// let mySquare2 = createSquare({ width: 100, opacity: 0.5 } as SquareConfig); // 不提示错误

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
