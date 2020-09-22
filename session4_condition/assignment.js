// let year = Number(prompt("Nhap vao nam: "));
// console.log("Bai 1: ");
// if(year%4==0){
//     if(year%100 == 0 && year%400 !=0) console.log("Nam " + year + " co 365 ngay");
//     else console.log("Nam " + year +" co 366 ngay");
// }
// else{
//     console.log("Nam " + year +" co 365 ngay");
// }

// let month = Number(prompt("Nhap vao thang: "));
// console.log("Bai 2: ");
// if(month == 1 || month == 3 || month ==5 || month ==7 || month ==8 || month == 0 || month ==12){
//     console.log("Thang " +month+ " co 31 ngay");
// }
// else if(month == 2){
//     console.log("Thang " +month+" co 28 ngay neu nam thuong, 29 ngay neu nam nhuan");
// }
// else{
//     console.log("Thang " +month+" co 30 ngay");
// }

// let month = Number(prompt("Nhap vao thang: "));
// console.log("Bai 3: ");
// if(month<1 || month>12){
//     console.log("Thang ban vua nhap khong hop le");
// }
// else{
//     if(month>=1 && month<=3){
//         console.log("Mua xuan");
//     }
//     else if(month>=4 && month<=6){
//         console.log("Mua he");
//     }
//     else if(month>=7 && month<=9){
//         console.log("Mua thu");
//     }
//     else{
//         console.log("Mua dong");
//     }
// }

// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// let c = Number(prompt("Nhap vao c: "));
// console.log("Bai 4: ");
// if(a<b && a<c){
//     if(b<c){
//         console.log(a+" "+b+" "+c);
//     }
//     else{
//         console.log(a+" "+c+" "+b);
//     }
// }
// if(b<a && b<c){
//     if(a<c){
//         console.log(b+" "+a+" "+c);
//     }
//     else{
//         console.log(b+" "+c+" "+a);
//     }
// }
// if(c<b && c<a){
//     if(b<a){
//         console.log(c+" "+b+" "+a);
//     }
//     else{
//         console.log(c+" "+a+" "+b);
//     }
// }

// let a = Number(prompt("Nhap vao a: "));
// let b = Number(prompt("Nhap vao b: "));
// let c = Number(prompt("Nhap vao c: "));
// console.log("Bai 5: ");
// if(a+b>c && b+c>a && a+c>b){
//     console.log("Đây là tam giác");
//     if(a==b || a==c || b==c){
//         console.log("Tam giác cân");
//     }
//     else if(a==b && a==c){
//         console.log("Tam giác đều");
//     }
//     else if(a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a){
//         console.log("Tam giác vuông");
//     }
//     else{
//         console.log("Tam giác thường");
//     }
// }
// else{
//     console.log("Không phải tam giác");
// }

let N = Number(prompt("Moi nhap vao kwh : "));
let price;
if(N>0 && N<=50){
    price = N*1.678;
}
else if(N<=100){
    price = N*1.734;
}
else if(N<=200){
    price = N*2.014;
}
else if(N<=300){
    price = N*2.536;
}
else if(N<=400){
    price = N*2.834;
}
else if(N>400){
    price = N*2.927;
}
else{
    console.log("Mời nhập lại số kwh > 0");
}
console.log("Số tiền điện là: "+price+ " VNĐ");