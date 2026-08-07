import '../../css/footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
    return (
        <footer className="footer">
            {/* CTA prominente, estilo hero */}
            <div className="footer-cta">
                <h2>Empieza hoy con TinyPulse</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati, voluptate?
                </p>
                <button className="footer-cta-btn">Crear cuenta</button>
            </div>

            {/* Info del footer */}
            <div className="footer-info">
                <div className="footer-brand">
                    <span className="footer-brand-name">TinyPulse</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati, voluptate.
                    </p>
                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">IG</a>
                        <a href="#" aria-label="Twitter">X</a>
                        <a href="#" aria-label="Facebook">FB</a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Producto</h4>
                    <ul>
                        <li><a href="#">Características</a></li>
                        <li><a href="#">Precios</a></li>
                        <li><a href="#">Actualizaciones</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Soporte</h4>
                    <ul>
                        <li><a href="#">Ayuda</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Comunidad</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <span>© {YEAR} TinyPulse. Todos los derechos reservados.</span>
                <div className="footer-bottom-links">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                </div>
            </div>
        </footer>
    )
}