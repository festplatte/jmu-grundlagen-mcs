# Prototyp der Webseite alternate.de für die Endabgabe

Der Prototyp basiert auf einem REST-Backend mit Datenbankanbindung in JavaScript und einer Webapp/Frontend in JavaScript/React. Zum Ausführen wird [Node.js](https://nodejs.org/en/) verwendet. Es existieren jedoch auch Dockerimages für die einzelnen Services.

## Inhaltsverzeichnis

- backend: REST-Backend
- webapp: Web-Frontend

## Build und Ausführen

Zum Ausführen der gesamten Anwendung wird [Docker](https://www.docker.com/get-started) benötigt. Nur für den ersten Start sind folgende Schritte zum Einrichten der Datenbank notwendig, die [Node.js](https://nodejs.org/en/) erfordern:

- Starten von mongodb: `docker-compose up mongodb`
- Initialisieren von mongodb (Anlegen der Datenbank und Collections): `cd backend`, `npm install`, `npm run setup-db`

Nun ist mongodb eingerichtet und kann über `docker-compose down` wieder gestoppt werden. Zum Starten der Applikation müssen nun bei jedem Start bzw. bei Codeänderungen folgende Schritte ausgeführt werden:

- Bauen der Dockercontainer: `docker-compose build`
- Starten der Dockercontainer: `docker-compose up`

Anschließend ist das REST-Backend unter localhost:3010 und die Webapp unter localhost:3000 (im Browser öffnen) verfügbar. Mit `docker-compose down` werden die Container wieder gestoppt.

## Ausführen zu Entwicklungszwecken

Die einzelnen Bestandteile der Anwendung (Webapp, Backend, Datenbank) können auch einzeln zur Entwicklung gestartet werden. Hierfür wird [Node.js](https://nodejs.org/en/) und [Docker](https://www.docker.com/get-started) auf dem PC benötigt. Die Datenbank wird über den Befehl `docker-compose up mongodb` gestartet. Für die Webapp und das Backend befindet sich die Anleitung in der README.md im jeweiligen Unterverzeichnis.
