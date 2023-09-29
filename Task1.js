function reverse(num){
    let str = num.toString();
    let ans = "";
    for(let i=str.length-1;i>=0;i--){
        ans += str[i];
    }
    return ans;
}

console.log(reverse(7843));
console.log(reverse(32243));