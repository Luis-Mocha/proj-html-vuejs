# PROGETTO PERSONALE

Riproduco un layout proposto utilizzando:
- **HTML**
- **CSS / Scss**
- **VueJs / Vite**
---
### Versione Mobile
Implemento una versione Mobile del layout proposto cambiando:
- visualizzazione della *Navbar (Header)*
- numero di elementi visualizzati nella *sezione forum* (aggiunto anche un bottone per visualizzare tutti gli elementi se desiderato)
- disposizione generale di elementi nella *sezione news* e *footer*
---
### API
Implemento l'utilizzo di una APi per ottenere e visualizzare le informazioni di articoli reali nella *Sezione News*.
Informazioni API:
- [Sito Web](https://newsapi.org)
- [Documentazione](https://newsapi.org/docs)
- Tipo di iscrizione al servizio: "*Developer*".
Rischieste possibili al giorno: **100**.

Per mantenere private infromazioni quali *API key* personali utilizzo file di tipo *.env*. (Installato `"dotenv": "^16.0.3"`).
Per utilizzare e fare richieste all'api è stato installato `"axios": "^1.4.0"`.

---
**Informazioni aggiuntive**

Font utilizzato: `'Fira Sans'`. Per il suo utilizzo è stao installato `"@fontsource/fira-sans": "^4.5.10"`.

Icone e simboli sono aggiunti con *FontAwesome*, tramite link incorporato in *Index.html > Head*: 
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`.
