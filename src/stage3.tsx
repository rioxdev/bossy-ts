import { useEffect } from "react"


let calculateTax = (amount: any): any => {
    return (amount * 1.2).toFixed(2)
}

let calculateTaxFormated = (amount: number, format: boolean): string | number => {
    let result = amount * 1.2
    return format ? result.toFixed(2) : result
}

let writePrice = (product: string, price: number): void => {
    console.log(`Price for ${product}: $${price.toFixed(2)}`)
}

enum Product {
    Hat,
    Gloves,
    Umbrella
}

let run1 = () => {
    console.log("run 1")

    let salary = 100
    let taxedSalary = calculateTax(salary)
    let halfSalary = (taxedSalary / 2).toFixed(2)

    console.log("taxedSalary: ", taxedSalary)
    console.log("half salary: ", halfSalary)
}

let run2 = () => {
    console.log("run 2")

    let hat: [string, number] = ["Hat", 100]
    let gloves: [string, number] = ["Gloves", 45]
    let machin = ['Toumim', 334]

    writePrice(hat[0], hat[1])
    writePrice(gloves[0], gloves[1])

    machin.forEach((element: string | number) => {
        if (typeof element === 'string')
            console.log(`string ${element}`)
        if (typeof element === 'number')
            console.log(`number $${element.toFixed(2)}`)
    });
}

let run3 = () => {
    console.log("run 3")

    let hat: [string, number] = ["Hat", 40]
    let gloves: [string, number] = ["Gloves", 85]

    let products: [string, number][] = [['vam', 70], ['moto', 60]]
    let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, gloves, ...products]

    tupleUnion.forEach((element: [string, number] | boolean) => {
        if (element instanceof Array) {
            element.forEach((item: string | number) => {
                if (typeof item === 'string')
                    console.log(`string: ${item}`)
                else
                    console.log(`number: ${item.toFixed(2)}`)
            })
        }
        else if (typeof element === 'boolean') {
            console.log(`bool: ${element}`)
        }
    })
}

let run4 = () => {
    console.log('run 4')

    let products: [Product, number][] = [[Product.Gloves, 130], [Product.Umbrella, 35]]
    products.forEach((prod: [Product, number]) => {
        console.log(Product[prod[0]])
        switch (prod[0]) {
            case Product.Gloves:
                writePrice('gloves', prod[1])
                break;
            case Product.Hat:
                writePrice('hat', prod[1])
                break;
            case Product.Umbrella:
                writePrice('umbrella', prod[1]) 
                break;
        }

    })
}

let run5 = () => {
    console.log('run 5') 

    let taxNumber = calculateTaxFormated(100, false)
    let taxString = calculateTaxFormated(100, true)
    console.log(taxNumber.toString())
    console.log(taxString.toString())
    console.log((taxNumber as number).toFixed(3))
    console.log((taxString as string).charAt(1))

    let taxValue = calculateTaxFormated(250, true)
    if (typeof taxValue == 'number')
        console.log('nubmer value')
    else
        console.log('string value')
}

export default function Stage3() {

    useEffect(() => {
        console.log(' ')
        // run1()
        // run2()
        // run3()
        // run4()
        run5()
    }, [])

    return (
        <div>
            <h4>Stage 3</h4>
        </div>
    )
}