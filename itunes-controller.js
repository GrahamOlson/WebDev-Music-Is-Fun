function ItunesController() {

  // PRIVATE
  const itunesService = new ItunesService()

  function drawSongs(results) {
    console.log(results)
    let template = ''
    for (let i = 0; i < results.length; i++) {
      const song = results[i];
      //YOUR CODING STARTS HERE
      template += `
      <div class="col-6">  
      <ul style="list-style-type:none" id="song-list">
        <li class="font-weight-bold title">${song.title}</li>
        <li><img src=${song.albumArt}></li>
        <li>${song.artist}</li>
        <li>${song.collection}</li>
        <li>${song.price}</li>
        <audio controls>
            <source src="${song.preview}" type="audio/ogg">
            <source src="${song.preview}" type="audio/mpeg">  
        <li>${song.preview}</li>
        </audio>
      </ul>
      </div>
    `
    }
    document.getElementById('songs').innerHTML = template
  }

  //PUBLIC
  //DO NOT MODIFY THIS METHOD
  this.getMusic = function (e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}

