
function reverse(data) {
    let reversedata="";
    for(let i=data.length-1;i>=0;i--){
        reversedata=reversedata + data[i];
    }
    console.log(reversedata);
}

/* `reverse("jitu");` is calling the `reverse` function and passing the string "jitu" as an argument.
The `reverse` function takes the string and reverses it using a `for` loop and then logs the
reversed string to the console. In this case, the output would be "utij". */
reverse("jitu");
