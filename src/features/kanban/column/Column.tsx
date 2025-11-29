import type { LayOutProps, Column as ColumnData } from "../../../types";


export type ColumnProps = LayOutProps & ColumnData


export default function Column ({id, title, cardIds, children}: ColumnProps) {


    return (
         <div
            key={id}
            className="min-w-[260px] max-w-[320px] bg-[#020617] rounded-xl border border-[#1f2937] grid grid-rows-[auto_auto] p-[18px]"
         >
                     {/* header kolom */}
          <div className="w-full flex justify-between items-center mb-[8px]">
            <span className="text-sm text-[#e2e8f0] font-semibold">{title}</span>
            <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">{cardIds.length}</div>
          </div>
           <div className="flex flex-col gap-[8px]">
                { children }      
           </div>     
         </div>
    )
}