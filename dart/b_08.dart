void main(){
  /* switch */
  var fruit = 'apple';

  switch(fruit){
    case 'banana':
      print('You have a banana.');
      break;
    case 'cherry':
      print('You have a cherry.');
      break;
    case 'durian':
      print('You have durian.');
      break;
    case 'apple':
      print('You have an apple.');
      break;

    //如果沒有符合的case就會執行default
    default:
      print("Wow, I don't know what fruit it is.");
  }
}