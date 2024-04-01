document.addEventListener("DOMContentLoaded", function () {
    const billTotal = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tip");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");
   
    // Function to update tip percentage value
    function updateTipPercentage() {
        tipPercentage.value = tipSlider.value + "%";
    }

    // Function to calculate tip amount and total bill
    function calculateTip() {
        const billValue = parseFloat(billTotal.value);
        const tipValue = parseFloat(tipSlider.value);
        if (!isNaN(billValue)) {
            const tipAmountValue = (billValue * tipValue) / 100;
            const totalValue = billValue + tipAmountValue;
            tipAmount.value = tipAmountValue.toFixed(2);
            totalBill.value = totalValue.toFixed(2);
        } else {
            alert('Please enter a valid number for the bill total.');
        }
    }

    // Add event listener to bill total input
    billTotal.addEventListener("input", calculateTip);

    // Add event listener to tip slider input
    tipSlider.addEventListener("input", function () {
        updateTipPercentage();
        calculateTip();
    });

    // Initialize tip percentage value
    updateTipPercentage();

});
