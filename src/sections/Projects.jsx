import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const projects = [
  {
    number: '01',
    title: 'Divisórias e ambientes em vidro',
    category: 'Instalação • Ambientes corporativos',
    image: '/images/projeto-divisorias.jpg',
    alt: 'Instalação de divisórias de vidro com perfis escuros em ambiente corporativo',
  },
  {
    number: '02',
    title: 'Execução de piso industrial',
    category: 'Obra • Infraestrutura',
    image: '/images/projeto-piso-industrial.jpg',
    alt: 'Equipe trabalhando na execução de piso de concreto em espaço industrial',
  },
  {
    number: '03',
    title: 'Projeto de escritório corporativo',
    category: 'Projeto • Design de ambientes',
    image: '/images/projeto-escritorio.jpg',
    alt: 'Imagem de projeto de escritório corporativo com mesas e divisórias',
  },
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projetos">
      <div className="container">
        <div className="projects-heading-row">
          <SectionHeading
            eyebrow="Imagens enviadas pelo cliente"
            title={<>Projetos e soluções<br /><span className="blue-text">em destaque.</span></>}
            description="Uma seleção de imagens de instalações, execução de obra e ambientes corporativos compartilhadas com a Perfortec."
          />
          <a className="text-link projects-link" href="#contato">Fale sobre seu projeto <ArrowUpRight size={16} /></a>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-image">
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-number">{project.number}</span>
                <span className="project-arrow"><ArrowUpRight size={20} /></span>
              </div>
              <div className="project-info">
                <div><span>{project.category}</span><h3>{project.title}</h3></div>
              </div>
            </article>
          ))}
        </div>
        <p className="content-note">Imagens fornecidas pelo cliente. Confirme os nomes e a descrição de cada serviço antes da publicação.</p>
      </div>
    </section>
  )
}
