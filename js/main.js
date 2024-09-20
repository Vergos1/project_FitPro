
(function ($) {
    "use strict";

    const productList = [
        {
            name: 'Nike Running Shoes',
            photo: 'images/product-1.png',
            price: 100,
            availableSizes: ["Size S", "Size M", "Size L"]
        },
        {
            name: 'Adidas Basketball Jersey',
            photo: 'images/product-2.png',
            price: 200,
            availableSizes: ["Size S", "Size M", "Size XL"]
        },
        {
            name: 'Under Armour Soccer Socks',
            photo: 'images/product-3.png',
            price: 300,
            availableSizes: ["Size S", "Size L"]
        },
        {
            name: 'Tennis Racket by Wilson',
            photo: 'images/product-4.png',
            price: 150,
            availableSizes: ["Size 1", "Size 2", "Size 3"]
        },
        {
            name: 'Golf Clubs by Callaway',
            photo: 'images/product-5.png',
            price: 500,
            availableSizes: ["Size 1", "Size 2", "Size 3"]
        },
        {
            name: 'Yoga Mat by Lululemon',
            photo: 'images/product-6.png',
            price: 80,
            availableSizes: ["Size 1", "Size 2"]
        },
        {
            name: 'Cycling Helmet by Specialized',
            photo: 'images/product-7.png',
            price: 250,
            availableSizes: ["Size S", "Size M", "Size L"]
        },
        {
            name: 'Swimming Goggles by Speedo',
            photo: 'images/product-8.png',
            price: 120,
            availableSizes: ["Size 1", "Size 2"]
        }, {
            name: 'Running Shorts by Nike',
            photo: 'images/product-9.png',
            price: 60,
            availableSizes: ["Size S", "Size M", "Size L"]
        },
        {
            name: 'Basketball Shoes by Under Armour',
            photo: 'images/product-10.png',
            price: 180,
            availableSizes: ["Size S", "Size M", "Size L"]
        },
        {
            name: 'Soccer Cleats by Adidas',
            photo: 'images/product-11.png',
            price: 220,
            availableSizes: ["Size S", "Size M", "Size L"]
        },
        {
            name: 'Golf Balls by Titleist',
            photo: 'images/product-12.png',
            price: 10,
            availableSizes: ["Size 1", "Size 2", "Size 3"]
        },
        {
            name: 'Tennis Bags by Babolat',
            photo: 'images/product-13.png',
            price: 200,
            availableSizes: ["Size 1", "Size 2", "Size 3"]
        },
        {
            name: 'Cycling Shoes by Shimano',
            photo: 'images/product-14.png',
            price: 300,
            availableSizes: ["Size 1", "Size 2", "Size 3"]
        },
        {
            name: 'Swimming Caps by TYR',
            photo: 'images/product-15.png',
            price: 80,
            availableSizes: ["Size 1", "Size 2"]
        },
        {
            name: 'Yoga Blocks by Gaiam',
            photo: 'images/product-16.png',
            price: 40,
            availableSizes: ["Size 1", "Size 2"]
        },
    ]

    function displayProducts() {
        let productListHtml = '';
        productList.forEach(product => {
            productListHtml += `
                <div class="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img src="${product.photo}" alt="IMG-PRODUCT">
                            <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                Quick View
                            </a>
                        </div>
                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l">
                                <a href="contact.html" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ${product.name}
                                </a>
                                <span class="stext-105 cl3">
                                    $${product.price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        $('.slick2').html(productListHtml);
    }

    

    /*[ Load page ]
    ===========================================================*/
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'animsition-loading-1',
        loadingInner: '<div class="loader05"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function (url) { window.location.href = url; }
    });

    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height() / 2;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display', 'flex');
        } else {
            $("#myBtn").css('display', 'none');
        }
    });

    $('#myBtn').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if ($('.top-bar').length > 0) {
        var posWrapHeader = $('.top-bar').height();
    }
    else {
        var posWrapHeader = 0;
    }


    if ($(window).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top', 0);
    }
    else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
    }

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > posWrapHeader) {
            $(headerDesktop).addClass('fix-menu-desktop');
            $(wrapMenu).css('top', 0);
        }
        else {
            $(headerDesktop).removeClass('fix-menu-desktop');
            $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
        }
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function () {
        $(this).toggleClass('is-active');
        $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for (var i = 0; i < arrowMainMenu.length; i++) {
        $(arrowMainMenu[i]).on('click', function () {
            $(this).parent().find('.sub-menu-m').slideToggle();
            $(this).toggleClass('turn-arrow-main-menu-m');
        })
    }

    $(window).resize(function () {
        if ($(window).width() >= 992) {
            if ($('.menu-mobile').css('display') == 'block') {
                $('.menu-mobile').css('display', 'none');
                $('.btn-show-menu-mobile').toggleClass('is-active');
            }

            $('.sub-menu-m').each(function () {
                if ($(this).css('display') == 'block') {
                    console.log('hello');
                    $(this).css('display', 'none');
                    $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
                }
            });

        }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function () {
        $('.modal-search-header').addClass('show-modal-search');
        $(this).css('opacity', '0');
    });

    $('.js-hide-modal-search').on('click', function () {
        $('.modal-search-header').removeClass('show-modal-search');
        $('.js-show-modal-search').css('opacity', '1');
    });

    $('.container-search-header').on('click', function (e) {
        e.stopPropagation();
    });


    /*==================================================================
    [ Isotope ]*/
    var $topeContainer = $('.isotope-grid');
    var $filter = $('.filter-tope-group');

    // filter items on button click
    $filter.each(function () {
        $filter.on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $topeContainer.isotope({ filter: filterValue });
        });

    });

    // init Isotope
    $(window).on('load', function () {
        var $grid = $topeContainer.each(function () {
            $(this).isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'fitRows',
                percentPosition: true,
                animationEngine: 'best-available',
                masonry: {
                    columnWidth: '.isotope-item'
                }
            });
        });
    });

    var isotopeButton = $('.filter-tope-group button');

    $(isotopeButton).each(function () {
        $(this).on('click', function () {
            for (var i = 0; i < isotopeButton.length; i++) {
                $(isotopeButton[i]).removeClass('how-active1');
            }

            $(this).addClass('how-active1');
        });
    });

    /*==================================================================
    [ Filter / Search product ]*/
    $('.js-show-filter').on('click', function () {
        $(this).toggleClass('show-filter');
        $('.panel-filter').slideToggle(400);

        if ($('.js-show-search').hasClass('show-search')) {
            $('.js-show-search').removeClass('show-search');
            $('.panel-search').slideUp(400);
        }
    });

    $('.js-show-search').on('click', function () {
        $(this).toggleClass('show-search');
        $('.panel-search').slideToggle(400);

        if ($('.js-show-filter').hasClass('show-filter')) {
            $('.js-show-filter').removeClass('show-filter');
            $('.panel-filter').slideUp(400);
        }
    });




    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click', function () {
        $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click', function () {
        $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click', function () {
        $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click', function () {
        $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function () {
        var numProduct = Number($(this).next().val());
        if (numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function () {
        var numProduct = Number($(this).prev().val());
        $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function () {
        var item = $(this).find('.item-rating');
        var rated = -1;
        var input = $(this).find('input');
        $(input).val(0);

        $(item).on('mouseenter', function () {
            var index = item.index(this);
            var i = 0;
            for (i = 0; i <= index; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for (var j = i; j < item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });

        $(item).on('click', function () {
            var index = item.index(this);
            rated = index;
            $(input).val(index + 1);
        });

        $(this).on('mouseleave', function () {
            var i = 0;
            for (i = 0; i <= rated; i++) {
                $(item[i]).removeClass('zmdi-star-outline');
                $(item[i]).addClass('zmdi-star');
            }

            for (var j = i; j < item.length; j++) {
                $(item[j]).addClass('zmdi-star-outline');
                $(item[j]).removeClass('zmdi-star');
            }
        });
    });

    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click', function (e) {
        e.preventDefault();
        $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click', function () {
        $('.js-modal1').removeClass('show-modal1');
    });


    // displayProducts();
    
})(jQuery);