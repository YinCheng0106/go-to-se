import 'dart:async';

Future <String> introduction(){
  return Future <String>.delayed(
    Duration(seconds: 2), () => "Dart tutorial"
  );
}

void main() async{ //主程式 main 後方加上 async 呼叫 await 
  print("Before introduction");
  print(await introduction());
  //使用 await 程式會等待 introduction() 執行完成取得回傳值才繼續執行下去
  print("After introduction");
}