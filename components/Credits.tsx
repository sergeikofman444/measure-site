import type { MediaItem } from "@/constants/credits.ts";

export function Media({ credit }: { credit: MediaItem }) {
  return (
    <>
      <div className="md:flex md:items-center text-xs md:text-sm tracking-tight">
        <span>
          <b>{credit.title}</b> ({credit.year})
        </span>
        <span className="text-[10px] md:text-xs text-gray-400">
          &nbsp;- {credit.description1}
        </span>
      </div>
      <div className="text-xs md:text-sm tracking-tight pl-1 pb-1">
        <i>{credit.description2}</i>
      </div>
    </>
  );
}
