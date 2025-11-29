import type { AddColumnFeatureProps } from "../../../types";
import Modal from "../../../components/ui/Modal";
import ButtonModal from "../../../components/ui/buttons/ButtonModal";
import { useState } from "react";


export default function ColumnModal ({ onClose, onSubmit  }: AddColumnFeatureProps) {
    const [ title, setTitle ] = useState<string>('')
    const handleAdd = () => {
        const trimmed = title
        if(!trimmed) return
        onSubmit(title)
        setTitle('')
    }

    return (
       <Modal onClose={onClose} title="Add Column">
         
         <div className="text-[#cbd5f5] text-[11px] mb-[4px]">Title *</div>
         <input className="w-full outline-none border border-[rgba(51,65,85,0.95)] rounded-[7px] py-[7px] px-[9px] bg-[rgba(15,23,42,0.98)] text-[#e2e8f0] text-[12px] mb-[10px] focus:border-[#3b82f6] focus:shadow-[0_0_0_1px rgba(37,99,235,0.5)]" type="text" 
                       placeholder="e.g. Backlog, QA, Review"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
         />
         <div className="text-right mt-[4px]">
            <ButtonModal onClick={onClose} className="px-[10px] bg-[#475569] mr-[6px]">
                Cancel
            </ButtonModal>
            <ButtonModal onClick={handleAdd} className="px-[11px] bg-[#3b82f6]">
                Add
            </ButtonModal>
         </div>
       </Modal>
    )
}