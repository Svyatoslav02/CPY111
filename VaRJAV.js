
let i=0;

console.log(++i + 5);//6

// +=  -=  *= /=

let a =1;
a+=5;//6

let numb= +prompt('Введіть число 1000','');

if(numb<1000){alert('Мало!!!');}
else if(numb>1000){alert('Забагато!!!!');}
else{alert("OK");}

let result = (numb<1000) ? 'Мало!' :
(numb>1000)?'more':
"ok"

switch(result){
case 100:
    alert('hundred');
    break;
case 1000:
        alert('thousand');
        break;

default:
        alert(numb);

}

if(false){alert("Hello")}