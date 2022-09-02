// let ele=document.createElement("div");
// ele.setAttribute("class","container");
// let ele1=document.createElement("div");
// ele1.setAttribute("class","row");
// let ele2=document.createElement("div");
// ele2.setAttribute("class","col-1");

// ele.append(ele1);
// ele1.append(ele2)
// document.body.append(ele);

// function foo(){
//     var fn=document.getElementById("fn").value;
//     console.log(fn);


//     var mn=document.getElementById("mn").value;
//     console.log(mn);


//     var ln=document.getElementById("ln").value;
//     console.log(ln);


//     var en=document.getElementById("em").value;
//     console.log(en);
// }

var l1=label("label","for","fn","First Name");
var br1=linebreaker("br");
var I1=inputelement("input","type","text","id","fn");
var br2=linebreaker("br");
document.body.append(l1,br1,I1,br2);

var l2=label("label","for","mn","Middle Name");
var br3=linebreaker("br");
var I2=inputelement("input","type","text","id","mn");
var br4=linebreaker("br");
document.body.append(l2,br3,I2,br4);

var l3=label("label","for","mn","Middle Name");
var br5=linebreaker("br");
var I3=inputelement("input","type","text","id","mn");
var br6=linebreaker("br");
document.body.append(l3,br5,I3,br6);

var l4=label("label","for","em","Email");
var br7=linebreaker("br");
var I4=inputelement("input","type","email","id","em");
var br8=linebreaker("br");
document.body.append(l4,br7,I4,br8);


var l5=label("label","for","cn","Contact");
var b7=linebreaker("br");
var I5=inputelement("input","type","text","id","cn");
var b8=linebreaker("br");
document.body.append(l5,b7,I5,b8);




function label(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
     ele.setAttribute(attrname,attrvalue);
     ele.innerHTML=content;
     return ele;
    
    }
function linebreaker(element){
        var ele=document.createElement(element);
        return ele;
        }

function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
            var ele=document.createElement(tagname);
            ele.setAttribute(attrname,attrvalue);
            ele.setAttribute(attrname1,attrvalue1);
            return ele;
            
            }        