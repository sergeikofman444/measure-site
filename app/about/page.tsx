import Image from "next/image";

export default function about() {
  return (
    <div className="p-8 flex flex-col md:flex-row gap-8 ">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <br />
        Sergei (Measure) chases the music at the tip of the tongue and stuck at
        the back of the head. Inspired by pushing the limits of sound design and
        wrapping it up in a parcel of lush harmony and thorough storytelling; he
        is seeking out sounds that are familiar but never quite within grasp.
        <br />
        <br />
        Sergei works in a wide range of media. His main activities are film &
        commercial scoring, music for dance and theatre, creative technology
        projects, solo music, and collaborative music production. He draws on an
        eclectic combination of influences in his work. His music has been
        performed by ensembles around Canada and the United States.
        <br />
        <br />
        Sergei received his education in music at Wilfrid Laurier University
        (B.Mus), with Christopher Mayo, and at the University of Toronto
        (M.Mus), with Elliot Britton. While studying at the University of
        Toronto, he was awarded the 2021 Ann H. Atkinson prize for his piece
        Voices in the Whir, for Disklavier, String Quartet, and Electronics. The
        piece was recorded by the Odin Quartet and premiered in 2021 at the U of
        T New Music Festival.
        <br />
        <br />
        Sergei has been active under his artist pseudonym, Measure. In 2022,
        Sergei received support from the Toronto Arts Council for his project I
        Hear the Scent of Change and Stillness, an EP which was released in 2023
        and was accompanied by a concert at Toronto's ArrayMusic. Sergei
        performs frequently as Measure, including appearances for UKAI's
        carnival of festival, sets for the electronic music showcase series
        Frequencies, and live sets incorporating dance. Sergei has also
        performed as a Music Director for artists such as ILYQuiet and PVLN.
        <br />
        <br />
        Sergei is currently working on his debut album Artefacts, due to be
        released in 2026 on Toronto's experimental electronic label Halocline
        Trance.
      </div>
      <div className="w-full md:w-1/2 relative aspect-4/5">
        <Image
          src="/project_images/bio.jpg"
          alt="Bio"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
