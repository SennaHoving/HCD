# HCD
Voor dit project is het de opdracht om een inclusieve applicatie te maken voor specifiek Berend. Dit houdt in dat het helemaal afgestemd moet zijn op Berend. En daarbij is een van de problemen die Berend veel ondervindt met het gebruik van het web dat veel nuance heb ontgaat. Dus daarbij gaat deze opdracht om te kijken naar hoe je intonatie op een nuttige manier kan toevoegen aan text. 

## Checkout 30/03 
Kickoff nieuwe opdracht. Begonnen aan de nieuwe opdracht, gekeken naar alle verschillende thema's. Uiteindelijk kwam ik bij de SSML(Speech Synthesis Markup Language) uit, en dit heb ik geprobeerd werkend te krijgen, eerst de Microsoft en google SSML geprobeerd, maar daar heb je een abbonoment voor nodig, dus uiteindelijk gewoon begonnen door het na te bootsen met de tts uit de browser. Werkt wel iets minder goed qua emoties van de spraak en ook minder gelijk op alle browsers. Het concept is eerst om een soort weer site na te bootsen, met de SSMl toegevoegd daaraan die verschillende informatie anders in emotie en toon zal voorlezen. 

In de ochtend kickoff, en begonnen inlezen over hoe blinden mensen websites gebruikte. Vervolgend de rest van de middag gewerkt aan het werkend krijgen van een SSML. 

Geleerd over de SSML, dat er al best wel wat bestaat om de ervaring van text to speech verbeterd. 

Morgen is het doel om echt een weer site na te bootsen, en als het lukt daar een SSML aan te koppelen (en anders na bootsen met default tts). 

## Checkout 31/03 
De eerste versie met de verschillende tonen in de speech uitgewerkt, waarbij ik nu een soort nagemaakte exised en calme stem heb. Ik merk het verschill nu wel maar ben maar het is niet super duidelijk. 
Vandaag eerste test gehad met Berend, een eigenlijk ging het best wel goed. De uitspraken waren zeker anders van elkaar, zeker de calmen vond Berend wel opvallend. Dus ik denk aan de hand hiervan vooral nog naar het concept kijken, hoe kan ik hiermee de indruk op een passende manier nabootsen. En ik kan ook nog wel de spraak verder uitwerken, maar goede richting. 

![Demo](/screenshots/week1.png)

## Test 1 (31/03)
Verder algemene bevindingen. Ik kon me opzich echt wel iets voorstellen hoe Berend zijn computer gebruikte met de screen reader en tab, het ging misschien iets sneller en onhandiger dan ik had verwacht. Maar het belangrijkste waar ik nog niet heel bewust van was is dat Berend echt maar een ding tegelijk kan doen op een website, dus de focus light op een sectie / element, alles eromheen valt weg. Je kan niks aan de zijkant van het scherm neerzetten, acties zijn lastig op te splitsen.

En verder zijn specifieke dingen zoals datums lastig te begrijpen, en minimalistich is soms makkelijker te begrijpen. Ook zou ik nog kunnen kijken om er een soort menu / settings aan te koppelen, waarmee je bijvoorbeeld de toon kan instellen.

Ik denk om nu verder te gaan, kijken naar hoe ik de spraak nog wat verder kan verbeteren. Maar ook vooral er een passend concept bij verzinnen waarbij de spraak verschillen ook echt een verschil maken. 

## Voorgang 02/04
Vooral kijken hoe het in een groter stuck content / text werkt? Iets zoals een sprookje waarin meerdere tonen naar voren komen zouden al beter zijn om mee te experimenteren. Verder misschien nog even doorzoeken naar SSML's die wel te gebruiken zijn. 

En het blijft ook belangrijk om critisch te kijken naar wat Berend vindt, omdat het misschien voor zijn gevoel al wel goed werkt, maar hij gewoon niet beter weet. 

## Test 2 (07/04)
Voor deze test heb ik het concept in een wat realistischere content proberen te plaatsen. Dus heb ik heel simpel een soort webshop nagebouwd, waarbij het idee was dat verschillende elementen in een andere toon werden voorgelezen. Dus bijvoorbeeld de knop om het product te kopen heel enthausiast, en de omschrijving juist calm. 

Schreenreaders / tts via de browser is stuk minder snel dan wat Berend als eigen screenreader heeft. Dit zorgte ervoor dat eigenlijk de toon die ik via de browser niet goed te horen waren. Dus zelf niet heel veel uit de test kunnen halen, maar wel dat de zijn eigenscreenreader dus alles alsnog voorleest. Dus misschien werken buttons beter.  

![Demo week 2](/screenshots/week2.png)

Voor het contrast is het belangrijk om op het volgende te letten: 
- Dikke randen 
- Dikke letters
- Kleuren maken niet uit, alleen licht op donker en andersom

## Voortgang 10/04
Hierbij was eigenlijk de feedback om een beetje het extrema op te zoeken. Het concept is nu nog vrij saai, maar maakt bijvoorbeeld een contrast tussen een markt verkoper die heel veel schreeuwd en een high end / posh merk. Als je een winkel binnen loop krijg je ook meteen een indruk, kijk hoe je dat kan vertallen naar een web pagina.

bone conduction headphones

## Test 3 (14/04) 
### In welke context zou je de nuance het meest missen? 
Vooral bij blogs, dus de opinie van mensen. Dit is alleen lastig omdat dit onder mensen altijd verschild en niet algemeen is. 

Maar opzich is het bij alles handig, misschien is het beter om de kijken naar waarmee dit juist het makkelijkste is om toe te passen.

stemmen instellen bij whatsapp, dat je bijvoorbeeld instellingen / opties heb bij verschillende chats, en hoe die ze voorleest, dat je daar zelf per persoon kan instellen hoe ze normaal klinken. 

Dus eerder een soort settings over op welke manier het wordt uitgesproken, inplaats van verschillende tonen voor specifieke elementen. 

## 20/04 
Naar aanleiding van de vorige test, waarbij Berend aangaf dat hoe de intonatie van texten misshien juist wel kon zien bij het lezen van online blogs of zelf bij whatsapp. Hierbij ben ik eigenlijk een beetje op het nieuwe conept gekomen om een soort settings / menu te maken waarmee je voor of een blog / grote text of whatsapp gesprek kan kiezen uit een paar geselecteerde tonen. 

En uiteindelijk is dit weer iets verder gegroeit tot het idee om een whatsapp groep na te maken, waarbij iedereen een andere stem is. Dus als je bijvoorbeeld een groep heb met 3 vrienden, dan worden alle berichte van een bepaalde vriend in één bepaalde stem voorgelezen. Waardoor het gesprek een stuk sneller te volgen moet zijn. 

verder heb ik vandaag gekeken naar microsoft ssml, werkte niet, toen google cloud text to speech api wel. 

## Test 4 (21/04) 
Voor deze test was ik heel simpel nog niet vergenoeg met het nieuwe concept van een group chat om het te testen. Wel heb ik het idee aan Berend voorgelegd, waarbij hij aangaf dat hij het een interresant idee vondt en dat die het nut er wel van kon inzien. Doordat ik mijn vorige concepten niet heel bijzonder waren, heb ik toch besloten hierop door te gaan. 

Wel heb ik bij deze test nog wat algemene dingen mee kunnen krijgen aan de hand van de testen van andere, zoals: 
- Dingen die hij moet lezen moeten groot in beeld -> hiervoor kan ik misschien de text berichten vergrote op focus. 
- Focus states zijn belangrijk, grote (witte) borders maken het een stuk beter te volgen. 
- Visuele focus komt soms niet helemaal overheen met screenreader, dus test dat. 

## Voorgang 07/05 
Conept is nu goed en passend, werk alleen het prototype wat beter uit. Nu moet je nog op enter drukken om de berichten voor te lezen, maak het wat realistischer, hoe het in het echt gebruikt moet worden. 

Voeg nog wat 'nonsense' toe. Idee hiervoor is om te maken dat je bij het versturen van je berichten een toon van spraak mee kan geven. Een bericht boos of enthousiast kunnen sturen. 

Verder nog wat nodige dingen zijn readme bijwerken, en reflectie design principles schrijven. 

![Concept week 4](/screenshots/week4.png)

## Eindproduct
Na het voorgang gesprek heb ik het prototype zo aangepast dat het als een echte applicatie zou werken, dus bij het 'tabben' worden de berichten nu direct voorgelezen. En zijn alle elementen niet duidelijk als de gebruiker er met de screenreader doorheen gaat. En ook heb ik toegevoegd dat je nu in het prototype berichten kan sturen en daar (voor zo ver met de google text to speech api kan) emoties aan mee kan geven.  

![Eindproduct](/screenshots/eindproduct.png)

## Reflectie design principles
### Study Situation
Voor het eerste principle het ik tijdens dit project niet alle contexten in gedachte gehouden, maar juist de focus gelegd op een context, namelijk die van Berend. Hiervoor was het vooral nuttig om tijdens de test momenten te kunnen zien hoe Berend met het web omging. Hierbij heb ik vooral gemerkt dat Berend natuurlijk veel gebruikt maakt van zijn screenreader, maar daardoor kreeg ik pas echt door dat hij echt maar met één aspect op een website tegelijker tijd bezig kan zijn en dat hij alles na waar de focus nu ligt niet doorheeft.

Hierdoor is mijn applicatie uiteindelijk helemaal te gebruiken met een screenreader en wordt daar in principe ook vanuit gegaan, en met de screenreader kan hij er ook helemaal op zijn eigen tempo doorheengaan. maar omdat Berend nog een klein beetje zicht heeft worden de elementen met focus wel nog vergroot waardoor het specifiek voor Berend ook nog te volgen is waar die op de pagina is. 

### Ignore conventions 
Bij dit principe werd gezegd dat voor sommige gebruikers simpel niet een ding is zoals bekende conventies, en dit merkte ik ook bij Berend. Zeker niet voor alles, maar je merkt soms dat het voor Berend normal was dat een website gewoon simpel weg niet altijd perfect voor hem werkt. Dingen zoals de focus op panelen die openen, wat voor hem super goed werkt, maar niet altijd zo is, of één button voor zowel het pauzeren en spelen van content. 

Een voorbeeld hiervan is de skip-knop naar het invoerveld. Dit voelde eerst best overbodig, maar voor Berend betekende het dat hij niet door de hele chatgeschiedenis heen hoefde te navigeren voordat hij eindelijk bij het invoerveld kon komen en dus beter werkte dan conventioneel gezien.

Dus ik denk nogsteeds dat conventies goed zijn om te hebben, maar ze vaak nog vooral zijn afgestemd op een een kleinere doelgroep. Dus ik ze niet altijd maar zo makkelijk moet volgen, en er misschien twee keer over na moet denken.  

### Prioritise identity 
Voor deze conventie heb ik vooral aan de hand van de test momenten gekeken naar wat voor Berend goed werkt. Hierdoor ben ik bijvoorbeeld uitgekomen om de chat berichten waar de gebruiker op focus te vergroten, zodat met het kleine beetje zicht dat Berend nog heeft het bericht nog wel te lezen is. En verder is heb ik ook de focus en kleuren met goed contrast op Berend proberen af te stemmen. 

### Add nonsense 
Na het laatste voorgang gesprek kwam dit principe nog terug en miste het nog een beetje in mijn project, maar tijdens dat gesprek kwam het idee naar boven om een soort emotie te kunnen meegeven aan de berichten die je stuurd. In eerste instancie voelde het een beetje als een 'nonsense' idee, maar uiteindelijk sluiten het toch best goed aan op het project en principe. 

Ook na feedback van Berend in een eerdere week, waarin werd aangegeven dat toon en intonatie belangrijk zijn binnen blogs die hij leest, werd het idee logischer. Dus uiteindelijk is het idee dat in mijn hoofd in ieder geval best wel onnodig voelde toch best goed geweest om uit te werken, en nu het lastig is om te zeggen zonder nog een echte test, is het denk toch een best waardevolle toevoeging geweest in het project. Ik denk uiteindelijk dat dit principe best nuttig is, het zal zeker niet in elk project tot een make or break leiden, maar zo'n principe maakt het voor mij een stuk makkelijker om in iedergeval te experimenteren met de "nonsense" ideeën die opkomen tijdens een project.  

## Bronnen 
[ssml](https://medium.com/@brijeshrn/ssml-the-practical-standard-for-controlling-speech-synthesis-c52940314ffa)
[ssml van microsoft](https://learn.microsoft.com/nl-nl/azure/ai-services/speech-service/speech-synthesis-markup-voice)
[how vissually impaired people navigate the web](https://uxdesign.cc/how-visually-impaired-people-navigate-the-web-7f9eab9d9c37) 
[pass text thru google cloud text to speech api](https://docs.cloud.google.com/text-to-speech/docs/samples/tts-synthesize-text?hl=en#tts_synthesize_text-java)
[fix google cloud api](https://chatgpt.com/share/69e60d5e-7334-83eb-a7c2-152395675d09)