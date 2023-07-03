interface ITodoUpdateRequestDTO {
	id: string;
	itemId: string;
	isComplete: boolean;
}

interface ITodoUpdateResponseDTO {
	id: string;
	content: any;
}

export { ITodoUpdateRequestDTO, ITodoUpdateResponseDTO };
