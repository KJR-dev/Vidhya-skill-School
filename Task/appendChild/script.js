let list = ["rahul", "ankit", "sahil", "mitesh" ,"jitu","1","2","3","4","5","6","7","8"]
for (let index = 0; index < list.length; index++) {
    var newelement = document.createElement("div");
    var newText = document.createTextNode(list[index]);
    newelement.appendChild(newText);
    newelement.classList.add("innerContainer");
    console.log(newelement);
    document.getElementById("container").appendChild(newelement);
}
