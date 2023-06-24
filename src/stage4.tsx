
import { useEffect } from "react"

let run1 = () => {
    console.log('run 1')

    let hat = { name: 'Hat', price: 100 }
    let gloves = { name: 'Gloves', price: 75 }
    let umbrella = { name: 'Umbrella', price: 23, waterproof: true }

    let products: { name: string, price: number }[] = [hat, gloves, umbrella]
    products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))
}

let run2 =() => {
    console.log('run 2')

    let hat = { name: 'Hat', price: 100 }
    let gloves = { name: 'Gloves', price: 75 }
    let umbrella = { name: 'Umbrella', price: 23, waterproof: true }

    let products: { name: string, price?: number, waterproof?: boolean }[] = [hat, gloves, umbrella]
    products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))
}

export default function Stage4() {

    useEffect(() => {
        console.log('STAGE 4')
        run1()
        run2()

    }, [])

    return (
        <div>
            <h4>Stage 4</h4>
        </div>
    )
}

