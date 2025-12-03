import { Media } from "@/components/Credits";
import {
  mediaCredits,
  danceCredits,
  releases,
  productionCredits,
  orchestraWorks,
  chamberWorks,
  soloWorks,
} from "@/constants/credits";

export default function Credits() {
  return (
    <>
      <div className="px-8 pt-6 pb-4 font-semibold text-xl">MEDIA</div>
      <div className="px-10">
        {Object.values(mediaCredits).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-8 pt-6 pb-4 font-semibold text-xl">DANCE/THEATRE</div>
      <div className="px-10">
        {Object.values(danceCredits).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-8 pt-6 pb-4 font-semibold text-xl">RELEASES</div>
      <div className="px-10">
        {Object.values(releases).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-8 pt-6 pb-4 font-semibold text-xl">
        PRODUCTION CREDITS
      </div>
      <div className="px-10">
        {Object.values(productionCredits).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-8 pt-6 pb-4 font-semibold text-xl">CONCERT WORKS</div>
      <div className="px-12 pb-4 font-semibold text-lg">Orchestra</div>
      <div className="px-16">
        {Object.values(orchestraWorks).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-12 py-4 font-semibold text-lg">Chamber</div>
      <div className="px-16">
        {Object.values(chamberWorks).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
      <div className="px-12 py-4 font-semibold text-lg">Solo</div>
      <div className="px-16">
        {Object.values(soloWorks).map((credit) => (
          <Media key={credit.title} credit={credit} />
        ))}
      </div>
    </>
  );
}
