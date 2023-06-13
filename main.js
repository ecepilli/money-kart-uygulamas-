
let message= 
`
Welcome to Migros!
Do you have money card?
1-Yes
2-No
`;

const products=[
    {
        productName:"Milk",
        price: 15
    },
    {
        productName:"Baby Diaper",
        price: 100
    },
    {
        productName:"Meat",
        price: 220
    }
]




let result= confirm(message);
let totalCount;
if(result== true){
    let name= prompt("Please enter your name:");
    let lastName= prompt("Please enter your last name:");
    
    const customer= new Customer(name,lastName,result,products);
    totalCount=customer.calculate();

    alert(`Customer Informations: ${name} ${lastName}
           Total Count: ${totalCount} `);

}
else{
        const customer=new Customer(null,null,result,products);
        totalCount=customer.calculate();
        alert(`Total Count: ${totalCount};
        `)
}