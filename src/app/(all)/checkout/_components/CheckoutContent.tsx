import Summary from "@/components/Cart/Summary";
import ProductsCart from "@/components/Cart/ProductsCart";
import Address from "@/components/Address/Address";
import Receiver from "@/components/Receiver/Receiver";
import Payment from "@/components/Payment/Payment";

export default function CheckoutContent() {
    return (
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
            {/* Left */}
            <div className="min-w-0 xl:col-span-2">
                <Address />
                <Receiver />
                <ProductsCart />
                <Payment />
            </div>

            {/* Right */}
            <aside className="w-full xl:sticky xl:top-18">
                <Summary
                    text={"placeOrder"}
                    href="/order-confirmed"
                    className="h-fit"
                />
            </aside>
        </div>
    )
}
