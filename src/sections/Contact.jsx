import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault()
    const message = [
      'Olá! Gostaria de solicitar um orçamento.',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.phone || 'Não informado'}`,
      `Assunto: ${form.service || 'Não informado'}`,
      `Mensagem: ${form.message}`,
    ].join('\n')

    // Troque pelo WhatsApp oficial da Perfortec.
    const whatsappNumber = '5511999999999'
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-layout">
        <div className="contact-copy">
          <SectionHeading
            eyebrow="Vamos conversar?"
            title={<>Seu próximo projeto<br />começa <span className="blue-text">aqui.</span></>}
            description="Conte um pouco sobre sua necessidade. Nossa equipe poderá entender melhor o seu projeto e conversar sobre os próximos passos."
          />
          <div className="contact-details">
            <div><span className="contact-detail-icon"><MessageCircle size={19} /></span><div><small>WhatsApp</small><strong>Adicione o número oficial</strong></div></div>
            <div><span className="contact-detail-icon"><Mail size={19} /></span><div><small>E-mail</small><strong>Adicione o e-mail comercial</strong></div></div>
            <div><span className="contact-detail-icon"><MapPin size={19} /></span><div><small>Localização</small><strong>Adicione cidade e região de atendimento</strong></div></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitForm}>
          <div className="form-heading"><span>Fale com a Perfortec</span><p>Preencha os campos e envie sua solicitação.</p></div>
          <div className="form-row">
            <label>Nome completo<input name="name" value={form.name} onChange={updateField} placeholder="Como podemos te chamar?" required /></label>
            <label>E-mail<input name="email" type="email" value={form.email} onChange={updateField} placeholder="seu@email.com" required /></label>
          </div>
          <div className="form-row">
            <label>Telefone<input name="phone" value={form.phone} onChange={updateField} placeholder="(00) 00000-0000" /></label>
            <label>Assunto
              <select name="service" value={form.service} onChange={updateField}>
                <option value="">Selecione um assunto</option>
                <option>Engenharia</option>
                <option>Instalações</option>
                <option>Manutenção</option>
                <option>Consultoria técnica</option>
                <option>Outro assunto</option>
              </select>
            </label>
          </div>
          <label>Como podemos ajudar?<textarea name="message" value={form.message} onChange={updateField} placeholder="Descreva brevemente o que você precisa..." rows="4" required /></label>
          <button className="button form-submit" type="submit">Enviar pelo WhatsApp <ArrowUpRight size={18} /></button>
          <p className="form-privacy"><Phone size={13} /> Ao enviar, você será direcionado ao WhatsApp para concluir o contato.</p>
        </form>
      </div>
    </section>
  )
}
