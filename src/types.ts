import type { ReactNode } from "react";

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

export type AddCardPayload = {
    id: string,
    title: string;
    meta: string;
    columnId: string;
}

export type LayOutProps = {
    children?: ReactNode;
}

export type ModalProps = {
    onClose: () => void;
    children?: ReactNode;
    onClick?: () => void;
    title?: string
}

export type ModalFeatureProps<T = void> = {
    onClose: () => void;
    onSubmit: (payload: T) => void
    columnId?: string
}

export type ButtonProps = {
    onClick?: () => void;
    children: ReactNode;
    className?: string
}

export type AddColumnFeatureProps = ModalFeatureProps<string>
export type AddCardFeatureProps=ModalFeatureProps<AddCardPayload>
