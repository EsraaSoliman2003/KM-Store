import CategoryCard from '@/components/CategoryCard/CategoryCard'
import React from 'react'
import { categories } from './data'

export default function DesignCategories() {
    return (
        <>
            <div className="hidden h-[247px] grid-cols-5 gap-3 lg:grid">

                {/* First */}
                <CategoryCard
                    item={categories[0]}
                    className="h-full min-w-0"
                />

                {/* Second */}
                <CategoryCard
                    item={categories[1]}
                    className="h-full min-w-0"
                />

                {/* Third */}
                <CategoryCard
                    item={categories[2]}
                    className="h-full min-w-0"
                />

                {/* Fourth */}
                <div className="grid h-full min-w-0 grid-cols-2 grid-rows-[1.6fr_1fr] gap-3">
                    <CategoryCard
                        item={categories[3]}
                        className="col-span-2 min-h-0 min-w-0"
                    />

                    <CategoryCard
                        item={categories[5]}
                        className="min-h-0 min-w-0"
                        isSmall
                    />

                    <CategoryCard
                        item={categories[6]}
                        className="min-h-0 min-w-0"
                        isSmall
                    />
                </div>

                {/* Fifth */}
                <div className="grid h-full min-w-0 grid-cols-2 grid-rows-[1.6fr_1fr] gap-3">
                    <CategoryCard
                        item={categories[4]}
                        className="col-span-2 min-h-0 min-w-0"
                    />

                    <CategoryCard
                        item={categories[7]}
                        className="min-h-0 min-w-0"
                        isSmall
                    />

                    <CategoryCard
                        item={categories[8]}
                        className="min-h-0 min-w-0"
                        isSmall
                    />
                </div>
            </div>

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
        </>
    )
}
