void main(){
  print(birthday('YinCheng', 1, 6));
  // Output：YinCheng's birthday is 1/6.
}

/* Function */
String birthday(String name, int month, int day){
  return "${name}'s birthday is $month/$day.";
}