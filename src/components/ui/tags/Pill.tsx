import type { LayOutProps } from "../../../types"


export default function Pill ({ children }: LayOutProps) {
    return (
        <div className="px-[8px] py-[3px] text-[11px] bg-[rgba(15,23,42,0.9)] border border-[rgba(51,65,85,0.9)] rounded-[999px]">
            {children}
        </div>
    )
}