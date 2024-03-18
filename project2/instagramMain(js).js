var data = [];
var registration = () => {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
    console.log(a);
    if(a=="" || b==""){
        alert("enter Some Username or password ")
    }
    else{
    var obj = {
        "Username": a,
        "Password": b
    }
    //data.push(obj);
    // data = JSON.stringify(localStorage.getItem('forData'));
    //console.log(b);
    

    // if (localStorage.getItem("forData") == null || localStorage.getItem("forData") == undefined) {
    //     localStorage.setItem("forData", JSON.stringify(data));
    // } else {
    //     var data1 = localStorage.getItem("forData");
    //     data1.push(obj);
    //     localStorage.setItem("forData", JSON.stringify(data1));
    // }
    // window.location.href = "login.html";
    //x=localStorage.setItem("forData",JSON.stringify(obj));
     //console.log(x);
    var  arr=JSON.parse(localStorage.getItem("forData"));
    if(arr==null) 
    arr=[];
    //console.log(typeof(arr));
    arr.push(obj);
    localStorage.setItem("forData",JSON.stringify(arr));
    window.location.href="login.html";
}
}
function login(){
    var d = document.getElementById("user").value;
    var e = document.getElementById("pass").value;
    var c = localStorage.getItem("forData");
    var f = JSON.parse(c);
    var count=0;
    if(c=='' || e==''){
        alert("Please Enter The UserName Or Password ")
    }
    else{
    console.log(typeof(f));
    for(var i=0;i<f.length;i++){
    var user= f[i].Username;
    //console.log(user);
    var pass = f[i].Password;
    if (user == d && pass== e) {
        window.location.href = "instagram.html";
        count++;
    }  
}
if(count == 0){
    alert("enter the wrong username or password");
}
}
}