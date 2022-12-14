function helloWorld(){
    console.log("Hello World");
}

helloWorld();

function sum(a,b){
    console.log(a+b);
}

sum(7,9);



let mul = (a, b) => a * b;

function fact(n){
    let fact=1;
    if(n==1 || n==0){
        console.log(fact);
    }else{
        for(let i=2;i<=n;i++){
            fact*=i;
        }
        console.log(fact);
    }
}

fact(5);