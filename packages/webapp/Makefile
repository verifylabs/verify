services-run:
	docker compose --env-file ./.env -p verify-api up --build -d verify-database

services-clean:
	docker compose -p verify-api down --rmi local -v --remove-orphans
