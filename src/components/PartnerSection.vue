<template>
    <section class="partners">
        <div class="text pt-5 text-center">
            <h2>Partners</h2>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
        </div>
        <div class="partner-box d-flex justify-content-around w-75">
            <a href="#"><img class="little" src="/img/partner-2.png" alt="Logo-partner"></a>
            <a href="#"><img class="big" src="/img/partner-3.png" alt="Logo-partner"></a>
            <a href="#"><img class="big" src="/img/partner-4.png" alt="Logo-partner"></a>
            <a href="#"><img class="little" src="/img/partner-5.png" alt="Logo-partner"></a>
            <a href="#"><img class="big" src="/img/partner-6.png" alt="Logo-partner"></a>
            <a href="#"><img class="big" src="/img/partner-1.png" alt="Logo-partner"></a>
            <a href="#"><img class="little" src="/img/partner-7.png" alt="Logo-partner"></a>
        </div>
        <div class="wawe">
            <img src="/img/background-wave3.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
    name: 'PartnerSection',

}
</script>

<style lang="scss" scoped>
.partners {
    .text {
        width: 30%;
        margin: 20px auto;

        h2 {
            color: #3D404F;
            font-weight: 900;
            font-size: 2.5rem;
        }

        p {
            color: #3D404F;
            margin: 20px 0;
        }
    }

    .partner-box {
        margin: 30px auto;

        .big {
            width: 70px;
        }

        .little {
            width: 180px;
        }

        img {
            margin: 0 20px;
            filter: opacity(40%);
        }

        a img:hover {
            filter: none;
        }

    }

    .wawe {
        background-color: #F7F8FA;

        img {
            width: 100%;
            height: 200px;
        }
    }
}
</style>