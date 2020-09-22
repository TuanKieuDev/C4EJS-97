// console.log("Init");
// let movies = ['Naruto','One piece','Bleach','Doraemon'];
// console.log(movies);

// let newMovie = prompt("Nhập tên phim mới:");
// movies.push(newMovie);
// console.log(movies);

// let i =Number(prompt("Nhập chỉ số i: "));
// console.log(movies[i]);

// let phim = prompt("Nhập tên phim: ");
// let i =Number(prompt("Nhập chỉ số cần thay:"));
// movies[i] = phim;
// console.log(movies);

// let i =Number(prompt("Nhập chỉ số cần xóa:"));
// let n =Number(prompt("Nhập số mảng cần xóa: "));
// movies.splice(i,n);
// console.log(movies);

// for(let i = 1;i<=movies.length;i++){
//     console.log(i+" "+movies[i-1]);
// }

// for(let i = 0;i<movies.length;i++){
//     movies[i]=movies[i].toLowerCase();
// }
// console.log(movies);

// let name;
// do{
//     name = String(prompt("Nhập tên:"));
//     alert("Your user name is too long");
// }
// while(name.length>15);
// alert("Good username");

// let heighs = [150,155,170,145,180];
// let sum = 0;
// for(let i=0;i<heighs.length;i++){
//     console.log(heighs[i]);
//     sum+=heighs[i];
// }
// let average = sum/heighs.length
// console.log(`Chieu cao trung binh la: ${average}`);
// console.log("Nhung nguoi cao tren trung binh la: ");
// for(let i=0;i<heighs.length;i++){
//     if(heighs[i]>average) console.log(heighs[i]);
// }
// let max = heighs[0];
// for(let i=0;i<heighs.length;i++){
//     if(max<heighs[i]) max = heighs[i];
// }
// console.log(`Nguoi cao nhat la: ${max}`);
// let min = heighs[0];
// for(let i=0;i<heighs.length;i++){
//     if(min>heighs[i]) min = heighs[i];
// }
// console.log(`Nguoi thap nhat la: ${min}`);
// for(let i=0;i<heighs.length;i++){
//     for(let j=i+1;j<heighs.length;j++){
//         if(heighs[j]>heighs[i]){
//             let temp = heighs[j];
//             heighs[j] = heighs[i];
//             heighs[i]= temp;
//         }
//     }
// }
// console.log("Mang da sap xep  giam dan la: ");
// console.log(heighs);
// for(let i=0;i<heighs.length;i++){
//     for(let j=i+1;j<heighs.length;j++){
//         if(heighs[j]<heighs[i]){
//             let temp = heighs[j];
//             heighs[j] = heighs[i];
//             heighs[i]= temp;
//         }
//     }
// }
// console.log("Mang da sap xep  tang dan la: ");
// console.log(heighs);

// let k=0;
// console.log("Nhung nguoi thap hon 160 la: ");
// for(let i=0;i<heighs.length;i++){
//     if(heighs[i]<160){
//          k++;
//          console.log(heighs[i]);
// }
// }
// console.log(`So nguoi thap hon 160 la: ${k}`);
// let a=[];
// for(let i =0;i<heighs.length;i++){
//     if(heighs[i]<160) a.push(heighs[i]);
// }
// console.log(`Co ${a.length} nguoi, do la: ${a}`);

let a = [];
let N = Number(prompt("Nhập N:"));
for(let i = 1;i<=N;i++){
    if(N%i==0) a.push(i);
}
if(a.length==2){
    console.log("Đây là SNT");
}
else{
    console.log("Không phải SNT");
    console.log("Uoc la: "+ a);
}