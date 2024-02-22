const seatPriceFixed = 550;
const allBtn = document.getElementsByClassName("seat");
// Scrolling
document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("buy-ticket");
    const section10 = document.getElementById("main-part-eta");
    
    scrollButton.addEventListener("click", function() {
        
        section10.scrollIntoView({ behavior: "smooth" });
    });
});


for (btn of allBtn) {
    btn.addEventListener("click", function (event) {
        
        const seatName = event.target.innerText; 
        console.log(seatName);
        const seatClass = "Economy";
        const seatPrice = 550;
        const selectedSeatContainer = document.getElementById("selected-bus-container");

        event.target.setAttribute("disabled",false);
        event.target.style.backgroundColor = "green"

        const seatCount = getConvertedValue("btn-seat");{
            if(seatCount + 1 > 4){
                alert("You Can't Select More Than 4 Seat at a time");
                return;
            }
        }

        const seatsLeft = getConvertedValue("seatsLeft");
        document.getElementById("seatsLeft").innerText= seatsLeft - 1;
        const buttonseat = getConvertedValue('btn-seat');
        document.getElementById("btn-seat").innerText =buttonseat + 1;


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
    if(status==undefined){
        
     document.getElementById('grand-total').innerText = totalCost;

    }
    else{
        const couponCode = document.getElementById('coupon-input').value;
        if(couponCode == "NEW15"){
            const discounted = totalCost * 0.15;
            document.getElementById("grand-total").innerText=totalCost - discounted;
        }
        else if(couponCode == "Couple 20"){
            const discounted = totalCost * 0.2;
            document.getElementById("grand-total").innerText=totalCost - discounted;
        }
        else{
            alert("Please Enter a Valid Coupon Code");
        }
        
    }
    
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


