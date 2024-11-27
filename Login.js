const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const btn = document.getElementById("btnLogin");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value=="HGBCollege" && passWord.value=="12345"){
        alert("You have logged in successfully!");
        window.location="Mainpage.html";
          } else {
            alert("Please fill all the fields");
          }
        });
