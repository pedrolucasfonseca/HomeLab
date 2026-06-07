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

dev-front:
	cd frontend && npm run dev

dev-back:
	cd backend && npm run dev