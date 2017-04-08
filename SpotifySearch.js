const axios = require('axios');
const _ = require('lodash');

class SpotifySearch{
    constructor(){
        this.url = "https://api.spotify.com/v1/search?type=artist&q="
    }

    getArtists(name){
      name = encodeURIComponent(name);
      var fullUrl = this.url + name;
      console.log(fullUrl);
      return new Promise((resolve,reject)=>{
        axios.get(fullUrl)
             .then((res)=>{
               resolve(_.map(res.data.artists.items,
                       _.partialRight(_.pick,
                       ['external_urls', 'images[0].url', 'id', 'name', 'popularity'])));
             })
             .catch((err)=>{
               reject(err);
             });
      });

    }

}

var spotSearch = new SpotifySearch();

module.exports = spotSearch;
