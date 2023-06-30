interface ITodoFindRequestDTO {
	id: string;
}

interface ITodoFindResponseDTO {
	id: string;
	content:
	{
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[],
}

export { ITodoFindRequestDTO, ITodoFindResponseDTO };
