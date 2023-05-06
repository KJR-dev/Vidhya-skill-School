//Add id in body tag
let b = document.body.setAttribute("id", "body");

//Add a div inside body tag for logging purposes
let form_Div = document.createElement("div");
form_Div.setAttribute("id", "formDiv");
document.getElementById("body").appendChild(form_Div);

//create a new form inside formDiv
let tempForm = document.createElement("form");
tempForm.setAttribute("id", "loginForm");
document.getElementById("formDiv").appendChild(tempForm);

//create a login heading
let login_heading = document.createElement("h1");
login_heading.setAttribute("id", "loginHeading");
var textNode = document.createTextNode("Sign In");
login_heading.appendChild(textNode);
document.getElementById("loginForm").appendChild(login_heading);

//create Email and Phone Number div
let email = document.createElement("div");
email.setAttribute("id", "emailDiv");
document.getElementById("loginForm").append(email);

//create input Email and Phone Number
let input_email = document.createElement("input");
input_email.setAttribute("id", "email");
input_email.setAttribute("placeholder", "Email or phone number");
document.getElementById("emailDiv").append(input_email);

//create password div
let password = document.createElement("div");
password.setAttribute("id", "passwordDiv");
document.getElementById("loginForm").appendChild(password);

//create input password 
let input_password = document.createElement("input");
input_password.setAttribute("id", "password");
input_password.setAttribute("placeholder", "Password");
input_password.setAttribute("type", "Password");
document.getElementById("passwordDiv").append(input_password);

//create sign in button
let signin_button = document.createElement("button");
signin_button.setAttribute("id", "signInButton");
signin_button.setAttribute("type", "submit");
var textNode = document.createTextNode("Sign In");
signin_button.appendChild(textNode);
document.getElementById("loginForm").appendChild(signin_button);

//create checkbox and need help div
let check_box_div = document.createElement("div");
check_box_div.setAttribute("id", "checkboxNeedHelpDiv");
document.getElementById("formDiv").appendChild(check_box_div);

//create checkbox and need help span
//create checkbox
let check_box_span = document.createElement("span");
check_box_span.setAttribute("id", "checkboxSpan");
document.getElementById("checkboxNeedHelpDiv").appendChild(check_box_span);

//create need help span
let need_help_span = document.createElement("span");
need_help_span.setAttribute("id", "needHelpSpan");
document.getElementById("checkboxNeedHelpDiv").appendChild(need_help_span);


//add checkbox inside checkboxNeedHelpDiv
document.getElementById('checkboxSpan').innerHTML=`<input type="checkbox" name="check" id="checkBox" > <span id="rememberMe">Remember me</span>`;

//add checkbox inside checkboxNeedHelpDiv
document.getElementById('needHelpSpan').innerHTML=`<a href="#" target="_self" rel="noopener noreferrer" id="needHelp">Need Help?</a>`;

//sign up option
let signup_Div = document.createElement("div");
signup_Div.setAttribute("id", "signUpDiv");
document.getElementById("formDiv").appendChild(signup_Div);

document.getElementById('signUpDiv').innerHTML=`<p>New to Netflix? <a href="#" target="_blank"Sign up now>Sign up now</a>.</p>`;