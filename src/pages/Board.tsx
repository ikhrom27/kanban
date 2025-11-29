import { useState } from "react";
import BoardWrapper from "../components/layout/BoardWrapper";
import ButtonAddColumn from "../components/ui/buttons/ButtonAddColumn";
import Column from "../features/kanban/column/Column";
import { useBoardStore } from "../store/boardStore";
import ColumnModal from "../features/kanban/column/ColumnModal";
import Card from "../features/kanban/card/Card";
import CardAddColumn from "../components/ui/buttons/CardAddColumn";
import CardModal from "../features/kanban/card/CardModal";




export default function Board() {
    const board = useBoardStore((state) => state.board)
    const addColumn = useBoardStore((state) => state.addColumn)
    const addCard = useBoardStore((state) => state.addCard)
    const [showModal, setShowModal] = useState(false)
    const [ showCardModal, setShowCardModal ] = useState(false)
    const [ selectedColumnId, setSelectedColumnId ] = useState('')
  

    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)

    const handleShowCardModal = (columnId: string) => {
      console.log(showCardModal, 'sini')
       setShowCardModal(true)
       setSelectedColumnId(columnId)
    }

    const handleCloseCardModal = () => {
      setShowCardModal(false)
    }

    const handleColumnSubmit = (title: string) => {
        addColumn(title)
        handleClose()
    }

    const handleCardSubmit = (payload: { title: string; columnId: string, id: string, meta: string}) => {
      console.log(payload)
      addCard(payload)
      handleCloseCardModal()
    }

    return (   
       <>
         <BoardWrapper>
            {
              board.columnOrder.map((columnId) => {
                const colomn = board.columns[columnId] ;
                const cards = colomn.cardIds.map((cardId) => board.cards[cardId]);
                const isDone = colomn.id === 'done'                
                return (
                    <Column
                      id={colomn.id}
                      title={colomn.title}
                      cardIds={colomn.cardIds}
                    
                    >
                        {
                          cards.map((card) => {
                            return (
                              <Card 
                                id={card.id}
                                title={card.title}
                                meta={card.meta}
                                isDone={isDone}
                              />

                            )
                          })
                        }
                        <CardAddColumn
                          onClick={() => handleShowCardModal(colomn.id)}
                        >
                          <span className="text-[14px]">+</span>
                          <span>Add card</span>
                        </CardAddColumn>
                    </Column>                 
                )
              })
            }
            <ButtonAddColumn onClick={handleShow}>
              <span className="text-[15px] text-[#60a5fa]">+</span>
              <span>Add column</span>
            </ButtonAddColumn>
       </BoardWrapper>
       { showModal && (
            <ColumnModal 
              onClose={handleClose}
              onSubmit={handleColumnSubmit} 
            />
          )}
       { showCardModal && (
              <CardModal 
                onClose={handleCloseCardModal}
                onSubmit={handleCardSubmit}
                columnId={selectedColumnId}

              />
                          
        )}
      </>
    )
}