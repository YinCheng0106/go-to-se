void main(){
  /* class */
  var V = new Video('Dart Tutorial', 'Happy coding', '2019/9/14', 'https://123', 'https://456');
  print(V.title);
}

class Video{
  //非空安全（null safety）功能
  //明確地允許它們為 null，否則會報錯
  //可以在宣告類別前方加入late
  late String title;
  late String description;``
  late String publishTime;
  late String thumbnail;
  late String url;

  Video(String title, String description, String publishTime, String thumbnail, String url){
    this.title = title;
    this.description = description;
    this.publishTime = publishTime;
    this.thumbnail = thumbnail;
    this.url = url;
  }
}