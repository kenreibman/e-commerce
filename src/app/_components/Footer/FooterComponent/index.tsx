"use client"

import React from 'react'
import classes from './index.module.scss'
import { usePathname } from 'next/navigation'
import { Gutter } from '../../Gutter'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import Image from 'next/image'
import Link from 'next/link'
import { Footer, Media } from '../../../../payload/payload-types'

const FooterComponent = ({ footer }: { footer: Footer}) => {
  const pathname = usePathname();
  const navItems = footer?.navItems || []
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion, index) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />
              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/" >
              <Image 
                src="/logo-white.svg"
                width={150}
                height={50}
                alt="logo"
              />
            </Link>

            <p>{footer.copyright}</p>
            <ul className={classes.socialLinks}>
              {navItems.map((item) => {
                const icon = item?.link?.icon as Media

                return (
                  <li key={item.link.label} className={classes.socialLinkItem}>
                    <Link
                      href={item.link.url}
                      target={item.link.newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      <Image 
                        src={icon?.url}
                        alt={item.link.label}
                        width={24}
                        height={24}
                        className={classes.socialIcon}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent