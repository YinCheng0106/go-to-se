import 'dart:async';

Future<void> introduction(){
  return Future.delayed(
    Duration(seconds: 2), () => print("Dart tutorial")
  );
}
void main(){
  print("Before introdution");
  introduction();
  print("After introdution");
}