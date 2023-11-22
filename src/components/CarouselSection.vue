<template>
    <section class="carousel-box mt-5">
        <h2>Faculties available at EduPrime</h2>
        <div class="text">
            <p>A single university with a load of courses, tailored to satisfy any student's needs.</p>
        </div>
        <div class="carousel">
            <div class="nav-carousel">
                <div v-for="(element, index) in carousel" :key="index" class="image-carousel"
                    :class="element.current ? 'active' : ''">
                    <img :src="`/img/${element.image}`" alt="images">
                    <p class="mt-4"><strong>{{ element.text }}</strong></p>
                </div>
            </div>
            <div class="carousel-content">
                <div class="img-content">
                    <img src="/img/Gavel-Illustration-e1556884768193.png" alt="Gavel">
                </div>
                <div class="text-content mt-3">
                    <h2>Law Faculty</h2>
                    <p>
                        Learning from world-leading academics and practitioners, you'll not only receive an
                        outstanding grounding
                        in the theory of law, but you will be able to understand how those principles are applied in
                        practice
                        through a range of student-led activities and competitions.
                    </p>
                    <button class="btn_red">Read More</button>
                </div>
            </div>
        </div>
        <img src="/img/svg-0.svg" style="width: 100%; display: block;" alt="Wave">
    </section>
</template>

<script>
export default {
    name: 'CarouselSection',
    data() {
        return {
            carousel: [
                {
                    image: 'Gavel-v2.png',
                    text: 'Law faculty',
                },
                {
                    image: 'Coins-tabs-v2.png',
                    text: 'Economy',
                },
                {
                    image: 'Medicine-tabs-v2.png',
                    text: 'Medicine',
                },
                {
                    image: 'Computer-tabs-v2.png',
                    text: 'Computer Science',
                },
                {
                    image: 'Palette-tabs-v2.png',
                    text: 'Graphic Design',
                },
            ],
        }
    }

}
</script>

<style lang="scss" scoped>
.carousel-box {

    text-align: center;

    h2 {
        color: black;
        font-size: 40px;
        font-weight: 900;
    }

    .text {
        width: 25%;
        margin: 30px auto;

        p {
            color: black;
        }
    }

    .nav-carousel {
        display: flex;
        width: 70%;
        margin: 20px auto;
    }

    .image-carousel {
        padding: 40px 60px;
        color: #E56768;
        border: 1px solid #ECECEE;
        cursor: pointer;
        box-shadow: 0 10px 5px #dedede;

        img {
            width: 100px;
        }

        &:hover {
            background-color: #E56768;
            color: white;
            border: none;

            img {
                filter: brightness(500%);
            }
        }
    }


    .active {
        background-color: #E56768;
        color: white;
        border: none;

        img {
            filter: brightness(500%);
        }

    }

    .carousel-content {
        width: 70%;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        text-align: left;

        .img-content {
            width: 450px;
        }

        .text-content {
            width: 50%;

            p {
                color: #8b8b8a;
                margin: 20px 0;
            }

            .btn_red {
                margin: 20px 0;
                background-color: #E56768;
                color: white;
                padding: 20px;
                border-radius: 20px;
                border: none;
            }
        }
    }
}
</style>