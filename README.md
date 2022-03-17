# :zap: Javascript Speach Recognition

* Wes Bos Youtube Javascript30 tutorial: [JavaScript Speech Recognition #JavaScript30 20/30](https://www.youtube.com/watch?v=0mJC0A72Fnw&index=20&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/javascript-speech-recognition?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/javascript-speech-recognition?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/javascript-speech-recognition?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/javascript-speech-recognition?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Javascript Speach Recognition](#zap-javascript-speach-recognition)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Tutorial Code for speach recognition using Javascript, part of Javascript30 Youtube series by Wes Bos.

## :camera: Screenshots

![Example screenshot](./img/speach.png).

## :signal_strength: Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* To install 'browser-sync' dependencies, type 'npm i'.
* To run app type 'npm run start' then click on HTML file manager that appears - `http://localhost:3000/index.html`.

## :computer: Code Examples

* speach recognition function to convert speach to paragraphs.

```javascript
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
```

## :cool: Features

* Functions can be added that are triggered by certain words or phrases, such as 'get the weather'.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing.

## :clap: Inspiration

* Wes Bos Youtube Javascript30 tutorial: [JavaScript Speech Recognition #JavaScript30 20/30](https://www.youtube.com/watch?v=0mJC0A72Fnw&index=20&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
