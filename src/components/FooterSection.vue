<template>
    <div class="footer">
        <div class="buttons">
            <button class="footer-button">
                <a href="#"><img src="/img/svg-3.svg" alt="">Purchase Theme</a>
            </button>
            <button class="footer-button">
                <a href="#"><img src="/img/svg-2.svg" alt="">Related Themes</a>
            </button>
        </div>
        <div class="socials-box">
            <a href="#"><img src="/img/theme_eduprime_logo.png" alt=""></a>
            <p>EduPrime is the most versatile WordPress theme for educational purposes, showcasing universities,
                courses, secondary school etc.</p>
            <a href="#"><i class="fa-brands fa-facebook-f socials p-3 me-2"></i></a>
            <a href="#"><i class="fa-brands fa-twitter socials p-3 me-2"></i></a>
            <a href="#"><i class="fa-brands fa-instagram socials p-3 me-2"></i></a>
        </div>
        <div class="links">
            <div class="text-white">
                <h3 class="mb-2 fs-5 ps-4">Get EduPrime</h3>
                <ul class="pt-2">
                    <li v-for="(element, index) in links" :key="index">
                        <a :href="element.url">
                            {{ element.text }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="text-white">
                <h3 class="mb-2 fs-5 ps-4">Networking</h3>
                <ul class="pt-2">
                    <li v-for="(element, index) in lists" :key="index">
                        <a :href="element.url">
                            {{ element.text }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="search-box">
            <div class="searchbar">
                <input type="text" placeholder="Search ...">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <h5 class="pt-5"><strong>Search categories</strong></h5>
            </div>
            <div class="d-flex flex-wrap justify-content-end">
                <button class="btn-orange"><a href="#">ECONOMY</a></button>
                <button class="btn-orange"><a href="#">DESIGN</a></button>
                <button class="btn-orange"><a href="#">COACHING</a></button>
                <button class="btn-orange"><a href="#">BUSINESS</a></button>
                <button class="btn-orange"><a href="#">MEDICINE</a></button>
                <button class="btn-orange"><a href="#">LAW</a></button>
                <button class="btn-orange"><a href="#">FITNESS</a></button>
            </div>
            <p>ModelTheme.All rights reserved.</p>
        </div>
        <div class="background">
            <a href="#"><img src="/img/back-to-top-arrow.svg" alt=""></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterSection',
    data() {
        return {
            links: [
                {
                    text: "Request a website",
                    url: "#"
                },
                {
                    text: "Browse Themes",
                    url: "#",
                },
                {
                    text: "Payment options",
                    url: "#",
                },
                {
                    text: "Support System",
                    url: "#",
                },
                {
                    text: "Checkout",
                    url: "#",
                },
                {
                    text: "Purchase Theme",
                    url: "#",
                }
            ],
            lists: [
                {
                    text: "Purchase Theme",
                    url: "#"
                },
                {
                    text: "Our Benefits",
                    url: "#",
                },
                {
                    text: "Our Team",
                    url: "#",
                },
                {
                    text: "Our Services",
                    url: "#",
                },
                {
                    text: "Other Products",
                    url: "#",
                },
                {
                    text: "My account",
                    url: "#",
                }
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: #ffffffCC;

    &:hover {
        color: white;
    }
}

ul li {
    list-style: none;
    margin: 10px 0;
}

.footer {
    height: 400px;
    background-color: #E56758;
    display: flex;
    padding-top: 100px;
    color: #ffffffCC;

    .buttons {
        padding-left: 55px;
        padding-top: 170px;
    }

    .footer-button {
        background-color: #454545;
        border: none;
        border-radius: 5px;
        width: 170px;
        height: 30px;
        margin: 10px 0;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.6);
    }

    .footer-button a {
        display: flex;
        align-items: center;
        color: #8b8b8a;
        padding: 5px 10px;
        font-size: 12px;

        img {
            width: 15px;
            margin: 0 5px;
        }
    }

    .socials-box {
        width: 28%;
        font-size: 15px;

        img {
            width: 185px;
        }
        p {
            margin: 25px 0;
        }
    }

    .socials {
        font-size: 20px;
        border: 2px solid #E9D758;
        border-radius: 50%;
    }

    .links{
        display: flex;
        width: 40%;
    }

    .search-box {
        text-align: right;
        width: 310px;
        padding-right: 2.2rem;

        .searchbar {
            position: relative;
        }

        input {
            padding: 20px 10px;
            padding-right: 100px;
            border: none;
            border-radius: 30px;
        }

        .icon {
            color: white;
            padding: 25px;
            background-color: #E9D758;
            border-radius: 50%;
            position: absolute;
            top: -1px;
            right: -17px;
        }

        p {
            color: #E9D758;
            margin-top: 10px;
            font-size: 15px;
        }
    }

    .background {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        width: 10%;

        img {
            background-color: #E9D758;
            padding: 8px;
            border-radius: 50%;
            margin: 10px 20px;
        }
    }

    .btn-orange{
        background-color: #E56758;
        border: 1px solid white;
        border-radius: 15px;
        padding: 5px;
        margin-top:5px;
    }
}
</style>