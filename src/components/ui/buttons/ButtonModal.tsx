import type { ButtonProps } from "../../../types";

export default function ButtonModal({onClick, children, className }: ButtonProps) {
    return (
        <button className={`rounded-[7px] border-none text-white text-[11px] cursor-pointer ${className} py-[6px]`}
                onClick={onClick}
        >
            { children}
        </button>
    )
}