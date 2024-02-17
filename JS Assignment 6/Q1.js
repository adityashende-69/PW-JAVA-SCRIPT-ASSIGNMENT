let ShoppingCard = ['milk','Coffee','Tea','Honey']
// to add meat at the begging 
ShoppingCard.unshift('Meat');
console.log(ShoppingCard)

// to add sugar at the end of the array

ShoppingCard.push('Sugar');
console.log(ShoppingCard)


// to remove specific elment by any position delete  used splice is also used
// but using splice index os array also got delete
ShoppingCard.splice(4,1);
console.log(ShoppingCard)

// to update element following operater is used splice
ShoppingCard.splice(3,1,'Green Tea');
console.log(ShoppingCard)
