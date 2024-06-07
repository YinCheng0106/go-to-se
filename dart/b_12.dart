//Mixin 可以將自己的class 使用 其他class的功能，不用成為它的子類
mixin Android{
  String android() => "I'm android developer";
}

mixin IOS{
  String ios() => "I'm ios developer";
}

class People{
  String name;
  int age;

  People(this.name, this.age);
  String introduce() => "I'm $name. Nice to meet you.";
}

class Flutter extends People with Android, IOS{
  Flutter(String name, int age): super(name, age);
}

void main(){
  var coder = new Flutter('Tracy', 23);
  print(coder.introduce());
  print(coder.android());
  print(coder.ios());
}