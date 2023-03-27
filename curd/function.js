let users = "";
insertdata();
databind();
function insertdata() {
  if (typeof Storage !== "undefined") {
    const temparr = JSON.parse(localStorage.getItem("localdata"));
    if (temparr == null) {
      localStorage.setItem("localdata", JSON.stringify(arr));
    }
  } else {
    alert("local storage not work");
  }
}
function databind() {
  users = "";
  var getlocaldata = JSON.parse(localStorage.getItem("localdata"));
  for (let index = 0; index < getlocaldata.length; index++) {
    users +=
      "<tr><td>" +
      getlocaldata[index].fname +
      "</td><td>" +
      getlocaldata[index].lname +
      "</td><td>" +
      getlocaldata[index].rno +
      "</td><td>" +
      getlocaldata[index].email +
      "</td><td>" +
      getlocaldata[index].mob +
      "</td><td>" +
      getlocaldata[index].address +
      "</td><td><button type='submit' value='arr[index]' onclick='edit()'>EDIT</button><button type='submit' value='arr[index]' onclick='Delete()'>DELETE</button></td></tr>";
  }
  users +=
    "<tr><td><input type='text' id='fname' /></td><td><input type='text' id='lname' > </td><td> <input type='text' id='rno' > </td><td> <input type='text' id='email' > </td><td> <input type='text' id='mob' > </td><td> <input type='text' id='address' > </td><td><input type='submit' value='ADD' onclick='adddata()'></td></tr>";
  document.getElementById("datasections").innerHTML = users;
}
function adddata() {
  let tfname = document.getElementById("fname").value;
  if (!tfname) {
    alert("please enter a first name");
    return document.getElementById("fname").focus();
  }
  let tlname = document.getElementById("lname").value;
  if (!tlname) {
    alert("please enter a last name");
    return document.getElementById("lname").focus();
  }
  let trno = document.getElementById("rno").value;
  if (!trno) {
    alert("please enter a regd no.");
    return document.getElementById("rno").focus();
  }
  let temail = document.getElementById("email").value;
  if (!temail) {
    alert("please enter a email");
    return document.getElementById("email").focus();
  }
  var emailfilter =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailfilter.test(temail)) {
    alert("Please enter a valid email address!");
    return document.getElementById("email").focus();
  }
  let tmob = document.getElementById("mob").value;
  if (!tmob) {
    alert("please enter a mobile number");
    return document.getElementById("mob").focus();
  }
  let taddress = document.getElementById("address").value;
  if (!taddress) {
    alert("please enter a mobile number");
    return document.getElementById("address").focus();
  }
  const temparr = {
    fname: tfname,
    lname: tlname,
    rno: trno,
    email: temail,
    mob: tmob,
    address: taddress,
  };
  const getlocaldata = JSON.parse(localStorage.getItem("localdata"));
  getlocaldata.push(temparr);
  localStorage.setItem("localdata", JSON.stringify(getlocaldata));
  databind();
}
