export const checkValidNumber = (input: string): { pTag: string; result: boolean } | null => {
	if (input === '') {
		alert('Please provide a phone number')
		return null
	}

	const countryCode = '^(1\\s?)?'
	const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})'
	const spacesDashes = '[\\s\\-]?'
	const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$'
	const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`)
	const result = phoneRegex.test(input)

	return {
		pTag: `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`,
		result,
	}
}
