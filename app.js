/* SIGNUP */
function signup(){

    let email=document.getElementById("signupEmail").value;
    let password=document.getElementById("signupPassword").value;
    
    if(email==="" || password===""){
    alert("Fill all fields");
    return;
    }
    
    localStorage.setItem("userEmail",email);
    localStorage.setItem("userPassword",password);
    localStorage.setItem("login","true");
    
    alert("Signup Successful");
    
    /* REDIRECT TO DASHBOARD */
    window.location.href="dashboard.html";
    }
    
    
    /* LOGIN */
    function login(){
    
    let email=document.getElementById("loginEmail").value;
    let password=document.getElementById("loginPassword").value;
    
    let savedEmail=localStorage.getItem("userEmail");
    let savedPassword=localStorage.getItem("userPassword");
    
    if(email===savedEmail && password===savedPassword){
    
    localStorage.setItem("login","true");
    
    alert("Login Successful");
    
    /* REDIRECT TO DASHBOARD */
    window.location.href="dashboard.html";
    
    }else{
    alert("Invalid Credentials");
    }
    }
    
    
    /* DASHBOARD PROTECTION */
    if(window.location.pathname.includes("dashboard") ||
    window.location.pathname.includes("deviation")){
    
    if(localStorage.getItem("login")!=="true"){
    window.location.href="login.html";
    }
    }
    
    
    /* SHOW USER NAME */
    if(document.getElementById("welcome")){
    let user=localStorage.getItem("userEmail");
    document.getElementById("welcome").innerText="Welcome "+user;
    }
    
    
    /* OPEN DEVIATION PAGE */
    function openDeviation(){
    window.location.href="deviation.html";
    }
    
    
    /* LOGOUT */
    function logout(){
    localStorage.removeItem("login");
    window.location.href="login.html";
    }
    
    
    /* SUBMIT DEVIATION */
    function submitDeviation(){
    
    let batch=document.getElementById("batch").value;
    let type=document.getElementById("type").value;
    let desc=document.getElementById("description").value;
    
    if(batch==="" || type==="" || desc===""){
    alert("All fields required");
    return;
    }
    
    alert("Deviation Submitted Successfully");
    }