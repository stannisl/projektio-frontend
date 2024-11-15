// pages/login.js

import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // Отправляем данные на сервер через fetch API
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Неверный email или пароль');
            }

            const data = await response.json();
            alert(data.message); // Сообщение об успешной авторизации
        } catch (error) {
            console.error(error);
            alert('Ошибка при входе. Проверьте введённые данные.');
        }
    }

    return (
        <div>
            <h1>Форма Авторизации</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <br />

                <label htmlFor="password">Пароль:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <br />

                <button type="submit">Войти</button>
            </form>
        </div>
    );
}