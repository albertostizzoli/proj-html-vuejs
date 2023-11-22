<template>
    <section class="events">
        <img src="/img/upcoming-events-calendar-icon.png" alt="">
        <h2>Upcoming Events</h2>
        <div class="box">
            <div class="boxes">
                <h3>Coaching Sessions</h3>
                <h6><i class="fa-regular fa-calendar-days pe-2"></i>20 May 21:30 PM</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. [...]</p>
                <button class="btn-red"><i class="fa-solid fa-plus pe-2"></i>Find More</button>
            </div>
            <div class="boxes">
                <h3>Coaching Sessions</h3>
                <h6><i class="fa-regular fa-calendar-days pe-2"></i>24 Mar 18:00 PM</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. [...]</p>
                <button class="btn-red"><i class="fa-solid fa-plus pe-2"></i>Find More</button>
            </div>
            <div class="boxes">
                <h3>Coaching Sessions</h3>
                <h6><i class="fa-regular fa-calendar-days pe-2"></i>12 Feb 13:30 PM</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. [...]</p>
                <button class="btn-red"><i class="fa-solid fa-plus pe-2"></i>Find More</button>
            </div>
        </div>
        <span><button class="btn-yellow mt-2">View All Events</button></span>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.events {
    background-color: #E56768;
    text-align: center;
    padding-top: 50px;
    color: white;

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