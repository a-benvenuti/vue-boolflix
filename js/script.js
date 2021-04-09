var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      films: [],
      filmsPopular: [],
      ricercaUtente: '',
    },
    // -------------------------------------------------------------------------
    methods: {
      // funzione per la ricerca del film da parte dell'utente
      search: function() {
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

            this.ricercaUtente = '';
        }
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
          this.filmsPopular = risposta.data.results;
        })
    },
    // -------------------------------------------------------------------------
  }
);
