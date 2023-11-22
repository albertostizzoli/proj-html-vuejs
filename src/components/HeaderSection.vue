<template>
    <div class="hero-container">
        <div class="background-color">
            <div class="header">
                <img src="/img/theme_eduprime_logo.png" alt="Logo">
                <nav>
                    <ul>
                        <li v-for="(element, index) in list" :key="index">
                            <a :href="element.url">{{ element.text }}<i class="fa-solid fa-caret-down ms-1 "></i></a>
                        </li>
                    </ul>
                    <button class="btn-yellow ms-2">VIEW COURSES</button>
                </nav>
            </div>
            <div class="jumbotron">
                <h1 class="text-white pt-4"><strong>Key to your success</strong></h1>
                <p class="text-white p-3">EduPrime is the most versatile WordPress theme for educational purposes,
                    showcasting
                    universities, courses, secondary school etc.</p>
                <div>
                    <button class="btn-yellow me-2"><i class="fa-solid fa-magnifying-glass me-2"></i>Search Courses</button>
                    <button class="btn-orange ms-2"><i class="fa-solid fa-user-plus me-2"></i>Apply for University</button>
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
export default {
    name: 'HeaderSection',
    data() {
        return {
            list: [
                {
                    text: "Home",
                    url: "#"
                },
                {
                    text: "Courses",
                    url: "#"
                },
                {
                    text: "About Us",
                    url: "#"
                },
                {
                    text: "News",
                    url: "#"
                },
                {
                    text: "Pages",
                    url: "#"
                },
                {
                    text: "Contact",
                    url: "#"
                },
                {
                    text: "Purchase",
                    url: "#"
                }
            ],
        }
    }

}
</script>

<style lang="scss" scoped>
ul {
    display: inline-block;
}

.btn-yellow {
    background-color: #E9D758;
    color: white;
    padding: 10px;
    border-radius: 30px;
    border: none;
}

.hero-container {
    background-image: url("../img/theme_slider2_bg-1.jpg");
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    font-weight: 700;
    color: white;

    .background-color {
        background-color: rgba($color: #E56768, $alpha: 0.8);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
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

            li {
                display: inline-block;

                a {
                    color: white;
                    text-decoration: none;
                    padding: 0 10px;
                    font-weight: 800;
                }
            }
        }

    }
}

.icons{
    position: absolute;
    background-color:#E9D758;
    left: 0;
    bottom: 200px;
    font-size: 20px;
    color: white;
}

.jumbotron {
    width: 40%;
    margin: 0 auto;
    text-align: center;

    .btn-orange {
        background-color: white;
        color: #E56768;
        padding: 10px;
        border-radius: 30px;
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