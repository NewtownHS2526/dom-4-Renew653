const button1 = document.getElementById("popcorn");
const button2 = document.getElementById("soda");
const button3 = document.getElementById("candy");
const button4 = document.getElementById("nachos");
const button5 = document.getElementById("icecream");
const totalamount = document.getElementById("total-span");
const cart = document.getElementById("shopping-cart");


function addpopcorn () {
    totalamount.textContent = Number(totalamount.textContent) + 4.5;
    cart.textContent = cart.textContent + " popcorn ";
}
function addsoda () {
    totalamount.textContent = Number(totalamount.textContent) + 2.5;
        cart.textContent = cart.textContent + " soda ";
}
function addcandy () {
    totalamount.textContent = Number(totalamount.textContent) + 1.75;
        cart.textContent = cart.textContent + " candy ";
}
function addnachos () {
    totalamount.textContent = Number(totalamount.textContent) + 5;
        cart.textContent = cart.textContent + " nachos ";
}
function addicecream () {
    totalamount.textContent = Number(totalamount.textContent) + 3.25;
        cart.textContent = cart.textContent + " icecream ";
}


button1.addEventListener("click", addpopcorn)
button2.addEventListener("click", addsoda)
button3.addEventListener("click", addcandy)
button4.addEventListener("click", addnachos)
button5.addEventListener("click", addicecream)