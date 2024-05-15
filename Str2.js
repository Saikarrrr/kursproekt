document.addEventListener("DOMContentLoaded", function() {
    var btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function() {
        // Определяем текущую позицию прокрутки
        var scrollStep = -window.scrollY / (500 / 15),
            scrollInterval = setInterval(function() {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
    });

    // Показываем или скрываем кнопку в зависимости от прокрутки страницы
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    });
});