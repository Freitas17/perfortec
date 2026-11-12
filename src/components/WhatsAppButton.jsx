import { MessageCircle } from 'lucide-react'

// IMPORTANTE: substitua o número abaixo pelo WhatsApp oficial da empresa.
// Formato: código do país + DDD + número, somente dígitos.
const WHATSAPP_NUMBER = '5511999999999'
const MESSAGE = 'Olá! Gostaria de solicitar um orçamento.'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Perfortec pelo WhatsApp"
      title="Fale pelo WhatsApp"
    >
      <MessageCircle size={25} />
    </a>
  )
}
