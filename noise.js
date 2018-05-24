const playOnClick = (note, audio) => {
  $(note).click(() => {
    $(audio).trigger('play');
  });
};

const playOnKey = () => {
  $('body').keydown((event) => {

    switch(event.key) {
      case 'c' :
        $('#cAudio').trigger('play');
        break;
      case 'd' :
        $('#dAudio').trigger('play');
        break;
      case 'e' :
        $('#eAudio').trigger('play');
        break;
      case 'f' :
        $('#fAudio').trigger('play');
        break;
      case 'g' :
        $('#gAudio').trigger('play');
        break;
      case 'a' :
        $('#aAudio').trigger('play');
        break;
      case 'b' :
        $('#bAudio').trigger('play');
        break;
    }

  })
};


$(document).ready( function() {
  playOnClick('.c', '#cAudio');
  playOnClick('.d', '#dAudio');
  playOnClick('.e', '#eAudio');
  playOnClick('.f', '#fAudio');
  playOnClick('.g', '#gAudio');
  playOnClick('.a', '#aAudio');
  playOnClick('.b', '#bAudio');
  playOnKey();
});
