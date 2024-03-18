var registration = ()=>{
    var a=document.getElementById("username").value;
    var b=document.getElementById("password").value;
    console.log(a);
    var obj={
        "Username":a,
        "Password":b
    }
    localStorage.setItem("forData",JSON.stringify(obj));
    console.log(b);
   window.location.href="login.html";

}
function login(){
    var d=document.getElementById("user").value;
    var e=document.getElementById("pass").value;
    var c=localStorage.getItem("forData");
    var f=JSON.parse(c);
    var user=f.Username;
    var pass=f.Password;
    if(user==d&&pass==e){
        window.location.href="instagram.html";
    }
    else
    alert("User name or password is inncorrect");
}