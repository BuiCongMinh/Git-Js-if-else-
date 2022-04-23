// in ba số lẻ đầu tiên 
var arr = [3,2,10,5,7,9,8,2,4] ; console.log(arr);
var j =0;
for (var i= 0 ; i< arr.length; i++){
   
    if(arr[i]%2 !==0 ){
        console.log(arr[i]);
        j+=1;
        
    }
    if(j==3){
        break
    }
    
    // console.log(arr[i]);
}


