import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo-perfortec.png'

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <nav className="container navbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Perfortec - início">
          <img src={logo} alt="Perfortec Engenharia & Instalações" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <div className={`nav-content ${isOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="button button-small" href="#contato" onClick={closeMenu}>
            Solicitar orçamento <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  )
}
