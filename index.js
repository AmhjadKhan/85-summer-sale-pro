let total = 0;
let discount = 0;

function handClickButon(target){
    const selectedItemsContainer = document.getElementById('selected-items')
    const itemName = target.parentNode.childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemsContainer.appendChild(li);
    
    const price = target.parentNode.childNodes[5].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);
    const FirstTotal = document.getElementById('total').innerText = total.toFixed(2);;

    // finish sir 
    if (total >= 200) {
        document.getElementById('apply-discount').disabled = false;
    }
}
// apply for discount 

document.getElementById('apply-discount').addEventListener('click', function() {
    // Calculate discount (20%)
    discount = total * 0.2;
    const discountElement = document.getElementById('discount');
    discountElement.innerText = discount.toFixed(2);

    // Calculate grand total after discount
    const grandTotal = total - discount;
    const grandTotalElement = document.getElementById('grand-total');
    grandTotalElement.innerText = grandTotal.toFixed(2);
});

