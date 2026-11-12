import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const values = [
  'Planejamento e responsabilidade em cada etapa',
  'Atenção à qualidade e aos detalhes técnicos',
  'Comunicação clara e relacionamento próximo',
]

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="about-photo" />
          <div className="about-blue-block">
            <span>PERFORTEC</span>
            <strong>Precisão que<br />gera confiança.</strong>
            <span className="about-block-line" />
          </div>
          <span className="about-vertical-label">ENGENHARIA • INSTALAÇÕES • SOLUÇÕES</span>
        </div>
        <div className="about-copy">
          <SectionHeading
            eyebrow="Conheça a Perfortec"
            title={<>Engenharia com visão<br />de <span className="blue-text">futuro.</span></>}
            description="A Perfortec Engenharia & Instalações atua em projetos de ambientes corporativos, divisórias e soluções de infraestrutura, com atenção à execução e aos detalhes."
          />
          <p className="about-extra">
            Cada projeto tem suas particularidades. Por isso, valorizamos o entendimento
            das necessidades, o planejamento cuidadoso e uma execução orientada por qualidade.
          </p>
          <ul className="check-list">
            {values.map((value) => (
              <li key={value}><CheckCircle2 size={19} /> {value}</li>
            ))}
          </ul>
          <a className="button button-outline" href="#contato">Converse com nossa equipe <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  )
}
