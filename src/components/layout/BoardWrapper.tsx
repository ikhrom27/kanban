import type { LayOutProps } from "../../types"
import BoardWrapperHeader from "./BoardWrapperHeader"



export default function BoardWrapper ({ children }: LayOutProps) {
    return (
        <div className="mx-auto max-w-[1200px] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.06),_transparent_55%)] rounded-[20px] pt-[18px] pb-[22px] pr-[18px] pl-[18px] border border-[rgba(148,163,184,0.08)]">
            <BoardWrapperHeader/>
            <div className="mt-[16px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-start gap-[20px] overflow-x-auto pt-[2px] min-w-max">
                { children }
              </div>
            </div>
        </div>
    )
}