const params  = new URLSearchParams(document.location.search);

const fullName = document.querySelector(".fullName");
const title = document.querySelector(".title");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const business = document.querySelector(".business");
const businessDescription = document.querySelector(".businessDescription");
const reviews = document.querySelector(".reviews");
const time = document.querySelector(".time");

fullName.innerHTML = `Full Name: ${params.get('last_name')} ${params.get('first_name')}`
title.innerHTML = `Title: ${params.get('title')}`
email.innerHTML = `Email: ${params.get('Email')}`
phone.innerHTML = `Phone: ${params.get('phone')}`
business.innerHTML = `Business: ${params.get('business')}`
businessDescription.innerHTML = `Business Description: ${params.get('businessDescription')}`
reviews.innerHTML = `Membership Level: ${params.get('membership_level')}`
time.innerHTML = `Time: ${ Date(params.get('time')).toLocaleString()}`