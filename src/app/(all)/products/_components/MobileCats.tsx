import React from 'react'
import { categories } from '../page'
import CategoryCard from '@/components/CategoryCard/CategoryCard'

type Props = {}

export default function MobileCats({ }: Props) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {categories.map((item, index) => (
                <CategoryCard
                    key={index}
                    item={item}
                    className="h-[170px] w-full min-w-0 sm:h-[200px]"
                    isSmall={index > 4}
                />
            ))}
        </div>
    )
}