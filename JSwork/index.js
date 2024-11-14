console.log("hello js");
// const a=12;
var a=12;
if(a>10){
    // let b=5;
    a=23;
    console.log("a="+a);
}
console.log("hi, a="+a);
// console.log("hi, a="+b);
function fun(a,b,c=10){
    console.log("Hello");
    return a+b+c;
}
console.log(fun());
console.log(fun(24,6));

/*
function cCompiler(){
    return "C compiler";
}
function javaCompiler(){
    return "Java Compiler";
}
function selectLanguage(clbk){
    return "You have selected "+clbk();
}
const result=selectLanguage(javaCompiler);
console.log(result)
*/

/*
function selectLanguage(language){
    let data ;
    if (language =="C"){
        function cCompiler(){
            return "C compiler";
        }
        data=cCompiler();
    }
    if(language =="java"){
        function javaCompiler(){
            return "Java Compiler";
        }
        data=javaCompiler();
    }
    return data;
}
const result=selectLanguage();
console.log(result)
*/

//dom
/*
console.dir(document);
const div=document.getElementsByClassName("parent");
console.log(div);
div[0].innerHTML="<h2 style=color:red> Abes Engineering College</h2>";
const h1=document.createElement("h1");
h1.innerText="It was created";
h1.style.backgoundColor='cyan';
console.log(h1);
div[0].appendChild(h1);
const img=document.createElement('img');
img.src='../Images/place.jpg';
img.setAttribute("height","200");
console.log(img);
div[0].appendChild(img);
*/
// promises: accept,reject and pending state
/*
const disp=document.getElementById("disp");
console.dir(disp);
function getData(){
    console.log("Hello");
    disp.innerHTML="<h2>Hello You have called> </h2>"
}
*/
const promise = new Promise((resolve, reject) => {
    let a = 12;
    if (a > 10) {
      resolve({name:"Resolve",branch:"AIML-CSE"});
    } else {
      reject("rejected");
    }
  });

  promise.then((msg) => console.log(msg)).catch((msg) => console.log(msg));
