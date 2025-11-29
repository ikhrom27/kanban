import type { LayOutProps } from "../../../types";

export default function ButtonPrimary({ children }: LayOutProps) {
    return (
        <div className="px-[11px] py-[7px] text-[11px] rounded-full bg-[linear-gradient(135deg,#3b82f6,#22c55e)] inline-flex gap-[6px] items-center cursor-pointer shadow-[0_12px_25px_rgba(37,99,235,0.55)] transition-all duration-150 ease-out hover:-translate-y-[1.5px] hover:shadow-[0_18px_40px_rgba(37,99,235,0.9)] ">
            { children } 
        </div>
    )
}