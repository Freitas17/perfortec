import { ArrowDown, ArrowUpRight, ShieldCheck, Wrench, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> Engenharia & instalações</span>
          <h1>Projetamos soluções.<br /><span>Entregamos confiança.</span></h1>
          <p className="hero-description">
            Excelência técnica em cada etapa. A Perfortec une conhecimento,
            planejamento e execução para transformar desafios em resultados.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contato">Solicite um orçamento <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#servicos">Conheça nossos serviços <ArrowDown size={16} /></a>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><ShieldCheck size={19} /><span>Compromisso com a qualidade</span></div>
            <div className="trust-item"><Wrench size={19} /><span>Soluções sob medida</span></div>
            <div className="trust-item"><Zap size={19} /><span>Eficiência em cada projeto</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Projeto de instalação de divisórias de vidro realizado pela equipe">
          <div className="hero-image" />
          <div className="hero-image-overlay" />
          <div className="hero-stamp">
            <span className="stamp-line" />
            <strong>Engenharia<br />em movimento.</strong>
            <span>PERFORTEC • ENGENHARIA & INSTALAÇÕES</span>
          </div>
          <div className="hero-index">01 <span>/</span> 05</div>
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  )
}
