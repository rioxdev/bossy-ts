
//STAGE 1 : TYPES

import { useEffect } from "react";
import { add, Biathlete, getAverage, ShirtSize } from "./types/stage1";


let sayHello: (name: string) => void;
sayHello = (name: string) => console.log(`Hello ${name}`);

let sayHelloToPersonType = (person: PersonType) => console.log(person.name, " ", person.height);

enum VehicleType {
    Car,
    Minivan,
    Bus,
    Motorcycle
}

interface PersonInterface {
    name: string;
    height: number;
    age: number;
};

type PersonType = {
    name: string;
    height: number;
};



const myFunc = sayHello;

let ralol: PersonInterface = {
    name: 'ralol',
    height: 177,
    age: 33
};

let riox: PersonType = {
    name: 'riox',
    height: 150
};

const buss = VehicleType.Bus;

let aabb: boolean | number;
aabb = 123;
aabb = false;

type stringOrNumber = string | number;
let xx: stringOrNumber = "xxx";
xx = 2222;

let athele1: Biathlete = {

    shoot: () => console.log('shooting...'),
    slide: () => console.log('sliding...')
};

//
let myShirtSize: ShirtSize = ['S', 'M', 'XXL'];

//tuple
function getTuple(): [number, string] {
    return [11, 'riox tupla']
}

//array destructuring
const triangles = [1, 3, 6, 56];
const [first, , , last] = triangles;

//object destructuring
const highSchool = {
    school: 'Central High',
    team: 'Centaurus'
}

const { school, team } = highSchool;

//tuple destructuring
function getThreeLandmarks(): [string, string, string] {
    return ['Golden Gate Bridge', 'Place oif Westminster', 'Colosseum']
}

const [sanFranscico] = getThreeLandmarks();

//array spreading

const squares = [1, 4, 9, 16, 25]
const powers = [2, 4, 8, 16, 32]

const squaresAndPowers = [...squares, ...powers]
const squaresCopy = [...squares]

//object spreading
const emergencyServie = {
    police: 'Chase',
    fire: 'Marshall'
}
const utilityService = {
    recycling: 'Rocky',
    construction: 'Rubble'
}

const patrol = { ...emergencyServie, ...utilityService }

//spread operator in function call

const addFunc = (x: number, y: number): number => x + y
// const summi = addFunc(...squares);

const average = getAverage(...triangles);

export default function Stage1() {

    useEffect(() => {
        // console.log(sayHello(ralol.name));
        // console.log(myFunc(riox.name));
        // sayHelloToPersonType(ralol);
        // sayHelloToPersonType(riox);
        // console.log(buss);
        // console.log(VehicleType[buss]);
        // console.log(xx);
        // console.log(aabb);

        // athele1.shoot();
        // athele1.slide();

        // console.log(myShirtSize);
        // console.log(myShirtSize[0]);
        // let tupla = getTuple()
        // console.log(tupla);

        // console.log(first, ' ,', last);

        // console.log(school, ' ', team);

        // console.log(sanFranscico);

        console.log(squaresAndPowers);
        console.log(squaresCopy);
        console.log(patrol);
        console.log(average);
   
    }, []);

    return (
        <div>
            <h4>STAGE 1 TYPES</h4>

        </div>
    )
}