import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import {faWhatsapp,} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "4Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "50+",
  },
  {
    id: 3,
    title: "Returning Client",
    description: "27+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Lawlah Penner
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I find fulfilment in helping people make sense of <span className="bg-highlight">ideas, systems</span>{" "}
            and <span className="bg-highlight"> human experiences through intelligent writing that blends philosophy and strategy</span>, bringing clarity to what matters and depth to purpose.
          </p>
          <p className="text-center lg:text-start space-x-4">
          <a
            className="btn btn-sm xs:btn-md sm:btn-lg bg-black text-white hover:bg-neutral-900"
             href="https://wa.me/2347068831694"
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello!
            <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
          </a>
        </p>

        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
