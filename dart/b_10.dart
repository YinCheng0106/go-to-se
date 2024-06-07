void main(){
  /* class */
  var V = new Video('Dart Tutorial', 'Happy coding', '2019/9/14', 'https://123', 'https://456');
  print(V.title);
}

class Video{
  String title;
  String description;
  String publishTime;
  String thumbnail;
  String url;

  Video(String title, String description, String publishTime, String thumbnail, String url){
    this.title = title;
    this.description = description;
    this.publishTime = publishTime;
    this.thumbnail = thumbnail;
    this.url = url;
  }
}