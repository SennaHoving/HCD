# HCD

## Checkout 30/03 
Vandaag: 
Kickoff nieuwe opdracht. Begonnen aan de nieuwe opdracht, gekeken naar alle verschillende thema's. Uiteindelijk kwam ik bij de SSML(Speech Synthesis Markup Language) uit, en dit heb ik geprobeerd werkend te krijgen, eerst de Microsoft en google SSML geprobeerd, maar daar heb je een abbonoment voor nodig, dus uiteindelijk gewoon begonnen door het na te bootsen met de tts uit de browser. Werkt wel iets minder goed qua emoties van de spraak en ook minder gelijk op alle browsers. Het concept is eerst om een soort weer site na te bootsen, met de SSMl toegevoegd daaraan die verschillende informatie anders in emotie en toon zal voorlezen. 

In de ochtend kickoff, en begonnen inlezen over hoe blinden mensen websites gebruikte. Vervolgend de rest van de middag gewerkt aan het werkend krijgen van een SSML. 

Geleerd over de SSML, dat er al best wel wat bestaat om de ervaring van text to speech verbeterd. 

Morgen is het doel om echt een weer site na te bootsen, en als het lukt daar een SSML aan te koppelen (en anders na bootsen met default tts). 

## Checkout 31/03 
De eerste versie met de verschillende tonen in de speech uitgewerkt, waarbij ik nu een soort nagemaakte exised en calme stem heb. Ik merk het verschill nu wel maar ben maar het is niet super duidelijk. 
Vandaag eerste test gehad met Berend, een eigenlijk ging het best wel goed. De uitspraken waren zeker anders van elkaar, zeker de calmen vond Berend wel opvallend. Dus ik denk aan de hand hiervan vooral nog naar het concept kijken, hoe kan ik hiermee de indruk op een passende manier nabootsen. En ik kan ook nog wel de spraak verder uitwerken, maar goede richting. 

![Demo](/screenshots/week1.png)

Verder algemene bevindingen. Ik kon me opzich echt wel iets voorstellen hoe Berend zijn computer gebruikte met de screen reader en tab, het ging misschien iets sneller en onhandiger dan ik had verwacht. Maar het belangrijkste waar ik nog niet heel bewust van was is dat Berend echt maar een ding tegelijk kan doen op een website, dus de focus light op een sectie / element, alles eromheen valt weg. Je kan niks aan de zijkant van het scherm neerzetten, acties zijn lastig op te splitsen.

En verder zijn specifieke dingen zoals datums latig te begrijpen, en minimalistich is soms makkelijker te begrijpen. Ook zou ik nog kunnen kijken om er een soort menu / settings aan te koppelen, waarmee je bijvoorbeeld de toon kan instellen.

Ik denk om nu verder te gaan, kijken naar hoe ik de spraak nog wat verder kan verbeteren. Maar ook vooral er een passend concept bij verzinnen waarbij de spraak verschillen ook echt een verschil maken. 

## Feedback 02/04
Vooral kijken hoe het in een groter stuck content / text werkt? Iets zoals een sprookje waarin meerdere tonen naar voren komen zouden al beter zijn om mee te experimenteren. Verder misschien nog even doorzoeken naar SSML's die wel te gebruiken zijn. 

En het blijft ook belangrijk om critisch te kijken naar wat Berend vindt, omdat het misschien voor zijn gevoel al wel goed werkt, maar hij gewoon niet beter weet. 

## Test 2 (07/04)
Schreenreaders / tts via de browser is stuk minder snel dan wat Berend als eigen screenreader heeft. 

![Demo week 2](/screenshots/week2.png)

### In welke context zou je de nuance het meest missen? 
Vooral bij blogs, dus de opinie van mensen. Dit is alleen lastig omdat dit onder mensen altijd verschild en niet algemeen is. 

Maar opzich is het bij alles handig, misschien is het beter om de kijken naar waarmee dit juist het makkelijkste is om toe te passen.

stemmen instellen bij whatsapp, dat je bijvoorbeeld instellingen / opties heb bij verschillende chats, en hoe die ze voorleest, dat je daar zelf per persoon kan instellen hoe ze normaal klinken. 

Dus eerder een soort settings over op welke manier het wordt uitgesproken, inplaats van verschillende tonen voor specifieke elementen. 

### Technisch
En de browser tts gaat nu tegelijkertijd met Berends zijn eigen screenreader, dus een button om de text af te spelen zij beter werken. 

contrast: 
- Dikke randen 
- Dikke letters
- Kleuren maken niet uit, alleen licht op donker en andersom

## Feedback
Zoek het extreme op
markt verkoper of super high end / duur / posh
Als je een winkel binnen loop krijg je ook meteen een indruk, maak dat na op het web
bone conduction headphones

## 20/04 
Nieuw concept, een soort settings / quick select menu waarmee je voor een groote text / blog de toon kan instellen, met een paar voor geselecteerde tonen of een custom. 

gekeken naar microsoft ssml, werkte niet, toen google cloud text to speech api wel. 

## Bronnen 
[ssml](https://medium.com/@brijeshrn/ssml-the-practical-standard-for-controlling-speech-synthesis-c52940314ffa)
[ssml van microsoft](https://learn.microsoft.com/nl-nl/azure/ai-services/speech-service/speech-synthesis-markup-voice)
[how vissually impaired people navigate the web](https://uxdesign.cc/how-visually-impaired-people-navigate-the-web-7f9eab9d9c37) 
[pass text thru google cloud text to speech api](https://docs.cloud.google.com/text-to-speech/docs/samples/tts-synthesize-text?hl=en#tts_synthesize_text-java)
[fix google cloud api](https://chatgpt.com/share/69e60d5e-7334-83eb-a7c2-152395675d09)






