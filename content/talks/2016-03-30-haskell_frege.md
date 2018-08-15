---
layout: talk
title: "Haskell und Frege"
date: 2016-03-30
speaker: [manuel_mauky]
location: hochschule_campus
poster: https://raw.githubusercontent.com/juggr/grafiken/master/Plakate/Plakat_03_2016/Plakat03_2016v2.png
tags: programmiersprachen
---

Haskell ist eine funktionale Programmiersprache, die das Paradigma der funktionalen Programmierung so konsequent
umsetzt, wie kaum eine andere Sprache. Beispielsweise sind Funktionen in Haskell standardmäßig "pure", können also keine
Seiteneffekte besitzen, was durch das statische Typ-System sichergestellt wird. Eine weitere Eigenschaft, die Haskell
von den meisten anderen Sprachen unterscheidet, ist die nicht-strikte Auswertung von Ausdrücken, was im allgemeinen
durch Lazy-Evaluation umgesetzt wird. Dadurch kann Haskell beispielsweise ohne weiteres mit unendlichen Listen umgehen,
ohne dafür besondere Sprachkonstrukte zu benötigen.

Haskell selbst läuft nicht auf der Java-VM, allerdings existiert mit der Programmiersprache "Frege" eine
Haskell-Variante, die zu Java-Sourcecode kompiliert. Damit steht nun auch auf der JVM eine rein funktionale Sprache
bereit.
