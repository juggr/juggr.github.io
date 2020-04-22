# Website der Java User Group Görlitz

[![Build Status](https://travis-ci.org/juggr/juggr.github.io.svg?branch=source)](https://travis-ci.org/juggr/juggr.github.io)

Diese Repository enthält den Quellcode der Java User Group Görlitz [https://www.jug-gr.de](https://www.jug-gr.de).

## Technische Details

Die Seite ist mittels des statischen Websitegenerators [Gatsby.js](https://www.gatsbyjs.com/) entwickelt. Damit werden
alle Daten und Informationen als Markdown-Dateien lokal abgelegt und mittels des Generators eine statische Webseite
generiert. Gatsby.js ist in JavaScript geschrieben und generiert eine moderne Single-Page-App, die mit React.js läuft.

### Technische Voraussetzungen

Um die Webseite lokal bauen zu können wird eine Installation von **Node.JS** benötigt.

Als Teil des Build-Prozesses werden eingebundene Bilder skaliert. Dies wird durch die JavaScript-Bibliothek
[Sharp](https://github.com/lovell/sharp) durchgeführt. Diese setzt neben JavaScript intern auch nativen Code ein.
Hierfür stehen für die meisten Plattformen vorkompilierte Pakete bereit. Auf einigen Plattformen (Kombination von
Betriebssystem- und Node.JS-Version) kann es aber auch sein, dass keine passendes vorkompiliertes Paket gefunden wird
und deshalb die Bibliothek automatisch neu kompiliert wird.

Hierfür ist (zumindest unter Linux) die System-Library `libvips` notwendig. Diese muss mittels Paket-Manager des
Betriebssystem installiert werden (unter Debian z.B. `sudo apt-get install libvips`).

Anschließend kann der Build-Prozess der Website mittels

`npm run build` gestartet werden.

### Dateien und Verzeichnisse

`/content` enthält Verzeichnisse für Inhalte der Seite

`/content/images` enthält Bilder, welche von Gatsby.js verwaltet werden. Siehe [Bilder](#bilder)

`/content/locations` enthält Locations. Siehe [Location anlegen](#location-anlegen)

`/content/pages` enthält statische Seiten. Siehe [Statische Seiten anlegen](#statische-seiten-anlegen)

`/content/posts` enthält Blog-Posts. Siehe [Blog-Posts anlegen](#blog-post-anlegen)

`/content/speakers` enthält Speaker-Profile. Siehe [Speaker anlegen](#speaker-anlegen)

`/content/talks` enthält Talks. Siehe [Talks anlegen](#talk-anlegen)

`/node_modules` enthält benötigte Dritt-Bibliotheken. Dieses Verzeichnis wird von Git ignoriert

`/public` ist das Ziel-Verzeichnis, in welchem die generierte Seite abgelegt wird. Dieses Verzeichnis wird von Git
ignoriert

`/src` enthält den Quell-Code der Seite

`/src/components` enthält wiederverwendbare React-Komponenten

`/src/components/layout.js` ist die wichtigste React-Komponente. Diese enthält das Basis-Layout und wird von allen
Unterseiten benutzt.

`/src/pages` enthält Gatsby.js-Seiten. Jede Seite besteht aus einer React-Kompoente und einem GraphQL-Query

`/src/pages/debug` enthält Debug-Seiten. Diese sind nicht per Link erreichbar, können aber zu Debugging-Zwecken auch im
Produktiv-System genutzt werden

`/src/styles` enthält Stylesheets für die Seite. Diese müssen in `layout.js` importiert werden

`/src/templates` enthält React-Komponenten, die als Templates für die automatische Generierung von Seiten für dynamische
Inhalte diesen. Sie werden in `gatsby-node.js` eingebunden.

`/src/utils` enthält JavaScript-Hilfsfunktionen

`/src/static` enthält Dateien, die vom Build-Prozess ins `public`-Verzeichnis kopiert werden. Alle Dateien, die auf der
Webseite verlinkt werden sollen (z.B. PDF-Dateien) sollten hier platziert werden.

`/.prettierrc` enthält die Konfiguration für den Code-Formatter

`/gatsby-config.js` enthält die Konfiguration der Seite. Hier sind Plugins und Meta-Daten der Seite festgelegt.

`/gatsby-node.js` enthält den Code für die automatische Generierung von Seiten basierend auf dynamischen Daten. Dies
umfasst z.B. das Anlegen von Seiten für alle Talks.

`/package.json` ist die Konfigurationsdatei für NPM/Yarn. Dies ist das JavaScript-Build-Tool, welches vor allem zur
Verwaltung von Dritt-Bibliotheken genutzt wird.

## Anleitungen

### Talk anlegen

Um einen neuen Talk anzulegen muss eine Markdown-Datei im Verzeichnis `/content/talks` angelegt werden. Der Dateiname
sollte dem Muster `YYYY-MM-DD-title.md` folgen, beispielsweise "2018-06-27-immutable-data.md". Der Dateiname bestimmt
die spätere URL, unter der der Vortrag erreichbar ist, z.B. `/talks/2018-06-27-immutable-data/`.

Die Markdown-Datei benötigt einen Header (im Markdown-Kontext wird dieser als "Frontmatter" bezeichnet), der folgende
Form hat:

    ---
    title: "Immutable Data - Unveränderliche Daten im Griff"
    date: 2018-06-27
    time: "19:30 Uhr"
    speaker: [manuel_mauky]
    tags: [programmiersprachen, functional programming]
    location: hochschule_campus
    poster: ../images/plakat_2018_06.png
    virtual: false
    ---

**title** bestimmt den Titel, der als Überschrift auf der Webseite benutzt wird. (Pflichtfeld)

**date** bestimmt das Datum, welches auf der Webseite angezeigt wird. Dies beeinflusst auch die Sortierung in der
Übersichtsseite. Außerdem beeinflusst das Datum, welcher Talk auf der Startseite angezeigt wird (mehr dazu unter
[Beitrag auf Startseite](#beitrag-auf-startseite)). Dieses Datum hat generell Vorrang vor dem Datum im Dateinamen.
(Pflichtfeld)

**time**: Die Uhrzeit, zu der das Event startet. Die Angabe wird als String angegeben und 1 zu 1 in die Anzeige
übernommen. Die Angabe ist optional, wobei dann der Standard-Wert "19:00 Uhr" verwendet wird. (Optional)

**speaker**: ist ein Array von Speakern, die diesen Vortrag halten. Der Wert entspricht einem hinterlegten
Speaker-Profil (siehe [Speaker anlegen](#speaker-anlegen)). (Pflichtfeld)

**tags**: ist ein Array von Tags, denen der Vortrag zugeordnet wird. Tags sind Strings, wobei auf Leerzeichen verzichtet
werden sollte, da sonst das Scrollen zu dem Tag auf der Übersichtsseite nicht richtig funtioniert. Stattdessen können
Binde- oder Unterstrich verwendet werden. (Optional)

**location**: bestimmt den Veranstaltungsort, der zu dem Talk angezeigt wird. Der Wert entspricht einem hinterlegten
Location-Profil (siehe [Location anlegen](#location-anlegen)). Die Location ist Optional. Wenn kein Wert angegeben wird,
zeigt die Webseiten einen Platzhalter (z.B. "Wird noch bekannt gegeben") an. (Optional)

**poster**: bestimmt das Event-Plakat, welches angezeigt wird. Dies muss ein relativer Pfad (durch die `..`
gekennzeichnet) zu einer Bild-Datei innerhalb von `/content/images/` sein. Da Talks unterhalb von `/content/talks`
existieren, ist der relative Pfad `../images/<bilddateie>`. (Optional)

**virtual**: Das Flag bestimmt, ob der Vortrag virtuell stattfindet oder als klassische Präsenz-Veranstaltung
(Standard). Dies wirkt sich auf die Darstellung des Veranstaltungsorts aus. Ist das Flag `true` wird lediglich ein
Hinweis ausgegeben, dass der Vortrag Online stattfindet und weitere Details in der Beschreibung zu finden sind.
Entsprechend sollte der Beschreibungstext des Vortrags angepasst sein. Wird das Flag weggelassen oder ist `false`
bestimmt das `location`-Feld die Anzeige (Optional)

Unterhalb des Frontmatters erfolgt der Beschreibungstext als Markdown. Sonstige Angaben wie Links zu Vortragsfolien o.ä.
müssen ebenfalls im Markdown-Text hinterlegt werden.

### Speaker anlegen

Um ein neues Speaker-Profil anzulegen, muss einen Markdown-Datei im Verzeichnis `/content/speakers/` angelegt werden.

Der Datei-Name bestimmt den Profil-Namen des Speakers. Dieser wird beim Anlegen von Talks referenziert (Siehe
[Talk anlegen](#talk-anlegen)). Aus `max-mustermann.md` folgt der Profil-Name `max-mustermann`. Dieser bestimmt auch die
URL, unter welcher der Speaker später erreichbar sein wird, z.b: `/speakers/max-mustermann/`.

Innerhalb der Markdown-Datei muss ein Frontmatter nach folgendem Muster hinterlegt werden:

    ---
    name: Max Mustermann
    pic: ../images/max_mustermann.jpg
    twitter_name: jug_gr
    ---

**name**: bestimmt den angezeigten Namen für den Speaker. (Pflichtfeld)

**pic**: ist eine Referenz auf ein Speaker-Bild. Dieses muss ein relativer Pfad zu einem Bild in `/content/images/`
sein. (Optional)

**twitter_name**: kann benutzt werden, um einen Link zum Twitter-Profil des Speakers zu generieren. Der Name entspricht
dem Namensbestandteil aus der Twitter-URL bzw. dem Profil-Name. Beispiel: Aus `jug_gr` folgt der Profil-Name `@jug_gr`
sowie der Link `https://twitter.com/jug_gr`. (Optional)

Unter dem Frontmatter kann beliebiger Text im Markdown-Format hinterlegt werden, welcher als Beschreibungstext des
Speakers fungiert.

### Location anlegen

Um eine neue Location anzulegen, muss eine Markdown-Datei im Verzeichnis `/content/locations/` angelegt werden.

Der Dateiname bestimmt den Location-Namen. Dieser wird beim Anlegen von Talks referenziert (Siehe
[Talk anlegen](#talk-anlegen)). Außerdem bestimmt der Dateiname die URL, unter der die Location erreichbar sein wird.
Aus `hochschule_obermarkt` folgt die URL `/locations/hochschule-obermarkt`.

Innerhalb der Markdown-Datei muss ein Frontmatter nach folgendem Muster hinterlegt werden:

    ---
    name: Hochschule Zittau/Görlitz
    info: Haus G2 Raum 0.10
    street: Brückenstraße
    number: "1"
    zip: 02826
    city: Görlitz
    ---

**name**: Bestimmt den Anzeige-Namen der Location. (Pflichtfeld)

**info**: Sonstige Informationen zum Finden der Location. (Optional)

**street**: Der Straßenname. (Pflichtfeld)

**number**: Die Hausnummer. (Pflichtfeld)

**zip**: Die Postleitzahl. (Pflichtfeld)

**city**: Die Stadtbezeichnung. (Pflichtfeld)

Ein Text unterhalb des Frontmatters wird gegenwärtig nicht genutzt.

### Blog-Post anlegen

Es gibt die Möglichkeit, für bestimmte Gelegenheiten Posts anzulegen, die für einen bestimmten Zeitraum auf der
Startseite angezeigt werden sollen, die aber keine regulären Talks sind. Dies könnten sonstige Veranstaltungen wie ein
Grill-Abend sein oder allgemeine Hinweise und Meldungen.

Um eine solche Seite anzulegen, muss eine Markdown-Datei im Verzeichnis `/content/posts/` angelegt werden. Diese muss
einen Frontmatter nach folgendem Muster enthalten:

    ---
    title: "JUG Sommerpause: Grillen"
    date: 2017-07-21
    show_on_frontpage: true
    ---

**title**: bestimmt die Überschrift des Beitrags. (Pflichtfeld)

**date**: zeigt ein Datum zu dem Beitrag an. (Optional)

**show_on_frontpage**: ein Boolean-Wert der bestimmt, ob der Beitrag auf der Frontseite angezeigt wird oder nicht (siehe
[Beitrag auf Startseite](#beitrag-auf-startseite) für die genauen Regeln). (Optional)

Für Blog-Posts existiert keine reguläre Übersichtsseite. Sobald sie nicht mehr auf der Frontseite angezeigt werden, sind
sie regulär über die Verlinkungen der Seiten nicht mehr erreichbar. Die Seiten sind aber weiterhin vorhanden, so dass
externe Links weiterhin funktionieren.

### Beitrag auf Startseite

Es wird automatisch eine Startseite generiert. Der Inhalt dieser Seite folgt gewissen Regeln:

1. Existieren Blog-Posts (siehe [Blog-Post anlegen](#blog-post-anlegen)), welche das Flag `show_on_frontpage` auf `true`
   gesetzt haben, werden diese auf der Startseite angezeigt. In dem Fall wird **kein** Talk angezeigt. Existieren
   mehrere Blog-Posts mit dem Flag, werden alle untereinander angezeigt.

2. Existieren keine Blog-Posts mit dem Flag, wird "der kommende Talk" angezeigt. Dies ist der Talk, welcher als nächstes
   auf das aktuelle Datum (zum Zeitpunkt der Generierung) folgt.

3. Existiert kein zukünftiger Talk (basierend auf dem aktuellen Datum), dann wird der letzte Talk angezeigt.

### Statische Seiten anlegen

Die Webseite enthält verschiedene statische Seiten (z.B. das Impressum oder die About-Seite). Um statische Seiten
anzulegen, existieren 2 Varianten. Wichtig ist, dass keine Namensdopplungen erzeugt werden.

#### 1. Statische Markdown-Seiten

Dies ist die einfachste Variante. Dazu muss eine Markdown-Datei im Verzeichnis `/content/pages/` angelegt werden. Der
Dateiname bestimmt die URL, unter welcher der Beitrag später erreichbar sein wird. Aus `/content/pages/about.md` folgt
die URL `/about/`.

Der Frontmatter der Markdown-Datei benötigt keine besonderen Felder. Es wird aber empfohlen, einen `title` im
Frontmatter festzulegen. Dieser wird aber nicht zur Anzeige herangezogen, sondern dient der Übersicht.

#### 2. Statische JavaScript-Seiten

In bestimmten Fällen sind Markdown-Pages nicht mächtig genug um die gewünschten Inhalte anzuzeigen. In diesen Fällen
können JavaScript-Basierte Seiten angelegt werden. Dazu wird eine JavaScript-Datei unter `/src/pages/` angelegt.

Eine Seite besteht im Wesentlichen aus einer React-Komponente und einem GraphQL-Query zur Abfrage der anzuzeigenden
Daten.

An dieser Stelle kann keine umfängliche Anleitung gegeben, sondern nur auf die
[Dokumentation von gatsby.js](https://next.gatsbyjs.org/tutorial/) verwiesen werden.

##### Gründe für JavaScript-Seiten

Generell sollte zunächst versucht werden, Seiten in Markdown zu implementieren. Erst wenn die Möglichkeiten von Markdown
erschöpft sind, sollte auf JavaScript umgestellt werden.

Gründe dafür könnten sein:

- Es sollen Übersichtsseiten über generische Inhalte der Seite erzeugt werden, (z.B. die Talk-Übersichtsseite).
- Es sollen dynamische Inhalte bzw. Interaktionen mit dem Nutzer umgesetzt werden, die mittels React.JS gemacht werden.
- Es wird eine Fein-Granulare Kontrolle über angezeigte Bilder benötigt. Dies ist z.B. für die Unterstützer-Seite der
  Fall. Siehe [Bilder](#bilder).

### Bilder

Gatsby.js ist besonders auf Performance der Webseite getrimmt. Ein wichtiger Aspekt dabei sind Bilder. Deshalb bietet
Gatsby.js besondere Hilfsmittel zur Verarbeitung und Einbindung von Bildern. Um Bilder anzuzeigen existieren daher
mehrere Möglichkeiten mit jeweils eigenen Vor- und Nachteilen.

Zunächst wird unterschieden zwischen Bildern, die Gatsby.js bekannt sind und von diesem verarbeitet werden, und solchen
Bildern, die nicht von Gatsby.js betrachtet werden.

#### Bilder ohne Gatsby.js-Verarbeitung einbinden.

Wenn Bilder an Gatsby.js "vorbei gemogelt" werden, kann Gatsby.js keine Optimierungen durchführen. Das Build-System hat
keine Kenntniss von diesen Dateien und kann deshalb nicht zum Compile-Zeitpunkt feststellen, ob Dateien fehlen oder
falsch geschrieben wurden. Stattdessen kommen dann zur Laufzeit 404-Fehler. Außerdem sind diese Dateien nicht im
Offline-Modus verfügbar.

##### Externe Bilder einfügen

Die erste Möglichkeit um Bilder einzufügen sind extern gehostete Bilder. Diese können ganz normal mittels
`<img src="https://some.url/image.png" />` oder `![Alt-Text](https://some.url/image.png)` eingebunden werden.

##### Statische Bilder einfügen

Bilder können im Verzeichnis `/static/` abgelegt werden. Wie auch alle anderen Dateien in diesem Verzeichnis (siehe
[Assets](#assets)) werden diese Bilder mit ins `public`-Verzeichnis kopiert. Sie können mittels
`<img src="/image.png"/>` oder `![Alt-Text](/image.png)` eingebunden werden.

#### Bilder mit Gatsby.js-Verarbeitung einbinden.

Damit Bilder von Gatsby.js sichtbar sind, müssen diese in einem "content"-Verzeichnis abgelegt sein. Prinzipiell wäre
jedes der vorhandenen Verzeichnisse möglich, der Übersicht halber sollten Bilder aber in `/content/images` abgelegt
werden.

Da die Bilder auf diese Weise mittels des Module-Systems aufgelöst werden, kann dieses zum Compile-Zeitpunkt
feststellen, ob Bilder vorhanden sind. Auf diese Weise lassen sich z.B. Schreibfehler schnell feststellen.

Bilder, die von Gatsby verwaltet werden, sind im Offline-Modus verfügbar.

Außerdem optimiert Gatsby.js Bilder für die Auslieferung. Die konkreten Optimierungen hängen von der Art des Einbindens
ab. Generell erzeugt Gatsby.js fürs Caching optimierte URLs für alle Bilder.

Für das Einbinden existieren 2 Varianten:

##### Einbinden mittels relativen Pfad

Bilder können einfach mittels relativem Pfad addressiert werden. Die Einbindung sieht dann z.B. so aus:
`<img src="../images/image.png"/>` bzw. `![Alt-Text](../images/image.png)`. Hierbei ist wichtig zu beachten, dass der
Pfad nicht zur Laufzeit aufgelöst wird, sondern zur Generations-Zeit. Die relativen Pfade müssen daher auch relativ zur
lokalen Verzeichnisstruktur definiert werden.

Möchte man beispielsweise aus einer Markdown-Datei, welche sich in `/content/pages/some-markdown.md` befindet, ein Bild
referenzieren, muss der Pfad `../images/image.png` lauten. Aus einer JavaScript-Komponente, welche sich in
`/src/pages/some-page.js` befindet, lautet der Pfad `../../content/images/image.png`.

Für Bilder, die in einer Markdown-Datei eingefügt wurden (sowohl mittels html-tag als auch pure Markdown-Syntax),
erzeugt Gatsby.js spezielle Container, welche für die Responsivität zuständig sind. Dadurch werden mehrere Versionen der
Bilder in verschiedenen Auflösungen generiert, die je nach Skalierung und Endgerät angezeigt werden. Außerdem wird eine
verschwommene Vorschau angezeigt, so lange das Bild noch nicht vollständig geladen wurde.

Nachteil dieser Variante sind die begrenzten Möglichkeiten bezüglich der Größe und Positionierung. Bilder sind hier
generell im "fluid"-Modus. Das bedeutet, dass sie die größtmögliche Größe annehmen, die das Layout vorgibt. Um die Größe
einzuschränken, muss z.B. mit div-Container und entsprechendem Styling gearbeitet werden (siehe z.B.
`/content/pages/about.md`).

##### Einbinden mittels GraphQL

Für die meiste Kontrolle können Bilder in JavaScript-Seiten mittels GraphQL eingebunden werden.

Hierbei treffen alle Vorteile bezüglich responsivität, Offline-Support usw. auch zu. Zusätzlich hat man aber bessere
Kontrolle über die Anzeige-Größe der Bilder. Man kann zwischen "Fixed" und "Fluid" wählen. Die Details dazu sollten aus
der Gatsby.js-Dokumentation entnommen werden.

Ein Beispiel für diese Nutzung ist `/src/pages/unterstuetzer.js`.

Um ein Bild einzufügen wird in der JavaScript-Seite im Query eine Abfrage zum entsprechenden Bild ergänzt:

```javascript
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const MyPage = ({ data }) => (
  <div>
    <Img fluid={data.file_alias.childImageSharp.fluid} />
  </div>
)
export default MyPage

export const query = graphql`
  query {
    file_alias: file(relativePath: { eq: "my_image.jpg" }, sourceInstanceName: { eq: "images" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
```

Auf eine detailierte Beschreibung soll an dieser Stelle verzichtet werden und stattdessen auf die entsprechende
[Gatsby-Dokumentation](https://next.gatsbyjs.org/docs/working-with-images/) verwiesen werden.

### Redirects

Mit der Umstellung auf Gatsby.js wurde auch ein neues Schema für URLs eingeführt. Vorher waren Talks z.B. unter
`/2018/03/22/talk-title.html` erreichbar. Im neuen Schema entspricht dies `/talks/2018-03-22-talk-title/`. Damit auch
existierende Links weiterhin funktionieren, wurde eine Redirect-Funktion implementiert. Diese erzeugt automatisch
Redirects von alten auf neue Links. Die Konfiguration dazu ist in `gatsby-node.js` zu finden.
