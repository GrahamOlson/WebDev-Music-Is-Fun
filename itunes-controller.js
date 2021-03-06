function ItunesController() {

  // PRIVATE
  const itunesService = new ItunesService()

  function drawSongs(results) {

    let template = ''
    for (let i = 0; i < results.length; i++) {
      const song = results[i];
      //YOUR CODING STARTS HERE
      template += `
      <div class="col-6">  
      <ul style="list-style-type:none" id="song-list">
        <li class="font-weight-bold song-title">${song.title}</li>
        <li><button onclick="app.controllers.itunesCtrl.playAudio('${song.preview}')" type="button"><img src="${song.albumArt}"></button></li>
        <li class="song-artist">${song.artist}</li>
        <li class="song-collection">${song.collection}</li>
        <li class="song-price">$${song.price}</li>
        
      </ul>
      </div>
    `
    }
    document.getElementById('songs').innerHTML = template
  }

  this.playAudio = function (preview) {
    const audio = document.getElementById('audio-player');
    const source = document.getElementById('audio-source');
    source.setAttribute('src', preview);
    audio.load();
    audio.play();
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