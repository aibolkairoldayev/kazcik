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

//about page tabs
const titles2 = document.querySelectorAll('.about__tabs--title');
const items2 = document.querySelectorAll('.about__content');
const heads = document.querySelectorAll('.about__title');

titles2.forEach((title, index) => {
    title.addEventListener('click', () => {
        titles2.forEach(t => t.classList.remove('active'));
        items2.forEach(item => item.classList.remove('active'));
        heads.forEach(item => item.classList.remove('active'));
        title.classList.add('active');
        items2[index].classList.add('active');
        heads[index].classList.add('active');
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


// custom select function in forms
$(document).ready(function() {
    $('.main-select').each(function() {
        var $select = $(this);
        var $current = $select.find('.main-current');
        var $others = $select.find('.main-others');
        var $hiddenInput = $select.find('.main-hidden');
        var $bTag = $current.find('b');

        // Переключение класса "show" при клике на main-current
        $current.click(function() {
            $select.toggleClass('show');
        });

        // Обработка выбора элемента в main-others
        $others.find('p').click(function() {
            var selectedText = $(this).text();
            $bTag.text(selectedText); // Обновляем текст внутри тега <b>
            $hiddenInput.val(selectedText); // Устанавливаем значение hidden input
            $select.removeClass('show'); // Убираем класс "show" после выбора
        });

        // Закрытие выпадающего списка при клике вне его
        $(document).click(function(e) {
            if (!$select.is(e.target) && $select.has(e.target).length === 0) {
                $select.removeClass('show');
            }
        });
    });
});

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
$(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
      $('.header').addClass('sticky');
    }
    else {
      $('.header').removeClass('sticky');
    }
});
