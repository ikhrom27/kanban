import { useState, useEffect } from "react";
import type { ModalProps } from "../../types";


export default function Modal({ onClose, title, children}: ModalProps) {
      const [mounted, setMounted] = useState(false);

    useEffect(() => {
    // bikin delay 1 frame supaya transition bisa jalan
    const id = requestAnimationFrame(() => setMounted(true));
    

    return () => cancelAnimationFrame(id);
  }, []);


    return (
        <div className={
                `fixed inset-0 bg-[rgba(15,23,42,0.8)] flex items-center justify-center 
                z-[100] transition-opacity duration-[180ms] ease-out
                ${mounted ? 'opacity-100' : 'opacity-0'}`
            } 
            onClick={onClose}
            
            >
          
            <div className={
                    `bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_rgba(15,23,42,0.98))]
                    rounded-[14px] p-[18px] pb-[14px] w-[360px]
                    shadow-[0_20px_50px_rgba(15,23,42,0.9)]
                    border border-[rgba(51,65,85,0.95)]
                    transition-transform transition-opacity duration-200 ease-out
                    ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-[10px]">
                    <h3 className="text-[14px] text-[#e2e8f0] font-bold">{title}</h3>
                    <button onClick={onClose} className="text-[16px] text-[#94a3b8] cursor-pointer">✕</button>
                </div>
                { children }
            </div>
        </div>
    )
}