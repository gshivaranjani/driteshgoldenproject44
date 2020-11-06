var database, allProducts;
var bill;
var product = [];
var index = 0;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);


    // var ref = database.ref("products");
    // ref.on("value", (data)=>{
    //     //console.log(data.val());
    //     allProducts = data.val();
    // })
    Product.getProductInfo();
   bill = new Bill();

   
}



function draw()
{
    background("white");
    bill.displayProducts();

    

  
    drawSprites();
}

