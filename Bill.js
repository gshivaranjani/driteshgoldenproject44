class Bill {
    constructor() {

    }

    displayProducts() {
        Product.getProductInfo();
        var x = 250, y = 150;

        var title = createElement('h1');
        title.html("XYZ Market");
        title.position(450,50);


        var productTitle = createElement('h2');
         var stockTitle = createElement('h2');
         var priceTitle = createElement('h2');
         var purchaseQty = createElement('h2');
        productTitle.html('Product');
        stockTitle.html('Stock');
        priceTitle.html('Price');
        purchaseQty.html('Purchase Quantity');
        productTitle.position(250,100);
        stockTitle.position(400,100);
        priceTitle.position(550,100);
        purchaseQty.position(700,100);

        for(var i in allProducts){
                    product[index] = new Product();
                   // console.log(allProducts[i].name+"  "+ allProducts[i].price+"  "+ allProducts[i].stock);
                   product[index].name = createElement('h4');
                   product[index].name.position(x,y);
                   product[index].name.html(allProducts[i].name);

                  
        
                   product[index].stock = createElement('h4');
                   product[index].stock.position(x+150, y);
                   product[index].stock.html(allProducts[i].stock);
        
                   product[index].price = createElement('h4');
                   product[index].price.position(x+300, y);
                   product[index].price.html(allProducts[i].price);


                  
                    // console.log(this.index);
        
                     product[index].qty = createInput("0");
                     product[index].qty.position(x+450,y+20);
                    // this.index++;
                     y = y+100;
                     index++;
        }

        var button = createButton("Done");
        button.position(x+600,650);   
        
        
      
    }
}