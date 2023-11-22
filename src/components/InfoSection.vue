<template>
    <section class="info d-flex flex-wrap justify-content-evenly mt-5">
        <div class="text">
            <img src="/img/Exam-icon.png" alt="">
            <h2>The most efficient examination method</h2>
            <p>EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the
                evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
            <button class="btn-red text-white">Discover the Method</button>
        </div>
        <div class="col-img w-50 ">
            <img src="/img/Exam-Illustration.png" alt="">
        </div>
        <div class="col-img w-50">
            <img src="/img/Girl-Illustration.png" alt="">
        </div>
        <div class="text">
            <img src="/img/Exam-icon-1.png" alt="">
            <h2>Variable fees for international students</h2>
            <p>EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.</p>
            <button class="btn-red text-white">List of Fees</button>
        </div>
    </section>
    <section class="subscribe">
            <div class="sub-box d-flex justify-content-evenly align-items-center">
                <div class="title">
                    <h2>Subscribe Now to Our Newsletter !</h2>
                </div>
                <div>
                    <div class="search-bar">
                        <input type="mail" placeholder="Email address...">
                        <i class="fa-solid fa-paper-plane icon-search"></i>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'InfoSection',

}
</script>

<style lang="scss" scoped>
.info{
    width: 80%;
    margin: 0 auto;

    .text{
        width: 40%;
        margin: 20px 0;

        h2 {
            font-weight: 900;
            font-size: 40px;
            color: #3D404F;
            margin-top: 10px;
        }

        img {
            width: 70px;
        }

        p {
            color: #3D404F;
            margin: 30px 0;
        }

        .btn-red {
                margin: 20px 0;
                background-color: #E56768;
                padding: 10px;
                border-radius: 20px;
                border: none;
            }
    }

    .col-img {
        margin: 20px 0;

        img {
            width: 500px;
        }
    }
}
.subscribe {
    background-color: #E56768;

    .sub-box {
        width: 80%;
        margin: 0 auto;
        padding: 3rem;

        .title{
            color: white;

            h2 {
                font-weight: 900;
                font-size: 2rem;
            }
        }

        .search-bar {
            position: relative;
        }

        input {
            padding: 20px 10px;
            padding-right: 150px;
            border: none;
            border-radius: 30px;
        }

        .icon-search {
            color: white;
            padding: 25px;
            background-color: #E9D758;
            border-radius: 50%;
            margin: -50px -65px;
        }
    }
}
</style>