const customers = [

{
phone:"9045551234",
name:"John Smith",
orders:18,
value:12450.72,
lastPurchase:"July 1, 2026",
status:"VIP"
},

{
phone:"9045559876",
name:"Jane Doe",
orders:3,
value:410.55,
lastPurchase:"May 12, 2026",
status:"Standard"
}

];

function searchCustomer(){

const phone =
document.getElementById("phone").value;

const customer =
customers.find(c=>c.phone===phone);

if(customer){

document.getElementById("result").innerHTML=
`
<h2>${customer.name}</h2>

<p><b>Status:</b> ${customer.status}</p>

<p><b>Orders:</b> ${customer.orders}</p>

<p><b>Lifetime Value:</b> $${customer.value}</p>

<p><b>Last Purchase:</b> ${customer.lastPurchase}</p>
`;

}

else{

document.getElementById("result").innerHTML=
"<h2>Customer not found.</h2>";

}

}
