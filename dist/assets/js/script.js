//preloader close
$(document).ready(()=>{
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
    
});
setTimeout(function() {
    $('.preloader').fadeOut('slow', function() {
        $(this).remove();
    });
}, 3000);

//container left margin
var wholeWidth = $(window).width();
var containerWidth = $('.container').width();
var containerMargin = (wholeWidth - containerWidth) / 2;
var smallMargin =  containerMargin + 70;
if($(window).width() > 1200) {
    $('.services__items').css('margin-left', smallMargin + 'px');
    $('.events__bot').css('margin-left', smallMargin + 'px');
    $('.partners').css('margin-left', smallMargin + 'px');
    $('.block2__bot').css('margin-left', smallMargin + 'px');
    $('.gallery').css('margin-left', smallMargin + 'px');
    $('.serv__docs').css('margin-left', smallMargin + 'px');
    $('.chrono').css('margin-left', smallMargin + 'px');
    $('.chrono__slider .arrowRight').css('right', smallMargin + 'px');
    $('.chrono__slider .arrowLeft').css('right', smallMargin + 50 + 'px');
} else {
    $('.services__items').css('margin-left', containerMargin + 'px');
    $('.events__bot').css('margin-left', containerMargin + 'px');
    $('.partners').css('margin-left', containerMargin + 'px');
    $('.block2__bot').css('margin-left', containerMargin + 'px');
    $('.gallery').css('margin-left', containerMargin + 'px');
    $('.serv__docs').css('margin-left', containerMargin + 'px');
    $('.chrono').css('margin-left', containerMargin + 'px');
    $('.chrono__slider .arrowRight').css('right', containerMargin + 'px');
    $('.chrono__slider .arrowLeft').css('right', containerMargin + 50 + 'px');
}



$('.gallery__slider .arrowRight').css('right', smallMargin + 'px');
$('.gallery__slider .arrowLeft').css('right', smallMargin + 50 + 'px');


//main page tabs
const titles = document.querySelectorAll('.events__group--title');
const items = document.querySelectorAll('.events__items');

titles.forEach((title, index) => {
    title.addEventListener('click', () => {
        titles.forEach(t => t.classList.remove('active'));
        items.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
        items[index].classList.add('active');
    });
});

//about page show more
$('.about__block1--more').click(()=> {
    $('.about__block1--more').toggleClass('active');
    $('.about__block1--hidden').toggleClass('active');
})

//future page show more
$('.future__more').click(()=> {
    $('.future__more').toggleClass('active');
    $('.future__hidden').toggleClass('active');
})

//about page vertical tabs
const titles3 = document.querySelectorAll('.organ__tabs--item');
const items3 = document.querySelectorAll('.organ__content');

titles3.forEach((title, index) => {
    title.addEventListener('click', () => {
        console.log('ssa')
        titles3.forEach(t => t.classList.remove('active'));
        items3.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
        items3[index].classList.add('active');
    });
});

// open and close modal1
if ($('.modal').length) {
    function openModal() {
        $('.modal').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal() {
        $('.modal').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper1').click(()=> {
        closeModal()
    })
}

// open and close modal1
if ($('.modal2').length) {
    function openModal2() {
        $('.modal2').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal2() {
        $('.modal2').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper2').click(()=> {
        closeModal2()
    })
}

// open and close modal3
if ($('.modal3').length) {
    function openModal3() {
        $('.modal3').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal3() {
        $('.modal3').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper3').click(()=> {
        closeModal3()
    })
}

// open and close modal4
if ($('.modal4').length) {
    function openModal4() {
        $('.modal4').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal4() {
        $('.modal4').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper4').click(()=> {
        closeModal4()
    })
}

//burger open/closes
if($('.burger').length) {
    function toggleBurger() {
        $('.burger').toggleClass('open'); 
        $('.burger__btn').toggleClass('open'); 
        $('body').toggleClass('hidden')
    }  

    $('.burger__wrapper').click(()=> {
        toggleBurger()
    })
}

// open and close video
if ($('.modal-v').length) {
    function openVideo() {
        $('.modal-v').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeVideo() {
        $('.modal-v').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal-v__wrapper').click(()=> {
        closeVideo()
    })
}

//fixed header func
let lastScrollTop = 0; // Переменная для хранения последнего значения скролла

$(window).scroll(function () {
    let currentScrollTop = $(window).scrollTop();

    // Обработка класса sticky
    if (currentScrollTop >= 150) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }

    // Обработка класса hidden
    if (currentScrollTop > lastScrollTop) {
        // Скролл вниз
        $('.header').addClass('hidden');
    } else {
        // Скролл вверх
        $('.header').removeClass('hidden');
    }

    lastScrollTop = currentScrollTop; 
});

//calendar
$(document).ready(function() {
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let currentDate = new Date();

    function renderCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();

      $(".calendar__month").text(months[month]);
      $(".calendar__year").text(year);

      const firstDay = new Date(year, month, 1).getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();

      const daysContainer = $(".calendar__days");
      daysContainer.empty();

      // Пустые ячейки до первого дня
      for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        daysContainer.append('<div class="calendar__day calendar__day--empty"></div>');
      }

      // Дни месяца
      for (let day = 1; day <= lastDate; day++) {
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        daysContainer.append(`<div class="calendar__day" data-date="${dateString}">${day}</div>`);
      }
    }

    $(".calendar__nav--prev").click(function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      renderCalendar(currentDate);
    });

    $(".calendar__nav--next").click(function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
  });

//events page tab
const titles2 = document.querySelectorAll('.events2__tab');
const items2 = document.querySelectorAll('.events2__content');

titles2.forEach((title, index) => {
    title.addEventListener('click', () => {
        titles2.forEach(t => t.classList.remove('active'));
        items2.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
        items2[index].classList.add('active');
    });
});

// sovet page items active toggle
$(document).ready(function () {
    $('.sovet__count').on('click', function () {
      const index = $(this).index('.sovet__count');
      $(this).toggleClass('active');
      $('.sovet__item').eq(index).toggleClass('active');
    });
});

//search burger open/close
function searchOpen() {
    $('.sovet__search').addClass('open');
}

function searchClose() {
    $('.sovet__search').removeClass('open');
}

//search burger items active toggle
$(document).ready(function () {
    // Клик по элементам sovet__search--item
    $('.sovet__search--item').on('click', function (e) {
      // Проверяем, был ли клик по чекбоксу
      if ($(e.target).is('input[type="checkbox"]')) {
        return; // Сохраняем стандартное поведение чекбокса
      }
  
      // Предотвращаем стандартное поведение для остальной части label
      e.preventDefault();
  
      // Переключаем состояние чекбокса
      const checkbox = $(this).find('input[type="checkbox"]');
      checkbox.prop('checked', !checkbox.prop('checked'));
  
      // Переключаем класс active у текущего элемента
      $(this).toggleClass('active');
  
      // Проверяем активные элементы для sovet__accept
      updateAcceptState();
    });
  
    // Клик по элементу sovet__reset
    $('.sovet__reset').on('click', function () {
      // Убираем класс active у всех sovet__search--item
      $('.sovet__search--item').removeClass('active');
  
      // Сбрасываем чекбоксы
      $('.sovet__search--item input[type="checkbox"]').prop('checked', false);
  
      // Убираем класс active у sovet__accept
      $('.sovet__accept').removeClass('active');
    });
  
    // Функция для обновления состояния sovet__accept
    function updateAcceptState() {
      if ($('.sovet__search--item.active').length > 0) {
        $('.sovet__accept').addClass('active');
      } else {
        $('.sovet__accept').removeClass('active');
      }
    }
  });
  
//sovetpage members tabs
const titles4 = document.querySelectorAll('.members__tab');
const items4 = document.querySelectorAll('.members__items');

titles4.forEach((title, index) => {
    title.addEventListener('click', () => {
        titles4.forEach(t => t.classList.remove('active'));
        items4.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
        items4[index].classList.add('active');
    });
});

setTimeout(() => {
    $('.members__items').eq(1).removeClass('active'); // eq(1) выбирает второй элемент (индексация с 0)
}, 100);

// open and close search in header
if ($('.header__search').length) {
    function openSeacrh() {
        $('.header__menu').addClass('hidden');
        $('.header__input').addClass('show');
        $('.header__search').addClass('hidden');
    }  
    function closeSearch() {
        $('.header__menu').removeClass('hidden');
        $('.header__input').removeClass('show');
        $('.header__search').removeClass('hidden');
    }   
}

//header search options open/close
$(document).ready(function () {
    $('.header__input input').on('input', function () {
      const $options = $('.header__input--options');
      if ($(this).val().trim() !== '') {
        $options.addClass('active');
      } else {
        $options.removeClass('active');
      }
    });
  });

// menu dropdown active 
$(document).ready(function() {
    $('.with-drop').on('click', function() {
      $('.with-drop').not(this).removeClass('active'); // Убирает класс у всех остальных
      $(this).toggleClass('active'); // Переключает класс только у текущего элемента
    });
  });

// sort dropdown in pull page
$('.pull__sort--current').click(()=> {
    $('.pull__sort--current').toggleClass('active');
    $('.pull__sort--others').toggleClass('active');
})

//speakers modal close/open
$(document).ready(function () {
    const $modal = $(".modal-s");
    const $modalItems = $(".modal-s__item");
    
    // Обработчик клика на спикеры
    $(".speaker").on("click", function () {
        const index = $(this).index(); // Получаем индекс текущего элемента

        $modal.addClass("open"); // Добавляем класс "опэн" модальному окну
        $modalItems.removeClass("active"); // Убираем класс "актив" у всех модальных элементов
        $modalItems.eq(index).addClass("active"); // Добавляем класс "актив" нужному модальному элементу
    });

    // Обработчик клика на modal-s__close и modal-s__wrapper
    $(".modal-s__close, .modal-s__wrapper").on("click", function () {
        $modal.removeClass("open"); // Убираем класс "опэн" у модального окна
        $modalItems.removeClass("active"); // Убираем класс "актив" у всех модальных элементов
    });
});

//thanks modal open/close
function thanksOpen() {
    $('.thanks').addClass('open');
    $('body').css('overflow', 'hidden'); 
}  

function thanksClose() {
    $('.thanks').removeClass('open');
    $('body').css('overflow', 'unset'); 
}
$(".thanks__wrapper").on("click", function () {
    thanksClose();
});


//live popup open/close
function liveOpen() {
    $('.modal-o').addClass('open');
    $('body').css('overflow', 'hidden'); 
}  

function liveClose() {
    $('.modal-o').removeClass('open');
    $('body').css('overflow', 'unset'); 
}
$(".modal-o__wrapper").on("click", function () {
    liveClose();
});

// comments show/hide in pull page
$(document).ready(function () {
    // Обработка клика по кнопке comment__btn
    $('.comment__btn').on('click', function (e) {
      e.stopPropagation(); // Останавливаем всплытие, чтобы не закрыть при клике на кнопку
      const parent = $(this).closest('.pull__item'); // Находим родительский pull__item
      const comment = parent.find('.pull__comment'); // Находим pull__comment внутри этого pull__item
  
      $('.pull__comment').not(comment).removeClass('active'); // Убираем active у всех других pull__comment
      comment.toggleClass('active'); // Переключаем active на текущем pull__comment
    });
  
    // Убираем класс active при клике вне pull__comment
    $(document).on('click', function () {
      $('.pull__comment').removeClass('active');
    });
  
    // Предотвращаем закрытие при клике на pull__comment
    $('.pull__comment').on('click', function (e) {
      e.stopPropagation(); // Останавливаем всплытие
    });
  });
  
//menu dropdown in burger
$(document).ready(function () {
    $('.burger__title').on('click', function () {
        const parentItem = $(this).closest('.burger__item');
        const isActive = parentItem.hasClass('active');
        $('.burger__item').removeClass('active');
        if (!isActive) {
            parentItem.addClass('active');
        }
    });
});

// modal dropdown func
$(document).ready(function () {
    $(".input__drop--current").on("click", function () {
        $(this).parent(".input__drop").toggleClass("active");
    });

    $(".input__drop--other").on("click", function () {
        const selectedText = $(this).text(); 
        $(".input__drop--current b").text(selectedText); 
        $(this).closest(".input__drop").removeClass("active"); 
    });

    $(document).on("click", function (e) {
        if (!$(e.target).closest(".input__drop").length) {
            $(".input__drop").removeClass("active");
        }
    });
});  
  