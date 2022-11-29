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

**Veckans övning**

Du ska fortsätta spelet sten, sax och påse (det finns det i detta repo o i mappen `rock-paper-scissors`) och lägga till en highscore-lista som ska sparas i en firestore databas. 
Spelet spelas i omgångar av 3 och efter tre matcher så ska användarens statistik sparas i din firestore databas tillsammans med ett användarnamn som användaren får mata in i ett inputfält.

Såhär ska det se ut i din databas när du har sparat (Number och String menas att det ska vara ett värde av typen nummer eller en sträng).
```javascript
{
    wins: Number,
    loses: Number,
    draws: Number,
    username: String
}
```

Det ska även på din sida gå och highscorelistan.