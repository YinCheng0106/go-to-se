void main(){
  /* tryCatch 例外處理 */
  int a = 10;
  int b = 0;
  var result = null;

  try{
    result = divide(a, b);
  }on IntegerDivisionByZeroException{
    print("除數不能為0");
  } catch(e){
    print(e);
  } finally {
    print(result);
  }
}

double divide(int a, int b){
  if(b == 0){
    //引發Exception
    throw new IntegerDivisionByZeroException();
  }
  return a / b;
}