<template>
    <section class="bg-white">
        <div class="wawe">
            <img src="/img/svg-1.svg" alt="">
        </div>
        <div class="courses-box d-flex justify-content-between flex-wrap">
            <h2>Latest Courses</h2>
            <div class="card-box" v-for="(element, index) in store.courses" :key="index">
                <img :src="`/img/${element.image}`" alt="">
                <h4>{{ element.text }}</h4>
                <h5><i class="fa-regular fa-user"></i> Teacher:<b>{{ element.teacher }}</b></h5>
                <h5><i class="fa-regular fa-money-bill-1"></i> Price:<b>{{ element.price }}</b></h5>
                <button class="btn-red"><i class="fa-regular fa-eye pe-2"></i>View Course</button>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js';
export default {
    name: 'CoursesSection',
    data() {
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.wawe {
    overflow: hidden;

    img {
        width: 150%;
        display: block;
        margin-left: -15px;
        margin-top: -1px;
    }
}

h2 {
    font-weight: 900;
    color: #3D404F;
    font-size: 40px;
    width: 100%;
}

.courses-box {
    width: 70%;
    margin: 0 auto;

    .card-box {
        text-align: center;
        width: 220px;
        height: 300px;
        color: #8b8b8a;
        border: 1px solid #ECECEE;
        box-shadow: 5px 5px 5px #dedede;
        margin: 40px 0;

        h4 {
            color: #3D404F;
            font-weight: 900;
        }

        h5 {
            margin: 10px;
        }

        b {
            color: #3D404F;
        }

        img {
            width: 70px;
            margin: 10px 0;
        }

        .btn-red {
            margin: 20px 0;
            background-color: #E56768;
            color: white;
            padding: 10px;
            border-radius: 20px;
            border: none;
        }
    }
}
</style>