

function productInfo(){
    productName=prompt("Enter product name: "); 
    productQuantity=prompt("Enter product quantity: "); 
    productPrice=Number(prompt("Enter product price: "));
    individualPrice=productPrice+(productPrice*.16); 
    finalPrice=productQuantity*individualPrice; 
    console.log(productName,productQuantity,productPrice,finalPrice); 
    displayInfo(productName,productQuantity,productPrice,finalPrice); 
}

function displayInfo(a,b,c,d,e){
    document.write(`
    <p>Product Name: ${a} </p>
    <p>Product Quantity: ${b} </p>
    <p>Product Price: ${c} </p>
    <p>Final Price (16% tax included): ${d} </p>
    `)
}

productInfo(); 