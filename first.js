// Arithmetic operators
let x = 5;
let y = 2;
let z = x + y;
document.getElementById("demo").innerHTML = z;
// Assigemaent operators
let x = 10;
x += 5;
document.getElementById("demo").innerHTML = x;
// comparison operators
let x = 5
let y = 4
console.log(x == y)
// logical operators and if or else include ?..........
let age = 50;
if (age >= 20) {
    document.write("this is value.");
} else {
    document.write("this is not value.")
};
// if and else shortcut name is ternary
var age = 24;
var dirve = age >= 18 ? 'yes drive' : 'no drive';
// topic switch case and break
let month = 1;
switch (month) {
    case (1): document.write("january")
}
// next is function and return
document.write("Total subject - 5 <br> Total marks - 500 <br> <br>")
function name(hinid, eng, math, physics, chemitry); {
    var a = hinid + eng + math + physics + chemitry;
    return a;
};
var b = name(50 + 50 + 50 + 50 + 50);
document.write("marks obtain -" + b + '<br>');

function myintro() {
    document.write("this a beatiful world");
    // window Event open and close....
    var mywindow;
    function openwindow() {
        mywindow = window.open("http://www.google.com", " ", "width=500px,height=250px");
    };
    function closewindow() {
        mywindow.close();
    };
    // window onload
    window.onload = function () {
        let body = document.getElementById('body')
        let button = document.getElementById('button')
        button.onclick = function () {
            if (body.className == "black") {
                body.className = "white";
                button.className = "black";
            } else {
                body.className = "white";
                button.className = "black";
            }
        };
    };
    // nested loop
    for (var a = 1; a <= 100; a = a + 10) {
        for (var b = a; b < a + 10; b++) {
            document.write(b);
        }
        document.write(" <br> <br>")

    }
    // arrys methods 
    document.write("<ul>")
    let my = [];
    for (var g = 0; g < 3; g++) {
        my[g] = prompt("Enter the Value : hi")
    };

    for (let a = 0; a < 3; a++) {
        document.write("<li>" + my[a] + "</li>")

    }
    document.write("</ul>")
    // multidimensional  array

    var syed = [
        ["harry", "whatsapp", "facebook", "12"],
        ["harry", "whatsapp", "facebook", "14"],
        ["harry", "whatsapp", "facebook", "13"],
        ["harry", "whatsapp", "facebook", "33"]
    ]; document.write(syed.length)
    document.write("<table border='1px' cellspacing='0'>")
    for (var a = 0; a < 4; a++) {
        document.write("<tr>");
        for (var b = 0; b < 4; b++) {
            document.write("<td>" + syed[a][b] + " " + "</td>")
        }
        document.write("<br>")
    }
    document.write("</tr>")
    document.write("</table>")
    // for in loop method
    var a = {
        fname: "syed",
        lname: "alu",
        age: 12,
        country: "ndia"
    };

    for (var hi in a) {
        document.write(hi + " : " + a[hi] + "<br>");
    }
    // map array method
    var a = [
        { fname: "syed", lname: "ali" }
    ]
    var b = a.map(hi);
    document.write(b);

    function hi(y) {
        return y.fname + " " + y.lname
    }
    // create html with java script DOM
    var newdiv= document.createElement('div')
console.log(newdiv)

newdiv.className = "box"
newdiv.id = 'gi'


var a = document.createTextNode('hello how are you')
newdiv.appendChild(a)


var z = document.querySelector('#this')
var form = document.querySelector('form')
newdiv.style.color='green'
z.insertBefore(newdiv,form)

document.getElementById("hi").onclick = a;
function a(){
    document.getElementById("hi").style.color='white'
}
document.getElementById("hi").addEventListener('mouseenter',function(){
    document.getElementById('hi').style.border = "5px solid gray"
});
// add,toggle,items,contains and remove DOM methods
document.getElementById("hi").addEventListener("click",tony);
function tony(){
    document.getElementById("hi").classList.remove("efg");
    var a = document.getElementById("hi").classList;
    console.log(a);
}document.getElementById("hi").addEventListener("click",tony);
function tony(){
    document.getElementById("hi").classList.remove("efg");
    var a = document.getElementById("hi").classList;
    console.log(a);
}
// replace and remove
var e = document.createElement('li')
var a= document.createTextNode('sumair')
e.appendChild(a)
// console.log(e)
 var r = document.getElementById('this');
 var s = r.children[2];
 r.replaceChild(e,s)

 var e = document.createElement('li')
var a= document.createTextNode('sumair')
e.appendChild(a)
// console.log(e)
 var r = document.getElementById('this');
 var s = r.children[1];
 r.removeChild(s)
// copy list another list
 var a = document.getElementById('this').children[0];
var r = a.cloneNode(true );
document.getElementById('this1').appendChild(r)

// methods contains
var a = document.getElementById('this');
var v = document.getElementById('');
var r = a.contains(v)
console.log(r)

// attibute hasattribute methods
var a = document.getElementById('is');
var s = a.hasChildNodes();
console.log(s)
// isequal methods
var a = document.getElementById('this').firstElementChild;
var b = document.getElementById('then').children[0];
var r = a.isEqualNode(b);
console.log(r)

// animation methods setinterval and clearinterval
var c = 0;
setInterval(a, 500);
function a(){
    c = c+ 20;
    var z = document.getElementById('is');
    z.style.marginLeft = c + 'px';
}

// setTimeout Animation clear
var a = setTimeout(a,3000);
function a(){
var z = document.getElementById('is');
z.style.background='black'    
}
var a = setTimeout(z, 3000);

function z() {
    var c = document.getElementById('is');
    c.style.width='500px'
}
function mfunction(){
    clearTimeout(a);
}
// window height and width
var i = window.innerWidth;
console.log(i)
var o = window.outerWidth;
console.log(o)