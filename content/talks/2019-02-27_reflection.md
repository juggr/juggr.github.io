---
title: "Java Reflection: Classes behind the scenes"
date: 2019-02-27
speaker: [erik_jaehne]
tags: [java]
location: saxsys
poster: ../images/plakat_2019_02.png
---

Java Reflections sind ein Feature der Java Sprache und werden von der JVM für das interne Handling von Klassen, Feldern
und Methoden verwendet. Intern werden darüber Methodenaufrufe, Zugriffsrechte wie public/privat oder seit Java 9 auch
die Modulexporte geregelt.

Dieses Feature kann man sich in der normalen Java Umgebung zu Nutze machen, um auf alle Informationen einer Klasse
zuzugreifen. So ist es möglich, auf deren Methoden und Felder zuzugreifen, selbst wenn diese privat sind. Felder können
überschreiben, Template-Parameter in Feldern und Methoden angezeigt, sowie auch Annotationen der Klasse, Methoden und
Felder gelesen werden. Am Beispiel eines abstrakten Klassen-Editors werden diese Möglichkeiten in dem Vortrag näher
betrachtet.
