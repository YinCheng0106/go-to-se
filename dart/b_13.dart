/* Async 非同步 */

import 'dart:async';

//Future 是一個 class，用來表示非同步操作的結果
//擁有兩個狀態，完成(completed)/未完成(uncompleted)
Future <void> introduction(){
  return Future.delayed(
    Duration(seconds: 2), () => print("Dart tutorial") //等待兩秒輸出：Dart tutorial
  );
}
void main(){
  print("Before introdution");
  introduction();
  print("After introdution");
}