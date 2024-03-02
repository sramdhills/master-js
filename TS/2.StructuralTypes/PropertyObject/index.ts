// Object Types Challenge
// Based on what we discussed we need to make up our Property Objects and array,
// can you create that array, making sure to assign the correct Types?
const propContainer = document.querySelector('.properties')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : { 
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string
    }[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//Properties
const properties :{
    image: string
     title: string
     price: number
     location: {
        firstLine: string
        city: string
        code: number
        country: string
     }
     contact: string
     isAvailable: boolean

}[] = [
    {
        image: 'images/Northern-lights-sky-Kautokeino.webp'
        title: "Citybox Bergen",
        price: 234,
        location: {
            firstLine:"Somewhere",
            city: "Bergen City",
            code: 939,
            country: "norway"
        },
        contact: "sramdhills@gmail.com",
        isAvailable: true
    },
    {
        image: 'images/Gdansk-Poland.webp',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

for(let i = 0; i < properties.length; length++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propContainer.appendChild(card)
}