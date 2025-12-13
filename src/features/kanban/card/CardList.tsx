import { Droppable, Draggable } from '@hello-pangea/dnd';
import type { CardListProps } from '../../../types';
import Card from './Card';

export default function CardList({ columnId, cardIds, cards, isDone }: CardListProps) {

    const cardData = cardIds.map(id => cards[id]).filter(Boolean)

    return (
        <Droppable droppableId={columnId} type="CARD">
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-[8px] min-h-[120px]"
                >
                    {
                        cardData.map((card, index) => {
                            return (
                                <Draggable
                                    key={card.id}
                                    draggableId={card.id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}

                                        >

                                            <Card
                                                id={card.id}
                                                title={card.title}
                                                meta={card.meta}
                                                isDone={isDone}
                                            />

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