<template>
    <div class="footer d-flex">
        <div class="buttons">
            <button class="footer-button">
                <a href="#"><img src="/img/svg-3.svg" alt="Purchase">Purchase Theme</a>
            </button>
            <button class="footer-button">
                <a href="#"><img src="/img/svg-2.svg" alt="Related">Related Themes</a>
            </button>
        </div>
        <div class="socials-box">
            <a href="#"><img src="/img/theme_eduprime_logo.png" alt="Logo"></a>
            <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities,
                courses, secondary school etc.</p>
            <a href="#"><i class="fa-brands fa-facebook-f socials p-3 me-2"></i></a>
            <a href="#"><i class="fa-brands fa-twitter socials p-3 me-2"></i></a>
            <a href="#"><i class="fa-brands fa-instagram socials p-3 me-2"></i></a>
        </div>
        <div class="links d-flex">
            <div class="text-white">
                <h3 class="mb-2 fs-5 ps-4">Get EduPrime</h3>
                <ul class="pt-2">
                    <li v-for="(element, index) in store.footer_left" :key="index">
                        <a :href="element.url">
                            {{ element.text }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-white">
                <h3 class="mb-2 fs-5 ps-4">Networking</h3>
                <ul class="pt-2">
                    <li v-for="(element, index) in store.footer_right" :key="index">
                        <a :href="element.url">
                            {{ element.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="search-box">
            <div class="searchbar">
                <input type="text" placeholder="Search ...">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <h5 class="pt-5"><strong>Search categories</strong></h5>
            </div>
            <div class="d-flex flex-wrap justify-content-end">
                <div v-for="(element, index) in store.buttons" :key="index">
                    <button class="btn-orange"><a href="#">{{ element.text }}</a></button>
                </div>
            </div>
            <p>ModelTheme.All rights reserved.</p>
        </div>
        <div class="background d-flex justify-content-end align-items-end">
            <a href="#"><img src="/img/back-to-top-arrow.svg" alt="Arrow"></a>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'FooterSection',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #ffffffCC;

    &:hover {
        color: white;
    }
}

ul li {
    list-style: none;
    margin: 10px 0;
}

.footer {
    height: 400px;
    background-color: #E56768;
    padding-top: 100px;
    color: #ffffffCC;

    .buttons {
        padding-left: 55px;
        padding-top: 170px;
    }

    .footer-button {
        background-color: #454545;
        border: none;
        border-radius: 5px;
        width: 170px;
        height: 30px;
        margin: 10px 0;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.6);
    }

    .footer-button a {
        display: flex;
        align-items: center;
        color: #8b8b8a;
        padding: 5px 10px;
        font-size: 12px;

        img {
            width: 15px;
            margin: 0 5px;
        }
    }

    .socials-box {
        width: 28%;
        font-size: 15px;

        img {
            width: 185px;
        }

        p {
            margin: 25px 0;
        }
    }

    .socials {
        font-size: 20px;
        border: 2px solid #E9D758;
        border-radius: 50%;
    }

    .links {
        width: 40%;
    }

    .search-box {
        text-align: right;
        width: 310px;
        padding-right: 2.2rem;

        .searchbar {
            position: relative;
        }

        input {
            padding: 20px 10px;
            padding-right: 100px;
            border: none;
            border-radius: 30px;
        }

        .icon {
            color: white;
            padding: 25px;
            background-color: #E9D758;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: -17px;
        }

        p {
            color: #E9D758;
            margin-top: 10px;
            font-size: 15px;
        }
    }

    .background {
        width: 10%;

        img {
            background-color: #E9D758;
            padding: 8px;
            border-radius: 50%;
            margin: 10px 20px;
        }
    }

    .btn-orange {
        background-color: #E56758;
        border: 1px solid white;
        border-radius: 15px;
        padding: 5px;
        margin-top: 5px;
    }
}
</style>