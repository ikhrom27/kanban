import type { LayOutProps, Card as CardData } from "../../../types";

export type CardProps = { isDone: boolean } & LayOutProps & CardData


export default function Card({ id, title, meta, isDone }: CardProps) {
    return (
         <div 
            key={id} 
            className={`border rounded-[10px] py-[10px] px-[12px]
                        shadow-[0px_4px_10px_rgba(15,23,42,0.7)]
                        hover:border-[#3b82f6]
                        hover:-translate-y-[2px]
                        hover:transition
                        hover:duration-300
                        hover:ease-in-out

            ${ isDone ? "border-[#16a34a]" : "border-[#1f2937]"}`}>
                <span className="block text-[#e2e8f0] font-semibold text-sm">{title}</span>
                <span className="block text-[#9ca3af] text-xs">{meta}</span>
         </div>
    )
}