
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
        currentSalary = event.target.parentNode.querySelector("#currentSal").value
        salaryRate = event.target.parentNode.querySelector("#salRate").value/100

        // Input Manipulation - Monthly Pension Calculation

        monthlyPensionWeb=Math.round(monthlyPension*1)
        totalSavings = monthlyPension*12*annuityRate
        timeToRetirement = retireAge - currentAge
        intFactor = (1+rate)**(timeToRetirement)
        accumFactor = (intFactor-1)/rate
        monthlySavings= Math.round(totalSavings/(12*accumFactor))


         // Input Manipulation - NRR

         salAtRet =(12*currentSalary)*((1+salaryRate)**(timeToRetirement))
         nrr=Math.round((monthlyPension/(salAtRet/12))*100)



        // Create Elements
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let p3 = document.createElement("p")
        let resultsOutput = document.querySelector(".results")

        p1.textContent = `Your desired pension after retirement is KShs ${monthlyPensionWeb.toLocaleString()} per month.
        To achieve this,  you will need to have saved a total amount of : K Shs ${totalSavings.toLocaleString()}.`

        p2.textContent = `Assuming you are starting to save at your current age, you will need to save of KShs ${monthlySavings.toLocaleString()} per month from now to age ${retireAge}.`

        p3.textContent= `Assuming that your current salary increases at a constant rate of ${Math.round((salaryRate*100))}%, youR Net Replacement Ratio is
        ${nrr}%.`


        /// Append Results to the website
        resultsOutput.appendChild(p1)
        resultsOutput.appendChild(p2)
        resultsOutput.appendChild(p3)


        /// Style the output.

        p1.style.textAlign="justify"

        form.addEventListener("reset",(e)=>{
            // form.reset()
            resultsOutput.remove()
        })

    })


}
console.log(handleAllInputs())
