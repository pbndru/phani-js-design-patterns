function ProductDiscount() {

    this.getDiscount = function (product) {

        if (product === "iphone") {
            return 200;
        } else if (product === "samsung") {
            return 160;
        } else if (product === "nokia") {
            return 50;
        } else if (product === "sony") {
            return 100;
        } else {
            return 0;
        }
    };
}

function ProductProxy() {
    var productDiscount = new ProductDiscount();
    var productCache = {};

    return {
        getDiscount: function (product) {
            if (!productCache[product]) {
                productCache[product] = productDiscount.getDiscount(product);
            }
            console.log("Discount price: " + productCache[product]);
            return productCache[product];
        },
        getProductCacheCount: function () {
            var count = 0;
            for (var code in productCache) { count++; }
            return count;
        }
    };
};

function productDiscountExecute() {

    var product = new ProductProxy();

    product.getDiscount("sony");
    product.getDiscount("samsung");
    product.getDiscount("samsung");
    product.getDiscount("iphone");
    product.getDiscount("nokia");
    product.getDiscount("sony");
    product.getDiscount("iphone");
    product.getDiscount("sony");

    console.log("Product Cached: " + product.getProductCacheCount());
    
}

productDiscountExecute();