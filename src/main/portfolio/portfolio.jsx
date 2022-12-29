import styles from "./portfolio.module.css";
import PortfolioItem from "./portfolioItem";
import imageEntertainment from "../../assets/entertainment_app.jpg";
import imageEcommerce from "../../assets/ecommerce.jpg";
import imageSubscription from "../../assets/subscription.jpg";
import imageCalculator from "../../assets/calculator.jpg";
import imageTips from "../../assets/tips.jpg";
import imagePlanets from "../../assets/planets.jpg";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../utilities/WindowDimensions";

const portfolioItems = [
  {
    id: 1,
    src: imageEntertainment,
    alt: "Entertainment app",
    title: "Entertainment app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_entertainment-web-app",
    live: "https://entertainment-v2-rhcq.vercel.app/",
  },
  {
    id: 2,
    src: imageEcommerce,
    alt: "Ecommerce app",
    title: "Ecommerce app",
    techStack: ["Next.js", "Typescript"],
    git: "https://github.com/MichalTrubini/NEXT_Audiophile-eCommerce-website",
    live: "https://next-audiophile-e-commerce-website.vercel.app/",
  },
  {
    id: 3,
    src: imageSubscription,
    alt: "Subscription app",
    title: "Subscription app",
    techStack: ["Next.js", "MongoDB"],
    git: "https://github.com/MichalTrubini/NEXT_coffeeroasters-subscription-site",
    live: "https://next-coffeeroasters-subscription-site.vercel.app/",
  },
  {
    id: 4,
    src: imagePlanets,
    alt: "Planets info app",
    title: "Planets info app",
    techStack: ["React", "SASS"],
    git: "https://github.com/MichalTrubini/REACT__planets-fact-site",
    live: "https://curious-chebakia-006342.netlify.app/",
  },
  {
    id: 5,
    src: imageCalculator,
    alt: "Calculator app",
    title: "Calculator app",
    techStack: ["React", "SASS"],
    git: "https://github.com/MichalTrubini/REACT_Calculator-app",
    live: "https://iridescent-malasada-5fcfa1.netlify.app/",
  },
  {
    id: 6,
    src: imageTips,
    alt: "Tips splitter app",
    title: "Tips splitter app",
    techStack: ["Javascript", "SASS"],
    git: "https://github.com/MichalTrubini/Tip-calculator-app",
    live: "https://michaltrubini.github.io/Tip-calculator-app/",
  },
];

const Portfolio = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [intersection, setIntersection] = useState(false);
  const refPortfolio = useRef();
  const { height } = useWindowDimensions();
console.log(intersection)
  useEffect(() => {
    const boundingClient = refPortfolio.current.getBoundingClientRect();
    console.log(boundingClient);
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    if (boundingClient.top < height/2 & boundingClient.top > height - boundingClient.height) setIntersection(true);
    return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop, height]);

  return (
    <div className={styles.portfolio} id="portfolioID" ref={refPortfolio}>
      <h2 className="heading__section">Portfolio</h2>
      <div className={styles.works}>
        {portfolioItems.map((item) => (
          <PortfolioItem
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
