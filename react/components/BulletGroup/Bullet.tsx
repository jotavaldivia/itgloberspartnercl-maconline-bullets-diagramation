import React from 'react'
import { Link } from 'vtex.render-runtime'
import { LinkProps } from './BulletTypes'
import { useCssHandles } from 'vtex.css-handles'
import './style.css'

type Props = {
    src: string
    titleBullet: string
    link: LinkProps
}

const Bullet = ({ src, titleBullet, link }: Props) => {
    const CSS_HANDLES = [
        "bullet__item",
        "bullet__item--title",
        "bullet__item--image",
        "bullet__item--link"
    ]

    const handles = useCssHandles(CSS_HANDLES)

    console.log("datos del componente bullet", src, titleBullet, link)
    return (
        <div className={handles["bullet__item"]}>
            <Link
                to={link.url}
                className={handles["bullet__item--link"]}
            >
                <img src={src} alt={titleBullet} className={handles["bullet__item--image"]} />
                <p className={handles["bullet__item--title"]}>{titleBullet}</p>
            </Link>
        </div>
    )
}

Bullet.schema = {
    title: "Bullet",
    type: "object",
    properties: {
        src: {
            title: "imagen de bullet",
            type: "string",
            widget: {
                "ui:wifget": "image-uploader"
            }
        }
    }
}

export default Bullet