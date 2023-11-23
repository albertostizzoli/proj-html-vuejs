<template>
    <section class="text-center mt-5 pt-5">
        <h2>Faculties available at EduPrime</h2>
        <div class="w-25 m-5 m-auto">
            <p class="text-dark pt-3">A single university with a load of courses, tailored to satisfy any student's needs.
            </p>
        </div>
        <div>
            <div class="d-flex w-75 m-2 m-auto pt-3">
                <div v-for="(element, index) in carousel" :key="index" class="image-carousel"
                    :class="element.current ? 'active' : ''">
                    <img class="w-100" :src="`/img/${element.image}`" alt="images">
                    <p class="mt-4"><strong>{{ element.text }}</strong></p>
                </div>
            </div>
            <div class="carousel-content d-flex justify-content-between w-75 text-start">
                <div class="img-content mt-5">
                    <img src="/img/Gavel-Illustration-e1556884768193.png" alt="Gavel">
                </div>
                <div class="w-50 mt-5">
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
h2 {
    color: black;
    font-size: 40px;
    font-weight: 900;
}

.image-carousel {
    padding: 40px 60px;
    color: #E56768;
    border: 1px solid #ECECEE;
    cursor: pointer;
    box-shadow: 0 10px 5px #dedede;

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
    margin: 50px auto;

    .img-content {
        width: 450px;
    }

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
</style>