import { useBoardStore } from "./store/boardStore";

export default function App() {
  const board = useBoardStore((state) => state.board)
  // const setBoard = useBoardStore((state) => state.setBoard)
  
  return (
      <div className="bg-[#0f172a] w-full min-h-screen py-[40px] px-[80px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-[#e2e8f0] font-bold text-2xl mb-[5px]">{board.title}</h1>
          <p className="text-[#94a3b8] text-sm mb-[20px]">Simple 3-column layout (Day 1)</p>
          <div className="flex items-start gap-[20px]">
            {
              board.columnOrder.map((columnId) => {
                const colomn = board.columns[columnId] ;
                const cards = colomn.cardIds.map((cardId) => board.cards[cardId]);
                const isDone = colomn.id === 'done'
                
                return (
                  <div
                    key={colomn.id}
                    className="min-w-[260px] max-w-[320px] bg-[#020617] rounded-xl border border-[#1f2937] grid grid-rows-[auto_auto] p-[18px]"
                  >
                     {/* header kolom */}
                    <div className="w-full flex justify-between items-center mb-[8px]">
                      <span className="text-sm text-[#e2e8f0] font-semibold">{colomn.title}</span>
                      <div className="rounded-[999px] bg-[#1d4ed8] px-[10px] py-[2px] text-[#e2e8f0] text-xs">{colomn.cardIds.length}</div>
                    </div>
                     {/* card */}
                    <div className="flex flex-col gap-[8px]">
                      {
                        cards.map((card) => {
                          return (
                            <div 
                              key={card.id} 
                              className={`border rounded-[10px] py-[10px] px-[12px]
                                 shadow-[0px_4px_10px_rgba(15,23,42,0.7)]
                                 hover:border-[#3b82f6]
                                 hover:-translate-y-[2px]
                                 hover:transition
                                 hover:duration-300
                                 hover:ease-in-out

                              ${ isDone ? "border-[#16a34a]" : "border-[#1f2937]"}`}>
                              <span className="block text-[#e2e8f0] font-semibold text-sm">{card.title}</span>
                              <span className="block text-[#9ca3af] text-xs">{card.meta}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


  )
}