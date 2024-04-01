'use client'
import type { UserInputProps } from '@/interfaces/userInputInterfaces'
import { checkValidNumber } from '@/utils/checkValidNumber'
import { useState } from 'react'

export const UserInput: React.FC<UserInputProps> = ({
	setStyles,
	setPResults,
	onNewResult,
	setResult,
}) => {
	const [inputValue, setInputValue] = useState('')

	const onInputChange = ({ target }: { target: HTMLInputElement }): void => {
		setInputValue(target.value)
	}

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault()
		const validation = checkValidNumber(inputValue)
		if (validation !== null) {
			const { pTag, result } = validation
			setResult(result)
			onNewResult(pTag)
			setInputValue('')
		}
	}

	const handleClick = (): void => {
		const validation = checkValidNumber(inputValue)
		if (validation !== null) {
			const { pTag, result } = validation
			setResult(result)
			onNewResult(pTag)
			setInputValue('')
		}
	}

	const clearResults = (): void => {
		setPResults([])
		setStyles([])
	}

	return (
		<>
			<div className="input-container">
				<form onSubmit={onSubmit}>
					<input
						type="text"
						className="input-container__input"
						id="user-input"
						maxLength={20}
						value={inputValue}
						onChange={onInputChange}
						required
					/>
				</form>
				<div className="input-container__label">
					<label htmlFor="user-input">Enter a US Phone Number:</label>
				</div>
			</div>
			<div className="validator-container__btns">
				<button onClick={handleClick} className="validator-container__btn" id="check-btn">
					Submit
				</button>
				<button onClick={clearResults} className="validator-container__btn" id="clear-btn">
					Clear
				</button>
			</div>
		</>
	)
}
