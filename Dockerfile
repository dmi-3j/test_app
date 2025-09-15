FROM node:20-alpine

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY src/package.json ./
RUN npm install

# Копируем весь исходный код
COPY src ./src

EXPOSE 3000

# Команда запуска
CMD ["node", "src/app.js"]
