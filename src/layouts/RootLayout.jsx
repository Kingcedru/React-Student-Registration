import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function RootLayout() {
    return(
        <>
        <header>
            <nav>
                <NavLink to='/' >Register</NavLink>
                <NavLink to='/students' >View Students</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}
 