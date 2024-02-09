

export function handleInputChange(event, stateDest) {
	const inputName = event.target.name;
	const inputValue = event.target.value;

	stateDest(prevState => ({
		...prevState,
		[inputName]: inputValue
	}));
}