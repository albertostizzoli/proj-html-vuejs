<template>
    <div class="hero-container text-white">
        <div class="background">
            <div class="header d-flex justify-content-between align-items-center">
                <img src="/img/theme_eduprime_logo.png" alt="Logo">
                <nav>
                    <ul>
                        <li class="d-inline-block" v-for="(element, index) in store.list_header" :key="index">
                            <a :href="element.url">{{ element.text }}<i class="fa-solid fa-caret-down ms-1 "></i></a>
                        </li>
                    </ul>
                    <button class="btn-yellow ms-2 fw-bold">VIEW COURSES</button>
                </nav>
            </div>
            <div class="jumbotron">
                <h1 class="text-white pt-4 fw-bold"><strong>Key to your success</strong></h1>
                <h6 class="text-white p-3">EduPrime is the most versatile WordPress theme for educational purposes,
                    showcasting universities, courses, secondary school etc.</h6>
                <div>
                    <button class="btn-yellow me-2 fw-bold"><i class="fa-solid fa-magnifying-glass me-2"></i>Search
                        Courses</button>
                    <button class="btn-orange ms-2 fw-bold"><i class="fa-solid fa-user-plus me-2"></i>Apply for
                        University</button>
                </div>
            </div>
        </div>
        <div class="icons d-flex flex-column">
            <i class="fa-solid fa-cart-shopping p-2"></i>
            <i class="fa-solid fa-book-open p-2"></i>
            <i class="fa-solid fa-life-ring p-2"></i>
        </div>
    </div>
    <div class="wave">
        <img src="/img/Wave-1.png" alt="Wave">
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'HeaderSection',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    display: inline-block;
}

.btn-yellow {
    background-color: #E9D758;
    color: white;
    padding: 20px;
    border-radius: 40px;
    border: none;
}

.hero-container {
    background-image: url("../img/theme_slider2_bg-1.jpg");
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    .background {
        background-color: rgba($color: #E56768, $alpha: 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .header {
        padding-top: 2rem;
        padding-left: 1.3rem;
        padding-right: 1.7rem;

        img {
            width: 200px;
            margin: 0 20px;
        }

        ul {
            list-style-type: none;
            margin: 20px 0;

            a {
                color: white;
                text-decoration: none;
                padding: 0 10px;
                font-weight: 800;
            }

            a:hover {
                color: #E9D758;
            }
        }
    }

}

.icons {
    position: absolute;
    background-color: #E9D758;
    left: 0;
    bottom: 200px;
    font-size: 20px;
}

.jumbotron {
    width: 40%;
    margin: 0 auto;
    text-align: center;

    .btn-orange {
        background-color: white;
        color: #E56768;
        padding: 20px;
        border-radius: 40px;
        border: none;
    }
}

.wave {
    position: relative;

    img {
        width: 100%;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>