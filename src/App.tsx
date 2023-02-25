import { Component, createSignal, createEffect, For } from 'solid-js';

import styles from './App.module.css';

const [todo, setTodo] = createSignal('');
const [todos, setTodos] = createSignal([{ task: 'Test', completed: false }]);

const App: Component = () => {
	return (
		<div class={styles.App}>
			<input
				type="text"
				value={todo()}
				onChange={e => {
					setTodo((e.target as HTMLTextAreaElement).value);
				}}
			/>
			<button
				onClick={e => {
					e.preventDefault();
					setTodos([
						...todos(),
						{
							task: todo(),
							completed: false
						}
					]);
					setTodo('');
				}}
			>
				Add todo
			</button>
			<hr />
			<For each={todos()}>
				{todo => {
					return <li>{todo.task}</li>;
				}}
			</For>
		</div>
	);
};

export default App;
