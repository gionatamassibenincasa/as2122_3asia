function Quesito(descrizione_breve, descrizione, punteggio, modello_query) {
  if (modello_query === void 0) {
    modello_query = "";
  }
  this.descrizione_breve = descrizione_breve;
  this.descrizione = descrizione;
  this.punteggio = punteggio;
  this.modello_query = modello_query;
}
var compito = {
  classe: "E-4A SIA",
  quesiti: [
    new Quesito(
      "",
      "Indicare l'anno del film più recente",
      1,
      "SELECT max(anno) FROM Film"
    ),
    new Quesito(
      "",
      "Indicare l'anno' del film più vecchio",
      1,
      "SELECT min(anno) FROM Film"
    ),
    new Quesito(
      "",
      "Indicare i film con la descrizione composta da più caratteri",
      1,
      "SELECT min(anno) FROM Film"
    ),
    new Quesito(
      "",
      "Indicare nome e cognome degli attori e numero di film in cui hanno recitato",
      2,
      "SELECT nome, cognome, count(*) FROM Attore INNER JOIN film_attore ON attore.attore_id = film_attore.attore_id GROUP BY attore.attore_id"
    ),
    new Quesito(
      "",
      "Indicare nome e cognome degli attori e numero di film del genere 'Foreign' in cui hanno recitato",
      3,
      "SELECT nome, cognome, count(*) FROM Attore INNER JOIN film_attore ON attore.attore_id = film_attore.attore_id GROUP BY attore.attore_id"
    ),
    new Quesito(
      "",
      "Indicare per ogni genere il numero dei film presenti nella base di dati",
      4,
      "SELECT Attore.nome, Attore.cognome, count(*) FROM Attore INNER JOIN film_attore ON attore.attore_id = film_attore.attore_id  INNER JOIN film ON film_attore.film_id = film.film_id INNER JOIN film_categoria ON film.film_id = film_categoria.film_id INNER JOIN categoria ON film_categoria.categoria_id = categoria.categoria_id WHERE categoria.nome = 'Foreign' GROUP BY attore.attore_id"
    ),
    // 1
    new Quesito(
      "π<sub>Nome</sub>(Attore)",
      "Proietta l'attributo <strong>nome</strong> della relazione <strong>Attore</strong>",
      1,
      "SELECT nome FROM Attore"
    ),
    // 2
    new Quesito(
      "π<sub>Titolo, Anno</sub>(Film)",
      "Proietta gli attributi <strong>titolo</strong> e <strong>anno</strong> della relazione <strong>Film</strong>",
      1,
      "SELECT titolo, anno FROM Film"
    ),
    // 3
    new Quesito(
      "π<sub>*</sub>(Film)",
      "Proietta <strong>tutti gli attributi</strong> della relazione <strong>Film</strong>",
      1,
      "SELECT * FROM Film"
    ),
    // 4
    new Quesito(
      "σ<sub>Nome LIKE 'G%', Cognome LIKE 'M%'</sub>(Attore)",
      "Seleziona le ennuple della relazione <strong>Attore</strong> che soddisfano la condizione composta <strong>nome inizia per G E cognome inizia per M</strong>",
      2,
      "SELECT nome, cognome FROM Attore WHERE nome LIKE 'G%' AND cognome LIKE 'M%'"
    ),
    // 5
    new Quesito(
      "σ<sub>Nome LIKE 'Comedy'</sub>(Categoria)",
      "Seleziona le ennuple della relazione <strong>Categoria</strong> che soddisfano la condizione <strong>nome = 'Comedy'</strong>",
      1,
      "SELECT * FROM Categoria WHERE nome LIKE 'Comedy'"
    ),
    // 6
    new Quesito(
      "σ<sub>categoria_id = 15</sub>(Categoria)",
      "Seleziona le ennuple della relazione <strong>Categoria</strong> che soddisfano la condizione <strong>categoria_id = 15</strong>",
      1,
      "SELECT * FROM Categoria WHERE categoria_id = 15"
    ),
    // 7
    new Quesito(
      "π<sub>Nome</sub>(σ<sub>attore_id >= 150</sub>(Attore))",
      "Proietta il <strong>nome<strong> della selezione dele ennuple della relazione <strong>Attore</strong> che soddisfano la condizione <strong>attore_id >= 150</strong>",
      1,
      "SELECT nome FROM Attore WHERE attore_id >= 150"
    ),
    // 8
    new Quesito(
      "π<sub>Titolo</sub>(σ<sub>anno = 2006</sub>(Film))",
      "Proietta il <strong>titolo<strong> della selezione dele ennuple della relazione <strong>Film</strong> che soddisfano la condizione <strong>anno = 2006</strong>",
      1,
      "SELECT titolo FROM Film WHERE anno = 2006"
    ),
    // 9
    new Quesito(
      "Film × Categoria",
      "Calcola il prodotto cartesiano di <strong>Film</strong> per <strong>Categoria</strong>",
      1,
      "SELECT * FROM Film, Categoria"
    ),
    // 10
    new Quesito(
      "Film × Film_Categoria",
      "Calcola il prodotto cartesiano di <strong>Film</strong> per <strong>Film_Categoria</strong>",
      1,
      "SELECT * FROM Film, Film_Categoria"
    ),
    // 11
    new Quesito(
      "Film ⨝<sub>film_id</sub> Film_Categoria",
      "Calcola la giunzione di <strong>Film</strong> e <strong>Film_Categoria</strong> dove gli attributi <strong>film_id</strong> assumono lo stesso valore",
      2,
      "SELECT * FROM Film INNER JOIN Film_Categoria ON Film.film_id = Film_Categoria.film_id"
    ),
    // 12
    new Quesito(
      "Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria",
      "Calcola la giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore",
      3,
      "SELECT * FROM Film INNER JOIN Film_Categoria ON Film.film_id = Film_Categoria.film_id INNER JOIN Categoria ON Film_Categoria.categoria_id = Categoria.categoria_id"
    ),
    // 13
    new Quesito(
      "π<sub>Titolo, Nome</sub>(Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria)",
      "Proietta il <strong>titolo</strong> del film e il <strong>nome</strong> della categoria della giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore",
      3,
      "SELECT titolo, nome FROM Film INNER JOIN Film_Categoria ON Film.film_id = Film_Categoria.film_id  INNER JOIN Categoria ON Film_categoria.categoria_id = Categoria.categoria_id"
    ),
    // 14
    new Quesito(
      "π<sub>Titolo, Nome, Anno</sub>(σ<sub>anno <= 2010</sub>(Film ⨝<sub>film_id</sub> Film_Categoria ⨝<sub>categoria_id</sub> Categoria))",
      "Proietta il <strong>titolo</strong> del film, il <strong>nome</strong> della categoria e l'<strong>anno</strong> di produzione della giunzione di <strong>Film</strong>, <strong>Film_Categoria</strong> e <strong>Categoria</strong> dove gli attributi <strong>film_id</strong> e <strong>categoria_id</strong> assumono lo stesso valore e dove &egrave soddisfatta la condizione <strong>anno <= 2010</strong>",
      3,
      "SELECT titolo, nome, anno FROM Film INNER JOIN Film_Categoria ON Film.film_id = Film_Categoria.film_id INNER JOIN Categoria ON Film_Categoria.categoria_id = Categoria.categoria_id WHERE anno <= 2010"
    ),
    // 15
    new Quesito(
      "π<sub>Nome</sub>(Attore) ∪ π<sub>Cognome → Nome</sub>(Attore)",
      "Unisci la proiezione del <strong>nome</strong> con quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della relazione <strong>Attore</strong>",
      2,
      "SELECT nome FROM Attore UNION SELECT cognome AS nome FROM Attore"
    ),
    // 16
    new Quesito(
      "π<sub>Nome</sub>(Attore) ∩ π<sub>Cognome → Nome</sub>(Attore)",
      "Interseca la proiezione del <strong>nome</strong> con quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della relazione <strong>Attore</strong>",
      2,
      "SELECT nome FROM Attore INTERSECT SELECT cognome AS nome FROM Attore"
    ),
    // 17
    new Quesito(
      "π<sub>Nome</sub>(Attore) - π<sub>Cognome → Nome</sub>(Attore)",
      "Sottrai dalla proiezione del <strong>nome</strong> della relazione <strong>Attori</strong> quella del <strong>cognome</strong> ridenominato in <strong>nome</strong> della stessa relazione <strong>Attore</strong>",
      2,
      "SELECT nome FROM Attore EXCEPT SELECT cognome AS nome FROM Attore"
    ),
  ],
};

/**
 * @typedef BloccoDomande
 * @type {object}
 * @property {number} punti - quanti punti per la risposta corretta al quesito.
 * @property {string} intestazione - l'intestazione del blocco di domande.
 * @property {string[]} specifiche - array delle domande.
 * @properti {string[]} risposte - array delle risposte corrette.
 */
/** @type BloccoDomande[] */
const blocchiDomande = [
  {
    punti: 1,
    intestazione: "Query senza giunzioni",
    specifiche: [
      "Elencare i nomi di tutte le città nella tabella city con country_id pari a 49",
      "Elencare i nomi di tutte le città il cui nome inizia per Z",
      "Elencare i nomi di tutte le città il cui nome termina in t",
      "Elencare i nomi di tutte le città il cui nome contiene 'anc'",
      "Elencare tutti i titoli dei film che durano 112 minuti ordinati per titolo",
      "Elencare titoli e le durate dei film la cui lunghezza è compresa tra 55 e 57 minuti, estremi inclusi, ordinandoli per durata dal più breve al più lungo",
    ],
    risposte: [],
  },
  {
    punti: 2,
    intestazione: "Query senza giunzioni con funzioni di aggregazione",
    specifiche: [
      "Indicare il numero di città nella nazione con id 49",
      "Indicare la durata del film più breve",
      "Indicare la durata del film più lungo",
      "Indicare il valor medio della durata dei film presenti nella base di dati",
      "Indicare il numero di città in ogni nazione e il country_id",
      "Indicare il numero di pagamenti e i valori minimo, medio e massimo degli importi del cliente con id 13",
      "indicare country_id e country delle nazioni:  Afghanistan, Bangladesh, China e Italy",
    ],
    risposte: [],
  },
  {
    punti: 3,
    intestazione: "Query con sottoquery o con aggregazioni",
    specifiche: [
      "Indicare il numero di pagamenti di valore minimo e l'importo cliente con id 13",
      "Elencare i cognomi degli attori e il numero di attori con lo stesso cognome",
    ],
    risposte: [],
  },
  {
    punti: 3,
    intestazione: "Query con giunzioni",
    specifiche: [
      "Elencare i nomi di tutte le città nella nazione 'Italy'",
      "Elencare gli indirizzi di tutti i clienti che vivono in Italia",
      "Elencare nome e cognome di tutti gli attori che hanno recitato nel film 'DOCTOR GRAIL' ordinati per cognome e nome",
      "Elencare nome e cognome di tutti i clienti ce hanno affittato almeno un film con l'attrice 'GRACE' 'MOSTEL'",
      "Elencare i film per cui non sono registrati gli attori",
    ],
    risposte: [],
  },
  {
    punti: 4,
    intestazione: "Query con giunzioni ed esperessioni complesse",
    specifiche: [
      "Indicare quanti attori hanno recitato nel film 'CHINATOWN GLADIATOR'",
      "Indicare il numero e la durata media dei film in cui ha recitato l'attrice che ha nome 'RITA' e cognome 'REYNOLDS'",
      "Elencare nome, cognome degli attori e numero di film cui hanno partcipato, ordinato per partecipazioni, e per cognome. Nell'elenco devono comparire solo gli attori che hanno partecipato ad almeno 40 film (40 compreso)",
      "Elencare il film, o i film, con il maggior numero di attori, indicandone titolo e numero di attori  in ordine di titolo",
      "Elencare per ogni impiegato il totale riscosso nell'anno 2005",
      "Indicare quanti DVD di 'Hunchback Impossible' sono presenti nell'inventario",
    ],
    risposte: [],
  },
];

function creaModulo1() {
  let form = FormApp.create("Interrogare Sakila - 4A SIA - AS 2021/2022");
  form.setCollectEmail(true);
  // Trasforma in quiz
  form.setIsQuiz(true);

  blocchiDomande.forEach((blocco) => {
    form
      .addPageBreakItem()
      .setTitle(
        `${blocco.intestazione} (${blocco.punti} punt${
          blocco.punti == 1 ? "o" : "i"
        })`
      );

    blocco.specifiche.forEach((specifica) => {
      let domanda = form.addTextItem();
      domanda.setTitle(specifica);
      domanda.setPoints(blocco.punti);
    });
  });

  Logger.log("Published URL: " + form.getPublishedUrl());
  Logger.log("Editor URL: " + form.getEditUrl());
}

/* Test
  blocchiDomande.forEach((blocco) => {
    console.log(
      `== ${blocco.intestazione} (${blocco.punti} punt${
        blocco.punti == 1 ? "o" : "i"
      }`
    );
  
    blocco.specifiche.forEach((specifica) => {
      console.log("\t", specifica);
    });
  });
  */

function creaModulo1() {
  compito.quesiti.forEach((q) => {
    console.log(q.descrizione, q.descrizione_breve);
  });
}

creaModulo1();
