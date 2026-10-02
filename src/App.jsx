import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Maternelle from './pages/Maternelle'
import Primaire from './pages/Primaire'
import Admissions from './pages/Admissions'
import VieScolaire from './pages/VieScolaire'
import Actualites from './pages/Actualites'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

/* Plan du site (routes) */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="maternelle" element={<Maternelle />} />
        <Route path="primaire" element={<Primaire />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="vie-scolaire" element={<VieScolaire />} />
        <Route path="actualites" element={<Actualites />} />
        <Route path="actualites/:slug" element={<ArticleDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
