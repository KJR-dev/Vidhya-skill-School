callAPi();
async function callAPi() {
  let productsApi = await fetch("https://dummyjson.com/products");
  productsApi = await productsApi.json();
  console.log(productsApi.products);
  console.log(productsApi.products.length);

  //add body id
  document.body.setAttribute("id", "body");

  //create main Div who contain cards
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("main");
  mainDiv.setAttribute("id", "main");
  document.getElementById("body").appendChild(mainDiv);

  for (let index = 0; index < 30; index++) {
    //card creation
    let tempCard = document.createElement("div");
    tempCard.classList.add("card");
    tempCard.classList.add("card_" + index);
    tempCard.setAttribute("id", "card_" + index);
    document.getElementById("main").appendChild(tempCard);

    //thumbnailDiv
    let tempThumbnailDiv = document.createElement("div");
    tempThumbnailDiv.classList.add("thumbnailDiv");
    tempThumbnailDiv.classList.add("thumbnailDiv_" + index);
    tempThumbnailDiv.setAttribute("id", "thumbnailDiv_" + index);
    document.getElementById("card_" + index).appendChild(tempThumbnailDiv);

    //add thumbnail
    var tempThumbnail = document.createElement("img");
    tempThumbnail.src = productsApi.products[index].thumbnail;
    tempThumbnail.classList.add("Thumbnail");
    tempThumbnail.classList.add("Thumbnail_" + index);
    tempThumbnail.setAttribute("id", "Thumbnail_" + index);
    document.getElementById("thumbnailDiv_" + index).appendChild(tempThumbnail);

    //add imagesDiv
    let tempimagesDiv = document.createElement("div");
    tempimagesDiv.classList.add("imagesDiv");
    tempimagesDiv.classList.add("imagesDiv_" + index);
    tempimagesDiv.setAttribute("id", "imagesDiv_" + index);
    document.getElementById("card_" + index).append(tempimagesDiv);

    //add images
    for (
      let index2 = 0;
      index2 < productsApi.products[index].images.length;
      index2++
    ) {
      let tempImages = document.createElement("img");
      tempImages.src = productsApi.products[index].images[index2];
      tempImages.classList.add("images");
      tempImages.classList.add("images_" + index2);
      tempImages.setAttribute("id", "images_" + index2);
      document.getElementById("imagesDiv_" + index).append(tempImages);
    }

    //brandDiv
    let tempbrandDiv = document.createElement("div");
    tempbrandDiv.classList.add("brandDiv");
    tempbrandDiv.classList.add("brandDiv_" + index);
    tempbrandDiv.setAttribute("id", "brandDiv_" + index);
    var newText = document.createTextNode(productsApi.products[index].brand);
    tempbrandDiv.appendChild(newText);
    document.getElementById("card_" + index).append(tempbrandDiv);

    //ModelRatingDiv
    let tempModelRatingDiv = document.createElement("div");
    tempModelRatingDiv.classList.add("modelRatingDiv");
    tempModelRatingDiv.classList.add("modelRatingDiv_" + index);
    tempModelRatingDiv.setAttribute("id", "modelRatingDiv_" + index);
    document.getElementById("card_" + index).append(tempModelRatingDiv);

    //modelName
    let tempModelName = document.createElement("span");
    tempModelName.classList.add("modelName");
    tempModelName.classList.add("modelName_" + index);
    tempModelName.setAttribute("id", "modelName_" + index);
    var newText = document.createTextNode(productsApi.products[index].title);
    tempModelName.appendChild(newText);
    document.getElementById("modelRatingDiv_" + index).append(tempModelName);

    //ratingPoint
    let tempRatingPoint = document.createElement("span");
    tempRatingPoint.classList.add("ratingPoint");
    tempRatingPoint.classList.add("ratingPoint_" + index);
    tempRatingPoint.setAttribute("id", "ratingPoint_" + index);
    var newText = document.createTextNode('Rating: '+productsApi.products[index].rating);
    tempRatingPoint.appendChild(newText);
    document.getElementById("modelRatingDiv_" + index).append(tempRatingPoint);

    //priceDiscountDiv
    let tempPriceDiscountDiv = document.createElement("div");
    tempPriceDiscountDiv.classList.add("priceDiscountDiv");
    tempPriceDiscountDiv.classList.add("priceDiscountDiv_" + index);
    tempPriceDiscountDiv.setAttribute("id", "priceDiscountDiv_" + index);
    document.getElementById("card_" + index).append(tempPriceDiscountDiv);

    //price
    let tempPrice = document.createElement("span");
    tempPrice.classList.add("price");
    tempPrice.classList.add("price_" + index);
    tempPrice.setAttribute("id", "price_" + index);
    var newText = document.createTextNode(productsApi.products[index].price+'/-');
    tempPrice.appendChild(newText);
    document.getElementById("priceDiscountDiv_" + index).append(tempPrice);

    //discount
    let tempDiscount = document.createElement("span");
    tempDiscount.classList.add("discount");
    tempDiscount.classList.add("discount_" + index);
    tempDiscount.setAttribute("id", "discount_" + index);
    var newText = document.createTextNode(productsApi.products[index].discountPercentage+'%');
    tempDiscount.appendChild(newText);
    document.getElementById("priceDiscountDiv_" + index).append(tempDiscount);
  }
}
