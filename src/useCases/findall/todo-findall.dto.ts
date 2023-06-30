interface ITodoFindallResponseDTO {
	id: string;
	content: {
		id: string;
		textTodo: string;
		isComplete: boolean;
	}[]
}

export { ITodoFindallResponseDTO };
