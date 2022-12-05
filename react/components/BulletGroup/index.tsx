import React, { PropsWithChildren } from 'react'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useCssHandles } from 'vtex.css-handles'
import { getBulletsAsTSXList } from './modules/bulletsAsList'

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || [];

    //console.log("lista", bullets)

    const bulletsGroup = getBulletsAsTSXList(bullets);
    const newListContextValue = list.concat(bulletsGroup)

    const CSS_HANDLES = ['bullet__container']

    const handels = useCssHandles(CSS_HANDLES)

    const { bullet__container } = handels
    return (

        <ListContextProvider list={newListContextValue}>
            {isMobile ?
                <div className={bullet__container}>
                    {bulletsGroup}
                </div>
                :
                children
            }
        </ListContextProvider>
    )
}

export default BulletGroup