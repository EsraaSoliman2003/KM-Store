import React from 'react'
import Header from '../_components/Header'
import { useTranslations } from 'next-intl'

export default function page() {
  const t = useTranslations();

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("address")}
        subTitle={t("subTitleAddress")}
      />
      
    </div>
  )
}
