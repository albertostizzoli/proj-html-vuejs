<template>
    <section class="background mt-4">
        <div class="box d-flex p-5 w-75">
            <div class="left w-50">
                <img class="book_icon" src="/img/Books-icon.png" alt="Book-icon">
                <h2>Thousand of courses for any type of student</h2>
                <p>At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find
                    a
                    courses that satisfies your needs within a click away and applies for a course in a matter
                    of
                    minutes. EduPrime is ranked as the most versatile university in the world, thanks to the
                    number of courses it provides.</p>
                <button class="btn-yellow">Browse through courses</button>
            </div>
            <div class="right">
                <img src="/img/Graduation-Illustration.png" alt="Graduation">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FirstSection',

}
</script>

<style lang="scss" scoped>
.background {
    background-image: url("../img/home-background.png");
    background-size: cover;
    background-repeat: no-repeat;

    .box {
        margin: 0 auto;

        .book_icon {
            width: 40px;
        }
    }

    .left {
        color: #3D404F;

        h2 {
            font-weight: 900;
            font-size: 40px;
            margin: 20px 0;
        }

        button {
            margin-top: 20px;
        }

        .btn-yellow {
            background-color: #E9D758;
            color: white;
            padding: 25px;
            border-radius: 45px;
            border: none;
        }
    }


    .right {
        width: 50%;
        margin-left: 50px;

        img {
            width: 450px;
        }
    }
}
</style>