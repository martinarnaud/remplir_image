Appeler remplir_image.css et remplir_image.js

- Dans le code:
  &gt;div class="remplir_image">&gt;img src="monimage.jpg">&gt;/div>

- S'arranger pour définir la taille de la div .remplir_image 

- C'est tout. Le script va s'arranger pour que l'image occupe tout l'espace disponible: l'image sera donc plus haute ou plus large que ce qui est réellement affiché.

- Possibilité de déplacer le centre vertical de l'image:
  &gt;div class="remplir_image" data-v="0.3">
(le centrage se fait sur le tiers supérieur; la valeur 0.5 par défaut)

