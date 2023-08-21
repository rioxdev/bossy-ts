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

type Employee = {
    company: string
    dept: string
}


let run1 = () => {
    console.log('-------------------------------------------')
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

let isPerson = (obj: any): obj is Person => obj.city != undefined

let run2 = () => {

    console.log('-------------------------------------------')
    console.log('run 2')

    let galaxyS23: Product = {
        id: 1,
        name: 'galaxy S23',
        price: 1200
    }

    let dupont: Person = {
        id: '1',
        name: 'Dupont',
        city: 'Bordeaux'
    }

    let data: (Product | Person)[] = [galaxyS23, dupont]

    data.forEach(item => {
        if (isPerson(item))
            console.log(`Person: ${item.name} - ${item.city}`)
        else
            console.log(`Product: ${item.name} - ${item.price}`)
    })

}

let run3 = () => {
    console.log('-------------------------------------------')
    console.log('run 3')

    let bob: Person & Employee = {
        id: '1',
        name: 'Bob',
        city: 'London',
        company: 'Uber',
        dept: 'IT'
    }

    let anna = {
        id: 2 + '',
        name: 'Anna',
        city: 'Paris',
        company: 'Engie',
        dept: 'Sale'
    }

    let data: (Person & Employee)[] = [bob, anna]
    data.forEach(item => {
        console.log(`id: ${item.id}`)
        console.log(`Person: ${item.name}`)
        console.log(`Employe: ${item.company}`)
    })

}

export default function Stage5() {

    useEffect(() => {
        console.log('Stage 5')

        // run1()
        // run2()
        run3()

    }, [])

    return (
        <div>
            <h4>Stage 5</h4>
        </div>
    )
}

