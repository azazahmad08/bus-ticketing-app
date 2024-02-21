const seatPriceFixed = 550;
const allBtn = document.getElementsByClassName("seat");

for (btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seatName = event.target.parentNode.childNodes[0].innerText;
        const seatClass = "Economy";
        const seatPrice = 550;
        const selectedSeatContainer = document.getElementById("selected-bus-container");

        const div = document.createElement("div");
        div.classList.add("flex", "justify-around", "gap-3")

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        p1.innerText = seatName;
        p2.innerText = seatClass;
        p3.innerText = seatPrice;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedSeatContainer.appendChild(div);
        updateTotalCost(seatPrice);
        updateGrandTotal();
    });
}

function updateGrandTotal(status) {

    
    const totalCost = getConvertedValue('ttl-cost');
    const grandTotalValue = document.getElementById('grand-total').innerText = totalCost;
}

function updateTotalCost(value) {
    const totalCost = getConvertedValue('ttl-cost');
    document.getElementById("ttl-cost").innerText = totalCost + parseInt(value);
}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const covertedPrice = parseInt(price);
    return covertedPrice;
}


