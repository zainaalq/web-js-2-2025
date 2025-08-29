'use strict';

const movies =[];
let joku = 'k';


while(joku === "k"){
const title = prompt('Anna elokuvan nimi');
if (title ===''){
  break;
}
const rating = prompt('Anna elokuvan arvio ');


const movie= {
  title: title,
  rating: rating

};

movies.push(movie);
const jatka = prompt ('Haluatko lisätä uuden elokuvan? (k/e)');

}

movies.sort((function(a,b))){
  return b.rating - a.rating;
};

console.log(movies);
let html = '';
for(let movie of movies){
  html += `
    <tr>

      <td>${movie.title}/td>
      <td>${movie.rating}</td>

    </tr>`;
}
document.querySelector('# target').innerHTML = html;
