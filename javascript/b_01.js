/* for in */
const num = [1, 2, 3, 4, 5];

//for(key in object){
//  code
//}

for(let x in num){
    //這邊的 x 是索引值(index)
    console.log(`Index: ${x}`);
    console.log(`Number: ${num[x]}`);
}