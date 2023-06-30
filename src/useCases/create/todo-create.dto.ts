interface ITodoCreateRequestDTO {
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

interface ITodoCreateResponseDTO {
	id: string;
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

export { ITodoCreateRequestDTO, ITodoCreateResponseDTO };
