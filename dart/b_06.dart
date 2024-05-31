void main(){
  /* 三元運算子 Ternary */
  // X = Condition ? A : B; 
  // Condition為true => X = A;
  // Condition為false => X = B;

  var age = 16;
  String verify = age >= 20 ? "滿20歲擁有投票權" : "未滿20歲不能投票";
  print(verify); //Output: 未滿20歲不能投票
}