FROM cypress/browsers:node-22.15.1-chrome-136.0.7103.113-1-ff-138.0.3-edge-136.0.3240.64-1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint

RUN npm run build

RUN ls -la dist/ && [ -f dist/index.html ] || (echo "Build failed: index.html not found!" && exit 1)

CMD ["npx", "serve", "dist", "-l", "5173", "--no-clipboard"]