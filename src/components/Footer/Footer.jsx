import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>
        Desenvolvido por: Vinicius Carvalho
      </span>

      <div className="social-media">
        <a href="https://github.com/V-Carvalho" target="_blank">
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="Logo Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vinicius-a-carvalho/" target="_blank">
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="Logo Linkedin"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
