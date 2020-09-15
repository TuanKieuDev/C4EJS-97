// let R = Number(prompt("Nhap ban kinh: "));
// console.log("Bai 1: ")
// console.log(`Chu vi la: ${(2*Math.PI*R).toFixed(2)}`);
// console.log(`Dien tich la: ${(Math.PI*R*R).toFixed(2)}`);

// let dai=Number(prompt("Nhap chieu dai: "));
// let rong=Number(prompt("Nhap chieu rong: "))
// console.log("Bai 2:");
// console.log(`Chu vi la: ${(dai+rong)*2}`);
// console.log(`Dien tich la: ${dai*rong}`);

let x = Number(prompt("Nhap vao x: "));
console.log("Bai 3: ");
let y1 = 4*(x*x + 10*x*Math.sqrt(x)+3*x+1);
console.log("Gia tri cua y1 = "+y1);
let y2 = (Math.sin(Math.PI*x*x)+Math.sqrt(x*x+1))/(Math.exp(2*x)+Math.cos((Math.PI)/4*x))
console.log("Gia tri cua y2 = "+y2);

// let X = Number(prompt("Nhap vao so tien: "));
// let m=X;
// let dem100,dem50,dem20,dem10;
// dem100 = Math.floor(X/100000);
// X=X-dem100*100000;
// dem50=Math.floor(X/50000);
// X-=dem50*50000;
// dem20=Math.floor(X/20000);
// X-=dem20*20000;
// dem10=Math.floor(X/10000);
// X-=dem10*10000;
// console.log(m + " = " + dem100 +"to100000 +" + dem50+"to50000 +" + dem20+ "to20000 +" + dem10+"to10000");


// let X=Number(prompt("Nhap vao 1 so: "));
// let m=X;
// let a=Math.floor(X/100);
// X-=a*100;
// let b=Math.floor(X/10);
// X-=b*10;
// console.log(`${m} = ${a} + ${b} + ${X} = `+ (a+b+X));