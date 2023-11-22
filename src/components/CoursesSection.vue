<template>
    <section class="courses">
        <div class="wawe">
            <img src="/img/svg-1.svg" alt="">
        </div>
        <div class="courses-box">
            <h2>Latest Courses</h2>
            <div class="card-box">
                <img src="/img/Decisions-icon.png" alt="Decision">
                <h4>Make Better Decisions</h4>
                <h5><i class="fa-regular fa-user"></i> Teacher: <b>James Colins</b></h5>
                <h5><i class="fa-regular fa-money-bill-1"></i> Price: <b>$ 21.00</b></h5>
                <button class="btn-red"><i class="fa-regular fa-eye pe-2"></i>View Course</button>
            </div>
            <div class="card-box">
                <img src="/img/Speaker-icon.png" alt="Speaker">
                <h4>How to be a speaker</h4>
                <h5><i class="fa-regular fa-user"></i> Teacher: <b>James Colins</b></h5>
                <h5><i class="fa-regular fa-money-bill-1"></i> Price: <b>Free</b></h5>
                <button class="btn-red"><i class="fa-regular fa-eye pe-2"></i>View Course</button>
            </div>
            <div class="card-box">
                <img src="/img/Network-icon.png" alt="Network">
                <h4>Network Introductions</h4>
                <h5><i class="fa-regular fa-user"></i> Teacher: <b>James Colins</b></h5>
                <h5><i class="fa-regular fa-money-bill-1"></i> Price: <b>Free</b></h5>
                <button class="btn-red"><i class="fa-regular fa-eye pe-2"></i>View Course</button>
            </div>
            <div class="card-box">
                <img src="/img/Brand-icon.png" alt="Brand">
                <h4>Brand Management</h4>
                <h5><i class="fa-regular fa-user"></i> Teacher: <b>James Colins</b></h5>
                <h5><i class="fa-regular fa-money-bill-1"></i> Price: <b>Free</b></h5>
                <button class="btn-red"><i class="fa-regular fa-eye pe-2"></i>View Course</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CoursesSection',

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

.courses {
    background-color: white;

    h2 {
        font-weight: 900;
        color: #3D404F;
        font-size: 40px;
        width: 100%;
    }

    .courses-box{
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

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
}
</style>