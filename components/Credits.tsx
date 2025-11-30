import type {MediaItem, ConcertWork} from '@/constants/credits.ts'

export function Media({ credit }: { credit: MediaItem }) {
    return (
        <>
            <div className="flex items-center text-sm tracking-tight">
                <div><b>{credit.title}</b> ({credit.year})</div>
                <div className="text-xs text-gray-400">&nbsp;- {credit.type}</div>
            </div>
            <div className="text-sm tracking-tight pl-1 pb-1">
                <i>{credit.director}</i>
            </div>
        </>
    )
}
export function Concert({ credit }: { credit: ConcertWork }) {
    return (
        <>
            <div className="flex items-center text-sm tracking-tight">
                <div><b>{credit.title}</b> ({credit.year})</div>
                <div className="text-xs text-gray-400">&nbsp;- {credit.ensemble}</div>
            </div>
            <div className="text-sm tracking-tight pl-1 pb-1">
                <i>{credit.performed}</i>
            </div>
        </>
    )
}