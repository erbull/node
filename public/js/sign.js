//login buttons
let loginbtn = document.createElement("div");
loginbtn.id = "nav-login";
loginbtn.style.display = "inline-block";
loginbtn.style.justifyContent = "center";
loginbtn.style.backgroundColor = "gray";
loginbtn.style.width = "70px";
loginbtn.style.borderRadius = "5px";
loginbtn.style.marginInline = "10px";
loginbtn.style.padding = "10px";
loginbtn.style.cursor = "pointer";
loginbtn.innerText = "Giriş";
loginbtn.onclick = function(){login()};
document.querySelector(".menu").appendChild(loginbtn);

//signup buttons
let signupbtn = document.createElement("div");
signupbtn.id = "nav-signup";
signupbtn.style.display = "inline-block";
signupbtn.style.justifyContent = "center";
signupbtn.style.backgroundColor = "gray";
signupbtn.style.width = "70px";
signupbtn.style.borderRadius = "5px";
signupbtn.style.padding = "10px";
signupbtn.style.cursor = "pointer";
signupbtn.innerText = "Kaydol";
signupbtn.onclick = function(){signupform()};
document.querySelector(".menu").appendChild(signupbtn);

let users = []

function signupform(){
    document.getElementById("not-logged").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("logged").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function signup(){
    if(verify()){
        const user = {
            username : document.querySelector('#username').value,
            name : document.querySelector('#name').value,
            surname : document.querySelector('#surname').value,
            mail : document.querySelector('#mail').value,
            password : document.querySelector('#password').value
        }
        
        users.push(user);
        document.getElementById("signup").style.display = "none";
        document.getElementById("success").style.display = "block";
    }     
}

function verify(){
    let username = document.querySelector('#username').value;
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let mail = document.querySelector('#mail').value;
    let pwd1 = document.querySelector('#password').value;
    let pwd2 = document.querySelector('#verify').value;
    let result = true;

    if(username == ""){
        document.getElementById("w-username").innerText = "Lütfen kullanıcı adınızı giriniz!";
        result = false;
    }
    else {
        users.forEach(element => {
            if (element.name == name){
                document.getElementById("w-username").innerText = "Sistemde kayıtlı bir kullanıcı ismi seçtiniz!";
                result = false;
            }
        })
        if(result) document.getElementById("w-username").innerText = "";
    }
    
    if(name == ""){
        document.getElementById("w-name").innerText = "Lütfen adınızı giriniz!";
        result = false;
    }
    else document.getElementById("w-name").innerText = "";

    if(surname == ""){
        document.getElementById("w-surname").innerText = "Lütfen soyadınızı giriniz!";
        result = false;
    }
    else document.getElementById("w-surname").innerText = "";

    if(mail == ""){
        document.getElementById("w-mail").innerText = "Lütfen email adresinizi giriniz!";
        result = false;
    }
    else document.getElementById("w-mail").innerText = "";

    if(pwd1 == ""){
        document.getElementById("w-pwd").innerText = "Lütfen bir şifre belirleyiniz!";
        result = false;
    }
    else if(pwd1!==pwd2){
        document.getElementById("w-pwd").innerText = "Şifreleriniz uyumsuz!";
        result = false;
    }
    else document.getElementById("w-pwd").innerText = "";

    return result;
}

function login(){
    document.getElementById("not-logged").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("logged").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function sign(){
    let uname = document.querySelector('#userName').value;
    let pass = document.querySelector('#passwd').value;

    users.forEach(element=>{
        if(element["username"] == uname && element["password"] == pass){
            signed(element);
        }
        else{
            document.getElementById("w-sign").innerText = "Kullanıcı adınız veya şifreniz hatalı!";
        }
    })
}

function signed(user){
    document.getElementById("login").style.display = "none";
    document.getElementById("nav-login").style.display = "none";
    document.getElementById("nav-signup").style.display = "none";
    document.getElementById("logged").style.display = "block";

    const name = document.createElement("div");
    name.innerHTML = "<p>" + user.name + " " + user.surname;
    name.style.color = "red";
    document.getElementById("menu").appendChild(name);
    document.getElementById("_name").innerText = user.name + " " + user.surname + " ";
    document.getElementById("_mail").innerText = user.mail + " ";
}