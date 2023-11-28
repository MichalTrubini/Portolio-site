import styles from "./portfolio.module.css";
import PortfolioItem from "./portfolioItem";
import imageEntertainment from "../../assets/entertainment_app.jpg";
import imageEcommerce from "../../assets/ecommerce.jpg";
import imageCalculator from "../../assets/calculator.jpg";
import imageInvoice from "../../assets/invoice.jpg";
import imageSkinekt from "../../assets/skinekt.jpg";
import imageSubscription from "../../assets/subscription.jpg";
import imageRebbid from "../../assets/rebbid.jpg";
import imageRb from "../../assets/rb.jpg";
import imageAlza1 from "../../assets/alza1.jpg";
import imageAlza2 from "../../assets/alza2.jpg";
import imageFamily from "../../assets/familyhistory.jpg";

const demoProjects = [
  {
    id: 1,
    src: imageEcommerce,
    alt: "Ecommerce app",
    title: "Ecommerce app",
    techStack: ["Next.js", "Typescript"],
    git: "https://github.com/MichalTrubini/NEXT_Audiophile-eCommerce-website",
    live: "https://next-audiophile-e-commerce-website.vercel.app/",
    type: "demoProject",
  },
  {
    id: 2,
    src: imageInvoice,
    alt: "Invoice app",
    title: "Invoice app",
    techStack: ["Next.js", "Typescript"],
    git: "https://github.com/MichalTrubini/NEXT-Invoice-app",
    live: "https://next-invoice-app-ochre.vercel.app/",
    type: "demoProject",
  },
  {
    id: 3,
    src: imageEcommerce,
    alt: "Ecommerce app",
    title: "Ecommerce app",
    techStack: ["Vue.js", "Typescript", "Tailwind"],
    git: "https://github.com/MichalTrubini/Vue_Audophile-ecommerce2",
    live: "https://adorable-salamander-66ef68.netlify.app/",
    type: "demoProject",
  },
  {
    id: 4,
    src: imageSubscription,
    alt: "Subscription app",
    title: "Subscription app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_coffeeroasters-subscription-site",
    live: "https://next-coffeeroasters-subscription-site-4e83.vercel.app/",
    type: "demoProject",
  },
  {
    id: 5,
    src: imageEntertainment,
    alt: "Entertainment app",
    title: "Entertainment app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_entertainment-web-app",
    live: "https://next-entertainment-v1.vercel.app/",
    type: "demoProject",
  },
  {
    id: 6,
    src: imageCalculator,
    alt: "Calculator app",
    title: "Calculator app",
    techStack: ["React.js", "SASS"],
    git: "https://github.com/MichalTrubini/REACT_Calculator-app",
    live: "https://iridescent-malasada-5fcfa1.netlify.app/",
    type: "demoProject",
  },
];

const commercialProjects = [
  {
    id: 1,
    src: imageSkinekt,
    alt: "Skinekt landing page",
    title: "Skinekt landing page",
    techStack: ["React.js", "Typescript"],
    git: "https://github.com/MichalTrubini/SPRAVIM_job2",
    live: "https://exquisite-entremet-10ae99.netlify.app/",
    type: "commercialProject",
  },
  {
    id: 2,
    src: imageRebbid,
    alt: "Rebbid share landing page",
    title: "Rebbid share ad page",
    techStack: ["React.js", "Typescript"],
    git: "",
    live: "https://share.rebbid.com/?id=1989",
    type: "commercialProject",
  },
  {
    id: 3,
    src: imageRb,
    alt: "Riesime byvanie share landing page",
    title: "Riesime byvanie ad page",
    techStack: ["React.js", "Typescript"],
    git: "",
    live: "https://share.rebbid.com/?id=1989",
    type: "commercialProject",
  },
  {
    id: 4,
    src: imageAlza1,
    alt: "Alza html template",
    title: "Alza html template",
    techStack: ["html", "css", "javascript"],
    git: "",
    live: "https://main--comforting-bubblegum-f7146a.netlify.app/",
    type: "commercialProject",
  },
  {
    id: 5,
    src: imageAlza2,
    alt: "Alza html template",
    title: "Alza html template",
    techStack: ["html", "css", "javascript"],
    git: "",
    live: "https://ornate-brigadeiros-86ef93.netlify.app/",
    type: "commercialProject",
  },
  {
    id: 5,
    src: imageFamily,
    alt: "Family history landing page",
    title: "Family history",
    techStack: ["html", "css", "javascript"],
    git: "",
    live: "https://familyhistory.sk/",
    type: "commercialProject",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio} id="portfolioID">
      <div className="headingContainer">
        <h2 className={`${styles.marginFix} headingSection`}>My Portfolio</h2>
        <div className="headingUnderline"></div>
        <p className="headingBackground">Portfolio</p>
      </div>
      <div>
        <h3 className={styles.subHeading}>Commercial projects</h3>
      </div>
      <div className={styles.works}>
        {commercialProjects.map((item) => (
          <PortfolioItem
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            alt={item.alt}
            techStack={item.techStack}
            gitLink={item.git}
            liveLink={item.live}
            type={item.type}
          />
        ))}
      </div>
      <div>
        <h3 className={styles.subHeading}>Demo projects</h3>
      </div>
      <div className={styles.works}>
        {demoProjects.map((item) => (
          <PortfolioItem
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            alt={item.alt}
            techStack={item.techStack}
            gitLink={item.git}
            liveLink={item.live}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
