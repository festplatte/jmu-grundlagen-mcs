# Prototyp der Webseite alternate.de für die Endabgabe

Der Prototyp basiert auf einem REST-Backend mit Datenbankanbindung in JavaScript und einer Webapp/Frontend in JavaScript/React. Zum Ausführen wird Node.js verwendet. Es existieren jedoch auch Dockerimages für die einzelnen Services.

## Inhaltsverzeichnis

- backend: REST-Backend
- webapp: Web-Frontend

## Build und Ausführen

Zum Ausführen wird Docker benötigt. Für den ersten Start sind folgende Schritte zur Vorbereitung nötig:

- Starten von mongodb: `docker-compose up mongodb`
- Initialisieren von mongodb (Anlegen der Datenbank und Collections): `cd backend`, `npm install`, `npm run setup-db`

Nun ist mongodb eingerichtet und kann über `docker-compose down` wieder gestoppt werden. Zum Starten der Applikation müssen nun bei jedem Start bzw. bei Codeänderungen folgende Schritte ausgeführt werden:

- Bauen der Dockercontainer: `docker-compose build`
- Starten der Dockercontainer: `docker-compose up`

Anschließend ist das REST-Backend unter localhost:3010 und die Webapp unter localhost:3000 verfügbar. Mit `docker-compose down` werden die Container wieder gestoppt.
