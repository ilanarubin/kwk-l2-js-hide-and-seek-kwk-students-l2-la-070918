//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(sector){
  return document.getElementById('nested').querySelector('div div div div')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i * n).toString()
  }
}

function deepestChild(){
  return document.getElementById('ul.').querySelector('div div div div')
}