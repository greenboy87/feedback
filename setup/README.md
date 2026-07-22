# Setup: Firebase-Anbindung fürs Feedback

Genau wie beim Quiz-Scoreboard läuft die Speicherung über ein Firebase Realtime-Database-Projekt. Hier die einmalige Einrichtung.

## 1. Firebase-Projekt anlegen
1. [console.firebase.google.com](https://console.firebase.google.com) öffnen, mit deinem Google-Konto einloggen
2. **Projekt hinzufügen** → Name z. B. `schueler-feedback` → Google Analytics kannst du deaktivieren (nicht nötig)

## 2. Web-App registrieren
1. Im Projekt: Zahnrad-Symbol → **Projekteinstellungen** → runterscrollen zu "Meine Apps"
2. **</> (Web)** anklicken → App-Spitzname z. B. `feedback` → **App registrieren**
3. Firebase zeigt dir jetzt ein Code-Snippet mit `firebaseConfig = { apiKey: ..., authDomain: ..., ... }` — **diesen kompletten Block kopieren und mir schicken**, ich trage ihn ein

## 3. Realtime Database aktivieren
1. Im linken Menü: **Build → Realtime Database**
2. **Datenbank erstellen** → Standort z. B. `europe-west1` → im Testmodus starten (die Regeln passen wir gleich danach an)

## 4. Sicherheitsregeln setzen
Im Tab **Regeln** der Realtime Database diesen Inhalt einfügen und **Veröffentlichen**:

```json
{
  "rules": {
    "classes": {
      "$klasse": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

**Wichtig zu wissen:** Das ist dieselbe Vertrauensstufe wie beim Quiz-Scoreboard — die Passwort-Abfrage in der Lehrkraft-Ansicht ist ein UI-Schutz, keine echte Datenbank-Absicherung. Wer die Datenbank-URL kennt, könnte die Daten theoretisch direkt abrufen. Für anonymes Schulfeedback ist das ein akzeptables Risiko (kein Klarname, keine sensiblen Daten), aber falls du das später richtig absichern willst (echte Firebase-Authentifizierung), sag Bescheid.

## 5. Config an Claude schicken
Sobald du das `firebaseConfig`-Objekt aus Schritt 2 hast, schick es mir — ich trage es in `index.html` und `admin.html` ein und pushe alles.
