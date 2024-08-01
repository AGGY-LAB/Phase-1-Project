
const annuityRate = 10

function handleAllInputs(){
    let form =document.querySelector("form");
    return form.addEventListener("submit",(event)=>{
        event.preventDefault()
        // console.log(event.target)
        /// save the input information
        currentAge= event.target.parentNode.querySelector("#age").value
        retireAge= event.target.parentNode.querySelector("#retAge").value
        rate= (event.target.parentNode.querySelector("#interestRate").value)/100
        monthlyPension= event.target.parentNode.querySelector("#pension_pm").value

        // Input Manipulation
        totalSavings = monthlyPension*12*annuityRate
        // console.log(totalSavings)
        timeToRetirement = retireAge - currentAge
        intFactor = (1+rate)**(timeToRetirement)
        accumFactor = (intFactor-1)/rate
        monthlySavings= Math.round(totalSavings/(12*accumFactor))




        let p1 = document.createElement("p")
        let p2 = document.createElement("p")

        p1.textContent = `Your desired pension after retirement is KShs ${monthlyPension.toLocaleString()} per month. \n
        To achieve this,  you will need to have saved a total amount of : K Shs ${totalSavings.toLocaleString()}.`

        p2.textContent = `Assuming you are starting to save at your current age, you will need to save of KShs ${monthlySavings.toLocaleString()} per month from now to age ${retireAge}.`




        let resultsOutput = document.querySelector(".results")
        resultsOutput.appendChild(p1)
        resultsOutput.appendChild(p2)


        /// Style the output.

        p.style.textAlign="justify"






    })
}
console.log(handleAllInputs())
