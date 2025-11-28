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
            <div className="text-md font-normal space-mono-regular pt-5">
                <i>Walking alone through the forest, you notice that the moss is more radiant than usual. Leaning in to see it glitter up close, you notice digital artefacts begin to appear in the deep green layers of the forest floor. As you look around, you wonder if these are the remnants of a past civilization.</i>
                <br/>
                <br/>
                Artefacts is my upcoming debut album, to be released on Halocline Trance in 2026. Following the release of my EP "I Hear the Scent of Change and Stillness", in this project I am diving deeper into a world of frantic grooves, shimmering detail, and raw acoustic elements.
                <br/>
                <br/>
                Listen to the first two singles, <i>GHOST</i> and <i>Memory Capsule</i>.
                <div className="py-4 flex justify-center">
                    <iframe
                           className=" w-200"
                        src="https://bandcamp.com/EmbeddedPlayer/track=2062103585/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    />
                </div>
                <div className="py-4 flex justify-center">
                    <iframe
                        className="w-200"
                        src="https://bandcamp.com/EmbeddedPlayer/track=3380936215/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    />
                </div>
                I built a site with some more information about the album, which I used to pitch it to labels: <Link href="https://artefactsonline.ca/"><u>https://artefactsonline.ca/</u></Link>. The site is handbuilt with html, css, and javascript, using P5.js for interactive visuals. Find the documentation <Link href="https://github.com/sergeikofman-dealmaker/artefacts-online"><u>here</u></Link>.
            </div>
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
                        className="absolute inset-0 w-full h-full"
                    />
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
        content: (
            <div>
                <i>Young Blondes, Stalked and Murdered</i> is a feature film directed by Nick Funness, produced by Silience. The film has screened at Panic Fest in Kansas City, Salem Film Fest, and other major festivals. 
                <br/>
                <br/>
                The score for this film is comprised of short vignettes which play during dream sequences and transitions. 
                <br/>
                <br/>
                <Link href="https://letterboxd.com/film/young-blondes-stalked-and-murdered/"><u>IMDB</u></Link>
                <br/>
                <br/>
                <Link href="https://www.imdb.com/title/tt29355254/"><u>Letterboxd</u></Link>
            </div>
        ),
    },
    change_and_stillness: {
        title: 'I hear the scent of change and stillness',
        type: 'solo',
        slug: 'change_and_stillness',
        content: (
            <div>
                I Hear the Scent of Change and Stillness is an EP released in 2023. My first major solo effort, this project combined electronic influences ranging from desconstructed club and IDM, with expressive writing for string quartet and piano. The project was supported by the Toronto Arts Council and recorded with the Odin Quartet, alongside several other musicians. 
                <br/>
                <br/>
                <div>
                    <iframe
                        className="w-200 py-4"
                        height="410"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Atracks%253A1528885147&color=%237d91a1&inverse=false&auto_play=false&show_user=true"
                    />
                </div>
                The EP was accompanied by a release party at Toronto's ArraySpace, in June of 2025, performed live with Lazar Miric on Saxophone, and opening sets by Wolfgang Gray and Animal Party.
                <div className="relative w-full pb-[56.25%] mt-4 mb-4">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/ZRbwlSVkON8?si=uzwRRGXjFYRqGImD"
                        title="YouTube video player"
                        allowFullScreen
                    />
                </div>
                <br/>
                <br/>
                Credits: 
                <br/>
                <div className="pl-4">
                   Strings: Odin Quartet (Violin 1 - Alex Toskov, Violin 2 - Tanya Ivaniuk Charles, Viola - Ryan Davis, Cello - Samuel Bisson)
                   <br/>
                   Flue on track 1, Flute sample on track 2: Lazar Miric
                   <br/>
                   Saxophone on track 3: Paul Lessard
                   <br/>
                   Vocal sample on track 1: Wolfgang Gray
                   <br/>
                   String Recording; Track Mixing: Dennis Patterson
                   <br/>
                   Track Mastering: Freeza Chin
                   <br/>
                   Album Art: Maria Kofman
                </div>
            </div>
        ),
    },
    voices_in_the_whir: {
        title: 'Voices in the Whir',
        type: 'solo',
        slug: 'voices_in_the_whir',
        content: (
            <div>
                <i>Voices in the Whir</i> was composed in 2019-2020 as the thesis project for my masters degree in music composition at the University Toronto, under the supervision of Dr. Eliot Britton. The piece was awarded the Ann H. Atkinson prize for an outstanding electroacoustic work, and was premiered in 2021 at the University of Toronto New Music Festival. 
                <br/>
                <br/>
                <i>Voices in the Whir</i> is a conversation between sounds across the human-machine spectrum. Is there beauty to be found in the cold, calculated process of MIDI playback? Is there a meaningful interface between human performers and their mechanical counterparts? What are the opportunities presented by an acoustic instrument which can be controlled by a computer? Voices in the Whir explores the range of possibilities created by the disklavier (a real acoustic piano with motors in the keys, allowing it to be controlled digitally, like a player-piano) and its combination with a string quartet and electronics.
                 <div className="relative w-full pb-[56.25%] mt-4 mb-4">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/edKCucl2NXs?si=YjswBLLd7EdK86rQ"
                        title="YouTube video player"
                        allowFullScreen
                    />
                </div>
                Recorded at the University of Toronto Music Studio in 2021 by the Odin Quartet:
                <div className="pl-4 pb-2">
                    Violin I - Alex Toskov
                    <br/>
                    Violin II - Tanya Charles Iveniuk
                    <br/>
                    Viola - Ryan Davis
                    <br/>
                    Cello - Samuel Bisson
                    <br/>
                </div>
                Video Credits:
                <div className="pl-4">
                    Director of Cinematography - Wolfgang Gray
                    <br/>
                    Editor - Wolfgang Gray
                    <br/>
                    Audio recording and mixing - Sergei Kofman
                    <br/>
                </div>
            </div>
        ),
    },
    in_passing: {
        title: '風不太冷 In Passing',
        type: 'media',
        slug: 'in_passing',
        content: (
            <div>
                <i>風不太冷 In Passing</i> is a short animated film by Esther Cheung. 
                <br/>
                <br/>
                Director's note: <i>A portrait of seventies Hong Kong, as my parents remember it. 風不太冷 In Passing transports viewers and immerses them in the fleeting moments of everyday Hong Kong. Following two neighbours as they grow up in government housing in bustling Mong Kok, Kowloon, the film pays homage to old Hong Kong and aims to capture the history and rich culture of the times. The film is inspired by my parents' reminiscing on their childhoods.</i>
                <br/>
                <br/>
                In Passing won the Toronto Reel Asian International Film Festival Air Canada Award, Communication Arts Illustration Annual 61st Competition Winner Award, National Film Festival for Talented Youth, Best Animated Short (Student) Award, and several others. For a full list of selections and awards visit <Link href="https://www.esther-cheung.com/work/in-passing"><u>https://www.esther-cheung.com/work/in-passing</u></Link>
                 <div className="relative w-full h-0 pb-[56.25%]"> 
                    <iframe
                    src="https://player.vimeo.com/video/329822551?h=a60c2c9ee0"
                    title="vimeo-player"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="absolute inset-0 w-full h-full"/>
                </div>
            </div>
        ),
    },
    overgrowth: {
        title: 'Overgrowth',
        type: 'solo',
        slug: 'overgrowth',
        content: (
            <div>
                Overgrowth was composed in 2019 for violin, cello, piano, flute, and clarinet. In it's early stage, the piece was read by the Ensemble Contemporain de Montreal, and it was later premiered at the Atlantic Music Festival in 2019, by the AMF Contemporary Music Ensemble.
                <br/>
                <br/>
                <i>There is a garden, full of weeds. They grow wild and uncotrolled, having covered almost the entire area of the garden. A singe rose is budding amongst the weeds, struggling to reach for the sun. It tries to breath through the weight of the burdensome weeds. Will it flower, or be suffocated under the overgrowth?</i>
                <div className="relative w-full pb-[56.25%] mt-4 mb-4">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/XPpXcEx8Faw?si=FxgwI9c_XQcok8Js"
                        title="YouTube video player"
                        allowFullScreen
                    />
                </div>
                <br/>
                Flute: Leo Sussman
                <br/>
                Clarinet: Celeste Markey
                <br/>
                Piano: Kathy Lee
                <br/>
                Violin: Kimberly Durflinger
                <br/>
                Cello: Isidora Nojkovic
                <br/>
            </div>
        ),
    },
    faces_we_wear: {
        title: 'The Faces We Wear',
        type: 'media',
        slug: 'the_faces_we_wear',
        content: (
            <div>
                <i>The Faces We Wear</i> is a short film by Jean-Luc Moniz, created in 2019. 
                <br/>
                <br/>
                <i>Mask-maker Teodoro Dragonieri calls on viewers to keep art alive and relevant. The unconventional performer, artist and teacher, shows us the transformative power of mask on identity, as well as the cultural and societal importance of the arts.</i>
                <div className="relative w-full pb-[56.25%] mt-4 mb-4">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/RFPBpPe9uIs?si=UthgayrjEr3oho40"
                        title="YouTube video player"
                        allowFullScreen
                    />
                </div>
            </div>
        )
    },
}