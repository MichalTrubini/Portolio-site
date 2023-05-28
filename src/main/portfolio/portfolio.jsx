import styles from "./portfolio.module.css";
import PortfolioItem from "./portfolioItem";
import imageEntertainment from "../../assets/entertainment_app.jpg";
import imageEcommerce from "../../assets/ecommerce.jpg";
import imageSubscription from "../../assets/subscription.jpg";
import imageCalculator from "../../assets/calculator.jpg";
//import imageTips from "../../assets/tips.jpg";
import imagePlanets from "../../assets/planets.jpg";
import imageSkinekt from "../../assets/skinekt.jpg"

const portfolioItems = [

  {
    id: 1,
    src: imageEcommerce,
    alt: "Ecommerce app",
    title: "Ecommerce app",
    techStack: ["Next.js", "Typescript"],
    git: "https://github.com/MichalTrubini/NEXT_Audiophile-eCommerce-website",
    live: "https://next-audiophile-e-commerce-website.vercel.app/",
  },
  {
    id: 2,
    src: imageSkinekt,
    alt: "Skinekt landing page",
    title: "Skinekt landing page",
    techStack: ["React.js", "Typescript"],
    git: "https://github.com/MichalTrubini/SPRAVIM_job2",
    live: "https://exquisite-entremet-10ae99.netlify.app/",
  },
  {
    id: 3,
    src: imageEntertainment,
    alt: "Entertainment app",
    title: "Entertainment app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_entertainment-web-app",
    live: "https://next-entertainment-v1.vercel.app/",
  },
  {
    id: 4,
    src: imageSubscription,
    alt: "Subscription app",
    title: "Subscription app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_coffeeroasters-subscription-site",
    live: "https://next-coffeeroasters-subscription-site-4e83.vercel.app/",
  },
  {
    id: 5,
    src: imagePlanets,
    alt: "Planets info app",
    title: "Planets info app",
    techStack: ["React.js", "SASS"],
    git: "https://github.com/MichalTrubini/REACT__planets-fact-site",
    live: "https://curious-chebakia-006342.netlify.app/",
  },
  {
    id: 6,
    src: imageCalculator,
    alt: "Calculator app",
    title: "Calculator app",
    techStack: ["React.js", "SASS"],
    git: "https://github.com/MichalTrubini/REACT_Calculator-app",
    live: "https://iridescent-malasada-5fcfa1.netlify.app/",
  },
/*   {
    id: 7,
    src: imageTips,
    alt: "Tips splitter app",
    title: "Tips splitter app",
    techStack: ["Javascript", "SASS"],
    git: "https://github.com/MichalTrubini/Tip-calculator-app",
    live: "https://michaltrubini.github.io/Tip-calculator-app/",
  }, */
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio} id="portfolioID">
      <div className="headingContainer">
        <h2 className="headingSection">My Portfolio</h2>
        <div className="headingUnderline"></div>
        <p className="headingBackground">Portfolio</p>
      </div>
      <div className={styles.works}>
        {portfolioItems.map((item) => (
          <PortfolioItem
            key={item.id}
            id={item.id}
            src={item.src}
            title={item.title}
            alt={item.alt}
            techStack={item.techStack}
            gitLink={item.git}
            liveLink={item.live}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
