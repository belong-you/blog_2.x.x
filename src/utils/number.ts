/**
 * 数字生成器
 */
 export function *createNum() {  // 生成器函数传参毫无意义
  let n = 0
  while (true) {
      yield n;
      n++;
  }
}