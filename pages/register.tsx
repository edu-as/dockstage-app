import Layout from "../layouts/Main";
import Link from "next/link";

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a>
              <i className="icon-left"></i>{" "}
            </a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">
            Crie uma conta e descubra os benefícios
          </h2>
          <p className="form-block__description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <form className="form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className={`checkbox checkbox--sm`}
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check"></span>
                  <p>
                    Eu concordo com os Termos de Serviço e a Política de
                    Privacidade do Google
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Inscrever-se
            </button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Você já é um membro?</a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
