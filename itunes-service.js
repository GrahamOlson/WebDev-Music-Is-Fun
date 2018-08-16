function ItunesService() {

  //DO NOT MODIFY
  this.getMusicByArtist = function (artist) {
    var url1 = 'https://itunes.apple.com/search?term=' + artist + "&callback=?"
    let url2 = 'https://bcw-getter.herokuapp.com/?url='
    let apiUrl = url1 + encodeURIComponent(url2)
    //Casts each object to 
    return $.getJSON(url1).then(function (response) {
      var songList = response.results.map(song => {
        return {
          title: song.trackName,
          albumArt: song.artworkUrl60.replace(/60x60/g, "250x250"),
          artist: song.artistName,
          collection: song.collectionName,
          price: song.collectionPrice,
          preview: song.previewUrl,
        }
      })
      return songList;
    })
  }
}