# Pflanzen-App

🌿 Pflanzen-App

Eine intelligente Web-App zur Verwaltung deiner Pflanzen – mit Standortabfrage, Raumzuordnung und Pflege-Tipps.

Die Pflanzen-App hilft dir, den Überblick über deine Pflanzen zu behalten, indem sie dir erinnert, wann sie gegossen werden müssen, und dir nützliche Pflegeinformationen liefert. Die App ist rein webbasiert (HTML, CSS, JavaScript) und erfordert keine Installation – einfach im Browser öffnen und loslegen!



✨ Features





Standortabfrage: Die App fragt deinen aktuellen Standort ab, um klimatische Bedingungen (z. B. Luftfeuchtigkeit, Temperatur) für optimale Pflegeempfehlungen zu berücksichtigen.



Raumzuordnung: Erstelle eigene Räume (z. B. "Wohnzimmer", "Balkon", "Büro") und ordne deine Pflanzen diesen Räumen zu.



Pflanzen-Datenbank: Informationen zu über 100 Pflanzenarten, inklusive:





Wasserbedarf



Lichtbedarf



Optimale Temperatur



Pflege-Tipps



Gieß-Erinnerungen: Automatische Benachrichtigungen, wann deine Pflanzen Wasser brauchen.



Benutzerfreundliches Dashboard: Übersicht aller Pflanzen, sortiert nach Räumen oder Gießintervall.



Responsive Design: Funktioniert auf allen Geräten – Desktop, Tablet und Smartphone.



🛠 Technologien





Frontend: HTML5, CSS3, JavaScript (Vanilla)



KI-Integration: Groq für intelligente Pflegeempfehlungen und Standortanalyse.



Geolokation: Abfrage des aktuellen Standorts über die Browser-API (navigator.geolocation).



Datenverwaltung: Lokale Speicherung der Pflanzen und Räume im localStorage des Browsers.



🚀 Schnellstart

1. App lokal ausführen





Repository klonen:

 git clone https://github.com/dein-benutzername/pflanzen-app.git



In den Projektordner wechseln:

 cd pflanzen-app



Die Pflanzen-App-Fixed.html in deinem Browser öffnen (z. B. durch Doppelklick auf die Datei).

2. App verwenden





Standort freigeben: Die App fragt beim ersten Start nach deinem Standort. Dies ist optional, aber empfohlen für präzisere Pflege-Tipps.



Räume erstellen: Klicke auf "Neuer Raum" und gib einen Namen ein (z. B. "Schlafzimmer").



Pflanzen hinzufügen: Wähle einen Raum aus und füge eine neue Pflanze hinzu. Gib Name, Art und Pflegebedürfnisse ein.



Erinnerungen aktivieren: Die App erinnert dich automatisch, wann eine Pflanze gegossen werden muss.



📸 Screenshots

(Füge hier später Screenshots deiner App ein, z. B.:)
Dashboard
Raumübersicht
Pflanzen-Details



🌍 Standortabfrage

Die App nutzt die Browser-Geolokation-API, um deinen aktuellen Standort abzufragen. Diese Daten werden nur lokal verwendet, um:





Klimadaten (Temperatur, Luftfeuchtigkeit) für deine Region abzurufen.



Pflegeempfehlungen an dein lokales Klima anzupassen.

⚠️ Hinweis: Die Standortabfrage ist optional. Falls du sie ablehnst, funktioniert die App weiterhin, aber mit allgemeinen Pflege-Tipps.



🤖 KI-Powered durch Groq

Diese App nutzt Groq, um:





Intelligente Pflege-Tipps basierend auf Pflanzenart und Standort zu generieren.



Automatische Gießpläne zu erstellen, die sich an deine lokalen Bedingungen anpassen.



📂 Projektstruktur

pflanzen-app/
├── Pflanzen-App-Fixed.html    # Hauptdatei der Web-App
├── README.md                   # Diese Datei
└── assets/                     # (Optional: Bilder, CSS, JS)



🤝 Beiträge

Beiträge sind herzlich willkommen! Wenn du Ideen für Verbesserungen hast oder Fehler findest:





Öffne ein Issue im Repository.



Erstelle einen Pull Request mit deinen Änderungen.



📜 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe LICENSE für weitere Details.



🙏 Danksagungen





Groq für die KI-Unterstützung.



MDN Web Docs für die Dokumentation der Geolokation-API.



