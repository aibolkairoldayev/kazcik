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
$('.services__items').css('margin-left', smallMargin + 'px');
$('.events__bot').css('margin-left', smallMargin + 'px');
$('.partners').css('margin-left', smallMargin + 'px');
$('.block2__bot').css('margin-left', smallMargin + 'px');
$('.gallery').css('margin-left', smallMargin + 'px');
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

// open and close callback modal
if ($('.modal').length) {
    function openModal() {
        $('.modal').addClass('show');
        $('body').css('overflow', 'hidden'); 
    }  
    function closeModal() {
        $('.modal').removeClass('show');
        $('body').css('overflow', 'unset'); 
    }   
    $('.modal__wrapper').click(()=> {
        closeModal()
    })
}

//burger open/closes
if($('.burger').length) {
    function toggleBurger() {
        $('.burger').toggleClass('open');   
    }  

    $('.burger__wrapper').click(()=> {
        toggleBurger()
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
  //main page tabs
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

  