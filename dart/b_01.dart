void main(){
  /* var 賦值後不得修改 */
  var a = 1; // int 整數
  var b = "1"; // String 字串
  var c = 1.1; // double 浮點數

  /* dynamic 賦值後可修改 */
  dynamic d = 1;
  d = 100; // no err

  /* var 如未賦值會給予變數 dynamic */

  if(a is int){
    print('a is int'); // Output：a is int
  }
  if(b is String){
    print('b is String'); // Output：b is String
  }
  if(c is double){
    print('c is double'); // Output：c is double
  }
}