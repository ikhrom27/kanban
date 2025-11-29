import type { LayOutProps } from "../../../types"



export default function MetaText({ children }: LayOutProps) {
    return (
      <p className="text-[#94a3b8] text-[13px]">{children}</p>
    )
}