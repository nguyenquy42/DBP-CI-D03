isHarshad = (num) => {
    let sum = 0, temp = num;
    while(temp){
       sum += temp % 10;
       temp = Math.floor(temp/10);
    }
    return num % sum === 0;
 }
harshadNum = (number) => {
    if(!isHarshad(number)){
       return -1;
    }
    let streak = 1, prev = number-1, next = number+1;
    while(isHarshad(prev) && prev > 0){
       streak++;
       prev--;
    }
    while(isHarshad(next)){
       streak++;
       next++;
    }
    return streak;
 };
 console.log(harshadNum(1014));