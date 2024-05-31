void main(){
  print(birthday('YinCheng', 1, 6));
  // Output: YinCheng's birthday is 1/6.
  print(e_birthday('Betty', 4, 15));
  // Output: Betty's birthday is 4/15.
  print(n_birthday(name:'John', day:22));
  // OUtput: John's birthday is null/22

  var nums = [1, 2, 3, 4, 5];
  iterNums(nums);
}

/* Function */
String birthday(String name, int month, int day){
  return "${name}'s birthday is $month/$day.";
}

String e_birthday(String name, int month, int day) =>
  "${name}'s birthday is $month/$day";

/* 使用命名參數 Named parameters */
n_birthday({String name = 'Eason', int ? month, int ? day}) =>
  "${name}'s birthday is $month/$day";

/* 匿名函式 Anonymous Function */
void iterNums(List nums){
  nums.forEach((num) => print("Number is $num")); //forEach 是 List 的 method，概念如同迴圈
}