import {  useState, type ChangeEvent, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

type TFormData = {
	email: string,
	password: string,
}

const initialFormData = {
	email: '',
	password: ''
};

function App() {
	const [counter, setCounter] = useState<number>(0);
	const [formData, setFormData] = useState<TFormData>(initialFormData);

	const addCounter = (e: MouseEvent) => {
		console.log(e);
		console.log(counter);
		setCounter((preState) => preState + 1);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;

		setFormData(prevForm => {
			return {
				...prevForm,
				[name]: value 
			};
		});
	};

	return (
		<div className='container-box'>
			<form name='auth' className='form'>
				<Input
					onChange={handleChange}
					name='email'
					value={formData?.email}
					placeholder='Email'
					type='text'
				/>
				<Input
					onChange={handleChange}
					name='password'
					value={formData?.password}
					placeholder='Пароль'
					type='text'
				/>
				<Button
					children="Вход"
					onClick={addCounter}
					size='medium'
				/>
			</form>
		</div>
	);
}

export default App;
