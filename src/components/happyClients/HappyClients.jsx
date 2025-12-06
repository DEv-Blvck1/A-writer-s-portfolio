import Marquee from "react-fast-marquee";

// Import images directly (Vite will optimize + hash them)
import Black from "../../assets/brands/black.png";
import McMansions from "../../assets/brands/McMansionsProject.png";
import Sabiwriters from "../../assets/brands/Sabiwriters.png";
import Rocketours from "../../assets/brands/Rocketours.png";
import Visahouse from "../../assets/brands/VisahouseTravels.png";


// Array of imported images
const brandLogos = [Black, McMansions,Sabiwriters,Rocketours,Visahouse];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>

      <Marquee pauseOnHover={true} gradient={false} speed={40}>
        <div className="flex items-center gap-10">
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`brand-logo-${index}`}
              className="h-25 w-auto object-contain opacity-70 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;