import '../../css/contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-grid">
        {/* Info de contacto */}
        <div>
          <div className="contact-card">
            <h2>Hablemos</h2>
            <p>
              Estamos aquí para resolver tus dudas y ayudarte con lo que
              necesites.
            </p>

            <div className="contact-rows">
              <div className="contact-row">
                <span className="contact-row-icon">@</span>
                <span>hola@tinypulse.io</span>
              </div>
              <div className="contact-row">
                <span className="contact-row-icon">⌂</span>
                <span>Dirección de ejemplo 123</span>
              </div>
              <div className="contact-row">
                <span className="contact-row-icon">☎</span>
                <span>+00 000 000 0000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div>
          <div className="contact-card">
            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Tu nombre*" required />
              <textarea placeholder="Escribe tu mensaje..." required />
              <button className="contact-form-submit" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
