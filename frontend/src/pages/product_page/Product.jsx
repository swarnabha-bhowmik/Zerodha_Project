import { Suspense } from "react"
import Header from "./sections/Header"
import Kite from "./sections/Kite"
import Console from "./sections/Console"
import Coin from "./sections/Coin"
import KiteConnect from "./sections/KiteConnect"
import Varsity from "./sections/Varsity"
import ProductIcons from "./sections/ProductIcons"

const Product = () => {
    return (
        <Suspense>
            <Header />
            <Kite />
            <Console />
            <Coin />
            <KiteConnect />
            <Varsity />
            <ProductIcons />
        </Suspense>
    )
}

export default Product