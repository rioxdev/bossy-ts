import { useEffect } from "react"

let sumPrices = (first, second, third) => {
    return first + second + third
}


function run1() {
    let firstCity;
    let secondCity = firstCity || "Bordeaux"
    console.log(secondCity);
}

function run2(){
    let hatPrice = 100;
    let bootsPrice = '200';
    let totalPrice = sumPrices(hatPrice, bootsPrice);
    console.log(`total: ${totalPrice} , type: ${typeof totalPrice}`);

    totalPrice = sumPrices(30,50,400);
    console.log(`total: ${totalPrice}, type: ${typeof totalPrice}`);

    totalPrice = sumPrices(330,750);
    console.log(`total: ${totalPrice}, type: ${typeof totalPrice}`);
    
}

function run3(){

}

export default function Stage2() {
    useEffect(() => {
        console.log("stage2 - js refresher");

        run1();
        run2();

    }, [])

    return (

        <div>
            <h4>STAGE 2 - JS Refresher</h4>

        </div>

    )
}