import { create, type StateCreator } from "zustand";
import { initialBoard } from "../mockData";
import type { Board } from "../types";



type BoardState = {
    board: Board
    setBoard: (newBoard: Board) => void
}


const createBoardStore: StateCreator<BoardState> = (set) => {
    const stored = localStorage.getItem('board')
    const board = stored ? JSON.parse(stored) : initialBoard

    const setBoard = (newBoard: Board) => {
        set({ board: newBoard })
        localStorage.setItem('board', JSON.stringify(newBoard))

    }

    return {
        board: board,
        setBoard: setBoard
    }
}

export const useBoardStore = create<BoardState>(createBoardStore)