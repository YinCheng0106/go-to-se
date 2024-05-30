void main(){
  var map = {
    'key1' : 'value1',
    'key2' : 'value2',
    'key3' : 'value3',
  };

  print(map['key1']); //Output: value1
  print(map['test']); //Output: null

  map['key4'] = 'value4';

  print(map.length); //Output: 4
  print(map.containsKey('value1')); // Output: false

  print(map.entries); 
  // Output： (MapEntry(key1: value1), MapEntry(key2: value2), MapEntry(key3: value3), MapEntry(key4: value4))
  print(map.values); // Output: (value1, value2, value3, value4)
}