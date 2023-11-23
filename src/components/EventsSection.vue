<template>
    <section class="events text-center text-white pt-5 pb-5">
        <img src="/img/upcoming-events-calendar-icon.png" alt="">
        <h2>Upcoming Events</h2>
        <div class="box">
            <div class="boxes" v-for="(element, index) in store.events" :key="index">
                <h3>{{ element.title }}</h3>
                <h6><i class="fa-regular fa-calendar-days pe-2"></i>{{ element.date }}</h6>
                <p>{{ element.text }}</p>
                <button class="btn-red"><i class="fa-solid fa-plus pe-2"></i>Find More</button>
            </div>
        </div>
        <span><button class="btn-yellow mt-2">View All Events</button></span>
    </section>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'EventsSection',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.events {
    background-color: #E56768;

    img {
        width: 50px;
    }

    h2 {
        font-size: 50px;
        font-weight: 900;
    }

    .btn-yellow {
        background-color: #E9D758;
        color: white;
        padding: 15px;
        border-radius: 30px;
        border: none;
    }

    .box {
        display: flex;
        justify-content: space-evenly;
        width: 70%;
        margin: 0 auto;

        .boxes {
            width: 300px;
            background-color: white;
            color: #8b8b8a;
            padding: 20px;
            border-radius: 10px;
            height: 170px;
            margin: 50px 0;
            position: relative;

            h3 {
                color: #3D404F;
                font-weight: 900;
            }

            h6 {
                margin: 5px;
            }

            .btn-red {
                margin: 20px 0;
                background-color: #E56768;
                color: white;
                padding: 10px;
                border-radius: 20px;
                border: none;
                position: absolute;
                bottom: -35px;
                left: 90px;
                box-shadow: 3px 3px 6px #DA5F60E6;
            }
        }

    }
}
</style>