import http from "http";

const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the server');
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`); 
});