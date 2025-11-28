import type {MediaItem} from '@/constants/credits.ts'

export function Media({ credit }: { credit: MediaItem }) {
    return (
        <>
            <div className="flex items-center py-2">
                <div><b>{credit.title}</b> ({credit.year})</div>
                <div className="text-sm">&nbsp;- {credit.type}</div>
            </div>
            <div>
                <i>{credit.director}</i>
            </div>
        </>
    )
}