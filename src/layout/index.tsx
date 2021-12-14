import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, ReactNode } from 'react'
import Banner from 'src/components/Banner/Banner';
import TodoFooter from 'src/components/TodoFooter/TodoFooter';

interface IProps {
    main: ReactNode;
  }

export const Layout:FC<IProps> = ({main}) => {

  const router = useRouter()

  const { locale, locales, defaultLocale } = router

    return (
        <div dir={locale=="ar"?"rtl":"ltr"} className=" container mx-auto">
          <div className='flex  w-full h-12 items-center space-x-5 justify-end px-2'>
          <Link href="/ar/" locale="ar">
      <a className={`hover:text-green-600 ${ locale =="ar" &&"underline text-xl font-bold"} cursor-pointer`}>Arabic</a>
    </Link> 
    <span>|</span>
          <Link href="/en/" locale="en">
          <a className={`hover:text-green-600 ${ locale =="en" &&"underline text-xl font-bold"} cursor-pointer`}>English</a>
    </Link>
          </div>
            <Banner/>
      <main className='-mt-40'>{main}</main>
    </div>
    )
}
