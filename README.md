# Lektion 29 november

## Övning

Skapa ett Firebaseprojekt och konfigurera upp er applikation så den ansluts mot ert Firebaseprojekt.

Tutorial: https://firebase.google.com/docs/web/setup?authuser=0&hl=en

Sedan ska du skapa en webbsida där man kan se och lägga till Shakespeare insults som ska sparas i din Firestore databas. Det du ska sparas ska vara ett objekt med två egenskaper `insult` och `play`. Förolämpningarna ska läggas till av en användaren via inputfält.

Ex:
```
{
    insult: String,
    play: String
}
```

Shakespeare insult hittar du här: https://gist.github.com/zocom-christoffer-wallenberg/891d305bc8fa9f000885f409f2ec399b