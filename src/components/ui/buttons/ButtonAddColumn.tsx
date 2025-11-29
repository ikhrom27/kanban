import type { ButtonProps } from "../../../types";


export default function ButtonAddColumn ({ onClick, children }: ButtonProps) {
    
    return (
        <button className="text-[#9ca3af] text-[12px] min-w-[220px] h-[60px] border border-dashed border-[rgba(51,65,85,0.95)] bg-[(rgba(15,23,42,0.9))] flex items-center justify-center shrink-0 gap-[6px] rounded-[14px] cursor-pointer [transition:border-color_0.15s_ease-out,background_0.15s_ease-out,color_0.15s_ease-out,transform_0.12s_ease-out] hover:border-[#3b82f6] hover:bg-[rgba(15,23,42,0.96)] hover:-translate-y-[1px]"
             onClick={onClick} 
        >
            {children}
        </button>
    )
}