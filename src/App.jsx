 
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Blog from './pages/Blog'
import Tours from './pages/Tours'
import Contacts from './pages/Contacts'

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <header className="header">
          <h1> Мир путешествий</h1>

          <nav>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/destinations">Направления</NavLink>
            <NavLink to="/blog">Блог</NavLink>
            <NavLink to="/tours">Туры</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </nav>
        </header>

        <main className="hero">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>

        <footer>
          © 2026 Мир путешествий. Все права защищены.
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
