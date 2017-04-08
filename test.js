const spotSearch = require('./SpotifySearch');
spotSearch.getArtists('michael')
          .then((data)=>{
            console.log(data);
          })
