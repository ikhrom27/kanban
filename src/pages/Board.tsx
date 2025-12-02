import { useState } from "react";
import BoardWrapper from "../components/layout/BoardWrapper";
import ButtonAddColumn from "../components/ui/buttons/ButtonAddColumn";
import Column from "../features/kanban/column/Column";
import { useBoardStore } from "../store/boardStore";
import ColumnModal from "../features/kanban/column/ColumnModal";
import Card from "../features/kanban/card/Card";
import CardAddColumn from "../components/ui/buttons/CardAddColumn";
import CardModal from "../features/kanban/card/CardModal";
import { type DropResult, DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";




export default function Board() {
  const board = useBoardStore((state) => state.board)
  const addColumn = useBoardStore((state) => state.addColumn)
  const addCard = useBoardStore((state) => state.addCard)
  const reorderCardInColumn = useBoardStore((state) => state.reorderCardInColumn)
  const reorderCardBetweenColumn = useBoardStore((state) => state.reorderCardBetweenColumn)
  const reorderColumn = useBoardStore((state) => state.reorderColumn)

  const [showModal, setShowModal] = useState(false)
  const [showCardModal, setShowCardModal] = useState(false)
  const [selectedColumnId, setSelectedColumnId] = useState('')


  const handleShow = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleShowCardModal = (columnId: string) => {
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

  const handleCardSubmit = (payload: { title: string; columnId: string, id: string, meta: string }) => {
    console.log(payload)
    addCard(payload)
    handleCloseCardModal()
  }

  const handleDrag = (result: DropResult) => {
    const { source, destination } = result


    if (!destination) return

    if (destination.index === source.index && destination.droppableId === source.droppableId) return

    // const columnId = source.droppableId
    console.log(source, 'source')
    if(source.droppableId === 'board-1' && destination.droppableId === 'board-1') {
      console.log('masukk sini kan')
      return reorderColumn(source.index, destination.index)

    } else {
       const fromColumnId = source.droppableId
       const toColumnId = destination.droppableId

      if (destination.droppableId !== source.droppableId) reorderCardBetweenColumn(fromColumnId, source.index, toColumnId, destination.index)
      else if (destination.droppableId === source.droppableId) reorderCardInColumn(fromColumnId, source.index, destination.index)
    }

   
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDrag}>
        <BoardWrapper>
          <Droppable
            droppableId="board-1"
            direction="horizontal"
           
          >
            {(provided) => (
              <div ref={provided.innerRef}
                {...provided.droppableProps}
                className="flex items-start gap-[20px] overflow-x-auto pt-[2px] min-w-max"
              >
                {
                  board.columnOrder.map((columnId, index) => {
                    const colomn = board.columns[columnId];
                    const cards = colomn.cardIds.map((cardId) => board.cards[cardId]);
                    const isDone = colomn.id === 'done'
                    return (
                      <Draggable
                        index={index}
                        key={colomn.id}
                        draggableId={colomn.id}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Column
                              id={colomn.id}
                              title={colomn.title}
                              cardIds={colomn.cardIds}

                            >
                              <Droppable droppableId={colomn.id}>
                                {(provided) => (
                                  <div ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="flex flex-col gap-[8px] min-h-[2px]"
                                  >
                                    {
                                      cards.map((card, index) => {
                                        return (
                                          <Draggable
                                            key={card.id}
                                            draggableId={card.id}
                                            index={index}
                                          >
                                            {(provided) => (
                                              <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                              >

                                                <Card
                                                  id={card.id}
                                                  title={card.title}
                                                  meta={card.meta}
                                                  isDone={isDone}
                                                />

                                              </div>
                                            )}

                                          </Draggable>

                                        )
                                      })
                                    }
                                    {provided.placeholder}
                                  </div>
                                )}


                              </Droppable>
                              <CardAddColumn
                                onClick={() => handleShowCardModal(colomn.id)}
                              >
                                <span className="text-[14px]">+</span>
                                <span>Add card</span>
                              </CardAddColumn>
                            </Column>
                          </div>
                        )}
                      </Draggable>

                    )
                  })
                }
                {provided.placeholder}
              </div>
            )}


          </Droppable>
          <ButtonAddColumn onClick={handleShow}>
            <span className="text-[15px] text-[#60a5fa]">+</span>
            <span>Add column</span>
          </ButtonAddColumn>
        </BoardWrapper>
      </DragDropContext>
      {showModal && (
        <ColumnModal
          onClose={handleClose}
          onSubmit={handleColumnSubmit}
        />
      )}
      {showCardModal && (
        <CardModal
          onClose={handleCloseCardModal}
          onSubmit={handleCardSubmit}
          columnId={selectedColumnId}

        />

      )}
    </>
  )
}