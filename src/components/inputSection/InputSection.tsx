'use client'
import { useEffect, useState } from 'react'
import { UserInput } from '../userInput/UserInput'

export const InputSection = (): JSX.Element => {
	const [result, setResult] = useState<boolean>(false)
	const [pResults, setPResults] = useState<any[]>([])
	const [styles, setStyles] = useState<any[]>([])

	const onAddResult = (result: any): void => {
		if (pResults.includes(result)) return

		setPResults((prevResults: any[]) => {
			return [...prevResults, result]
		})
	}

	useEffect(() => {
		setStyles((prevStyles) => {
			return [...prevStyles, { color: result ? '#326322' : '#cb2828' }]
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pResults])

	return (
		<section className="validator-container">
			<UserInput
				setStyles={setStyles}
				setPResults={setPResults}
				onNewResult={onAddResult}
				setResult={setResult}
			/>
			<div className="validator-container__result" id="results-div">
				<p className="validator-container__text">Check for a phone number</p>
				{pResults.map((pResult, i) => (
					<p key={pResult} style={styles[i + 1]} className="results-text">
						{pResult}
					</p>
				))}
			</div>
		</section>
	)
}
