class MigrosBase{

    saleCount=20;

    constructor(firstName,lastName,card,products){
        this.firstName=firstName;
        this.lastName=lastName;
        this.card=card;
        this.products=products;
    }
    calculate(){

        let totalCount= 0;
        if(this.checkProducts(this.products)){

            if(this.card){
                this.products.forEach((product) => {
                    totalCount += (product.price*(100-this.saleCount))/100;
                });
            }
            else{
                this.products.forEach((product) => {
                    totalCount += product.price;
                });
            }
        }
        else{
            alert("You must add one product in your cart.")
        }
        return totalCount;
    }

    checkProducts(products){
        if(products!= null && products.length>0){
            return true;
        }
        return false;
    }
}       