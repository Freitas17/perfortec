import { ArrowUpRight, Cable, Factory, HardHat, Lightbulb, Settings, Wrench } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    number: '01',
    icon: <Settings />,
    title: 'Engenharia',
    description: 'Planejamento e soluções técnicas pensadas para as necessidades de cada projeto.',
  },
  {
    number: '02',
    icon: <Cable />,
    title: 'Instalações',
    description: 'Execução e adequação de instalações com atenção aos padrões técnicos aplicáveis.',
  },
  {
    number: '03',
    icon: <Factory />,
    title: 'Soluções industriais',
    description: 'Apoio técnico para ambientes produtivos, infraestrutura e operações.',
  },
  {
    number: '04',
    icon: <Lightbulb />,
    title: 'Consultoria técnica',
    description: 'Orientação para avaliar cenários, definir prioridades e tomar boas decisões.',
  },
  {
    number: '05',
    icon: <HardHat />,
    title: 'Manutenção',
    description: 'Cuidados preventivos e corretivos para apoiar a segurança e a continuidade.',
  },
  {
    number: '06',
    icon: <Wrench />,
    title: 'Projetos personalizados',
    description: 'Soluções desenvolvidas conforme o escopo, os objetivos e a realidade do cliente.',
  },
]

export default function Services() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <SectionHeading
          eyebrow="O que fazemos"
          title={<>Soluções completas para<br /><span className="blue-text">desafios reais.</span></>}
          description="Atuação técnica, planejamento e execução conectados para entregar soluções eficientes."
        />
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contato" aria-label={`Solicitar informações sobre ${service.title}`}>
                Saiba mais <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="content-note">* Os serviços acima são uma estrutura inicial e devem ser ajustados à atuação real da Perfortec.</p>
      </div>
    </section>
  )
}
