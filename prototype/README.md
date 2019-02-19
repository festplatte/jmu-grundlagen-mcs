# Prototyp der Webseite alternate.de für die Endabgabe

Der Prototyp basiert auf einem REST-Backend mit Datenbankanbindung in JavaScript und einer Webapp/Frontend in JavaScript/React. Zum Ausführen wird Node.js verwendet. Es existieren jedoch auch Dockerimages für die einzelnen Services.

## Inhaltsverzeichnis

- backend: REST-Backend
- webapp: Web-Frontend

## Build und Ausführen

Zum Ausführen wird Docker benötigt. Die Dockercontainer werden über `docker-compose build` gebaut und mit `docker-compose up` ausgeführt. Anschließend ist das REST-Backend unter localhost:3010 und die Webapp unter localhost:3000 verfügbar.
