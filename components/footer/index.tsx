import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <Logo />
            <p>
              Dockstage produz camisetas para jovens e universitários, uniformes
              empresariais e geeks.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Contato</li>
              <li>
                <a href="#">contato@dockstage.com</a>
              </li>
              <li>
                <a href="#">Telefone: +55 (44)99152-6689</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            Desenvolvido por{" "}
            <a href="https://www.linkedin.com/in/edu-as/">Eduardo Souza</a> -
            Todos os direitos Reservados © - 2022.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
