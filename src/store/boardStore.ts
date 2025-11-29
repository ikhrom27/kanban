import { create, type StateCreator } from "zustand";
import { initialBoard } from "../mockData";
import type { Board, Column, Card } from "../types";



type BoardState = {
    board: Board
    setBoard: (newBoard: Board) => void
    addColumn: (title: string) => void
    addCard: (payload: {id: string; title: string; meta: string, columnId: string}) => void
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
    }
}

export const useBoardStore = create<BoardState>(createBoardStore)