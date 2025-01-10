// DOCUMENT OBJECT MODEL
//console.dir(document.body);


// Basic DOM traversing
//console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// console.dir(document.body.children.forest.children.tree1.children.flower);

//console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// MOVING UP THE DOM STRUCTURE
//console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure.parentElement);

//console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1].parentElement);

// TRAVERSING SIDEWAYS THROUGH THE DOM STRUCTURE
//console.dir(document.body.children.forest.children.tree2.previousElementSibling);

//console.dir(document.body.children.forest.children.tree1.nextElementSibling);


// ADDING TEXT USING INNER TEXT
document.body.children.forest.children.tree2.children.shrubbery.children.treasure.innerText = "Omatsola";

document.body.children.forest.children.tree2.children.shrubbery.children.treasure.innerHTML = "<em>My Treasure</em>";


// Accessing elements in the DOM
let element = document.getElementById("bug");

let spy = document.getElementsByClassName("insect");

//console.log(spy);
//console.log(element);

// let divElements = document.getElementsByTagName("div");

// let tagItem = document.getElementsByTagName("div").item(3);

let tagItem = document.getElementsByTagName("div").namedItem("bug");

console.log(tagItem);

// console.log(divElements);

// Element click handler
// <div id="one" onclick="alert('Ouch! Stop it!')">Don't click here!


// This and the DOM
//<button onclick="reveal(this)">Click here!</button>


// Manipulating element style
// <!DOCTYPE html>
// <html>
//   <body>
//     <script>
//       function toggleDisplay(){
//         let p = document.getElementById("magic");
//         if(p.style.display === "none") {
//           p.style.display = "block";
//         } else {
//           p.style.display = "none";
//         }
//       }
//     </script>
//     <p id="magic">I might disappear and appear.</p>
//     <button onclick="toggleDisplay()">Magic!</button>
//   </body>
// </html>

// Changing the classes of an element
// function disappear(){
//     document.getElementById("shape").classList.add("hide");
// }


// Manipulating attributes
// function changeAttr(){
//     let el = document.getElementById("shape");
//     el.setAttribute("style", "background-color:red;border:1px solid
// black");
//     el.setAttribute("id", "new");
//     el.setAttribute("class", "circle");
 
//   }


// Event listeners on elements
// document.getElementById("square").addEventListener("click",
//     changeColor);

// Creating new elements 
// let el = document.createElement("p");
// el.innerText = Math.floor(Math.random() * 100);
// document.body.appendChild(el);