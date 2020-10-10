import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer} sectioncontain`}>
      <div className={styles.links}>
        <ul>
          <li>About</li>
          <li>
            <a href="https://www.netlify.com/blog/?utm_source=explorers&utm_medium=explorer-blog&utm_campaign=devex">
              Netlify Blog
            </a>
          </li>
          <li>
            <a href="https://www.netlify.com/careers/?utm_source=explorers&utm_medium=explorer-careers&utm_campaign=devex">
              Netlify Careers
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.newsletter}>
        {/* TODO: Make this form subscribe people to the newsletter */}
        Stay up to date with Netlify news
        <form
          name="resource-newsletter"
          method="POST"
          action="/thanks-for-signing-up/"
          className={styles.newsletterForm}
          data-netlify="true"
        >
          <input className={styles.formInput} name="email" type="email" />
          <button
            type="submit"
            className={`${styles.formButton} btn btnprimary`}
          >
            Submit
          </button>
        </form>
      </div>
      <div className={styles.love}>
        created with{' '}
        <img
          className={styles.netliheart}
          src="https://res.cloudinary.com/jlengstorf/image/upload/f_auto,q_auto,w_50/v1596146333/netlify/netliheart.png"
          alt="love"
        />{' '}
        by the{' '}
        <a href="https://www.netlify.com/?utm_source=jamstack-explorers&utm_medium=footer-link&utm_campaign=devex">
          Netlify
        </a>{' '}
        team
      </div>
    </footer>
  );
}

export default Footer;