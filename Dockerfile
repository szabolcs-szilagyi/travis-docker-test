FROM node:6.11

ENV PORT 3001

EXPOSE 3001

COPY package.json package.json
RUN npm install

COPY . .

CMD ["node", "."]
