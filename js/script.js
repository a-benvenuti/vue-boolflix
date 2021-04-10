var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      films: [],
      series: [],
      filmsPopular: [],
      seriesPopular: [],
      ricercaUtente: '',
      flagsPopular: ['de','en','es','fr','it','ja','ko','pt','ru','zh']
    },
    // -------------------------------------------------------------------------
    methods: {
      // funzione reload
      ricarica: function() {
        window.location.reload()
      },
      // funzione per la ricerca del film da parte dell'utente
      searchFilms: function() {
          axios.get('https://api.themoviedb.org/3/search/movie', {
              params: {
                  api_key: "acdbcdcacc7acfa06c08eabb7258ad40",
                  query: this.ricercaUtente,
                  language: "it-IT",
              }
          })
          .then((risposta) => {
            this.films = risposta.data.results;
          })
      },
      // funzione per la ricerca della serieTv da parte dell'utente
      searchSeries: function() {
          axios.get('https://api.themoviedb.org/3/search/tv', {
              params: {
                  api_key: "acdbcdcacc7acfa06c08eabb7258ad40",
                  query: this.ricercaUtente,
                  language: "it-IT",
              }
          })
          .then((risposta) => {
            this.series = risposta.data.results;
          })
      },
      // funzione di ricerca da parte dell'utente
      search: function() {
        if (this.ricercaUtente != '') {
          this.searchFilms();
          this.searchSeries();
          this.ricercaUtente = '';
        }
      },
      // funzione per ottenere il nuovo voto con un massimo di 5
      newVoto: function(voto) {
        return Math.ceil(voto / 2);
      },
    },
    // -------------------------------------------------------------------------
    mounted: function() {
        // chiamata per i film piu visti
        axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
              api_key: "acdbcdcacc7acfa06c08eabb7258ad40",
              language: "it-IT",
          }
        })
        .then((risposta) => {
          for (let i = 0; i < 4; i++) {
            this.filmsPopular.push(risposta.data.results[i]);
          }
        })
        // chiamata per le serieTv piu viste
        axios.get('https://api.themoviedb.org/3/tv/popular', {
          params: {
              api_key: "acdbcdcacc7acfa06c08eabb7258ad40",
              language: "it-IT",
          }
        })
        .then((risposta) => {
          for (let i = 0; i < 4; i++) {
            this.seriesPopular.push(risposta.data.results[i]);
          }
        })
    },
    // -------------------------------------------------------------------------
  }
);
