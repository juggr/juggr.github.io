---
title: "Von relationalen Datenbanken zu Daten mit Relationen"
date: 2019-02-27
speaker: [michael_simons]
tags: [neo4j, database, graphs]
---

Im Lauf der letzten paar Jahre zeichnete sich eine deutliche Renaissance von relationalen Datenbanken und der "Macht" von SQL ab. Relationale Datenbanken spielen ihre Stärken immer dann aus, wenn Aggregationen über größere Datenreihen gebildet werden sollen (Summen, Moving-Windows, Durchschnittswerte und so weiter) oder Listen von Dingen aus großen Sets zusammengestellt werden sollen, die nur auf eine beschränkte Menge an Joins angewiesen sind.

Graph Datenbanken wie Neo4j haben aber einige Eigenschaften, die kaum ein anderer Store hat. Graphdatenbanken sind immer dann gefragt, wenn gerichtete, komplexe Objektbäume gespeichert und auf unterschiedliche Weise abgefragt werden könenn sollen. Objekte und ihre Beziehungen untereinander sind gleichermaßen Kernkonzepte von Neo4j. Dank der Cypher, der Graph-Abfragesprache von Neo4j, lassen sich Abfragen aller Art leichtfüßig formulieren. Weitere Anwendungsfälle sind Abfragen, die Pfadsuchen durchführen, Schwerpunkte in Beziehungsnetzwerken ermitteln und vieles mehr.

In diesem Vortrag werde ich mit dem Datenbestand meines SQL-Fetish-Vortrags beginnen. Die Zeitreihen, die musikalische Vorlieben wiederspiegeln, werden mit Neo4js ETL (Extract-Transform-Load) Tool direkt aus der relationalen Datenbank ausgelesen und in einen gerichteten Property-Graphen transformiert. 

Im zweiten Schritt werden die Zuhörer Abfragen kennen lernen, die die Aggregrationen der SQL-Daten perfekt ergänzen: Können wir in 40 Minuten eine Empfehlungs-Engine auf Basis von Beziehungen von Künsterln, Ländern, Alben und Hörgewohnheiten bauen, die über die Empfehlung bekannter Online-Portale ("Kunde hört die Die Ärzte, also mag er auch Sportfreunde Stiller") hinaus geht?

Im letzten Schritt wird eine mögliche Anwendung auf Basis von Spring Boot mittels Spring Data Neo4j skizziert.
