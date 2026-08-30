"use client"
import Products from '@/components/ProductsWithPagination/Products';
import { useAppDispatch, useAppSelector } from '@/rtk/hooks';
import { getCategories } from '@/rtk/slices/categoriesSlice';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'

export default function WrapperProducts() {
    const dispatch = useAppDispatch();
    const params = useParams();

    const id = params.catid;

    const { categories } = useAppSelector((s) => s.categories);
    const categoryItems = categories?.data?.categories ?? [];
    useEffect(() => {
        void dispatch(
            getCategories({
                page: 1,
                per_page: 100,
            })
        );
    }, [dispatch]);

    return (
        <Products
            categoryId={Number(id)}
            title={categoryItems.find((cat) => cat.id === Number(id))?.name}
            noCats
        />
    )
}
