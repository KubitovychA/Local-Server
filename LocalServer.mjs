import { createServer } from 'http';

const server = createServer((req, res) => {
    const host = process.env.HOST || 'localhost';
    const url = new URL(req.url, `https://${host}`);
    console.log(`Request path: ${url.pathname}`);
    
    if (url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Welcome, users!</h1></body></html>');
    } else if (url.pathname === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'API is up and running!' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

const port = process.env.PORT || 3000;
server.listen(port, '127.0.0.1', () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
//Цей код створює простий HTTP сервер на Node.js за допомогою вбудованого модуля http. Сервер обробляє два основні маршрути: головну сторінку ("/"), яка відображає HTML повідомлення, 
// і /api/data, що повертає JSON з повідомленням. Якщо запит не відповідає жодному з маршрутів, сервер відповідає з помилкою 404. Порт, на якому працює сервер, визначається через змінну середовища PORT або за замовчуванням використовує порт 3000.
