Legg til en ny kolonne for person. Må kunne angis når man lager ny oppgave og må kunne redigeres
Legg til en ny kolonne for frist. Bruk input-tag med type="date". Konvertering til visningsformat: new Date("2019-02-13").toLocaleDateString().
For å lage en dato på riktig format til <input type="date", bruk myDate.toISOString().substr(0,10)
Legg til en ny kolonne for "gjort dato" som fylles ut automatisk når man trykker på checkboxen for at det er gjort.