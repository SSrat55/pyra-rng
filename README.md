# Pyra RNG 🥔

Prosta strona, która losuje zdjęcie ziemniaka i pokazuje jego rzadkość.
Losowanie trwa 7 sekund, a odkryte ziemniaki i statystyki zapisują się w przeglądarce.
Każdy ziemniak ma własny żartobliwy opis. Ten sam może wypaść kilka razy, nawet pod rząd.
Strona ma też osiągnięcia oraz dźwiękowe i wizualne efekty losowania. Dźwięki można wyciszyć przyciskiem pod losowaniem.
Za każde losowanie wpadają monety, które można wydać w Sklepie Pyrowym na trwałe bonusy: więcej monet, większą szansę na rzadkość, szybsze losowanie lub jednorazowy przerzut wyniku. Szanse pokazują aktywne bonusy. Wylosowany wynik można udostępnić, skopiować albo pobrać jako kartę PNG.

## Jak uruchomić

Otwórz plik `index.html` w przeglądarce. Do zdjęć potrzebny jest internet.

## Szanse

- Zwykły: 60%
- Niezwykły: 23,9%
- Rzadki: 10%
- Epicki: 5%
- Legendarny: 1%
- Mityczny: 0,1% (średnio raz na 1000 losowań)

## Album i statystyki

Album doładowuje około 100 zdjęć ziemniaków z Wikimedia Commons. Można go otwierać i przeglądać według poziomu rzadkości; nieodkryte miejsca są szare. Strona zapisuje liczbę losowań, rzadkie trafienia oraz odblokowane ziemniaki lokalnie w przeglądarce.
Osiągnięcia zapisują się razem z postępem: czekają m.in. za pierwsze losowanie, serię 100 losowań, rzadkie trafienia oraz zebranie całej kolekcji.
Podczas losowania może też na chwilę mignąć worek z ziemniakami jako easter egg.

## Zdjęcia

Zdjęcia są pobierane z Wikimedia Commons, więc do doładowania dużej kolekcji potrzebny jest internet. Źródło, autor i licencja zdjęcia wyświetlają się pod wylosowanym ziemniakiem.

## Jak opublikować stronę na GitHubie

1. Zaloguj się na [github.com](https://github.com) i utwórz nowe repozytorium, na przykład `pyra-rng`.
2. Otwórz repozytorium i wybierz **Add file → Upload files**.
3. Przeciągnij do niego pliki `index.html`, `style.css`, `script.js` i `README.md`, a potem wybierz **Commit changes**.
4. Wejdź w **Settings → Pages**, ustaw źródło na **Deploy from a branch**, wybierz gałąź `main` i folder `/(root)`, a potem kliknij **Save**.
5. Po chwili GitHub pokaże adres Twojej strony w sekcji **Pages**.
