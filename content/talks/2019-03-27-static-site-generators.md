---
title: "Static-Site-Generators"
date: 2019-03-27
speaker: [manuel_mauky]
tags: [web, javascript]
location: hochschule_campus
---

Die Website der JUG Görlitz läuft fast _Serverless_. Natürlich muss ein Webserver Dateien über 'http' ausliefern aber
ansonsten sind keine Datenbank, Applicationserver, PHP oder sonstige aktive Serverkomponenten im Einsatz. Stattdessen
sind alle Inhalte als Markdown-Textdateien in einem Git-Repository abgelegt. Ein so genannter "Static-Site-Generator"
generiert daraus HTML-, CSS- und JavaScript-Dateien, die nur noch von einem ganz normalen HTTP-Server ausgeliefert
werden müssen. Dieses Vorgehen vereinfacht das Hosting, beschleunigt Website-Aufrufe und minimiert die Angriffsfläche
des Servers.

Im Vortrag wird das Konzept von Static-Site-Generators erklärt und die möglichen Einsatzgebiete beschrieben. Mit dem
Tool [Gatsby](https://www.gatsbyjs.org/) werden wir eine einfache Blog-Website bauen. Am Beispiel der JUG-Website wird
aber auch gezeigt, wie komplexere Daten-Modelle mit mehreren Entitäten ([Vorträge](/talks), [Speaker](/speakers),
[Veranstaltungsorte](/locations), [Tags](/tags)) umgesetzt werden können. Die technische Grundlage von Gatsby stellt
[React](/talks/2017-05-31-react) für Templates und [GraphQL](/talks/2018-05-30-graphql) für die Daten-Organisation dar.
