import {Media} from '@/components/Credits'
import {mediaCredits, danceCredits} from '@/constants/credits'

export default function Credits() {
    return (
        <>
            <div className="px-8 pt-6 pb-4 font-semibold text-xl">
                MEDIA
            </div>
            <div className="px-10">
                {Object.values(mediaCredits).map((credit) => (
                    <Media key={credit.title} credit={credit} />
                ))}
            </div>
            <div className="px-8 pt-6 pb-4 font-semibold text-xl">
                DANCE/THEATRE
            </div>
            <div className="px-10">
                {Object.values(danceCredits).map((credit) => (
                    <Media key={credit.title} credit={credit} />
                ))}
            </div>
        </>
    );
}