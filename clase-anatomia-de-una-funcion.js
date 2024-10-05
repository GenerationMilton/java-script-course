//function
function calculateDiscountedPrice(price, discountedPercentage){
    const discount= (price * discountedPercentage)/100
    const priceWithDiscount= price-discount;

    return priceWithDiscount;
}

//declare constants to function\
const originalPrice =1000;
const discountPercentage=15;
const finalPrice= calculateDiscountedPrice(originalPrice,discountPercentage);


console.log('Original Price: $ '+ originalPrice);
console.log('Discount: '+ discountPercentage + '%');
console.log('Price with discount: ' + finalPrice);