void main(){
  /* for 迴圈 */
  for(var i = 0; i < 10; i++){
    print("Current_1 value is $i");
  }

  var l = [1, 2, 3, 4, 5];
  for(var num in l){
    print("Current_2 value is $num");
  }

  /* while 迴圈 */
  var a = 5;
  while(a > 0){
    print(a);
    a--;
  }
  print("while 迴圈結束");

  /* Do-while 迴圈 */
  var j = 5;
  do{
    print(j);
    j--;
  }while(j > 0);
  print("Do-while 迴圈結束");
}