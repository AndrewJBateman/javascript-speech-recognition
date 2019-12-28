window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.interimResults = true; // show results even though not final.
  recognition.lang = 'en-US';
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results) // convert to array.
      .map(result => result[0])
      .map(result => result.transcript)
      .join(''); // join strings
  
      // create paragraph for each body of speach.
      p.textContent = transcript;
      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }
      if(transcript.includes('say the date' || 'the date')) {
        console.log(Date.now())   
      }

      if(transcript.includes('unicorn')) {
        console.log('🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄')   
      }

      console.log(transcript);
  });

  recognition.addEventListener('end', recognition.start);
  recognition.start();
 