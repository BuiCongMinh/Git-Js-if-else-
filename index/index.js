// var user1 = {
//     name : 'tung',
//     diem : 8, 
//     lop : 'k'
// } 
// var user2 = {
//     name : 'tuan',
//     diem : 8, 
//     lop : 'a'
// }


// if (user1.diem > user2.diem){
//     console.log(user1, user2);
// }else if (user1.diem === user2.diem) {   // user1.diem <= user2.diem
//     if(user1.lop < user2.lop){
//         console.log(user1,user2);
//     }
//     else if(user1.lop === user2.lop){
//         if(user1.name < user2.name){
//             console.log(user1,user2);
//         }
//         else{
//             console.log(user2,user1);
//         }
//     }
//     else{
//         console.log(user2,user1);
//     }
// }else{
//     console.log(user2,user1);
// }



// console.log("======Bài Anh Thái==========");

// if(user1.diem > user2.diem){
//     console.log([user1,user2]);
// }else if (user1.diem < user2.diem){
//     console.log([user2,user1]);
// }else{
//     if(user1.lop< user2.lop){
//         console.log([user1,user2]);
//     }else if (user1.lop > user2.lop){
//         console.log([user2,user1]);
//     }else{
//         if(user1.name <user2.name){
//             console.log([user1,user2]);
//         }else{
//             console.log([user2,user1]);
//         }
        
//     }
// }

// console.log("====Bài 2====");
// console.log("====Bài tự làm====");
// var so = 430;

// if(so >0 && so <= 50 ) {
//     console.log("Giá tiền: ",so*2000);
// }else if(so > 50) {
//     if(so >50 && so <=100 ){
//         console.log("Giá tiền: ",(so-50)*2500+ 50*2000);
//     }else{
//         if(so > 100 && so<=150){
//             console.log("Giá tiền: ",(so-50)*3000+ 50*(2000+2500));
//         }else{
//             if(so>150 && so<=200){
//                 console.log("Giá tiền: ",(so-50)*4500+ 50*(2000+2500+300));
//             }else{
//                 if(so > 200 && so<= 250){
//                     console.log("Giá tiền: ",(so-50)*5000+ 50*(2000+2500+300+4500));
//                 }else{
//                     console.log("Giá tiền: ",(so-50)*6000+ 50*(2000+2500+300+4500+5000));
//                 }
//             }
//         }
//     }
// }else{
//     console.log("người tối cổ");
// }

// console.log("====Bài anh Thái====");
// var number = 430
// var money 
// if(number<=50){
//     money= number *2000
// }else if(number<=100){
//     money = 50*200 +(number- 50)*2500
// }else if(number<=150){
//     money = 50*(2000+2500) +(number-100)*3000
// }else if(number<=200){
//     money = 50*(2000+2500+3000) +(number-150)*4500
// }else if(number<=250){
//     money = 50*(2000+2500+3000+4500) +(number-200)*5000
// }else{
//     money = 50*(2000+2500+3000+4500+5000) +(number-250)*6000
// }
// console.log(money);


// console.log("======Vòng lặp (do While) ====");
// var x =0 
// while(x < 10){
//     console.log(3, x);
//     x++
// }
// console.log("===============");
// console.log(`Dung vòng lặp while in ra các số trong khoảng từ 0 > 10`);

// var i = 0                //xuất phát 
// do{
//     console.log(3,i);
//     i ++                    //tốc độ chạy
// }
// while (i<10)                 // đích đến

// console.log("ỉn ra các số chẵn trong khoảng từ 30 > 10");
// console.log("dùng do while");
var so = 30 
do{
    console.log(so);
    so-=2
}while(so>=10 ) // điều kiện dừng

console.log("=====Vòng lặp for=====");
for(var i =0 ; i<10; i++){
    console.log(i);
}
console.log("==mảng== ");
var arr = [3,5,7,8,2,6]
for(i = 0; i<  arr.length; i++){
    console.log(arr[i]);
}

console.log("Tính tổng tất cả phần tử trong arr sau:");
var arr = [3,5,2,1,5,4,1,5] 
var tong = 0 
for(var i= 0; i<arr.length; i++){
    console.log("cũ",tong);
    tong = tong + arr[i];
    console.log("Mới", tong);
}

console.log("Tính tích tất cả phần tử trong arr sau:");
var arr = [3,5,7,9,8,2,4]
var tich = 1
for(var i = 0; i<arr.length; i++){
    tich = tich * arr[i]
    console.log(tich);
}
console.log("Duyệt object");
var object ={
    a: 1 ,
    b: 2 ,
    c: 3

}
for (var key in object){
    console.log(object[key]); // khai báo linh động
}


console.log("===========Cho một data=========");
console.log("=====Tính tổng điểm thi học sinh =====");
var object= {toan: 5, van: 8 , anh: 4}
var tongdiem = 0
for(var key in object){
    tongdiem = tongdiem + object[key]
    // console.log(tongdiem);
}
console.log(tongdiem);


console.log("Tính tổng 3 số lẻ đầu tiên");

var arr = [3,2,10,5,7,9,8,2,4] ;
var tong = 0 ;
dem = 0;
for(var i=0 ;i<arr.length; i++ ){
    if (i % 2==1 ){
        dem++
        console.log(arr[i]);
    }
    // console.log(arr[i]);
}





