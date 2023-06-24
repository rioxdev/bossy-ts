
import { useEffect } from "react"

enum Feature {
    Waterproof,
    Insulated
}

type Product = {
    name: string,
    price?: number,
    hasFeature?(feature: Feature): boolean
}

let run1 = () => {
    console.log('run 1')

    let hat = { name: 'Hat', price: 100 }
    let gloves = { name: 'Gloves', price: 75 }
    let umbrella = { name: 'Umbrella', price: 23, waterproof: true }

    let products: { name: string, price: number }[] = [hat, gloves, umbrella]
    products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))
}

let run2 = () => {
    console.log('run 2')

    let hat = { name: 'Hat', price: 100 }
    let gloves = { name: 'Gloves', price: 75 }
    let umbrella = { name: 'Umbrella', price: 23, waterproof: true }

    let products: { name: string, price?: number, waterproof?: boolean }[] = [hat, gloves, umbrella]
    products.forEach(prod => console.log(`${prod.name}: ${prod.price}`))
}

let run3 = () => {
    console.log('run 3')

    let hat = { name: 'Hat', price: 234 }
    let gloves = { name: 'Gloves', price: 56 }
    let umbrella = {
        name: 'Umbrella', price: 45,
        hasFeature: (feature: Feature) => feature == Feature.Waterproof
    }

    let products: {
        name: string,
        price?: number,
        hasFeature?: (feature: Feature) => boolean
    }[] = [hat, gloves, umbrella]

    products.forEach(prod =>
        console.log(`${prod.name}: ${prod.price} Waterproof:  ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false}`))
}

let run4 = () => {
    console.log('run 4')

    let hat = { name: 'Hat', price: 234 }
    let gloves = { name: 'Gloves', price: 56 }
    let umbrella = {
        name: 'Umbrella', price: 45,
        hasFeature: (feature: Feature) => feature == Feature.Waterproof
    }

    let mirroShades = {
        name: 'Sunglasses',
        price: 44,
        finish: 'mirror'
    }

    let products: Product[] = [hat, gloves, umbrella, mirroShades]

    products.forEach(prod =>
        console.log(`${prod.name}: ${prod.price} Waterproof:  ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false}`))
}


export default function Stage4() {

    useEffect(() => {
        console.log('STAGE 4')
        run1()
        run2()
        run3()
        run4()

    }, [])

    return (
        <div>
            <h4>Stage 4</h4>
        </div>
    )
}

