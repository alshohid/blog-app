'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import postCategories from '@/lib/postCategories'
const TopNav = () => {
  const [postCategory, setPostCategory] = useState([])
  useEffect(() => {
    ;(async () => {
      let post = await postCategories()
      setPostCategory(post)
    })()
  }, [])

  const currentPath = usePathname()
  return (
    <div className="navbar sticky top-0 bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="ml-2">
              <Link
                href={'/'}
                className={
                  currentPath === '/'
                    ? 'active-link rounded-md'
                    : 'pending-link rounded- md'
                }
              >
                {' '}
                হোম{' '}
              </Link>
            </li>
            <li className="ml-2">
              <Link
                href={'/blog'}
                className={
                  currentPath === '/blog'
                    ? 'active-link rounded-md'
                    : 'pending-link rounded- md'
                }
              >
                {' '}
                Blog{' '}
              </Link>
            </li>
            {postCategory.map((category, index) => (
              <li>
                {' '}
                <Link
                  key={index.toString()}
                  href={`/blog/${category.id}`}
                  className={
                    currentPath === `/blog/${category.id}`
                      ? 'active-link rounded-md '
                      : 'pending-link rounded-md'
                  }
                >
                  {' '}
                  {category.name}{' '}
                </Link>{' '}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Prothom Alo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="ml-2">
            <Link
              href="/"
              className={
                currentPath === '/'
                  ? 'active-link rounded-md ml-1'
                  : 'pending-link rounded-md ml-1'
              }
            >
              {' '}
              হোম{' '}
            </Link>
          </li>
          <li className="ml-2">
            <Link
              href={'/blog'}
              className={
                currentPath === '/blog'
                  ? 'active-link rounded-md'
                  : 'pending-link rounded-md'
              }
            >
              {' '}
              Blog{' '}
            </Link>
          </li>
          {postCategory.map((category, index) => (
            <li>
              {' '}
              <Link
                key={index.toString()}
                href={`/blog/${category.id}`}
                className={
                  currentPath === `/blog/${category.id}`
                    ? 'active-link rounded-md ml-1'
                    : 'pending-link rounded-md ml-1'
                }
              >
                {' '}
                {category.name}{' '}
              </Link>{' '}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/sign">
          {' '}
          <button className="btn"> Sign Up</button>{' '}
        </Link>
      </div>
    </div>
  )
}

export default TopNav
