---
title: "Hazelcast - Synchronisation von In-Memory-Daten"
date: 2014-05-28
speaker: [steffen_seidler]
location: dser_steinstrasse
tags: [cluster]
---

Hazelcast ist ein vielseitiges Framework zur einfachen Synchronization von Daten, die sich In-Memory innerhalb einer
Applikation befinden. Damit ist es für Anwendungen gedacht, bei denen eine Synchronization durch eine "externe"
Technologie wie Datenbanken zu einem erheblichen Performanceverlust führt.

Durch die Verteilung der Daten auf mehrere Knoten ist es ein gutes Mittel zur horizontalen Skalierbarkeit bei
Synchronität der Daten innerhalb des Clusters. Zusätzlich lässt sich die Verfügbarkeit/Ausfallsicherheit durch die
Hinzunahme weiterer (Backup-)Knoten steigern.
