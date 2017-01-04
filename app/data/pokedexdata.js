
/* Import pokemon images */
import * as POKEMON from './pokemonimages';

const pokedexData = [
  {
    "id": 0,
    "num": "001",
    "name": "BULBASAUR",
    'type': "poision",
    'image': POKEMON.BULBASAUR,
    'color': '#b97fc9',
    "selected": true,
    "description": `Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.`
  },{
    "id": 1,
    "num": "002",
    "name": "IVYSAUR",
    'type': "poision",
    'image': POKEMON.IVYSAUR,
    'color': '#b97fc9',
    "selected": false,
    "description": `There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.`
   },{
    "id": 2,
    "num": "003",
    "name": "VENUSAUR",
    'type': "poision",
    'image': POKEMON.VENUSAUR,
    'color': '#b97fc9',
    "selected": false,
    "description": `There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.`
  },{
    "id": 3,
    "num": "004",
    "name": "CHARMANDAR",
    'type': "fire",
    'image': POKEMON.CHARMANDAR,
    'color': '#bf4600',
    "selected": false,
    "description": `The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.`
  },{
    "id": 4,
    "num": "005",
    "name": "CHARMELEON",
    'type': "fire",
    'image': POKEMON.CHARMELEON,
    'color': '#bf4600',
    "selected": false,
    "description": `Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.`
  },{
    "id": 5,
    "num": "006",
    "name": "CHARIZARD",
    'type': "fire",
    'image': POKEMON.CHARIZARD,
    'color': '#bf4600',
    "selected": false,
    "description": `Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.`
  },
  {
    "id": 6,
    "num": "007",
    "name": "SQUIRTLE",
    'type': "water",
    'image': POKEMON.SQUIRTLE,
    'color': '#0084c1',
    "selected": false,
    "description": `Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.`
  },
  {
    "id": 7,
    "num": "008",
    "name": "WARTURTLE",
    'type': "water",
    'image': POKEMON.WARTURTLE,
    'color': '#0084c1',
    "selected": false,
    "description": `Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.`
  },{
    "id": 8,
    "num": "009",
    "name": "BLASTOISE",
    'type': "water",
    'image': POKEMON.BLASTOISE,
    'color': '#0084c1',
    "selected": false,
    "description": `Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.`
  },{
    "id": 9,
    "num": "010",
    "name": "CATERPIE",
    'type': "bug",
    'image': POKEMON.CATERPIE,
    'color': '#93ab3c',
    "selected": false,
    "description": `Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.`
  }
]

export default pokedexData