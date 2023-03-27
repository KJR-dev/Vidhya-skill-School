callAPi();
async function callAPi() {
  let products = await fetch("https://fakestoreapi.com/products");
  products = await products.json();
  console.log(products);

  //DataBindings code here
  for (let index = 0; index < products.length; index++) {
    //create a div for cards
    var tempDiv = document.createElement("div");
    tempDiv.classList.add("card_" + index);
    tempDiv.classList.add("card");
    tempDiv.setAttribute("id", "card" + index);
    document.getElementById("container").appendChild(tempDiv);

    //create a div for image set
    var tempDiv = document.createElement("div");
    tempDiv.classList.add("imgDiv_" + index);
    tempDiv.classList.add("imgDiv");
    tempDiv.setAttribute("id", "imgDiv_" + index);
    document.getElementById("card" + index).appendChild(tempDiv);

    //add img
    var tempImage = document.createElement("img");
    tempImage.src = products[index].image;
    tempImage.classList.add("productImage" + index);
    tempImage.classList.add("productImage");
    tempImage.setAttribute("id", "productImage" + index);
    document.getElementById("imgDiv_" + index).appendChild(tempImage);

    //add product name
    var tempTitle = document.createElement("p");
    var newText = document.createTextNode(products[index].title);
    tempTitle.appendChild(newText);
    tempTitle.classList.add("title");
    tempTitle.classList.add("title" + index);
    tempTitle.setAttribute("id", "title" + index);
    document.getElementById("card" + index).appendChild(tempTitle);

    //add product rating
    var tempRating = document.createElement("span");
    var newText = document.createTextNode(products[index].rating.rate);
    tempRating.appendChild(newText);
    tempRating.classList.add("rating");
    tempRating.classList.add("rating" + index);
    tempRating.setAttribute("id", "rating" + index);
    document.getElementById("card" + index).appendChild(tempRating);

    //add product sell count
    var tempCount = document.createElement("span");
    var newText = document.createTextNode(
      "( " + products[19].rating.count + " )"
    );
    tempCount.appendChild(newText);
    tempCount.classList.add("count");
    tempCount.classList.add("count" + index);
    tempCount.setAttribute("id", "count" + index);
    document.getElementById("card" + index).appendChild(tempCount);

    //add product price
    var tempPrice = document.createElement("span");
    var newText = document.createTextNode(products[index].price);
    tempPrice.appendChild(newText);
    tempPrice.classList.add("price");
    tempPrice.classList.add("price" + index);
    tempPrice.setAttribute("id", "price" + index);
    document.getElementById("card" + index).appendChild(tempPrice);
  }
}
