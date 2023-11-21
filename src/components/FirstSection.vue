<template>
    <section class="background">
        <div class="box">
            <div class="left">
                <img class="book_icon" src="/img/Books-icon.png" alt="Book-icon">
                <h2>Thousand of courses for any type of student</h2>
                <p>At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a
                    courses that satisfies your needs within a click away and applies for a course in a matter of
                    minutes.
                    EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it
                    provides.</p>
                <button class="btn-yellow">Browse through courses</button>
            </div>
            <div class="right">
                <img src="/img/Graduation-Illustration.png" alt="Graduation">
                <img class="shadow" src="/img/home-background.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background {
    background-image: url("../img/home-background.png");
    background-size: cover;
    background-repeat: no-repeat;

    .box {
        width: 70%;
        margin: 0 auto;
        display: flex;
        padding: 40px 0;

        .book_icon {
            width: 40px;
        }
    }

    .left {
        width: 50%;
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
            padding: 15px;
            border-radius: 30px;
            border: none;
        }
    }
}

.right {
    width: 50%;
    margin-left: 50px;
    position: relative;

    img {
        width: 450px;
    }

    .shadow {
        position: absolute;
        right: 0;
        top: 100px;
    }
}
</style>