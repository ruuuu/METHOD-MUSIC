const dataMusic = [
      {
            id: '1',
            artist: 'The weeknd',
            track: 'Save your tears',
            poster: 'img/photo1.jpg',
            mp3: 'audio/The Weeknd - Save Your Tears.mp3',
      },
      {
            id: '2',
            artist: 'Imagine Dragons',
            track: 'Follow You',
            poster: 'img/photo2.jpg',
            mp3: 'audio/Imagine Dragons - Follow You.mp3',
      },
      {
            id: '3',
            artist: 'Tove Lo',
            track: 'How Long',
            poster: 'img/photo3.jpg',
            mp3: 'audio/Tove Lo - How Long.mp3',
      },
      {
            id: '4',
            artist: 'Tom Odell',
            track: 'Another Love',
            poster: 'img/photo4.jpg',
            mp3: 'audio/Tom Odell - Another Love.mp3',
      },
      {
            id: '5',
            artist: 'Lana Del Rey',
            track: 'Born To Die',
            poster: 'img/photo5.jpg',
            mp3: 'audio/Lana Del Rey - Born To Die.mp3',
      },
      {
            id: '6',
            artist: 'Adele',
            track: 'Hello',
            poster: 'img/photo6.jpg',
            mp3: 'audio/Adele - Hello.mp3',
      },
      {
            id: '7',
            artist: 'Tom Odell',
            track: "Can't Pretend",
            poster: 'img/photo7.jpg',
            mp3: "audio/Tom Odell - Can't Pretend.mp3",
      },
      {
            id: '8',
            artist: 'Lana Del Rey',
            track: 'Young And Beautiful',
            poster: 'img/photo8.jpg',
            mp3: 'audio/Lana Del Rey - Young And Beautiful.mp3',
      },
      {
            id: '9',
            artist: 'Adele',
            track: 'Someone Like You',
            poster: 'img/photo9.jpg',
            mp3: 'audio/Adele - Someone Like You.mp3',
      },
      {
            id: '10',
            artist: 'Imagine Dragons',
            track: 'Natural',
            poster: 'img/photo10.jpg',
            mp3: 'audio/Imagine Dragons - Natural.mp3',
      },
      {
            id: '11',
            artist: 'Drake',
            track: 'Laugh Now Cry Later',
            poster: 'img/photo11.jpg',
            mp3: 'audio/Drake - Laugh Now Cry Later.mp3',
      },
      {
            id: '12',
            artist: 'Madonna',
            track: 'Frozen',
            poster: 'img/photo12.jpg',
            mp3: 'audio/Madonna - Frozen.mp3',
      },
];




const audio = new Audio();                      // для плучения аудио

const pauseBtn = document.querySelector('.player__controller-pause');         // кнопка паузы на плеере
const tracksCard = document.getElementsByClassName('track');                  // массив кнопок,  так будем подучать кнопки динамически, тое сть  после поиска если будет 2 карточрки, то в переменной будет 2 картчоки.  они мняются без перезагрузик станицы. а если через querySelectorAll('.track') придется поврный поиск произодить
const stopBtn = document.querySelector('.player__controller-stop');           // кнпока в плеере
const player = document.querySelector('.player');
const catalogContaier = document.querySelector('.catalog__container');                    // контенйер дял карточек
const prevBtn = document.querySelector('.player__controller-prev');
const nextBtn = document.querySelector('.player__controller-next');
const liketBtn = document.querySelector('.player__controller-like');
const mutetBtn = document.querySelector('player__controller-mute');





//  создание нопки "Увидеть все":
const catalogAddBtn = document.createElement('button');
catalogAddBtn.classList.add('catalog__btn-add');

catalogAddBtn.innerHTML = `
            <span>Увидеть все</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                         <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" />
            </svg>
`;





// меняем  на карточке иконку пазуы на иконку плея:
const pausePlayer = () => {
      // console.log(audio.dir)
      const trackActive = document.querySelector('.track--active');
      if (audio.paused) {                        // если аудио на паузе, у объекта audio есть свойство paused
            audio.play();
            pauseBtn.classList.remove('player__icon--play');
            trackActive.classList.remove('track--pause');               // удаляем иконку плея
      }
      else {
            audio.pause();                        //   у audio етсь метод pause()
            pauseBtn.classList.add('player__icon--play');
            trackActive.classList.add('track--pause');
      }
}



// когда жмем на  картчоку, играет аудио:
const playMusic = (evt) => {        // event(это объект события) возникате во время наступления любого события
      // console.dir(evt.currentTarget);                          // выведет элемент на котрый нажали ввиже объекта
      evt.preventDefault();                                       // убираем  повдеение ссылки по умлчаию(перагрука станциы)
      const trackActive = evt.currentTarget;                      // вернет тто элемен на котрый нажали
      if (trackActive.classList.contains('track--active')) {      // если трек активный
            pausePlayer();                                        // меняем  нак артоке иконку пазуы на иконку плея
            return;                                               // выход из функции, дальнейшие дейсвтия не будут выполянться
      }

      const id = trackActive.dataset.idTrack;

      const track = dataMusic.find((item, index) => {

            item.id === id
      });
      console.log('track ', track);

      audio.src = track.mp3;                      // elem.dataset.track  берем значение дата-атрибута data-track
      audio.play();                                               // прогиграть трек, у адудио еть метод play()
      player.classList.add('player--active');                        // плеер появится
      pauseBtn.classList.remove('player__icon--play');            // бдет иконка треугольничка(плей)

      for (let i = 0; i < tracksCard.length; i++) {
            tracksCard[i].classList.remove('track--active');
      }
      trackActive.classList.add('track--active');
}




const addHanderTrack = () => {
      for (let i = 0; i < tracksCard.length; i++) {
            tracksCard[i].addEventListener('click', playMusic);               // по нажаьию на кнпоку, запутится фукнция  playMusic
      }
};




pauseBtn.addEventListener('click', pausePlayer);  // обрботчик кнопки Пауза в плеереи на карточке



// обрабокт кнопки Пауза в плеере:
stopBtn.addEventListener('click', () => {
      //     player дожлен уехать и удалить из src трек
      player.classList.remove('player--active');
      audio.pause();
});




const createCard = (elem) => {

      const card = document.createElement('a');
      card.href = '#';
      card.classList.add('catalog__item', 'track');    // либо можно так button.className('catalog__item track')
      card.dataset.idTrack = elem.id; // доюавлем дата-атрибут data-id-track
      card.innerHTML = `
             <div class="track__img-wrap">
                  <img class="track__post" src="${elem.poster}" alt="${elem.artist} - ${elem.track}" width="180" height="180">
             </div>

             <div class="track__info">
                  <p class="track__title">${elem.track}</p>
                  <p class="track__artist">${elem.artist}</p>
             </div>
      `;


      console.log('card ', card);
      return card;            // <a>...</a>
};




// отрисвока верстки  всех карточек:
const renderCatalog = (dataList) => {                  //  dataList это [ {id, articst, track, poster}, {id, articst, track, poster}, {}, {} ]
      catalogContaier.textContent = '';                     // очищвемт, тк  будет поиск, переход в Избранное и будет формироваться верстка заново, но  без перезагруки станицы

      const listCards = dataList.map(createCard);           // для каждого элеменат массива выховетс фукнция createCard. [<button>...</button>, <button>...</button>, <button>...</button>]
      //console.log('listCards ', listCards);
      //console.log('...listCards ', ...listCards);
      catalogContaier.append(...listCards);

      addHanderTrack();                                     // навешиваем на соданые картчоки событие клика
};




// чтобы скрывались пустые ряды при уменьшении экрана:
const checkCount = (i = 1) => {

      if (catalogContaier.clientHeight > tracksCard[0].clientHeight * 3) {          // если экартчоек ольше чем 2 ряда
            tracksCard[tracksCard.length - i].style.display = 'none';
            checkCount(i + 1);                  //    рекурсия
      }
      else if (i !== 1) {          // если не все картчоки отображены
            catalogContaier.append(catalogAddBtn);
      }

};



const init = () => {                                  // фккнция инициализатор, отсюда все начинается
      renderCatalog(dataMusic);                       // отрисвока верстки  всех карточек , dataMusic = [{audio1}, {audio2}, {}, {}]
      checkCount();
      catalogAddBtn.addEventListener('click', () => {
            [...tracksCard].forEach((track) => {            // преваращаем из html коллеции в массив
                  track.style.display = '';                 // отображаем картчоку
                  catalogAddBtn.remove();               // удаляем кнопку "Увидеть все"
            });
      });


      prevBtn.addEventListener('click', playMusic);

      nextBtn.addEventListener('click', playMusic);

};


init();