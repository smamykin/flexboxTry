//main styles
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.green.min.css'
import 'owl.carousel';

import '../style/main.scss';
import placeholder from './parts/Placeholder'

placeholder('.form-group', '.form-group__control', '.form-group__label-placeholder','form-group__label-placeholder_hidden')

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav:false,
        dots:true,
        autoplay: true,
        dotClass: 'owl-dot owl-dot_outline owl-dot_lightblue'
    });
});