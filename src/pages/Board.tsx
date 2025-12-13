import { useKanban } from "../features/kanban/hooks/useKanban";
import { type DropResult, DragDropContext } from "@hello-pangea/dnd";
import { useModal } from "../hooks/useModal";
import BoardWrapper from "../components/layout/BoardWrapper";
import ButtonAddColumn from "../components/ui/buttons/ButtonAddColumn";
import ColumnModal from "../features/kanban/column/ColumnModal";
import CardModal from "../features/kanban/card/CardModal";
import ColumnList from "../features/kanban/column/ColumnList";


export default function Board() {
  const { board, actions } = useKanban();
  const columnModal = useModal();
  const cardModal = useModal<{ columnId: string }>();


  const handleShowCardModal = (columnId: string) => {
    cardModal.open({ columnId })
  }

  const handleColumnSubmit = (title: string) => {
    actions.addColumn(title)
    columnModal.close()
  }

  const handleCardSubmit = (payload: { title: string; columnId: string, id: string, meta: string }) => {
    actions.addCard(payload)
    cardModal.close
  }

  const handleDrag = (result: DropResult) => {
    const { source, destination, type } = result


    if (!destination) return

    if (destination.index === source.index && destination.droppableId === source.droppableId) return

    // const columnId = source.droppableId
    if (type === 'COLUMN') {
      return actions.reorderColumn(source.index, destination.index)

    } else {
      const fromColumnId = source.droppableId
      const toColumnId = destination.droppableId

      if (destination.droppableId !== source.droppableId) actions.reorderCardBetweenColumn(fromColumnId, source.index, toColumnId, destination.index)
      else if (destination.droppableId === source.droppableId) actions.reorderCardInColumn(fromColumnId, source.index, destination.index)
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
          <ButtonAddColumn onClick={columnModal.open}>
            <span className="text-[15px] text-[#60a5fa]">+</span>
            <span>Add column</span>
          </ButtonAddColumn>
        </BoardWrapper>
      </DragDropContext>
      {columnModal.isOpen && (
        <ColumnModal
          onClose={columnModal.close}
          onSubmit={handleColumnSubmit}
        />
      )}
      {cardModal.isOpen && cardModal.data && (
        <CardModal
          onClose={cardModal.close}
          onSubmit={handleCardSubmit}
          columnId={cardModal.data?.columnId}

        />
      )}
    </>
  )
}