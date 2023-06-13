class Customer extends MigrosBase{
    constructor(firstName,lastName,card,products){
        super(firstName,lastName,card,products);
    }
    calculate(){
       return super.calculate();
    }
}