
let homeScoreEl = document.getElementById("homeScore-el")
let homeCount = 0

let guestScoreEl = document.getElementById("guestScore-el")
let guestCount = 0


function home1El() {
    homeCount += 1
    homeScoreEl.textContent = homeCount
}

function home2El() {
    homeCount += 2
    homeScoreEl.textContent = homeCount
}

function home3El() {
    homeCount += 3
    homeScoreEl.textContent = homeCount
}

function guest1El() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}

function guest2El() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}

function guest3El() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}