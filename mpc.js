
const annuityRate = 10

function handleAllInputs(){
    let form =document.querySelector("form");
    return form.addEventListener("submit",(event)=>{
        event.preventDefault()
        // console.log(event.target)
        /// save the input information
        currentAge= event.target.parentNode.querySelector("#age").value
        retireAge= event.target.parentNode.querySelector("#retAge").value
        rate= event.target.parentNode.querySelector("#interestRate").value
        monthlyPension= event.target.parentNode.querySelector("#pension_pm").value

        // Input Manipulation
        totalSavings = monthlyPension*12*annuityRate
        console.log(totalSavings)

        let p = document.createElement("p")
        p.textContent = `For you to have a monthly pension of KShs ${monthlyPension} when you retire at age ${retireAge} years, you will need to have total amount saved of : K Shs ${totalSavings}`

        let resultsOutput = document.querySelector(".results")
        resultsOutput.appendChild(p)




    })
}
console.log(handleAllInputs())
