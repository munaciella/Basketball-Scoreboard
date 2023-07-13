let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function add1home() {
    console.log("button clicked")
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function add2home() {
    console.log("button clicked")
    homeScore += 2
    homeScoreEl.textContent = homeScore    
}

function add3home() {
    console.log("button clicked")
    homeScore += 3
    homeScoreEl.textContent = homeScore    
}

function add1guest() {
    console.log("button clicked")
    guestScore += 1
    guestScoreEl.textContent = guestScore 
}
 
function add2guest() {
    console.log("button clicked")
    guestScore += 2
    guestScoreEl.textContent = guestScore 
}

function add3guest() {
    console.log("button clicked")
    guestScore += 3
    guestScoreEl.textContent = guestScore 
}

function reset() {
    console.log("button clicked")
    homeScore = 0
    homeScoreEl.textContent = homeScore
    guestScore = 0
    guestScoreEl.textContent = guestScore
} 