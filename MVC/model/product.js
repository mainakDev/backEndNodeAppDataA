const products = [];

module.exports = class Product{

    constructor(t){
        this.title = t;
    }

    //function to save new products
    save(){
        products.push(this);
    }

    //function to fetch all products
    static fetchAll(){
        return products;
    }

}