if (navigator.share) {
    let url = document.location.href;
    const canonicalElement = document.querySelector('link[rel=canonical]');
    if (canonicalElement !== null) {
        url = canonicalElement.href;
    }
    
    navigator.share({
      title: 'ET',
      text: 'ET',
      url
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }