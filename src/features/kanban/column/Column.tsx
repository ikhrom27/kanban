import type { LayOutProps, Column as ColumnData } from "../../../types";
import type { DraggableProvidedDragHandleProps } from "@hello-pangea/dnd";


export type ColumnProps ={ dragHandleProps?: DraggableProvidedDragHandleProps | null } & LayOutProps & ColumnData


export default function Column ({id, title, cardIds, children, dragHandleProps}: ColumnProps) {

    return (
         <div
            key={id}
            className="w-full bg-[#020617] rounded-xl border border-[#1f2937] grid grid-rows-[auto_auto] p-[18px] min-h-[60px]"
         >
                     {/* header kolom */}
          <div className="w-full flex justify-between items-center mb-[8px]"
               {...dragHandleProps}
          >
            <span className="text-sm text-[#e2e8f0] font-semibold">{title}</span>
            <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">{cardIds.length}</div>
          </div>
           <div className="flex flex-col gap-[8px]">
                { children }      
           </div>     
         </div>
    )
}