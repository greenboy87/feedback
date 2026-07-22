# Setup: Ergebnisse in Google Sheet sammeln

## 1. Google Sheet anlegen
1. Neues Google Sheet erstellen (sheets.new)
2. Das erste Tabellenblatt umbenennen in **`Antworten`**
3. In Zeile 1 diese Überschriften eintragen:

   ```
   Zeitstempel | Klasse | Verständlich | Atmosphäre | Fairness | Abwechslung | Hilfe | Zufriedenheit | Gelernt | Gefallen | Ändern | Schwierig | Sonstiges
   ```

## 2. Apps Script einrichten
1. Im Sheet: **Erweiterungen → Apps Script**
2. Den kompletten Inhalt der Datei `apps-script.gs` (liegt neben dieser README) einfügen, vorhandenen Beispielcode ersetzen
3. Speichern (Diskettensymbol)

## 3. Als Web-App bereitstellen
1. Oben rechts: **Bereitstellen → Neue Bereitstellung**
2. Typ auswählen: **Web-App**
3. "Ausführen als": **Ich (deine E-Mail)**
4. "Zugriff": **Jeder** (wichtig, sonst können Schüler nicht anonym senden)
5. **Bereitstellen** klicken, ggf. Berechtigungen bestätigen (eigenes Google-Konto autorisieren)
6. Die angezeigte **Web-App-URL** kopieren (endet auf `/exec`)

## 4. URL in die Feedback-Seite eintragen
Die kopierte URL in `index.html` bei `GOOGLE_SCRIPT_URL` einsetzen (Claude trägt das ein, wenn du ihm die URL gibst).

## 5. (Optional) Zusammenfassung im Sheet
Neues Tabellenblatt "Zusammenfassung" anlegen, z. B.:

```
Ø Verständlich   =AVERAGE(Antworten!C2:C1000)
Ø Atmosphäre     =AVERAGE(Antworten!D2:D1000)
Ø Fairness       =AVERAGE(Antworten!E2:E1000)
Ø Abwechslung    =AVERAGE(Antworten!F2:F1000)
Ø Hilfe          =AVERAGE(Antworten!G2:G1000)
Ø Zufriedenheit  =AVERAGE(Antworten!H2:H1000)
Anzahl Antworten =COUNTA(Antworten!A2:A1000)
```

Daraus lässt sich in Google Sheets auch direkt ein Diagramm einfügen (Einfügen → Diagramm).

Um eine Klasse einzeln auszuwerten, z. B. mit `=AVERAGEIF(Antworten!$B$2:$B$1000; "5a"; Antworten!C2:C1000)` (Durchschnitt „Verständlich" nur für Klasse 5a).

Das Sheet bleibt privat — nur du siehst die Antworten, niemand sonst im Internet.
