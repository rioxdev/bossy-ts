import { useEffect } from "react"


let calculateTax = (amount: any): any => {
    return (amount * 1.2).toFixed(2)
}


let run1 = () => {
    let salary = 100
    let taxedSalary = calculateTax(salary)
    let halfSalary = taxedSalary / 2

    console.log("taxedSalary: ", taxedSalary)
    console.log("half salary: ",halfSalary)
}

export default function Stage3() {

    useEffect(() => {
        run1()
    }, [])

    return (
        <div>
            <h4>Stage 3</h4>
        </div>
    )
}