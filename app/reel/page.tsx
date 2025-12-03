export default function Reel() {
  return (
    <div className="flex justify-center">
      <div className="px-2">
        <div className="md:w-200">
          A short reel of music from various projects.
        </div>
        <iframe
          className="w-full py-8"
          height="200"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1541340289&color=%237d91a1&inverse=false&auto_play=false&show_user=true"
        />
        <div className="md:w-200">
          A longer reel of excerpts from media scoring and composition projects,
          showcasing a variety of styles and genres. Please contact me for more
          examples of a specific style or genre.
        </div>
        <iframe
          className="w-full py-8"
          height="600"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A237449723&color=%237d91a1&inverse=false&auto_play=false&show_user=true"
        />
        <div className="md:w-200">
          A spotify playlist of some production work.
        </div>
        <iframe
          className="w-full py-8"
          height="600"
          src="https://open.spotify.com/embed/playlist/5u3OC8dAuAGbEeIPC4KScp?utm_source=generator"
        />
      </div>
    </div>
  );
}
