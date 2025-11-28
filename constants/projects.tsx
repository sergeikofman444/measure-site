import type { ReactNode } from "react";
import Link from "next/link";

export type Project = {
  title: string;
  type: 'solo' | 'media' | 'commercial',
  slug: string;
  content: ReactNode;
};


export const projects: Record<string, Project> = {
    artefacts: {
        title: 'Artefacts',
        type: 'solo',
        slug: 'artefacts',
        content: (
            <>
                <div className="text-md font-normal space-mono-regular pt-5">
                    <i>Walking alone through the forest, you notice that the moss is more radiant than usual. Leaning in to see it glitter up close, you notice digital artefacts begin to appear in the deep green layers of the forest floor. As you look around, you wonder if these are the remnants of a past civilization.</i>
                    <br/>
                    <br/>
                    Artefacts is my upcoming debut album, to be released on Halocline Trance in 2026. Following the release of my EP "I Hear the Scent of Change and Stillness", in this project I am diving deeper into a world of frantic grooves, shimmering detail, and raw acoustic elements.
                    <br/>
                    <br/>
                    Listen to the first two singles: <Link href="https://measuremakesmusic.bandcamp.com/track/ghost"><u>GHOST</u></Link>, and <Link href="https://measuremakesmusic.bandcamp.com/track/memory-capsule-2"><u>Memory Capsule</u></Link>
                    <br/>
                    <br/>
                    I built a site with some more information about the album, which I used to pitch it to labels: <Link href="https://artefactsonline.ca/"><u>https://artefactsonline.ca/</u></Link>. The site is handbuilt with html, css, and javascript, using P5.js for interactive visuals. Find the documentation <Link href="https://github.com/sergeikofman-dealmaker/artefacts-online"><u>here</u></Link>.
                </div>
            </>
        ),
    },
    city_centre_dc: {
        title: 'City Centre DC',
        type: 'commercial',
        slug: 'city_centre',
        content: (
            <>
                <div className="text-md font-normal space-mono-regular py-5">
                    Multi-asset 2025 holiday campaign by <Link href="https://www.citycenterdc.com/"><u>CityCentreDC</u></Link>, with the primary visual featured on their homepage.
                    <br/>
                    <br/>
                    Directed by Corentin Leroux.
                </div>
                <div className="relative w-full h-0 pb-[56.25%]"> 
                    <iframe
                    src="https://player.vimeo.com/video/1118826185?h=07b8cf3fe7"
                    title="vimeo-player"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full"/>
                </div>
            </>
        ),

    },
    hedonist: {
        title: 'The Hedonist',
        type: 'media',
        slug: 'hedonist',
        content: (
            <>
                <div>
                    <i>The Hedonist</i> is a feature length film directed by Nick Funess, produced by Silience. The film premiered at the Oak Cliff Film Festival in Dallas, Texas, in August 2025, and has since been screened at the Ridgewoof Off Kilter Film Festival in New York City, and Hysteria Film Festival in St Louis, Missouri.
                    <br/>
                    <br/>
                    Similarly to my previous collaboration with Nick Funnes, the score for this film is composed of short pieces which play during transitional scenes, psychidelic cutaways, and throughout diagetic sequences. The music ranges from brutal synthwave oozing with violence, to chugging hypnotic techno, to a party club anthem.
                    <br/>
                    <br/>
                    <Link href="https://letterboxd.com/film/the-hedonist-2025/"><u>IMDB</u></Link>
                    <br/>
                    <br/>
                    <Link href="https://www.imdb.com/title/tt33398476/"><u>Letterboxd</u></Link>
                </div>
            </>
        ),
    },
    bvbk: {
        title: 'Be Vardų, Be Kojų',
        type: 'media',
        slug: 'bvbk',
        content: (
            <>
                <div>
                    <i>Be Vardų, Be Kojų</i> is a theatrical dance-tech piece created by Brigita Gedgaudas, produced by Chimerik 似不像. Be Vardų, Be Kojų was premiered at the Summerworks dance festival in Toronto, in August of 2025. I composed the score for this piece blending elements of experimental electronic music, ambient, disco, techno, and traditional Lithuanian Folk music.
                    <br/>
                    <br/>
                    See more about the piece at: <Link href="https://summerworks.ca/show/be-vardu-be-koju/"><u>https://summerworks.ca/show/be-vardu-be-koju/</u></Link>
                    <br/>
                    <br/>
                    From the program: 
                    <br/>
                    <br/>
                    <i>
                        Be Vardų, Be Kojų, meaning “Without Names, Without Legs” is an ongoing, iterative exploration in queering Lithuanian folk dance. 
                        <br/>
                        <br/>
                        Using live-motion-capture, the solo performer interacts with eight aliens, made from glitched scans of specific male and female folk dance steps. These new, queer/alien bodies in digital space act as generative errors, creating new knowledge as they twist reality, delving into speculative fiction. The soloist, presenting as a pagan Lithuanian 'woman', is transported after performing a ritual with these aliens, causing a realization within themselves that they are not, in fact, a woman but a non-binary, agender person.
                        <br/>
                        <br/>
                        This transition into queerness is witnessed not only emotionally, but physically as elements of the queer street dance, Punking/Whacking/Waacking, continue to shift gestures connoting 'maleness' or 'femaleness' within folk dance to something more queer - a demonstration of coming into one's own. 
                    </i>
                </div>
            </>
        )
    },
    tams: {
        title: 'Tams In The City',
        type: 'commercial',
        slug: 'tams',
        content: (
            <>
                <div className="text-md font-normal space-mono-regular py-5">
                    A spot for the launch of the <i>Tams In The City</i> campaign. Tams is a Toronto-based designer clothing brand.
                    <br/>
                    <br/>
                    Directed by Ilya Sarossy.
                </div>
                <div className="relative w-full h-0 pb-[56.25%]"> 
                    <iframe
                    src="https://player.vimeo.com/video/1116005514?h=853032702f"
                    title="vimeo-player"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full"/>
                </div>
            </>
        ),
    },
    lotusland: {
        title: 'Lotusland Sound Walk',
        type: 'media',
        slug: 'lotusland_soundwalk',
        content: (
            <>
                <div>
                    <i>Lotusland</i> is an album by grammy-nominated, juno-winning composer and producer Aaron Paris, released in 2024. I collaborated with Aaron and his team to create an experiental, augmented reality activation event for the release of his album. Using the Echoes.xyz platform, I set up a geo-located soundwalk consisting of music from the album, as well as transitional and ambience segments. 
                    <br/>
                    <br/>
                    The soundwalk is located in the Evergreen Brickworks park in Toronto. Using a phone/mobile device, listeners may walk through the area of the soundwalk, triggering audio files and transitions depending on their location. Echoes.xyz leverages the FMOD framework, which is commonly used to power video game sound & music. For this project, the technology is used to allow the user to interact with music directly using their physical location, which is tracked through their mobile device while they have the soundwalk open.
                    <br/>
                    <br/>
                    Listen to the album <Link href="https://open.spotify.com/album/23UuKnHK4jO5lMwrTmfSlI?si=_VHDm7HURHuF_12E0zThuQ"><u>here</u></Link>
                    <br/>
                    <br/>
                    And read more about the activation event <Link href="https://www.blogto.com/events/lotusland-sound-walk-evergreen-brick-works-free-toronto/"><u>here</u></Link>
                </div>
            </>
        ),
    },
    softgrit: {
        title: 'Softgrit',
        type: 'commercial',
        slug: 'softgrit',
        content: (
            <>
                <div className="text-md font-normal space-mono-regular py-5">
                    The launch campaign for the <i>Softgrit</i> magazine. Softgrit is a Toronto-based clothing and lifestyle magazine, created by Sarah Bavington.
                    <br/>
                    <br/>
                    Directed by Ilya Sarossy.
                </div>
                <div className="relative w-full h-0 pb-[56.25%]"> 
                    <iframe
                    src="https://player.vimeo.com/video/1105622813?h=9398232d21"
                    title="vimeo-player"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full"/>
                </div>
            </>
        ),
    },
    young_blondes: {
        title: 'Young Blondes, Stalked and Murdered',
        type: 'media',
        slug: 'young_blondes',
        content: 'a score for young blondes stalked and murdered',
    },
    change_and_stillness: {
        title: 'I hear the scent of change and stillness',
        type: 'solo',
        slug: 'change_and_stillness',
        content: 'description about the scent of change and stillness',
    },
    voices_in_the_whir: {
        title: 'Voices in the Whir',
        type: 'solo',
        slug: 'voices_in_the_whir',
        content: 'my thesis project',
    },
    in_passing: {
        title: 'In Passing',
        type: 'media',
        slug: 'in_passing',
        content: 'reel asian film festival',
    },
    overgrowth: {
        title: 'Overgrowth',
        type: 'solo',
        slug: 'overgrowth',
        content: 'premiered at the Atlantic Music Festival',
    },
    faces_we_wear: {
        title: 'The Faces We Wear',
        type: 'media',
        slug: 'the_faces_we_wear',
        content: 'film by Jean-Luc Moniz',
    },
}