function lexicographicalOrder(str){
    let arr = []
    for(let i=0;i<str.length;i++){
        arr.push(str[i]);
    }
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    ans = "";
    for(let i=0;i<str.length;i++){
        ans += arr[i];
    }
    return ans;
}
console.log(lexicographicalOrder("webmaster"));