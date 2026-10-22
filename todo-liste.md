# To-do-Liste Website

Was an der Website noch gemacht werden soll. Erledigtes abhaken (`[x]`) oder nach unten verschieben.

## Offen

- [ ] Fehlende Cover in die Ordner einsortieren
- [ ] Echte Cover statt Platzhalter einbauen (Pfad je Buch als `cover` in `js/books.js`, Kachel-Bilder in `index.html`)
- [ ] Amazon-Links für jedes Buch ergänzen, damit die Buchkarten anklickbar werden
- [ ] Bestseller hervorheben (Weg 1): Top-Bücher monatlich aus KDP von Hand in `js/books.js` markieren (`bestseller: true` bzw. `salesRank`), dazu „Bestseller“-Abzeichen auf den Buchkarten und ein „Meistverkauft“-Regal auf der Startseite. Nur Rang/Markierung speichern, keine Stückzahlen (Repo ist öffentlich).
- [ ] Featured-Kachel automatisch wählen: die Kategorie mit dem höchsten **Anteil** an Bestsellern im Verhältnis zur Anzahl ihrer Titel (z. B. 3 von 11 Titeln = 27 %). Baut auf dem Bestseller-Punkt auf. Offene Frage: Mindestanzahl festlegen, damit kleine Kategorien (Camping, 5 Titel) nicht schon mit einem Bestseller gewinnen.
- [ ] Saisonale Kategorien anlegen (z. B. Winter/Weihnachten, Muttertag, Sommer) und je nach Monat automatisch featuren. Bücher dafür in `js/books.js` mit einer Saison markieren, auch kategorieübergreifend (z. B. Wichtelbücher, Advent-Edition, Bier- und Camping-Adventskalender, Nele-Weihnachtsband).
- [ ] Kategorie-Kacheln der Startseite aus `js/books.js` erzeugen statt fest in der HTML (Voraussetzung für die beiden Punkte oben)
  - „wide“ nicht fest an eine Kategorie hängen, sondern nach Position vergeben, damit die letzte Reihe im 4-Spalten-Grid immer voll ist. Je nachdem, wie viele Kacheln nach Featured + 4 normalen übrig sind: 1 → volle Breite, 2 → beide wide, 3 → eine wide + zwei normal, 4 → alle normal.
  - Einfache Kategorie-Liste als Rückfall in der HTML lassen, falls JavaScript nicht läuft.

## Erledigt

- [x] Layout der Startseite überarbeiten (Kategorie-Kacheln, Anlässe, Kategorieseiten mit Bücherregalen)
