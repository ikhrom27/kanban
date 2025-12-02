import { create, type StateCreator } from "zustand";
import { initialBoard } from "../mockData";
import type { Board, Column, Card, CardId } from "../types";



type BoardState = {
    board: Board
    setBoard: (newBoard: Board) => void
    addColumn: (title: string) => void
    addCard: (payload: {id: string; title: string; meta: string, columnId: string}) => void
    reorderCardInColumn: (columnId: string, fromIndex: number, toIndex: number) => void
    reorderCardBetweenColumn: (fromColumnId: string, fromIndex: number, toColumnId: string, toIndex: number) => void
    reorderColumn: (fromIndexColumOrder: number, toIndexColumnOrder: number) => void
}


const createBoardStore: StateCreator<BoardState> = (set, get) => {
    const stored = localStorage.getItem('board')
    const board = stored ? JSON.parse(stored) : initialBoard

    const setBoard = (newBoard: Board) => {
        set({ board: newBoard })
        localStorage.setItem('board', JSON.stringify(newBoard))

    }

    return {
        board: board,
        setBoard: setBoard,
        addColumn: (title: string) => {
           const currentBoard = get().board

           const newColumn: Column = {
            id: title,
            title: title,
            cardIds: []
           }

           const newBoard: Board = {
             ...currentBoard,
             columnOrder: [...currentBoard.columnOrder, title],
             columns: {
                ...currentBoard.columns,
                [title]: newColumn
             }
           }

           setBoard(newBoard)
        },
        addCard(payload) {
            const currentBoard = get().board
            const currentColumn = get().board.columns[payload.columnId]

            const newCard: Card = {
                id: payload.id,
                title: payload.title,
                meta: payload.meta
            }

            const newBoard: Board = {
                ...currentBoard,
                columns: {
                    ...currentBoard.columns,
                    [payload.columnId]: {
                        ...currentColumn,
                        cardIds: [...currentColumn.cardIds, payload.id ]
                    }
                },
                cards: {
                    ...currentBoard.cards,
                    [newCard.id]: newCard
                }
            }
            console.log(currentColumn, payload.columnId)
            console.log(newBoard, 'boarddd')
            setBoard(newBoard)
        },
        reorderCardInColumn(columnId, fromIndex, toIndex) {
            const currentBoard = get().board;
            const selectedColumn = currentBoard.columns[columnId];
            const newCardIds = Array.from(selectedColumn.cardIds);

            const [moved] = newCardIds.splice(fromIndex, 1)
            newCardIds.splice(toIndex, 0, moved) 

            const newBoard: Board = {
                ...currentBoard,
                columns: {
                    ...currentBoard.columns,
                    [columnId]: {
                        ...selectedColumn,
                        cardIds: newCardIds
                    }
                }
            }

            setBoard(newBoard)

        },
        reorderCardBetweenColumn(fromColumnId, fromIndex, toColumnId, toIndex) {
            const currentBoard = get().board;
            const fromColumn = currentBoard.columns[fromColumnId];
            const toColumn = currentBoard.columns[toColumnId]
            const newCardIdsfromColumn = Array.from(fromColumn.cardIds)
            let newCardIdsDestination = Array.from(toColumn.cardIds)

            let moved: CardId;
            [ moved ] = newCardIdsfromColumn.splice(fromIndex, 1)
            newCardIdsDestination.splice(toIndex, 0, moved)

            let newBoard: Board = {
                ...currentBoard,
                columns: {
                    ...currentBoard.columns,
                    [fromColumnId]: {
                        ...fromColumn,
                        cardIds: newCardIdsfromColumn
                    },
                    [toColumnId]: {
                        ...toColumn,
                        cardIds: newCardIdsDestination
                    }
                }
            }

        
            setBoard(newBoard)
        },   
        reorderColumn(fromIndex, toIndex) {
            const currentBoard = get().board;
            const selectedColumOrder = currentBoard.columnOrder
            console.log(fromIndex, toIndex, 'iniiii')
            const [ moved ] = selectedColumOrder.splice(fromIndex, 1)
            selectedColumOrder.splice(toIndex, 0, moved)
            console.log(selectedColumOrder, 'yayayya')

            const newBoard: Board = {
                ...currentBoard,
                columnOrder: selectedColumOrder
            }
            setBoard(newBoard)
        }
    }
}

export const useBoardStore = create<BoardState>(createBoardStore)

