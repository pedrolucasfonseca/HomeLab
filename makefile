up:
	docker compose up -d --build

down:
	docker compose down

ps:
	docker ps

logs:
	docker compose logs -f

test:
	cd backend && npm test

e2e-supertest:
	docker compose up -d --build --wait
	NODE_PATH=backend/node_modules ./backend/node_modules/.bin/jest --config backend/package.json --rootDir . e2e/container.test.js
	docker compose down

dev-front:
	cd frontend && npm run dev

dev-back:
	cd backend && npm run dev

validate-k8s:
	kubeconform -summary k8s/