
        // Inicializa Swiper
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // O 'vertical' si prefieres un carrusel vertical
            loop: false, // Para hacer que el carrusel sea infinito
            autoplay: {
                delay: 5000, // Tiempo en milisegundos entre cada slide
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

