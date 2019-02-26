# Alternate-Prototyp Backend

REST-Service für den Prototyp der Webseite alternate.de

## `npm start`

Startet die App im Produktionsmodus. Die App steht anschließend unter localhost:3000 zur Verfügung.

## `npm run start:dev`

Startet die App im Entwicklungsmodus. Die App steht anschließend unter localhost:3000 zur Verfügung. Änderungen am Sourcecode werden beim Speichern automatisch nachgeladen.

## `npm run setup-db`

Führt ein Skript zur Datenbankeinrichtung aus. Das Skript legt alle erforderlichen Datenbanken und Collections an und sollte daher nur einmal ausgeführt werden.
**Wichtig**: Damit das Skript funktioniert, muss vorher die Datenbank gestartet werden. Dies kann mit dem Befehl `docker-compose up mongodb` ein Verzeichnis höher (also unter `prototype`) erreicht werden.
