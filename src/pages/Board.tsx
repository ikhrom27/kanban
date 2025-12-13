import { useState } from "react";
import BoardWrapper from "../components/layout/BoardWrapper";
import ButtonAddColumn from "../components/ui/buttons/ButtonAddColumn";
import { useBoardStore } from "../store/boardStore";
import ColumnModal from "../features/kanban/column/ColumnModal";
import CardModal from "../features/kanban/card/CardModal";
import { type DropResult, DragDropContext} from "@hello-pangea/dnd";
import ColumnList from "../features/kanban/column/ColumnList";




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
    const { source, destination, type } = result


    if (!destination) return

    if (destination.index === source.index && destination.droppableId === source.droppableId) return

    // const columnId = source.droppableId
    if(type === 'COLUMN') {
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
          <ColumnList
            board={board}
            onAddCard={handleShowCardModal}
          />
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