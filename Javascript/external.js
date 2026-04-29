num="java :${10+20}"
console.log(num);
num='javascript :${10+20}'
console.log(num);
a=50;
b=50;
num=`addition of 10 and 20 :${a+b}`
num=50;
console.log(num);

num=true
console.log(num)

class SampleExample{
    display(){
        console.log("this is non-static display method in SampleExample class");
    }
    test(){
        console.log("text method")
    }
}
  
s1=new SampleExample()
s1.display()
s1.test()

function additionExample(){
    console.log(10+20)
}
additionExample()


num=330;

result=num%2==0?"Even Number":"odd Number"
console.log(result)

a=10;
b='10' 
c=null;
d=Symbol(10);
e=1542548498663n
let f;
console.log("type of variable a is:",typeof a);
console.log("type of variable b is:",typeof b);
console.log("type of variable c is:",typeof c);
console.log("type of variable d is:",typeof d);
console.log("type of variable e is:",typeof e);
console.log("type of variable f is:",typeof f);

let a=10;
a=20;
let a=20;

