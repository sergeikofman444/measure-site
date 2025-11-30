import Link from "next/link";

export default function Contact() {
    return (
        <div className="p-8 gap-8 h-200">
            <div>Get in touch with me: <Link className="hover:font-bold" href="mailto:sergeilevkofman@gmail.com"><u>sergeilevkofman@gmail.com</u></Link></div>
            <br/>
            <div>Instagram: <Link className="hover:font-bold" href="https://www.instagram.com/measure.music/"><u>https://www.instagram.com/measure.music/</u></Link></div>
            <div>Bandcamp: <Link className="hover:font-bold" href="https://measuremakesmusic.bandcamp.com/"><u>https://measuremakesmusic.bandcamp.com/</u></Link></div>
            <div>Apple Music: <Link className="hover:font-bold" href="https://music.apple.com/ca/artist/measure/1518877528"><u>https://music.apple.com/ca/artist/measure/1518877528</u></Link></div>
            <div>Spotify: <Link className="hover:font-bold" href="https://open.spotify.com/artist/2rLIZKbOabdPsr5Ls87Pfp"><u>https://open.spotify.com/artist/2rLIZKbOabdPsr5Ls87Pfp</u></Link></div>    
            <br/>
            <div>References and more work available upon request.</div>
        </div>
    );
}