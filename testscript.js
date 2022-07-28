const products = [
  { Name: "White Shirt", Price: 20, addedToCart: false },
  { Name: "Black Jeans", Price: 35, addedToCart: false },
  { Name: "Leather Jacket", Price: 50, addedToCart: false },
  { Name: "Sweater", Price: 55, addedToCart: false },
  { Name: "Coat", Price: 80, addedToCart: false },
]

const willingPayment = prompt("Please enter the amount of money you want to pay for a product and we will show you what we have for less than that value.")

const priceLessThan50 = products.filter (product => product.Price <= (willingPayment))

const priceLessThan50Names = priceLessThan50.map (product => product.Name)

console.log("Here are the products that we have under " + willingPayment + ". " +priceLessThan50Names)

