# Water Tracker
We gaan een kleine web-app maken om bij te houden hoeveel we drinken.

# HTML & CSS
Voorzie een goede structuur volgens het design (zie ```example.mov```).

## Script
Gebruik een library voor het bijhouden van de hoeveelheid gedronken water. Maak je aan via het 'new' keyword.

Zorg dat je opties voorziet:
- De eenheden van je doel.
- De hoeveelheid van het dagelijks doel.
- Of je met localStorage of een API wil werken.
- Een array met classes voor:
	- Het huidige percentage.
	- De tijdstippen.
	- De 'voeg toe'-knop.
	- Een klasse voor elk element waarin de goal moet komen.
	- Een klasse voor elk element waarin de eenheden mogen komen.
- Een callback-functie voor als we de hoeveelheid aangepast hebben.


Gebruik ook de Jasmine test om de de klasse ```uiBinding``` aan te maken.
Sommige onderdelen horen ongeveer bij de tracker, maar niet helemaal. Het is eerder rand-functionaliteit. Dit gaan we apart zetten.
Hier willen we:
- De golf in ons design hoger of lager _duwen_.
- Onze eigen input opties meegeven voor het selecteren van een nieuwe hoeveelheid die we willen loggen.


In de ```dataAccess``` module, maken we twee objecten. Een object voor localStorage en een voor een API (dit werken we niet uit).
