import person from "../../assets/images/person2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            I am a results-driven creative writer, brand storyteller and content strategist
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
             who helps individuals and organisations articulate their story with clarity, depth, and resonance. I strategically craft emotionally captivating and intuitively creative narratives that enhance brand visibility, promote customer engagement, build trust, and inspire expected action.
            </p>
            <p className="mt-3">
              In short, whatever I do, whether I’m developing a brand voice, crafting articles, memoirs, or speeches for impact-driven leaders, my focus is to maintain meaning, clarity, and connection.
Beyond writing, I’m passionate about culture, leadership, and the power of honest storytelling to transform nations. For me, every project is an opportunity to positively impact lives and elevate business communication.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="https://drive.google.com/uc?export=download&id=1dcJJmpWIFLWvea7FuszKBsZgFZNjh3ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
