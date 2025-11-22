export type CardId = string;
export type ColumnId = string;
export type BoardId = string;

export interface Card {
    id: CardId;
    title: string;
    meta: string;
}

export interface Column {
    id: ColumnId,
    title: string   // Todo Progress dll
    cardIds: CardId[]; // untuk id2 card
}

export interface Board {
    id: BoardId;
    title: string;
    columnOrder: ColumnId[];  // urutan column berdasarkan id colom di array
    columns: Record<ColumnId, Column>;
    cards: Record<CardId, Card>;
}