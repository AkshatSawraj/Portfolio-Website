$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


    const testimonialsContainer = document.querySelector('.testimonials-container')
    const testimonial = document.querySelector('.testimonial')
    const userImage = document.querySelector('.user-image')
    const username = document.querySelector('.username')
    const role = document.querySelector('.role')

    const testimonials = [
        {
            name: 'Kamaljit Singh',
            position: 'CEO & Founder at AMZ ONE STEP',
            photo: 'https://media-exp1.licdn.com/dms/image/C5603AQFeYHhgRzmoXA/profile-displayphoto-shrink_400_400/0/1627594161528?e=1650499200&v=beta&t=bVugdz4qfXsn6JDkL7PxTLv8ZCVvi7sEOulplhtzTTQ',
            text:
                'It was a pleasure to work with Akshat. I hired him as an intern to work in my company AMZ One Step. He is extremely capable and reqularly goes beyond his role description to get the job done. He is hard working, passionate and has zeal to learn. His positive approch and attention to detail make him a welcome addition to any team. I wish him all the best.',
        },
        {
            name: 'Nidhi Walia',
            position: ' Garnet Transportation LLC',
            photo:
                'https://media-exp1.licdn.com/dms/image/C5603AQFuWKBAaYGOZg/profile-displayphoto-shrink_400_400/0/1578458898904?e=1650499200&v=beta&t=l8NDOLdLZNqahU5aVmGu8Oq07TPv1-5wxYHu7oyiuuQ',
            text:
                "I have outsourced several web-development projects to Akshat, and his flexibility, enthusiasm, passion, knowledge, and strong understanding of current development practices impresses me every time I work with him. He is a true pleasure to work with.",
        },
        {
            name: 'Dmitriy Fominykh',
            position: 'Software Developer',
            photo: 'https://media-exp1.licdn.com/dms/image/C5603AQGyTg4JeNzAIw/profile-displayphoto-shrink_400_400/0/1606084755042?e=1650499200&v=beta&t=k4jTPQIUqsB_qzxBh8a-o752cIVFaxGqonYyzCeK8-g',
            text:
                " Akshat is very hardworking and extremely talented individual. He is good at software development and also has a lot of deep technical background. I have nown him since last 2 years. He has transformed himself from a juniour developer to proffesional developer.",
        },
        
        
        {
            name: 'Ashesh Handa',
            position: 'Technical Support at Concentrix',
            photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQHpJXKHtyAqDA/profile-displayphoto-shrink_400_400/0/1595478239674?e=1650499200&v=beta&t=9rUaP290qWZLmvP9OnmF35m2q0pxtg6Z7teVhXjZkJc',
            text:
                " Akshat is an amazing developer. He stresses on good, clean code and pays heed to the details. He respect each and every aspect thought out design and do his best to put it in code. He goes over and beyond and transforms ART into PIXELS.",
        },
        
        
    ]

    let idx = 1;
    
    function updateTestimonial() {
        const { name, position, photo, text } = testimonials[idx]

        testimonial.innerHTML = text
        userImage.src = photo
        username.innerHTML = name
        role.innerHTML = position

        idx++

        if (idx > testimonials.length - 1) {
            idx = 0
        }
    }

    setInterval(updateTestimonial, 10000)

}



);

function send(){
    console.log("hi");
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;

    window.open('mailto:akshatsawraj@gmail.com?subject='+subject+'&body='+message);
}