import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
        <div>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    </>
  )
}

export default Layout