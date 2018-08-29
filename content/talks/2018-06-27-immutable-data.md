---
title: "Immutable Data - Unveränderliche Daten im Griff"
date: 2018-06-27
speaker: [manuel_mauky]
tags: [programmiersprachen, functional-programming]
location: hochschule_campus
poster: ../images/plakat_2018_06.png
---

Unveränderliche Datenstrukturen sind ein wichtiges Werkzeug der funktionalen Programmierung.
Aber auch abseits dessen können Immutables ungemein nützlich sein: Richtig angewandt erhöhen sie die Verständlichkeit des Codes,
da EntwicklerInnen nicht mehr auf die mühsame Suche gehen müssen,
an welcher Stelle ein Objekt möglicherweise ungewollt verändert wurde.
Darüber hinaus sind Immutables inhärent Threadsafe und können auch hier die Nachvollziehbarkeit des Codes erhöhen.

Da Java als Sprache aber keine besondere Unterstützung für Immutables mitbringt,
müssen EntwicklerInnen auf Patterns und Bibliotheken zurückgreifen, um in den Genuss von unveränderlichen Datenstrukturen zu kommen.
Denn natürlich müssen auch in funktionalen Programmen letztlich Veränderungen der Daten abgebildet werden und dafür bedarf es geeigneter Unterstützung.

Im Vortrag möchte ich neben einer grundsätzlichen Einführung in die Thematik auch einige dieser Techniken vorstellen und ihre Vor- und Nachteile besprechen.