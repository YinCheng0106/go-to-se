/* RegExp 正規表示 */

// search()
let text = "I'm YinCheng";
let n = text.search("YinCheng");
console.log(n);

// RegExp + search()
let m = text.search(/yincheng/i);
console.log(m);

// replace()
let result = text.replace("YinCheng", "Betty");
console.log(result);

// RegExp + replace()
let r = text.replace(/yincheng/i, "Betty");
console.log(r);

// i => 無視大小寫
// g => 全域配對
// m => 多行配對
// d => 頭尾配對

// [abc] => 括號內任一字元
// [0-9] => 括號內任一數字
// (x|y) => 或

// \d => 找數字
// \s => 找空格
// \b => 在單字開頭尋找匹配項，如下所示：\bWORD，或在單字末尾查找匹配項，如下所示：WORD\b
// \uxxx => 找指定 Unicode

// n+ => 至少包含字串
// n* => 零次或多次包含字串
// n? => 零次或一次包含字串

// test()
const pattern = /e/;
console.log(pattern.test("The best thing in life are free!"));

// exec()
console.log(pattern.exec("The best thing in life are free!"));