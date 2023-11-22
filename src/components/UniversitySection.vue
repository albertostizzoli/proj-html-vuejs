<template>
    <section class="university">
        <div class="contents">
            <div>
                <img src="/img/Clock-and-Bell.png" alt="">
                <br>
                <h2>University Year</h2>
            </div>
            <div class="content">
                <div class="d-flex justify-content-center">
                    <div class="text">
                        <h4>Demo Classes</h4>
                        <p>In the first students try to accomodate with the teaching style and choose their optional courses.</p>
                    </div>
                    <div class="text">
                        <h4>Graduation Day</h4>
                        <p>On the day of graduation, all students gather for the ceremony and then network and party among others.</p>
                    </div>
                </div>
                <img src="/img/Timeline-Item.png" alt="">
                <div class="orientation d-flex">
                    <div class="text-2">
                        <h4>Orientation</h4>
                        <p>First day of the universuty year, all students gather for the opening ceremony and then network with others.</p>
                    </div>
                    <div class="text-2">
                        <h4>Evaluation</h4>
                        <p>At the end of a semester, students take a general evaluation test for every subjectthey're learning.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'UniversitySection',

}
</script>

<style lang="scss" scoped>
.university {
    color: white;

    .contents {
        background-color: #E56768;
        text-align: center;
        padding-top: 20px;

        img {
            width: 50px;
            margin: 10px;
        }

        p {
            font-weight: 200;
        }

        h2 {
            display: inline;
            background-color: #DB2A2C;
            font-size: 40px;
            font-weight: 900;
        }
    }

    .content {

        h4 {
            font-size: 20px;
            font-weight: 900;
            margin: 10px 0;
        }

        img {
            width: 1000px;
        }
            .text {
                width: 25%;
                margin-top: 50px;
                margin-left: 100px;
            }
        }

        .orientation {
            margin-left: 300px;

            .text-2 {
                width: 25%;
                margin-right: 100px;
            }
        }
    }

</style>