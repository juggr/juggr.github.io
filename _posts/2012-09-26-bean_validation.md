---
layout: post
title: "JSR-303 BeanValidation"
date: 2012-09-26
tags: javaee
speaker: Manuel Mauky
---

**Manuel Mauky** stellt in seinem Vortrag den zu JavaEE 6 gehörenden Standard **BeanValidation** vor.

Dabei wird mittels Annotationen im Java-Code bestimmt, welche Werte für bestimmte Felder valide sind, z.B. `@NotNull` für einen Wert, der nicht `null` sein darf oder `@Size(min=1, max=20)` für einen String, der mindestens 1 und maximal 10 Zeichen lang sein darf.
Ein Validator kann dann anhand dieser Metainformationen prüfen, ob der Zustand eines Objekts valide ist oder nicht. 

Im Vortrag wird zunächst allgemein auf das Thema Validierung eingegangen und anschließend Beispiele für BeanValidation-Annotationen gezeigt. Ebenfalls behandelt wird, wie BeanValidation im Frontend mit JavaServer Faces und im Backend mit JPA kombiniert werden kann.


Datum: 26. September 2013 - 19:00 uhr

Treffpunkt: Saxonia Systems AG, Berliner Straße 63