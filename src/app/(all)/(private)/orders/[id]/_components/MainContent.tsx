import { useTranslations } from 'next-intl'
import Products from './Products'
import Status from './Status'
import Info from './Info'
import Delivery from './Delivery'
import Payment from './Payment'

type Props = {
    order: any;
}

export default function MainContent({ order }: Props) {
    const t = useTranslations();

    return (
        <div className="flex min-w-0 flex-col gap-5 col-span-1 lg:col-span-2">
            <Products />
            <Status />
            <Info />
            <Delivery />
            <Payment order={order} />
        </div>
    )
}