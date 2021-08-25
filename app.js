
function updateNum(inputId,isAdd){
    const numField = document.getElementById(inputId);
    if(isAdd == true){
        numField.value = parseInt(numField.value) + 1;
    }else if(numField.value > 0){
        numField.value = parseInt(numField.value) - 1;
    }   

    if(inputId == 'phone-num-field'){
        // update price
        const phonePrice = document.getElementById('phone-price');
        phonePrice.innerText = numField.value * 1219;

    }else if(inputId == 'case-num-field'){
        // update price
        const casePrice = document.getElementById('case-price');
        casePrice.innerText = numField.value * 59;
    }

    // calculate subtotal price
    calculateTotal();
}

function getInput(product){
    const inputField = document.getElementById(product+'-num-field').value;
    return inputField;
    
}

function calculateTotal(){
    const subtotalPhone = getInput('phone')*1219;
    const subtotalCase = getInput('case')*59;
    const subTotal = subtotalPhone + subtotalCase;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal - taxAmount;

    document.getElementById('subtotal-price').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}


//handle phone quantity plus
document.getElementById('phone-num-plus').addEventListener('click', function(){
    updateNum('phone-num-field',true);
});
//handle phone quantity minus
document.getElementById('phone-num-minus').addEventListener('click', function(){
    updateNum('phone-num-field',false);
});


//handle phone case case plus
document.getElementById('case-num-plus').addEventListener('click', function(){
    updateNum('case-num-field',true);
});
//handle phone case quantity minus
document.getElementById('case-num-minus').addEventListener('click', function(){
    updateNum('case-num-field',false);
});


