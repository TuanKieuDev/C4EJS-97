// var a = 5;
        // let b = 10;


        // console.log(a);
        // console.log(b);

        // a = 50;
        // b = 100;

        // console.log(a);
        // console.log(b);

        // const PI = 3.14;

        // console.log(PI);

        // let c = a + b;

        // console.log(c);
        // let d=a*b;
        // let e=a/b;
        // let m=a%b;
        // let n=Math.sqrt(a);
        // let p=a*a;//Math.pow(a,2)
        // let r = a**b;

        //lay du lieu tu users
        // let name = prompt("Nhập tên: ");
        // console.log("Xin chao "+name);

        // let year=prompt("Nhap nam sinh: ")
        // let currentyear=prompt("Nhap nam hien tai: ");
        // let age = currentyear - year;        console.log("Ban dang " + age + " tuoi");
        
        // let x = Number(prompt("Moi ban nhap vao so: "));
        // if(x>10) {
        //     console.log("So nhap vao lon hon 10");
        // }
        // else if(x==10){
        //     console.log("So nhap vao = 10");
        // }
        // else {
        //     console.log("So nhap vao nho hon 10");
        // }

    //     let height = Number(prompt("Nhap vao chieu cao(m): "));
    //     let weight = Number(prompt("Nhap vao can nang(kg): "));
    //     let bmi = weight/(height*height);
    //     if(height >0 && weight >0){
    //     if(bmi<18.5){
    //         console.log("Ban gay qua, tuy nhien nguy co mac benh thap");
    //     }
    //     else if(bmi<=24.9){
    //         console.log("Co the cua ban chuan nhu nguoi mau, nguy co mac benh binh thuong");
    //     }
    //     else if(bmi<=29.9){
    //         console.log("Ban hoi beo do, nguy co mac benh cao");
    //     }
    //     else if(bmi <=34.9){
    //         console.log("Ban bi beo phi cap do 1, nguy co mac benh cao");
    //     }
    //     else if(<=39.9){
    //         console.log("Ban bi beo phi cap do 2, nguy co mac benh rat cao");
    //     }
    //     else {
    //         console.log("Ban bi beo phi cap do 3, nguy hiem");
    //     }
    // }
    // else{
    //     console.log("Moi nhap lai chieu cao, can nang.");
    // }

    // for(let index=1;index<=10;index++){
    //     console.log(index);
    // }
    // console.log("So le:");
    // for(let index=1;index<=10;){
    //     console.log(index);
    //     index + 2;
    // }
    // console.log("So chan")
    // for(let index=2;index<=10;){
    //     console.log(index);
    //     index + 2;
    // }
    // console.log("revert:")
    // for(let index=10;index>=10;index--){
    //     console.log(index);
    // }

//     console.log("Bai 5:");
//     let m = Number((prompt("Nhap m(m<=n): ")));
//     let n = Number((prompt("Nhap n: ")));
//     if(m>n){
//         console.log("Nhập lại");
//     }
//     else{
//     for(let index=m;index<=n;index++){
//         console.log(index);
//     }
//     console.log("So le tu m den n");
//     for(let index=m;index<=n;index++){
//         if(index%2==1) console.log(index);
//     }
//     console.log("revert:");
//     for(let index=n;index>=m;index--){
//         console.log(index);
//     }
// }

// let sum=0;
// for(let index=0;index<=10;index++){
//     sum+=index;
// }
// console.log(sum);

// let N = Number(prompt("Nhap vao N: "));
// let sum = 0;
// for(let i=1;i<=N;i++){
//     if(i%2==1){
//         sum+=i;
//     }
// }
// console.log(sum);

let N = Number(prompt("Nhap vao N: "));
let suma = 0, sumb = 0, sumc = 0, sumd = 1, sume1 = 1, sume2 = 0;
// console.log("Phan a:");
// for(let i = 1;i<=N;i++){
//     suma+=1/i;
// }
// console.log(suma);
// console.log("Phan b:");
// for(let i = 1;i<=N;i++){
//     sumb+=1/(i*i+1);
// }
// console.log(sumb);
// console.log("Phan c:");
// for(let i = 2;i<=N;i++){
//     sumc+=(i-1)/i;
// }
// console.log(sumc);
// console.log("Phan d:");
// for(let i = 1;i<=N;i++){
//     sumd*=i;
// }
// console.log(sumd);
console.log("Phan e:");
for(let i = 1;i<=N;i++){
    for(let j = 1;j<=i;j++){
        sume1*=j;
    }
  sume2+=sume1;
  sume1=1;
}
console.log(sume2);
