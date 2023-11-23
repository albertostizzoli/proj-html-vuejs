import { reactive } from 'vue'

export const store = reactive({
    list_header: [
        {
            text: "Home",
            url: "#"
        },
        {
            text: "Courses",
            url: "#"
        },
        {
            text: "About Us",
            url: "#"
        },
        {
            text: "News",
            url: "#"
        },
        {
            text: "Pages",
            url: "#"
        },
        {
            text: "Contact",
            url: "#"
        },
        {
            text: "Purchase",
            url: "#"
        }
    ],
    carousel: [
        {
            image: 'Gavel-v2.png',
            text: 'Law faculty',
        },
        {
            image: 'Coins-tabs-v2.png',
            text: 'Economy',
        },
        {
            image: 'Medicine-tabs-v2.png',
            text: 'Medicine',
        },
        {
            image: 'Computer-tabs-v2.png',
            text: 'Computer Science',
        },
        {
            image: 'Palette-tabs-v2.png',
            text: 'Graphic Design',
        },
    ],
    courses: [
        {
            image: 'Decisions-icon.png',
            text: 'Make Better Decisions',
            teacher: 'James Colins',
            price: '$: 21,00',
        },
        {
            image: 'Speaker-icon.png',
            text: 'How to be a speaker',
            teacher: 'James Colins',
            price: 'Free',
        },
        {
            image: 'Network-icon.png',
            text: 'Network Introductions',
            teacher: 'James Colins',
            price: 'Free',
        },
        {
            image: 'Brand-icon.png',
            text: 'Brand Management',
            teacher: 'James Colins',
            price: 'Free',
        },
    ],
    footer_left: [
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
    footer_right: [
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
});