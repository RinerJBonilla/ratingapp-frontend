class Product {
    _id:string;
    name: string;
    description: string;
    votes: Number;
    productImage: string;

    constructor(
    ){
        this.name = ""
        this.description = ""
        this.votes = 0
        this.productImage = ""
    }
}

export default Product;