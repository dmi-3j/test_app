const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const logsPath = path.resolve('./logs');
if (!fs.existsSync(logsPath)) fs.mkdirSync(logsPath, { recursive: true });

const createdAt = new Date();
const instanceId = process.env.INSTANCE_ID || '0';
const logFilePath = path.join(logsPath, `access-log-${instanceId}.log`);

const server = http.createServer((req, res) => {
    try {
        fs.appendFileSync(logFilePath, `${new Date().toISOString()}: request ${req.url}\n`);
    } catch (err) {
        console.error('Failed to write log:', err);
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Test app is running! My GIT task is working! \nStarted at: ${createdAt.toISOString()}\nInstance: ${instanceId}`);
});

server.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
