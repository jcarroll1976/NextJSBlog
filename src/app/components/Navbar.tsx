"use client"
import Link from 'next/link'
import React from 'react'
import "./Navbar.css"

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

type Props = {}

function Navbar({}: Props) {
  return (
    <div className='nav-container'>
        <Link href="/" className='nav-logo'>Daily Blogs</Link>
        <div className='nav-links'>
            {links.map(link => (
                <Link key={link.id} href={link.url} className='nav-link'>{link.title}</Link>
            ))}
            <button
            className='nav-logout'
            onClick={() => {
                console.log("logged out");
            }}
            >
                Logout
            </button>
        </div>
    </div>
  )
}

export default Navbar