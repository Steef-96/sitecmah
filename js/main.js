
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.single-gallery').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.recent-project').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });


    $(document).ready(function() {

    $('html, body').hide();

        if (window.location.hash) {

        setTimeout(function() {

        $('html, body').scrollTop(0).show();

        $('html, body').animate({

        scrollTop: $(window.location.hash).offset().top-100

        }, 1000)

        }, 0);

        }

        else {

        $('html, body').show();

        }

    });
  

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  })


    $('.active-about-carusel').owlCarousel({
        items:1,
        loop:true,
        margin:30,
        dots: true
    });

    $('.active-exibition-carusel').owlCarousel({
        items:3,
        margin:30,
        autoplay:true,
        loop:true,
        dots: true,       
            responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }

        }
    });


  //  Gallery 


    var parameters = {
          gridContainer: '#grid-container',
          gridItems: '.grid-item',
          gutter: 15,
          enableImagesLoaded: true
        };
        var grid = new justifiedGrid(parameters);
    $('body').imagesLoaded( function() {
       grid.initGrid();
    });
       


    //  Start Google map 

            // When the window has finished loading create our google map below

            if(document.getElementById("map")){
            
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }
    }


        $(document).ready(function() {
            $('#mc_embed_signup').find('form').ajaxChimp();
        });      








 });


  // Script pour le filtrage
    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.cma-filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Retire la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Ajoute la classe active au bouton cliqué
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                const formationCards = document.querySelectorAll('.cma-formation-card');
                
                formationCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    });



document.getElementById('searchBtn').addEventListener('click', function() {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = 'block';
    searchBar.classList.toggle('active');
    
    // Si ou vle search bar la vin aktif (focus) otomatikman
    if (searchBar.classList.contains('active')) {
        searchBar.focus();
    }
});

// Pou fèmen search bar la lè w klike deyò
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('searchBar').classList.remove('active');
    }
});


// Script pour le changement de langue (visuel seulement)
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Retirer la classe active de tous les boutons
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Ajouter la classe active au bouton cliqué
        this.classList.add('active');
        
        // Ici vous ajouterez la logique réelle de changement de langue
        console.log(`Langue sélectionnée: ${this.textContent}`);
    });
});

// Script pour les autres boutons d'action
document.querySelectorAll('.action-btn, .logout-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Ici vous ajouterez les actions correspondantes
        console.log(`Action: ${this.textContent}`);
    });
});

// Script pour les fonctionnalités des documents
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const docTitle = this.closest('.document-card').querySelector('h3').textContent;
        console.log(`Visualisation du document: ${docTitle}`);
        // Ici vous ajouteriez la logique pour ouvrir le document
    });
});

document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const docTitle = this.closest('.document-card').querySelector('h3').textContent;
        console.log(`Téléchargement du document: ${docTitle}`);
        // Ici vous ajouteriez la logique pour télécharger
    });
});

document.querySelector('.upload-btn').addEventListener('click', function() {
    console.log("Ouverture de l'interface d'upload");
    // Ici vous ajouteriez la logique pour uploader
});


// Script pour la galerie interactive
document.querySelectorAll('.artisan-card').forEach(card => {
    card.addEventListener('click', function() {
        const artisanName = this.querySelector('h3').textContent;
        console.log(`Voir portfolio de ${artisanName}`);
        // Ici: Ouvrir un modal avec plus de détails
    });
});

// Script pour le CTA
document.querySelector('.cta-button').addEventListener('click', function() {
    console.log("Ouverture du formulaire d'inscription");
    // Ici: Redirection vers le formulaire
});



// Menu Konneksyon
const loginBtn = document.getElementById('loginBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

loginBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Espace Artisans Modal
const espaceArtisansBtn = document.getElementById('espaceArtisansBtn');
const artisansModal = document.getElementById('artisansModal');
const closeModal = document.getElementById('closeModal');

espaceArtisansBtn.addEventListener('click', () => {
    artisansModal.classList.add('active');
});
closeModal.addEventListener('click', () => {
    artisansModal.classList.remove('active');
});

// Fèmen modal lè w klike deyò
artisansModal.addEventListener('click', (e) => {
    if (e.target === artisansModal) {
        artisansModal.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Modal pou org-card
    document.querySelectorAll('.org-card').forEach(card => {
        card.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

function openModal(id = 'agModal') {
       const modal = document.getElementById(id);
       if (modal) {
    modal.style.display = 'block';
  }
}


    // Bouton pou fèmen modal yo
    document.querySelectorAll('.org-modal .close').forEach(btn => {
        btn.addEventListener('click', function () {
            const modal = this.closest('.org-modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fèmen si moun klike deyò modal-content
    document.querySelectorAll('.org-modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});


 // Fonctionnalités JavaScript améliorées gallerie
    document.addEventListener('DOMContentLoaded', function() {
        // Filtrage
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Mettre à jour les boutons actifs
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filtrer les éléments
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Recherche
        const searchInput = document.querySelector('.gallery-search');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            galleryItems.forEach(item => {
                const title = item.querySelector('.item-title').textContent.toLowerCase();
                const desc = item.querySelector('.item-desc').textContent.toLowerCase();
                const tags = item.getAttribute('data-tags').toLowerCase();
                
                if (title.includes(searchTerm) || desc.includes(searchTerm) || tags.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Lightbox
        const lightboxModal = document.querySelector('.lightbox-modal');
        const lightboxContent = document.querySelector('.lightbox-media-container');
        const lightboxTitle = document.querySelector('.lightbox-title');
        const lightboxDesc = document.querySelector('.lightbox-desc');
        const closeBtn = document.querySelector('.close-btn');
        
        // Ouvrir lightbox
        function openLightbox(media, title, desc) {
            lightboxContent.innerHTML = '';
            
            if (media.tagName === 'IMG') {
                const imgClone = media.cloneNode();
                lightboxContent.appendChild(imgClone);
            } else if (media.tagName === 'VIDEO') {
                const videoClone = media.cloneNode(true);
                videoClone.controls = true;
                videoClone.autoplay = true;
                lightboxContent.appendChild(videoClone);
            }
            
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;
            lightboxModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        // Fermer lightbox
        closeBtn.addEventListener('click', () => {
            lightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Clic sur les éléments
        document.querySelectorAll('.view-btn, .play-btn, .gallery-media').forEach(element => {
            element.addEventListener('click', function() {
                const item = this.closest('.gallery-item');
                const media = item.querySelector('.gallery-media');
                const title = item.querySelector('.item-title').textContent;
                const desc = item.querySelector('.item-desc').textContent;
                
                openLightbox(media, title, desc);
            });
        });
        
        // Pagination (simulée)
        document.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                if (this.classList.contains('active')) return;
                
                document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                // Ici vous pourriez charger dynamiquement plus de contenu
                console.log('Charger page ' + this.textContent);
            });
        });
    });







