class Product {
    constructor(){
        this.name = null;
        this.stock = null;
        this.price = null;
      //  this.index = 0;
        this.qty = 0;
    }
    static getProductInfo(){
        
        var productInfoRef = database.ref('products');
       
        productInfoRef.on("value", (data)=>{
            allProducts = data.val();
        })
    }

    // static display(){
    //     // for(var i = 0; i<allProducts.lenght; i++){
    //     //     console.log(allProducts.product)
    //     // }
    //     var productTitle = createElement('h2');
    //     var stockTitle = createElement('h2');
    //     var priceTitle = createElement('h2');
    //     productTitle.html('Product');
    //     stockTitle.html('Stock');
    //     priceTitle.html('Price');
    //     productTitle.position(250,50);
    //     stockTitle.position(400,50);
    //     priceTitle.position(550,50);
    //      
    //     for(var i in allProducts){
    //         console.log(allProducts[i].name+"  "+ allProducts[i].price+"  "+ allProducts[i].stock);
    //         var name = createElement('h4');
    //         name.position(x,y);
    //         name.html(allProducts[i].name);

    //         var stock = createElement('h4');
    //         stock.position(x+150, y);
    //         stock.html(allProducts[i].stock);

    //         var price = createElement('h4');
    //         price.position(x+300, y);
    //         price.html(allProducts[i].price);

    //         console.log(this.index);

    //         this.qty[this.index] = createInput("quantity");
    //         this.qty.position(x+450,y);
    //         this.index++;
    //         y = y+100;
    //     }
    // }
    
}