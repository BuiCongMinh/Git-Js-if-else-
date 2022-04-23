console.log("---Toán tử số học----");
console.log("---Bai 1----");
var x = 8;
// var a = 1 + x++ + 9 ; console.log(a);
    //  1 + 8 +  9 = 18
// var b = 7 + ++x + 3 ; console.log(b);
    //  7 + 9 + 3  = 19 
// var c = 5 + x-- + 10 ; console.log(c);
    // 5 +  8  +  10 = 23
var d = 6 + --x + 11 ; console.log(d);
    //  6 +   7  + 11  = 24

console.log("---Bai 2----");
var a = 6 ; console.log("Cạnh a: ", a);
var b = 6 ; console.log("Cạnh b: ", b);
var c = 6 ; console.log("Cạnh c: ", c);
var p = c + b + a 
console.log(`chu vi tam giác là: `,p);
var s = Math.sqrt(p*(p-a)*(p-b)*(p-c))

var kq = a === b && b === c ? 
        console.log("Đây là tam giác đều => diện tích tam giác này là :",s) : 
        console.log("Đây là tam giác thường => diện tích tam giác thường này là: ",s);
        

console.log("---Bai 3----");
var d = 6 ; console.log("Đường kính hình tròn: ",d);
var s = (d/2)**2 * Math.PI
var p = d * Math.PI
console.log("Diện tích hình tròn là: ", s);
console.log("Diện tích hình tròn là: ", p);

console.log("---Bai 4----");
var x = 6 ; console.log("Chiều dài: ",x); 
var y = 6 ; console.log("Chiều dài: ",y); 
var p = (x+y)*2 ; 
var s = x*y ;
var kq = x === y 
? console.log(`Đầy là hình vuông. 
Vậy chu vi hình vuông này là: ${p}
Vậy diện tích hình vuông này là:${s} ` ):
 console.log(`Đây là hình chữ nhật ! 
Diện tích hình chữ nhật này là: ${s}
Chu vi hình chữ nhật này là: ${s} `);


console.log("---Bai 5----");
var r = 9 ; console.log("Bán kính bán nguyệt: ",r);
var d = 2*r ; console.log("Đường kính bán nguyệt:; ",d);
var p =(d * Math.PI)/2 ; console.log("Chu vi bán nguyệt: ", p);     
var s = (r**2 * Math.PI)/2 ; console.log("Diện tích bán nguyệt: ",s);



console.log("------Toán tử ba ngôi----------");
console.log("-------Bài 1----------");
var diem =0
var kq = diem< 0? console.log("không hợp lệ ") : 
        diem >= 0 && diem <= 4 ? console.log("Kém"):
        diem > 4 && diem < 6.5 ? console.log("Trung Bình"):
        diem >= 6.5 && diem < 8 ? console.log("Khá"): 
        diem >= 8 && diem <= 10 ? console.log("Giỏi"): console.log("Ko hợp lệ !");



console.log("-------Bài 2----------");
var sdt = [0,1,2,3,4,5,6,7,8] 
var kq = sdt.length == 0 ? "Ko được để trống" : 
            sdt.length < 10 || sdt.length> 10 ?  " số điện thoại ko hợp lệ" : ` Số điện thoại: ${sdt}`

console.log(kq);

console.log("-------Bài 3----------");
var x = -9.2235
var kq  =  x % 1 === 0 ? `${x} là số nguyên`: `${x} là số thập phân ` 
console.log(kq);

var amduong = kq < 0 ? " âm" : "dương"
console.log(kq,amduong); 


console.log("-------Bài 4----------");

var tuoi = -1 ; console.log("Tuổi: ", tuoi);
var kq = tuoi < 13 && tuoi > 0 ? "trẻ em":
    13 <= tuoi && tuoi <= 17 ? "Thiếu niên":
    18 <= tuoi && tuoi <= 39 ? " Trưởng thành" :
    40 <= tuoi && tuôi <= 65 ? "Trung niên" : 
    65 < tuoi ? "Già" : "Chưa sinh ra! "  
console.log(kq);


// console.log("-------Bài 5----------");
// var button 
// var 


console.log("-------Bài 7----------");
var a = 3 ;
var b = -5 ;
var c = 2;
var lamda= (b**2)- (4*a*c) ; console.log("lamda: ", lamda);
var kq  = a==0 && b==0 ? "Phương trình vô nghiệm" :
        a==0 ? `Phương trình có một nghiệm ${-c/b}`:
        lamda==0 ? ` Phương trình có nghiệm kép x1= x2= ${-b/(2*a)}`:
        lamda > 0? `phương trình có hai nghiệm x1= ${(-b+Math.sqrt(lamda))/(2*a)}, x2= ${(-b-Math.sqrt(lamda))/(2*a)} `:
        "Phương trình vô nghiệm"
console.log(kq);




