//Variable declaration section
let a;
let primeNum=[2];
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let display = document.getElementById('display');

let n =  0;
display.innerText=primeNum[n];

function nextPrime(n){
    var flag=1;
    let pNum = primeNum[primeNum.length-1];
    while(flag!=0) {
        pNum=pNum+1;
        for (var index = 2; index < pNum; index++) {
            flag=0;
            if (pNum%index==0) {
                flag=1;
                break;
            }
        }
    }
    primeNum.push(pNum);
    return pNum;
}

next.addEventListener('click',e =>{
    n+=1;
    display.innerText=nextPrime(n);
})

previous.addEventListener('click',e=>{
    primeNum.pop();
    display.innerText=primeNum[primeNum.length-1];
})

