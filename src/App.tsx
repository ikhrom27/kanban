export default function App() {
  return (
      <div className="bg-[#0f172a] w-full min-h-screen py-[40px] px-[80px]">
        <div className="mx-auto max-w-[1200px]">
            <h1 className="text-[#e2e8f0] font-bold text-2xl mb-[5px]">Kanban Board</h1>
            <p className="text-[#94a3b8] text-sm mb-[20px]">Simple 3-column layout (Day 1)</p>
            <div className="flex items-start gap-[20px]">
                <div className="min-w-[260px] max-w-[320px] bg-[#020617] rounded-xl border border-[#1f2937] grid grid-rows-[auto_auto] p-[18px]">
                  <div className="w-full flex justify-between items-center mb-[8px]">
                    <span className="text-sm text-[#e2e8f0] font-semibold">Todo</span>
                    <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">3</div>
                  </div>
                   <div className="flex flex-col gap-[8px]">
                      <div className="border border-[#1f2937] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Set up project</span>
                        <span className="block text-[#9ca3af] text-xs">Today · Setup</span>
                      </div>
                      <div className="border border-[#1f2937] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Design data model</span>
                         <span className="block text-[#9ca3af] text-xs">Low priority</span>
                        </div>  
                      <div className="border border-[#1f2937] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Create basic layout</span>
                         <span className="block text-[#9ca3af] text-xs">UI · Layout</span>
                      </div>
                   </div>
                </div>
                <div className="min-w-[260px] max-w-[320px] bg-[#020617] rounded-xl border border-[#1f2937]  grid grid-rows-[auto_auto] p-[18px]">
                  <div className="w-full flex justify-between items-center mb-[8px]">
                    <span className="text-sm text-[#e2e8f0] font-semibold">In Progress</span>
                    <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">2</div>
                  </div>
                   <div className="flex flex-col gap-[8px]">
                      <div className="border border-[#1f2937] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Build column component</span>
                        <span className="block text-[#9ca3af] text-xs">Coding · 30 min</span>
                      </div>
                      <div className="border border-[#1f2937] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Refine headers styling</span>
                         <span className="block text-[#9ca3af] text-xs">UI · Styling</span>
                        </div>  
                   </div>
                </div>
                <div className="min-w-[260px] max-w-[320px] bg-[#020617] rounded-xl border border-[#1f2937] grid grid-rows-[auto_auto] p-[18px]">
                  <div className="w-full flex justify-between items-center mb-[8px]">
                    <span className="text-sm text-[#e2e8f0] font-semibold">Done</span>
                    <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">1</div>
                  </div>
                   <div className="flex flex-col gap-[8px]">
                      <div className="border border-[#16a34a] rounded-[10px] py-[10px] px-[12px]">
                        <span className="block text-[#e2e8f0] font-semibold text-sm">Install dependencies</span>
                        <span className="block text-[#9ca3af] text-xs">Completed · 10:21</span>
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </div>


  )
}