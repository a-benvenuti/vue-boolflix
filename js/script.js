var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      films: [],
      ricercaUtente: '',
    },
    // -------------------------------------------------------------------------
    methods: {
      search: function() {
            axios.get('https://api.themoviedb.org/3/search/movie?', {
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
  }
);
