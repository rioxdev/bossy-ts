import { render } from "@testing-library/react";
import { useEffect } from "react";

type Product = {
    id: number
    name: string
    price?: number
}

type Person = {
    id: string
    name: string
    city: string
}

type UnionType = {
    id: number | string
    name: string
}

let run1 = () => {
    console.log('run 1')

    let hat: Product = {
        id: 1,
        name: 'Hat',
        price: 100
    }

    let toto: Person = {
        id: '1',
        name: 'toto',
        city: 'Bruges'
    }

    let tata: Person = {
        id: '2',
        name: 'tata',
        city: 'Pessac'
    }

    let data: (Product | Person)[] = [hat, toto, tata]
    data.forEach(item => console.log(`${item.id} - ${item.name}, is Person: ${'city' in item}`))

    let riox: Person = {
        id: 'rx',
        name: 'Riox',
        city: 'Bdx'
    }

    let data2: UnionType[] = [hat, toto, tata, riox]
    data2.forEach(item => console.log(`${item.id} , ${item.name}, Type: ${typeof item}`))

}

export default function Stage6() {

    useEffect(() => {
        console.log('Stage 5')

        run1()

    }, [])

    return (
        <div>
            <h4>Stage 5</h4>
        </div>
    )
}

