// console.log("Bai 1: ");
// for(let i = 0;i<=100;i++){
//     console.log(i);
// }


// console.log("Bai 2: ");
// for(let i=100;i>=0;i--){
//     console.log(i);
// }

// console.log("Bai 3: ");
// for(let i=0;i<=100;i+2){
//     if(i%2==0) console.log(i);
// }

// console.log("Bai 4: ");
// for(let i=100;i>=0;i--){
//     if(i%2==0) console.log(i);
// }

// console.log("Bai 5:");
// let sum=0;
// let N = Number(prompt("Nhập vào N: "))
// for(let i = 1;i<=N;i++){
//     sum+=i;
// }
// console.log(sum);

// console.log("Bai 6: ");
// let N=Number(prompt("Nhap vao N: "));
// let sum = 0;
// for(let i=0;i<=N;i++){
//     sum=sum+(2*i+1);
// }
// console.log(sum);

// console.log("Bai 7: ");
// let N=Number(prompt("Nhap vao N: "));
// let sum = 0;
// for(let i=1;i<=N;i++){
//     sum=sum+(2*i);
// }
// console.log(sum);

// console.log("Bai 8:");
// let N = Number(prompt("Nhap N: "));
// let sum = 0;
// for(let i = 1;i<=N;i++){
//     sum+=1/i;
// }
// console.log(sum);

// console.log("Bai 9: ");
// let N = Number(prompt("Nhập vào N: "));
// let sum = 0;
// for(i=1;i<=N;i++){
//     sum+=1/(i*(i+1));
// }
// console.log(sum);

console.log("Bai 10: ");
let N=Number(prompt("Moi nhap vao N: "));
let x1=1,x2=1,sum=0,sum2=0;
if(N==1 || N==2 ) {
    console.log(`Phan a: 1`);
    if(N==1) console.log(`Phan b: 1`);
    if(N==2) console.log(`Phan b: 2`);
}
else{
for(let i = 3; i<= N; i++){
    sum=x1+x2;
    x1=x2;
    x2=sum;
    sum2+=sum;
}
console.log(`Phan a: ${sum}`);
console.log(`Phan b: ${sum2+2}`);
}

// console.log("Bai 11: ");
// let a = Number(prompt("Nhập vào a: "));
// let b = Number(prompt("Nhập vào b: "));
// for(let i = 1;i<=b;i++){
//     for(let j = 1;j<=a;j++){
//         document.write("*");
//     }
//     document.write("</br>");
// }

// console.log("Bai 12: ");
// let a = Number(prompt("Nhập vào a: "));
// for(let i=1;i<=a;i++){
//     for(let j=1;j<=a;j++){
//         if(j<=i) document.write(" * ");
//         else document.write("   ");
//     }
//     document.write("</br>");
// }

//Yeu cau nguoi dung nhap vao 1 so, neu<8 thi nhap lai

// let N;
// do{

//      N = Number(prompt("Nhập số: "));
     
// }
// while(N<8 || N >10);

//Nhap pass co do dai >=8 ki tu
//Nhap pass>=8 ki tu va chua chu @;(indexOf('@') ; includes('@'))

// console.log("Phan a:");
// let pass;
// do{
//     pass = prompt("Nhập pass: ");
// }
// while(pass.length<8)
// console.log(pass);
// let pass;
// while(true){
//     pass = prompt("Nhập pass: ");
//     if(pass.length>=8 && pass.includes('@')) break;
// }
// console.log(pass);

//Nhập 1 số, tìm tất cả các ước của số đó. 
//Kireemr tra 1 số có phải SNT k
// console.log("Phan a:");
// console.log("Các ước là:");
// let N = Number(prompt("Nhập vào 1 số: "));
// for(let i = 1;i<=N;i++){
//     if(N%i==0) console.log(i);
// }
// console.log("Phần b: ");
// let N = Number(prompt("Nhập vào 1 số: "));
// let k = 0;
// for(let i=2;i<=Math.sqrt(N);i++){
//     if(N%i==0) k=1;
// }
// if(k==0){
//     console.log("Đây là SNT");
// }
// else{
//     console.log("Không phải số nguyên tố");
// }