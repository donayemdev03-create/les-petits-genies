import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileActionBar from './MobileActionBar'
import ContactDialog from './ContactDialog'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-white pb-[84px] sm:pb-0">
      <a href="#contenu" onClick={(e) => { e.preventDefault(); document.getElementById('contenu')?.focus() }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Aller au contenu</a>
      <Header />
      <main id="contenu" tabIndex={-1} key={pathname} className="flex-1 animate-fadeUp pb-10 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
      <ContactDialog />
    </div>
  )
}
