### Krav

-   Node.js installerat

### Köra Scriptet

1. lägg `input.txt` i samma ställe som converter.js
2. öppna och navigera till root mappen av projektet
3. kör scriptet med:

    ```bash
    node converter.js
    ```

### input txt format

`input.txt` måste uppfylla dessa krav

-   Varje post börjar med en bokstav som anger typ av inlägg (`P` för person, `T` för telefon, `A` för adress, och `F` för familjemedlem), följt av en `|`-avgränsare och de relevanta datafälten.
-   En person (`P`)-post följs av förnamn och efternamn.
-   En telefon (`T`)-post inkluderar ett mobilnummer och ett fastnätsnummer.
-   En adress (`A`)-post innehåller information om gata, stad och postnummer.
-   En familj (`F`)-post inkluderar ett namn och födelseår.
-   `P`-poster kan följas av `T`, `A`, och `F` poster. `F`-poster kan också följas av `T` och `A` poster.

Example:

```
P|Carl Gustaf|Bernadotte
T|0768-101801|08-101801
A|Drottningholms slott|Stockholm|10001
F|Victoria|1977
...
```

### output fil

Efter att skriptet har körts kommer en `output.xml`-fil att genereras i samma mapp. Denna XML-fil kommer att innehålla de strukturerade datan från `input.txt` i XML-format. Strukturen inkluderar ett rot-element `<people>` med nästlade element för varje person (`<person>`), deras telefonnummer (`<phone>`), adresser (`<address>`), och familjemedlemmar (`<family>`).

Example Output XML Structure:

```xml
<people>
  <person>
    <firstname>Carl Gustaf</firstname>
    <lastname>Bernadotte</lastname>
    <phone>
      <mobile>0768-101801</mobile>
      <landline>08-101801</landline>
    </phone>
    ...
  </person>
  ...
</people>
```
