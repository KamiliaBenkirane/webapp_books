<template>
  <div>
    <Navbar/>
    <h1>Bienvenue sur MarLia.Bibliothèque</h1>
    <p>Découvrez les dernières actualités et les meilleurs livres du moment.</p>
    <div class="livres-list">
      <div v-for="livre in livreList" :key="livre.id" class="livre-item">
        <img :src="livre.imageUrl" alt="wallpaperbetter1">
        <h4>{{ livre.title }}</h4>
        <h5>{{livre.auteur}}</h5>
        <h5>{{livre.genres}}</h5>
        <h5>{{livre.edition}}</h5>
        <p>{{livre.description}}</p>
        <h5>{{ livre.note}}</h5>
        <h5>{{livre.prix}}</h5>
      </div>
    </div>

  </div>
  <Footer/>
</template>

<script setup>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from 'axios';

const livreList = [
  {
    imageUrl : 'https://www.lescreasderose.fr/wp-content/uploads/2020/07/Death-Is-The-Only-Ending-For-The-Villain-1.jpg',
    title: 'Titre: Death Is The Only Ending For The Villain',
    auteur : 'Auteur:Gwon Gyeoeul' ,
    genres: 'Genres: Fantaisie, Drame',
    edition: 'Edition: D&C Media',
    description: 'Resume: Penelope Eckart se réincarne en fille adoptive du duc Eckart et la méchante d\'un harem inversé datant de sim. Le problème est qu\'elle est entrée dans le jeu à sa plus grande difficulté, et quoi qu\'elle fasse, la mort l\'attend à chaque fin ! Avant que la "vraie fille" du Duc Eckart n\'apparaisse, elle doit choisir un des mâles présents et parvenir à une fin heureuse afin de survivre. Mais les deux frères se disputent toujours avec elle pour chaque petite chose, ainsi qu\'un prince héritier fou, dont les chemins mènent tous à la mort. Il y a même un magicien qui est amoureux de la piste féminine et un loyal chevalier esclave ! Mais d\'une manière ou d\'une autre, plus les compteurs de faveur des principaux masculins augmentent plus elle franchit la ligne avec eux ! C\'est l\'histoire de survie de Penelope, qui a été abandonnée dans un harem inversé fou de simulateurs de rencontre !',
    note : 4,
    prix:'Prix: 49,99 £',
  },
  {
    imageUrl: 'https://www.bookshop.ge/content/uploads/products/9780751565362.jpg',
    title: 'Titre: Harry Potter et l\'enfant maudit',
    auteur : 'Auteur: J.K.ROWLING' ,
    genres: 'Genres: Fantaisie, Aventure',
    edition: 'Edition: Little, Brown and Company',
    description: 'Resume: Etre Harry Potter n\'a jamais été facile et ne l\'est pas davantage depuis qu\'il travaille au coeur des secrets du ministère de la Magie. Marié et père de trois enfants, Harry se débat avec un passé qui refuse de le laisser en paix, tandis que son fils Albus affronte le poids d\'un héritage familial dont il n\'a jamais voulu. Quand passé et présent s\'entremêlent dangereusement, père et fils se retrouvent face à une dure vérité : les ténèbres surviennent parfois des endroits les plus inattendus.\n',
    note : 4,
    prix : 'Prix: 21,00 £',
  },
  {
    imageUrl: 'https://npr.brightspotcdn.com/dims4/default/4dc8b4b/2147483647/strip/true/crop/428x645+0+0/resize/880x1326!/quality/90/?url=http:%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkufm%2Ffiles%2F201510%2FEverything_Everything.png',
    title: 'Titre: Everything Everything',
    auteur : 'Auteur: Nicola Yoon' ,
    genres: 'Genres: Romance, Fiction',
    edition: 'Edition: Bayard Jeunesse',
    description: 'Resume: Ma maladie est aussi rare que célèbre, on l\'appelle "maladie de l\'enfant-bulle". En gros, je suis allergique au monde. Je viens d\'avoir dix-huit ans, et je n\'ai jamais mis un pied dehors. Un jour, un camion de déménagement arrive. Je regarde par la fenêtre et je le vois. Le fils des nouveaux voisins est grand, mince et habillé tout en noir. Il remarque que je l\'observe, et nos yeux se croisent pour la première fois. Dans la vie, on ne peut pas tout prévoir, mais on peut prévoir certaines choses. Par exemple, je vais certainement tomber amoureuse de lui. Et ce sera certainement un désastre.\n',
    note : 4,
    prix : 'Prix: 12,90 £',
  },
  {
    imageUrl: 'https://i.pinimg.com/originals/33/ab/9a/33ab9ad11379e8deacf32cf6792988a4.jpg',
    title:'Titre: Dans l\'ombre de Stella',
    auteur : 'Auteur: Alexandra Sirowy' ,
    genres: 'Genres: Thriller, Fiction',
    edition: 'Edition: Bayard Jeunesse',
    description: 'Resume: Il y a onze ans, Jeanie et Stella sont parties jouer dans la forêt, seule Stella est revenue...\n' +
        'Désormais adolescente, elle aspire à passer un été doux et tranquille avec ses amis. Pourtant, la découverte d\'un corps, dont la ressemblance avec Jeanie est troublante, va réveiller ce qui la hante depuis tant d\'années. Stella va tout faire pour se remémorer et comprendre ce qui s\'est passé lors de cette journée fatidique.\n' +
        'Mais attention, affronter les monstres du passé n\'est pas sans conséquences...',
    note : 4,
    prix : 'Prix: 17,90 £',
  },
  {
    imageUrl: 'https://img.livraddict.com/covers/215/215390/couv38291405.jpg',
    title: 'Titre: Le grand saut',
    auteur : 'Auteur: Florence HINCKEL' ,
    genres: 'Genres: Roman Adolescent',
    edition: 'Edition: Nathan',
    description: 'Resume: Iris, Paul, Rébecca, Marion, Alex et Sam sont amis depuis la sixième. Aujourd’hui, ils entrent en Terminale, cette dernière année tant attendue, tant redoutée. Enfin la libération ? Une chose est sûre, bien que le soleil baigne leur petite ville de La Ciotat, chacun sent que l’orage gronde…\n' +
        'Les sentiments depuis trop longtemps inavoués de certains, les relations familiales bancales des autres, la pression de l’avenir… tout devient insupportable. Et ce n’est pas la gigantesque soirée chez Madeleine qui va suffire à leur changer les idées. Au contraire, c’est même peut-être là que tout va définitivement basculer…',
    note : 4,
    prix : 'Prix: 16,95 £',
  },
];

axios.get('http://localhost:3000/user')
    .then((response) => {
      console.log(response.data.rows);
    })
    .catch((err) => console.log(err));

</script>

<style scoped>


h1 {
  margin-top: 70px;
}

/* Styles pour le conteneur principal */
.livres-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://wallpapercave.com/wp/wp3112585.jpg');
  background-size: cover;
  background-position: center;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}


/* Styles pour le titre */
h1 {
  font-size: 32px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Styles pour la description */
p {
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
}


.livre-item {
  width: calc(20% - 20px);
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  height: 1080px;
}

.livre-item img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.livre-item h3 {
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 5px;
}

.livre-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

</style>
