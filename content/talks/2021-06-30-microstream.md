---
title: "Ultraschnelle Java In-Memory Datenbank-Anwendungen & Microservices mit MicroStream"
date: 2021-06-30
speaker: [markus_kett, christian_kuemmel]
poster: ../images/plakat_2021_06.png
tags: [web]
virtual: true
---

MicroStream ist ein fundamental neues Persistenz-Framework für die native Speicherung komplexer Java Objektgraphen.
D.h., Objekte werden damit genau so persistent gespeichert, wie diese im Hauptspeicher von der JVM verwaltet werden.
Umgekehrt lassen sich zu jeder Zeit einzelne Subgraphen in den RAM laden und der Objektgraph im Hauptspeicher wird
automatisch aktualisiert.

Dadurch ergeben sich völlig neue Möglichkeiten: Objektgraphen lassen sich als In-Memory Datenbank verwenden. Ein
Objektgraph ist dabei eine sehr mächtige Multi-Model Datenstruktur. Es lassen sich beliebige Java-Typen, Collections
sowie Formate wie JSON verwenden und beliebig kombinieren. Passend dazu bietet Java die perfekte Abfragesprache. Mit
Java Streams dauert das Durchsuchen selbst sehr großer und komplexer Objektgraphen nur Mikrosekunden - bis zu 1000 Mal
schneller als vergleichbare SQL-Abfragen und sogar sehr viel schneller als das direkte Lesen von Abfrageergebnissen aus
einem lokalen Cache. DB-spezifische Datenstrukturen oder Formate werden damit bedeutungslos für Java. Keine teuren
Mappings mehr. Keine Datentyp-Konvertierungen mehr. Keine DB-spezifischen Abfragesprachen. Nur noch ein Datenmodell:
Java-Klassen (POJOs). Kein zusätzliches Caching-Framework mehr. Keine unkomfortablen Objektkopien mehr. Simple
Architektur und typsicherer Abfrage-Code. Reine Core-Java Features anstatt DB-spezifische Konzepte. Das Endresultat ist
eine ultraschnelle Java In-Memory Datenbankanwendung oder Microservice.

MicroStream wird bereits seit über 5 Jahren in Unternehmensanwendung produktiv eingesetzt. Jetzt wird MicroStream Open
Source und Teil der populären Microservice Frameworks Helidon und Open Liberty.

**Materialien:**

- [Folien zum Vortrag](/downloads/Java-In-Memory-DB-Applications-with-MicroStream-JUG-Goerlitz_PDF.pdf)

---

## Hinweis

**Dieser Vortrag findet Online statt.** Dazu haben wir ein Jitsi-Meeting aufgesetzt:
[https://meet.digitale-oberlausitz.eu/jug](https://meet.digitale-oberlausitz.eu/jug)
