import { useShallow } from "zustand/shallow";
import { useBoardStore } from "../../../store/boardStore";


export function useKanban () {
    const { board, addColumn, addCard, reorderCardBetweenColumn, reorderColumn, reorderCardInColumn } = useBoardStore(
        useShallow((state) => ({
            board: state.board,
            addColumn: state.addColumn,
            addCard: state.addCard,
            reorderCardInColumn: state.reorderCardInColumn,
            reorderCardBetweenColumn: state.reorderCardBetweenColumn,
            reorderColumn: state.reorderColumn
        }))
    )

    const getColumnById = (columnId: string) => board.columns[columnId]

    const getCardByColumnId = (columnId: string) => {
        const column = board.columns[columnId]
        if(!column) return []

        return column.cardIds.map((cardId:string) => {
            board.cards[cardId]
        }).filter(Boolean)


    }

    return {
        board,
        actions: { addColumn, addCard, reorderCardInColumn, reorderCardBetweenColumn, reorderColumn},
        getCardByColumnId,
        getColumnById
    }
}