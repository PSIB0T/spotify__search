const spotSearch = require('./index.js');
spotSearch.getArtists('michael')
          .then((data)=>{
            console.log(data);
          })
