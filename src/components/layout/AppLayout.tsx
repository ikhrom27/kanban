import type { LayOutProps } from "../../types"

export default function AppLayout ({ children }: LayOutProps) {
    return (
        <div className="bg-[radial-gradient(circle_at_top,_#0f172a_0,_#020617_55%,_#020617_100%)] w-full min-h-screen py-[40px] px-[80px]">
            {children}
        </div>
    )
}