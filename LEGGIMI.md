# Istruzioni del sito

Quattro pagine HTML, un foglio di stile, nessun JavaScript. Si apre facendo doppio clic su `index.html` e si pubblica gratis su GitHub Pages.

## 1. Prima di pubblicare: tre sostituzioni

Apri i quattro file HTML e usa "cerca e sostituisci" (Cmd+F in qualsiasi editor). Sostituisci ovunque:

- `Carlo Teriaca` → il tuo nome
- `info@carloteriaca.com` → la tua email
- `https://www.youtube.com/@carloteriaca_economia` → l'indirizzo vero del canale

Sono trenta secondi di lavoro e servono a non ritrovarti segnaposti online.

## 2. Pubblicare su GitHub Pages

1. Crea un repository pubblico su GitHub e chiamalo `sito` (o come preferisci).
2. Carica dentro tutti i file, mantenendo la cartella `assets`.
3. Vai su Settings → Pages, alla voce Source scegli il ramo `main` e la cartella `/ (root)`, poi salva.
4. Dopo un paio di minuti il sito è online all'indirizzo `https://tuonome.github.io/sito/`.

Quando comprerai un dominio con il tuo nome, si collega da quella stessa schermata: si aggiunge il dominio nel campo "Custom domain" e si impostano i record DNS dal pannello di chi ti ha venduto il dominio.

## 3. Il rito del lunedì e della domenica

**Lunedì**, due modifiche con lo stesso testo:
- in `diario.html`, copia il blocco `<article class="entry">` e incollalo subito sotto il commento `INSERISCI QUI LA SETTIMANA NUOVA`, poi compila numero, date e la colonna "Previsto";
- in `index.html`, aggiorna il riquadro "Settimana in corso" con gli stessi punti.

**Domenica**, torna su `diario.html`, compila la colonna "Fatto" e la lezione della settimana, e cambia l'etichetta da "In corso" a "Chiusa".

I glifi da usare negli elenchi: `[ ]` da fare, `[x]` fatto, `[~]` a metà, `[>]` rimandato, `[+]` fatto ma non previsto.

Il modo più veloce di farlo è dettarmi a voce gli obiettivi e il resoconto: io ti restituisco il blocco già pronto e tu lo incolli.

## 4. Aggiungere un lavoro all'archivio

Metti il file in `assets/pdf/` o `assets/img/`, poi in `archivio.html` copia un blocco `<a class="card">` e cambia link, tipo, anno, titolo e descrizione. Se hai un'immagine di anteprima, sostituisci la riga `<span class="thumb__type">PDF</span>` con `<img src="assets/img/anteprima.jpg" alt="descrizione">`.

Comprimi i PDF prima di caricarli: sopra i cinque megabyte il sito diventa lento da aprire.

## 5. Quando servirà l'inglese

Crea una cartella `en/`, copia dentro i quattro file HTML e traducili, cambiando `lang="it"` in `lang="en"` e i link interni. Il foglio di stile resta uno solo, condiviso.

## 6. Note di stile, se un giorno vorrai metterci mano

- Colori e misure sono tutti in cima a `style.css`, nel blocco `:root`. Cambiando un valore lì cambia tutto il sito.
- Il carattere del testo è Atkinson Hyperlegible, disegnato per la leggibilità: lettere molto distinguibili tra loro, righe corte, testo mai giustificato.
- Il giallo evidenziatore è riservato a una cosa sola: ciò che è in corso adesso. Se lo usi anche altrove smette di significare qualcosa.
- La modalità scura funziona già da sola, seguendo le impostazioni del sistema.
