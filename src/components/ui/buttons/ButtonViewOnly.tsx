import type { LayOutProps } from "../../../types";

export default function ButtonViewOnly({ children }: LayOutProps) {
    return (
        <div className="px-[10px] py-[6px] text-[11px] border border-[rgba(51,65,85,0.9)] text-[#cbd5f5] rounded-[999px] inline-flex gap-[6px] items-center cursor-pointer">
            { children } 
        </div>
    )
}