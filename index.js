const selectTruth = document.querySelector(".select-truth");
const selectDare = document.querySelector("#select-dare");
const truthChallenge = document.querySelector("#truth-challenge");
const dareChallenge = document.querySelector("#dare-challenge");

let t = Math.round(Math.random() * challenge.truthquestions.length);
let d = Math.round(Math.random() * challenge.dares.length)
let pay = Math.round(Math.random() * challenge.penalty.length)

function loadTruthChallenge(e){
    truthChallenge.innerHTML = challenge.truthquestions[e];
}
function loadDareChallenge(e){
    dareChallenge.innerHTML = challenge.dares[e];
}


selectTruth.addEventListener('click', ()=>{
    dareChallenge.style.display = 'none';
    truthChallenge.style.display = 'block';
    loadTruthChallenge(t);
})
selectDare.addEventListener('click', ()=>{
    truthChallenge.style.display = 'none';
    dareChallenge.style.display = 'block';
    loadDareChallenge(d);
})


console.log(selectTruth)