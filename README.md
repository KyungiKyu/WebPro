# WebPro

Wir haben uns das Wissen mit Hilfe dieser Website angeignet:
https://www.codingnepalweb.com/chat-web-application-using-php/

Ziel war die Entwicklung einer webbasierten Kommunikationsplattform, welche die geräteunabhängige Kommunikation ermöglichen soll. 

Zur Datenspeicherung sollte eine MySQL-Datenbank auf einem privat gehosteten Webserver zur Anwendung kommen. 

Folgende Sprachen wurden angewendet:
- PHP
- JavaScript
- MySQL
- HTML
- CSS

Zur Modulverlinkung zwischen JavaScript und PHP wurde Ajax angewendet. 

# Aufgabenstellung
-   Implementierung einer Client-Server Chat Anwendung (Vergleichbar mit slack)
-   Der Client soll als Webanwendung ausgeführt werden. 
-   Die Backendtechnologie und Sprache ist frei wählbar.
-   Es soll eine einfache Chat-Applikation implementiert werden in der es möglich sein soll mit mehreren Clients auf ein gemeinsames Backend zuzugreifen wobei die Eingaben der verschiedenen Teilnehmer auf den anderen Clients synchronisiert werden.
-   Die eingesetzten Technologien zur Übertragung und Darstellung sollen dokumentiert und die Technologieentscheidungen erörtert werden (in der Präsentation).

**Client (Basisfunktionalitaet):** 
-   Der Client soll über zwei Bereiche verfügen, einer Anzeige des Chats in der die eigenen und die Nachrichten der anderen verbundenen Teilnehmer angezeigt werden und einer Texteingabe mit der Nachrichten an **alle** Teilnehmer geschickt werden können.
-   Jeder Client soll eineindeutig über einen Namen identifizierbar sein

**Backend (Basisfunktionalitaet)**:
-   Das Backend soll die einzelnen Verbundenen Clients verwalten und die Nachrichten die von den einzelnen Clients gesendet werden an die anderen Verbundenen Clients verteilen.
-   In der Basisaufgabe braucht es keine Persistenz oder Userverwaltung

**Extra (Beispiele):** 
-   Anzeige aller Verbundenen Clients/Nutzer
-   Persistenz des Chatverlaufes: Wenn sich ein neuer Client verbindet wird der bisherige Chatverlauf übertragen
-   User können nicht nur plain text sondern auch HTML/Markdown/BBCode text übertragen
-   Frei wählbar


# Herausforderungen
Einarbeitung in die einzelnen Sprachen und Vorgaben aufgrund fehlendem Vorwissen führte zu einer gewissen Hürde. Gerade im Bezug auf die synchron stattfindenden Vorlesungen musste so viel Eigenarbeit in die Lehre und Verknüpfung unterschiedlicher Sprachen aufgebracht werden. 

Sichere Datenbankverbindung war anfangs schwieriger als erwartet, da ein öffentlicher Zugriff angedacht war. Aufgrund der Beschaffenheit von MySQL als nicht getrennte Datenbank zwischen OS und Speicherlayer musste dies jedoch verworfen werden. Dies hätte sonst zu einem Sicherheitsrisiko geführt. 

Ziel war die Nutzeranzeige auf allen angebundenen Geräten, jedoch kam es nach der Umsetzung zu Darstellungsschwierigkeiten auf mobilen Endgeräten. Die Deklaration einer zweiten Klasse welche mit einer Mediaquerry auf die Bildschirmgröße reagiert konnte dabei abhilfe leisten. (560 px)

Ein weiteres Ziel, war die Implementierung eines Dark- und Light-Mode zur Erhöhung der Benuzerfreundlichkeit. Ergänzend wurde mithilfe eines Lighthous-Test die Barrierefreiheit der Webseite analysiert und die Vorschläge angepasst. Allerdings war das Wechseln zwischen Dark- und Light-Mode aufgrund des Cache des Browsers nicht möglich.       

# Umsetzung in Dateien

## Index.php
Ist die "Landingpage" auf der die Besucher als erstes ankommen. Ziel ist hier die Registrierung der Nutzer für die weitere Nutzung der Plattform.

Hier wurden auch die ersten Skripte verknüpft um den Wechsel auf die Login Page zu ermöglichen. 

## Header.php
Dient der Vordeklaration und Vorgabe einzelner Werte für die Seiten.
Anzeige des Icons und Namen für den Tab.

## Chat.php
Verknüpfung der Datenbank ab Zeile 14 in welcher einzelne Daten abgerufen werden. Abruf einzelner Scripte und ...

## Unzipper.php
Dient dem entpacken von .zip, .rar und .gz Dateien des Webservers.
Diese dient der einfacheren Nutzung, wenn kein Shellzugang auf den Webserver vorhanden ist. 

## Users.php
Zugriff auf die Nutzer aus der Datenbank und der optischen Bereitstellung für den Anwender. Dient zur Darstellung des Dashboardes für den Anwender.

## Style.css
Dient der grafischen Deklaration einzelner Bereiche. Darunter fallen Fonts, Farben, Grenzen, Positionierung und Felder.

## Chatapp.sql
Dient der Anbindung an die Datenbank und gibt einzelne Tabellenstrukturen an. Sie beinhaltet auch die notwendigen MySQL-Befehle.

# PHP-Ordner
## Config.php
Wird zur Anmeldung der ChatApp in der Datenbank benötigt, ansonsten kann kein Zugriff auf die Datenbank erfolgen

## Data.php
Beinhaltet die notwendigen MySQL-Befehle um die gesendeten Nachrichten für die Chats bereitzustellen.

## Get-chat.php
Beinhaltet mehrere MySQL-Befehle welche die Bereitstellung der Nachrichten aus dem gewünschten Chat (mit diesem Nutzer) ermöglichen. Es werden alle Nachrichten inkl. Zeitstempel abgerufen.

## Insert-chat.php
Speichert die Eingabe in den Chat welcher von dem Anwender getätigt wird.

## Login.php
Ruft in der Datenbank ab, ob der Nutzer der sich gerade versucht anzumelden bereits registriert ist. Wenn ja erfolgt der Login, wenn nicht wird ein Fehler ausgegeben. Dieser kann die einzelnen Felder welche benötigt werden anzeigen (E-Mail, Passwortfehler, Benötigte Informationen)

## Logout.php
Tätigt den Logout des Nutzers, trägt den neuen Zustand in die Datenbank ein und der Nutzer erscheint dann für alle anderen als Offline.

## Search.php
Ermöglicht die Suche der Nutzer in der Datenbank.

## Signup.php
Dient der Registrierung der Nutzer, wenn sie neu dazu kommen. Daten werden abgerufen und gespeichert. Wenn diese Fehlerhaft sind, wird das betroffene Feld direkt angesprochen und der Nutzer kann seine Angaben überarbeiten.

## Users.php
Dient zur Abfrage aller vorhandenen Anwender. (Musste aufgeteilt werden, da ein Singlefile aufgrund der Querries nicht möglich war)

## chat.js
Gibt uns das Input field und die Chatbox aus. Es werden einzelne Submitevents ausgeführt. Es werden die Möglichkeit für einen neuen Chat gegeben, setzt das "Mouseenter" und zieht sich auch einzelne Informationen wie z.B. die chat.php um die Bereitschaft zu ermöglichen. Es werden Responds getätigt und auch die Reaktion auf Nutzeraktionen werden abgedeckt. 

## Login.js
Öffnet die Loginforms, setzt Referenzen zu der Login.php und es erfolgen auch einzelne Reaktionen an die XHR.
Die form data wird an den Server weitergegeben.

## pass-show-hide.js
Setzt einen aktiven Icon in die Vorlage. Fügt einen Icon für die "toggleIcon" und löscht auch den Icon wenn er nicht mehr benötigt wird.

## Signup.js
Ermöglicht die Registrierung des Nuetzers, setzt die Onsubmit events. Er Referenziert auch an die Signup.php um die Nutzer direkt anzumelden.
Die abgerufenen Informationen werden dann wieder an den Server weitergegeben um die Daten zu speichern.

## Users.js
Gibt eine Nutzerliste zurück, zeigt den Icon für die Suche, löscht ihn wenn notwendig auch wieder heraus. Löst die Suche unter den Nutzern aus, und gibt auch eine Liste der gesuchten Nutzer zurück.

# Technologiewahl

## JavaScript
JavaScript ist eine Programmiersprache, die hauptsächlich für die Entwicklung von Webseiten und Web-Anwendungen verwendet wird. Mit JavaScript konnten wir als Entwickler interaktive Elemente auf der Webseite hinzufügen und die Funktionalität der Webseite erweitern. Zum Beispiel konnten Formulare mit JavaScript abgerufen werden, um sicherzustellen, dass die eingegebenen Daten korrekt sind. Im Grunde genommen wird JavaScript verwendet, um Webseiten lebendiger und interaktiver zu machen.

## PHP
PHP ist eine Skriptsprache, die hauptsächlich für die Entwicklung von Webseiten und Web-Anwendungen verwendet wird. PHP wird auf dem Server ausgeführt und kann mit HTML verwendet werden, um dynamische Inhalte auf einer Webseite anzuzeigen. Zum Beispiel kann PHP verwendet werden, um Daten aus einer Datenbank abzurufen und auf einer Webseite anzuzeigen oder um Benutzerinteraktionen auf einer Webseite zu verarbeiten. Im Grunde genommen wird PHP verwendet, um die Funktionalität von Webseiten zu erweitern und um dynamische Inhalte bereitzustellen. Weshalb wir der Meinung waren, dass es für unseren Fall die ideale Lösung ist.

## MySQL
Die Wahl fiel auf MySQL, da wir während der Vorlesung in Datenbanken die Nutzung bereits erlernten. MySQL ist eine relationale Datenbank-Management-System-Software, die zur Speicherung und Verwaltung von Daten in Datenbanken verwendet wird. MySQL wird häufig in Kombination mit PHP in der Entwicklung von Webseiten und Web-Anwendungen eingesetzt. Zum Beispiel kann PHP verwendet werden, um Daten von einer Webseite an eine MySQL-Datenbank zu senden und um Daten aus der Datenbank für die Anzeige auf einer Webseite abzurufen. MySQL ist eine sehr leistungsfähige und vielseitige Datenbank-Management-System-Software, die von kleinen Websites bis hin zu großen Unternehmensanwendungen verwendet werden kann.

## CSS / HTML
CSS (Cascading Style Sheets) und HTML (Hypertext Markup Language) sind beide Sprachen, die für die Gestaltung und Struktur von Webseiten verwendet werden. HTML wird verwendet, um den Inhalt einer Webseite zu strukturieren und zu kennzeichnen, während CSS verwendet wird, um die visuelle Gestaltung und Formatierung des Inhalts festzulegen. Zum Beispiel kann HTML verwendet werden, um Text, Bilder und andere Inhalte auf einer Webseite zu platzieren, während CSS verwendet wird, um die Farbe, Schriftart und Größe des Textes auf der Webseite festzulegen. Im Grunde genommen werden HTML und CSS verwendet, um Webseiten attraktiv und benutzerfreundlich zu gestalten und ihren Inhalt strukturiert darzustellen.
