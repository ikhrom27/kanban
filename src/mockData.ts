import type { Board } from "./types";

export const initialBoard: Board = {
    id: 'Board-1',
    title: 'Kanban Board',
    columnOrder: ['todo', 'in-progress', 'done'],
    columns: {
        'todo': {
            id: 'todo',
            title: 'Todo',
            cardIds: ['c1', 'c2', 'c3']
        },
        'in-progress': {
            id: 'in-progress',
            title: 'In Progress',
            cardIds: ['c4', 'c5']
        },
        'done': {
            id: 'done',
            title: 'Done',
            cardIds: ['c6']
        }
    },
    cards: {
        'c1': { 
            id: 'c1', 
            title: 'Set up project',
            meta: 'Today · Setup'
        },
        'c2': { 
            id: 'c2', 
            title: 'Design data model',
            meta: 'Low priority'
        },
        'c3': { 
            id: 'c3', 
            title: 'Create basic layout',
            meta: 'UI · Layout'
        },
        'c4': { 
            id: 'c4', 
            title: 'Build column component',
            meta: 'Coding · 30 min'
        },
        'c5': { 
            id: 'c5', 
            title: 'Refine headers styling',
            meta: 'UI · Styling'
        },
        'c6': { 
            id: 'c6', 
            title: 'Install dependencies',
            meta: 'Completed · 10:21'
        }
    }
}