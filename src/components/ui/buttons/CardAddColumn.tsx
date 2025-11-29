import type { ButtonProps } from "../../../types";

export default function CardAddColumn ({ children, onClick }: ButtonProps) {
    return (
        <button className="
            flex py-[7px] px-[8px] 
            rounded-[8px] gap-[6px] 
            items-center text-left 
            text-[#60a5fa] cursor-pointer
            transition-[background_0.15s_ease-out,opacity_0.15s_ease-out,transform_0.12s_ease-out]
            bg-none text-[12px] opacity-80
            hover:-translate-y-[1px]
            hover:opacity-100
            "
            onClick={onClick}
            >
          { children }
        </button>
    )
}