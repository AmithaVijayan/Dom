// let demo=document.getElementById("demo");                                    //getElementById
// console.log(demo);

//getElementsByClassName                                                        //getElementsByClassName
// let links=document.getElementsByClassName("links")
// console.log(links)
// for(let i=0;i<=links.length;i++)
// {
//     links[i].style.background="red";
// }

//without using class name

// let links=document.getElementsByTagName("a")                                    //getElementsByTagName
// // links[0].style.color="blue"
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.color="red";
//  }

// let demo=document.getElementById("demo")
// demo.setAttribute("title","title is a tooltip")                                    //add attributes
// demo.setAttribute("name","i am name")                                              //setAttribute method

//dom property 

//  let links=document.getElementsByTagName("a")
//  //html collections
//  //loop this links
//  for(let i=0;i<links.length;i++)
//  {
//      links[i].className="links-"+i;
//  }
// let links=document.getElementsByTagName("a")
// links.forEach(function(link,i) {
//     console.log(link)
    
// });      //Uncaught TypeError: links.forEach is not a function


// let links=document.getElementsByTagName("a");     //using spread operator
//  [...links].forEach(function(link,i) {
//    console.log(link);
//     link.className="links-"+i;
//  });

//  let links=document.getElementsByTagName("a");        //using array.from
//  Array.from(links).forEach(function(link,i) {
//    console.log(link);
//     link.className="links-"+i;
//  });
 
// let links=document.getElementsByTagName("a");        //using array.from
//   Array.from(links).forach(function(link,i) {
//     console.log(link);
//      link.className="links-"+i;
//   });
 
//   let links=document.getElementsByTagName("a");        //using array.from
//   Array.from(links).map(function(link,i) {
//     console.log(link);
//      link.className="links-"+i;
//   });
 

// function jspiders(){
//     return arguments;
// }

// let str="hello";
// let users=jspiders("aaaa","bbbbbbbb","ccccccc")

// for(let user of users){
//     console.log(user);
// }

// for(let s of str){
//     console.log(s)
// }

// let linkold=document.getElementsByTagName("a"); //html collection
// console.log(linkold,"tagname way")

// let linknew=document.querySelectorAll("a");  //nodeList
// //css selectors like id,class,element
// console.log(linknew,"select query way")

// let linkOdd=document.querySelectorAll("a:nth-child(odd)");
// let linkEven=document.querySelectorAll("a:nth-child(even)");

// linkOdd.forEach(odd=>odd.style.backgroung="red");

// let template=document.querySelector(".template");
// let demo=document.querySelector("#demo")
// let  p=document.querySelector("p");

// console.log(template);
// console.log(demo);
// console.log(p);

// let links=document.querySelectorAll("#template li:nth-child(odd)");
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.background="lightblue";
//       links[i].style.color="red";
     
//   }

//   let link=document.querySelectorAll("#template");
//    let links=document.querySelectorAll("#demo");
//   for(let i=0;i<=link.length;i++)
//  {
   
//      link[i].style.background="red";
//       link[i].style.color="white";
//        links[i].style.background="blue";
//       links[i].style.color="white";
     
//   }

  //  let links=document.querySelectorAll("#demo");
// for(let i=0;i<=links.length;i++)
//  {
//      links[i].style.background="blue";
//       links[i].style.color="white";
     
//   }

// let template=document.querySelector("template");
// console.log(template)

// let p=document.createElement("p");
// p.textContent="welcome";
// template.appendChild(p);


//to create form

// let form=document.createElement("form");
// form.setAttribute("method","GET");
// form.setAttribute("Action","#");

// let label_username=document.createElement("label");
// label_username.textContent="username";
// label_username.setAttribute("for","username");

// let label_password=document.createElement("label");
// label_password.textContent="password";
// label_password.setAttribute("for","password");

// console.log(form);
// console.log(label_username);
// console.log(label_password);

// let username_input=document.createElement("input");
// username_input.setAttribute("type","text");
// username_input.setAttribute("id","username");
// username_input.setAttribute("name","username");
// username_input.setAttribute("placeholder","enter username");
// username_input.className="form-control";

// let password_input=document.createElement("input");
// password_input.setAttribute("type","text");
// password_input.setAttribute("id","password");
// password_input.setAttribute("name","password");
// password_input.setAttribute("placeholder","enter password");
// password_input.className="form-control";

// let btn=document.createElement("button")
// btn.textContent="login";
// btn.classList.add("btn","btn-success","my-2")

// form.append(label_username,username_input,label_password,password_input,btn)

// document.body.classList.add("container","my-2","col-md-4","mx-auto");
// document.body.appendChild(form);

//dom events

// let template=document.getElementById("template");
// console.log(template);
// template.onclick=function(){
//   console.log("hey template");
//   this.textContent="i an playing..."
// };

// template.onmousemove=function(){
  
//   this.textContent=" playing..."
// };

// template.onmouseleave=function(){
  
//   this.textContent=" stopped..."
// };

// {/* <video controls>
//   <source src=""></source>

// </video> */}

// let template=document.getElementById("template");
// template.addEventListener("click",(event)=>{
//   console.log("i am addEventListener");
//   console.log(event.target);   //it prints current element
//   console.log(event.type);     //type of the event
//   console.log(this);           //window
//   console.log(event.clientX);   //x-axis position
//   console.log(event.clientY);   //y-axis position
// });

//set backgroung color
// let btn=document.getElementById("btn");
// btn.addEventListener("click" , (e) => {
//   document.body.style.background="red";
// });

//set backgroung color
//  let btn=document.getElementById("btn");

//  btn.addEventListener("click" , (e) => {
//    let changecolor=e.target.classList.toggle("active");
//    console.log(changecolor);
//    if(changecolor === true)
//    {
//       document.body.style.background="blue";
//       e.target.style.background="white";
//       e.target.style.color="#111";
//       e.target.style.border="none";
//     }else{
//        document.body.style.background="white";
//       e.target.style.background="blue";
//       e.target.style.color="black";
//       e.target.style.border="#fff"; 
//     }
//  });


//  let btn=document.getElementById("btn");

//  btn.addEventListener("click" , e => {
//    let changeText=e.target.classList.toggle("active");
//    console.log(changeText);
//    if(changeText === true)
//    {
//      e.target.innerHTML="successfully submitted";
//      e.target.className="btn btn-success active";
//    }else{
//      e.target.innerHTML="login";
//          e.target.className="btn btn-danger";

//    }
//  });

 let headerBlock=document.getElementById("headerBlock");
let toggleBlock=document.getElementById("toggleBlock");

toggleBlock.addEventListener("click" , e =>{
  let hideorshow=e.target.classList.toggle("active");
  console.log(hideorshow);
  if(hideorshow === true)
  {
    //  document.headerBlock.style.display="none";
    // headerBlock.target.style.background="none";
    e.target.innerHTML="show";
     e.target.className="btn btn-success";
    // headerBlock.classList.add("hide");
    headerBlock.style.transform="translate(-70px)"
  }else{
    // headerBlock.style.display="block";
    e.target.innerHTML="hide";
    headerBlock.classList.remove("hide");
  }
});
