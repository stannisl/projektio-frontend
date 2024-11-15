// pages/register.js

import { useState } from 'react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // Отправляем данные на сервер через fetch API
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            if (!response.ok) {
                throw new Error('Произошла ошибка при регистрации');
            }

            alert('Регистрация прошла успешно!');
        } catch (error) {
            console.error(error);
            alert('Ошибка при регистрации. Попробуйте позже.');
        }
    }

    return (
        <div>
            <h1>Форма Регистрации</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Имя:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <br />

                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <br />

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}