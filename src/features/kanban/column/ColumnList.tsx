import { Droppable, Draggable } from "@hello-pangea/dnd";
import type { ColumnListProps } from "../../../types";
import CardList from "../card/CardList";
import CardAddColumn from "../../../components/ui/buttons/CardAddColumn";
import Column from "./Column";



export default function ColumnList({ board, onAddCard }: ColumnListProps) {


    return (
        <Droppable
            droppableId="board-1"
            direction="horizontal"
            type="COLUMN"

        >
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex items-start gap-[20px] overflow-x-auto pt-[2px] min-w-max"
                >
                    {
                        board.columnOrder.map((columnId, index) => {
                            const colomn = board.columns[columnId];
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
                                            className="flex-none w-[280px]"

                                        >
                                            <Column
                                                id={colomn.id}
                                                title={colomn.title}
                                                cardIds={colomn.cardIds}
                                                dragHandleProps={provided.dragHandleProps}
                                            >
                                                <CardList
                                                    columnId={colomn.id}
                                                    cardIds={colomn.cardIds}
                                                    cards={board.cards}
                                                    isDone={isDone}
                                                />
                                                <CardAddColumn
                                                    onClick={() => onAddCard(colomn.id)}
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
    )
}