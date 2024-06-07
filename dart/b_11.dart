class People{
  String name;
  int age;

  People(this.name, this.age);
  String introduce() => "I'm $name. Nice to meet you.";
}

//繼承 extends，與Java類似
class Boy extends People{
  Boy(String name, int age): super(name, age);
}

void main(){
  var Jack = new Boy('Jack', 5);
  print(Jack.introduce());
}