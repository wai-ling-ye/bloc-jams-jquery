class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);

    let songDuration = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(songDuration));
  }
}

const helper = new Helper();
