import React, { FC, ReactNode } from 'react'
import Banner from 'src/components/Banner/Banner';
import TodoFooter from 'src/components/TodoFooter/TodoFooter';

interface IProps {
    main: ReactNode;
  }

export const Layout:FC<IProps> = ({main}) => {
    return (
        <div className=" container mx-auto">
            <Banner/>
      <main className='-mt-40'>{main}</main>
    </div>
    )
}
