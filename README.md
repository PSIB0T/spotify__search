# spotify_search
Searches name/artists from spotify and displays results

## Basic Usage

```javascript
const spotSearch = require('spotify_search');
spotSearch.getArtists('michael')
          .then((data)=>{
            console.log(data);
          })

```
