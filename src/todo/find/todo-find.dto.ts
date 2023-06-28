interface ITodoFindRequestDTO {
	id: string;
}

interface ITodoFindResponseDTO {
	id: string;
	content:
	{
		id: string;
		todoText: string;
		isComplete: boolean;
	}[],
}

export { ITodoFindRequestDTO, ITodoFindResponseDTO };
