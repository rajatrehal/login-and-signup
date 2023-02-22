
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");


    document.querySelector("#linkCreateAccount").addEventListener("click",()=>{
     loginForm.classList.add("form--hidden");
     createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click",()=>{
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
       });
});

// login form validation 

var objpeople =[
    {
        username:"sam",
        email:"sam@gmail.com",
        password:"codify"
    },
    {
        username:"matt",
        email:"matt@gmail.com",
        password:"academy"
    },
    {
        username:"rajat",
        email:"matt@gmail.com",
        password:"rehal"
    }
]
let loginbtn =document.getElementById("loginbtn");
loginbtn.addEventListener("click",()=>{
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    // console.log("yours username is "+username +"yours password is"+password);
    let find = false;
    for(let i=0;i<objpeople.length ; i++){
        if(username==objpeople[i].username && password==objpeople[i].password){
            find = true;
        }
    }
        if(find==true){
            alert("Welcome"+username+"to this site");
        }
        else{
            alert("invalid user or password ");  
        }
    
});
let createbtn=document.getElementById("createbtn");
createbtn.addEventListener("click",()=>{

});