import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react'
import logo from '../assets/logo-perfortec.png'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#inicio" aria-label="Voltar ao início">
            <img src={logo} alt="Perfortec Engenharia & Instalações" />
          </a>
          <p>Engenharia e instalações com compromisso, qualidade e atenção a cada detalhe.</p>
        </div>
        <div className="footer-column">
          <h3>Navegação</h3>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-column">
          <h3>Fale com a gente</h3>
          <a href="#contato">Solicitar orçamento <ArrowUpRight size={15} /></a>
          <span>Atendimento mediante agendamento</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Perfortec Engenharia & Instalações.</span>
        <span>Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}
