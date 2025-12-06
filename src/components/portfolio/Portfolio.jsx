import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "COPY WRITING",
    title: "Creative Non-fiction",
    description:
      " Personal essays and memoir pieces exploring love, resilience, and belonging.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "WRITING",
    title: " Commercial Writing",
    description:
      " Campaign concepts, ad copy, and brand storytelling projects that merge emotion with strategy.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "COPY WRITING",
    title: "Reflective Essays",
    description:
      "Short reflective pieces and thought leadership on storytelling, culture, and communication.",
    link: "#!",
  },
  // {
  //   id: 4,
  //   image: card4,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
  //   link: "#!",
  // },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of my recent works showcasing my skills in creative non-fiction, commercial writing, and reflective essays, respectively. Click any project to read the full piece, concept, or case study.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="#!"
className="btn bg-black text-white py-3 px-6 mt-12.5 text-center text-[16px] font-semibold hover:bg-neutral-800"

        >
          More Project
        </a>
      </div> */}
    </div>
  );
};

export default Portfolio;
