function loadData(){
    fetch("http://localhost:4000/0")
    .then(res =>res.json()
    .then(data =>handleData(data)))

}
// console.log(loadData())
loadData()

function handleData(data){
    // let form=document.querySelector("form")

    data.forEach(element => {
        /// Create Elements
        let form=document.querySelector("#tBills")
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")
        p4.id="amountAvail"





        /// Name the values of the attributes

        let term = element.term
        let amountOffered = element.Amount_offered
        let bidsReceived = element.Bids_received
        let interestRate = element.Interest_Rate
        let auctionDay = element.Auction_day
        let amountAvailable = amountOffered - bidsReceived

        ///add textconent to the elements
        h2.textContent = `${term} Treasury Bill`
        p1.textContent = `The Term of the Treasury Bill is ${term}`
        p4.textContent = `${amountAvailable.toLocaleString()}`
        p2.textContent =`The amount available for bidding is  KShs ${p4.textContent} at ${interestRate}%`
        p3.textContent = `The bidding will be open on ${auctionDay}`

        /// Style div - column
        div.style.float ="left";
        div.style.width =" 50%"
        div.style.paddingBlock="30px"
        div.style.fontSize = "20px"
        div.style.borderBlock="solid"
        div.style.borderLeftStyle="dotted"
        div.style.borderRightStyle="dotted"
        div.style.borderColor="blue"
        div.style.backgroundColor="lightgrey"
        div.style.borderWidth="1px"
        div.style.margin="10px"
        div.style.width = "550px"
        div.style.height="250px"
        div.style.textAlign="center"
        h2.style.color="blue"

        ///Append the data to the document

        div.appendChild(h2)
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        form.append(div)


    });


}

/// Add eventListeners


let inputs=document.querySelector(".inputBid")

inputs.addEventListener("submit",event=>{
event.preventDefault()
let termBill = event.target.billTerm.value
let rateBill = event.target.billRate.value
let amountBill = event.target.billBid.value

let output = document.createElement("p")
output.id="outputValues"
output.textContent = ` You are have placed a ${termBill} Term Treasury Bill of KShs  ${amountBill} for a proposed interest rate of ${rateBill}%.`
output.style.fontSize="20px"
inputs.appendChild(output)
inputs.reset()

})

let queries = document.querySelector("#queryForm")

queries.addEventListener("click",e=>{
    e.preventDefault()
    prompt("Please type in your question")
    prompt("Please key in your email address")
    alert("We will respond to you on your email address")
})

let cleareForm = document.querySelector("#resetForm")
cleareForm.addEventListener("reset",e=>{
    document.querySelector("#outputValues").remove()
})







    // console.log(handleSubmit())






