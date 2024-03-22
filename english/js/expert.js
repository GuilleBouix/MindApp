const lista_palabras = [
    'cow', 'building', 'run', 'house', 'tree', 'planet',
    'mountain', 'river', 'ocean', 'sun', 'moon', 'star',
    'computer', 'phone', 'television', 'car', 'bicycle',
    'ice cream', 'pizza', 'hamburger', 'salad', 'fruit',
    'book', 'painting', 'music', 'movie', 'theater',
    'family', 'friend', 'love', 'hate', 'joy',
    'sadness', 'fear', 'surprise', 'anger', 'peace',
    'war', 'history', 'science', 'art', 'mathematics',
    'university', 'job', 'trip', 'adventure', 'dream',
    'fantasy', 'reality', 'time', 'space', 'life',
    'death', 'nature', 'city', 'country', 'world',
    'technology', 'innovation', 'creativity', 'learning', 'development',
    'culture', 'religion', 'philosophy', 'politics', 'economy',
    'medicine', 'sport', 'game', 'player', 'team',
    'celebrity', 'fame', 'history', 'future', 'past',
    'present', 'solution', 'problem', 'success', 'failure',
    'hope', 'desire', 'goal', 'satisfaction', 'challenge',
    'growth', 'change', 'transformation', 'magic', 'advance',
    'difference', 'similarity', 'complexity', 'simplicity', 'reward',
    'risk', 'gain', 'loss', 'beauty', 'ugliness',
    'painter', 'artist', 'scientist', 'writer', 'musician', 'actor',
    'director', 'company', 'customer', 'employee', 'boss', 'colleague',
    'teacher', 'student', 'school', 'university', 'classroom', 'exam',
    'research', 'discovery', 'invention', 'technology', 'internet',
    'networks', 'social', 'communication', 'journey', 'adventure', 'exploration',
    'nature', 'animal', 'plant', 'ecosystem', 'climate', 'planet',
    'system', 'structure', 'organization', 'community', 'society',
    'culture', 'tradition', 'history', 'origin', 'identity', 'religion',
    'belief', 'spirituality', 'philosophy', 'thought', 'ideology',
    'politics', 'government', 'power', 'rights', 'responsibility',
    'economy', 'market', 'money', 'wealth', 'poverty', 'work',
    'industry', 'innovation', 'theory', 'practice', 'learning',
    'education', 'health', 'medicine', 'illness', 'treatment',
    'sport', 'game', 'strategy', 'player', 'team', 'competition',
    'celebrity', 'fame', 'history', 'future', 'past', 'present',
    'solution', 'problem', 'success', 'failure', 'hope', 'desire',
    'goal', 'satisfaction', 'challenge', 'growth', 'change',
    'transformation', 'magic', 'advance', 'difference', 'similarity',
    'complexity', 'simplicity', 'reward', 'risk', 'gain',
    'loss', 'beauty', 'ugliness', 'art', 'creativity', 'imagination',
    'emotion', 'feeling', 'love', 'hate', 'joy', 'sadness',
    'fear', 'surprise', 'anger', 'peace', 'war', 'paradigm',
    'effervescence', 'anachronism', 'ephemeral', 'conjecture', 'synergy',
    'esoteric', 'paradox', 'effluvium', 'propensity', 'perplexity',
    'ambiguity', 'uberrimous', 'innuendo', 'plethora', 'chimera', 'ludic',
    'rhetoric', 'cognizable', 'epistemology', 'sine qua non', 'intrinsic',
    'magnanimous', 'sui generis', 'visceral', 'perdurable', 'iridescent',
    'aureate', 'apocryphal', 'exegesis', 'effervescent', 'twilight', 'effuse',
    'exquisite', 'idiosyncrasy', 'insipid', 'sesquipedalian', 'effluvia',
    'nebulous', 'anachronistic', 'ineffable', 'ubermouth', 'prosopopoeia',
    'reverberation', 'obnubilate', 'serendipity', 'efflorescent', 'empyrean',
    'inextricable', 'pilgrimage', 'vivacious', 'volatile', 'cataclysm',
    'chromatic', 'decay', 'sibylline', 'parable', 'laud', 'sibilance',
    'delectation', 'placid', 'analogy', 'oscillation', 'contumacy',
    'prerogative', 'amalgam', 'affable', 'efficacy', 'relic', 'enigma',
    'infimum', 'homunculus', 'faustian', 'sacrilegious', 'iconic', 'bizarre',
    'incubus', 'outrageous', 'profound', 'incandescent', 'copious', 'quid pro quo',
    'concatenation', 'effluent', 'abstruse', 'lineage', 'peremptory', 'anathema',
    'exegete', 'eclecticism', 'arbitrary', 'neophyte', 'oneiric', 'seraphic',
    'quixotic', 'compendium', 'convalescence', 'debilitation', 'effrontery',
    'propinquity', 'consternation', 'disquiet', 'melancholy', 'effervescence',
    'paroxysm', 'fracas', 'perplexity', 'inescapable', 'iridescent',
    'intransigent', 'paradigm', 'ephemeral', 'immaculate', 'acute', 'pilgrimage',
    'ubermouth', 'chimerical', 'unscathed', 'reminiscence', 'sybarite', 'exacerbated',
    'eloquence', 'sagacity', 'procrastination', 'providence', 'eclecticism',
    'diminution', 'idiosyncrasy', 'splendid', 'exhortation', 'dissent', 'gesticulation',
    'placid', 'serene', 'efflorescence', 'ambivalence', 'serendipity',
    'resilience', 'vicissitude', 'disdain', 'effusive', 'elegant', 'quid pro quo',
    'intricate', 'sesquipedalian', 'contumacy', 'quintessence', 'iniquity',
    'ineffable', 'concentric', 'enervating', 'peremptory', 'quixotic', 'avid',
    'abyss', 'ambit', 'parable', 'exegesis', 'delectation', 'enigma',
    'nebulous', 'anachronistic', 'plenitude', 'subtle', 'acumen', 'nihilism',
    'complacency', 'dearth', 'superfluous', 'pilgrimage', 'profound',
    'contemplative', 'enervating', 'sublime', 'effluvium', 'vicarious', 'synthetic',
    'imponderable', 'delirium', 'immaculate', 'imbue', 'magnanimous', 'plenipotentiary',
    'abjuration', 'effuse', 'adept', 'paradox', 'protervity', 'audacity', 'pudic',
    'albricias', 'unshaven', 'affluent', 'splendor', 'opulence', 'reparation',
    'unfortunate', 'macabre', 'quixotic', 'anathema', 'despot', 'insurgent', 'shallow']


const palabras = lista_palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));


// Función para enviar las palabras memorizadas
function mostrarEnviarPalabras() {
    const palabrasContainer = document.getElementsByClassName('palabras-container')[0];
    palabrasContainer.style.display = 'flex';
}


// Función para mostrar palabras
let palabrasMostradas = [];
function mostrarPalabras() {
    const palabrasContainer = document.getElementById('palabras-random');

    let index = 0;

    // Función para mostrar la siguiente palabra
    function mostrarSiguientePalabra() {
        if (index < 4) {
            // Muestra una palabra aleatoria del array
            const palabraIndex = Math.floor(Math.random() * palabras.length);
            palabrasContainer.textContent = palabras[palabraIndex];
            palabrasMostradas.push(palabras[palabraIndex]);
            index++;
        } else {
            // Elimina el div que contiene las palabras
            palabrasContainer.parentNode.removeChild(palabrasContainer);
            // Detiene el intervalo de tiempo
            clearInterval(interval);
            mostrarEnviarPalabras();
        }
    }

    // Mostrar palabras cada 2 segundos
    const interval = setInterval(mostrarSiguientePalabra, 600);

}
mostrarPalabras();


// Función para manejar el envío del formulario
const palabrasIngresadas = [];


// Función para agregar una palabra al array
function agregarPalabra() {
    // Obtener el primer elemento con la clase 'txtFacil'
    let palabraInput = document.getElementsByClassName('txtFacil')[0];

    // Obtener el valor del input
    let palabra = palabraInput.value.trim(); // Eliminar espacios en blanco al inicio y al final

    // Verificar si la palabra no está vacía y si aún no se han ingresado 3 palabras
    if (palabra !== '' && palabrasIngresadas.length < 4) {
        // Agregar la palabra al array
        palabrasIngresadas.push(palabra);

        // Limpiar el input
        palabraInput.value = '';
        
        // Verificar si se han ingresado 3 palabras
        if (palabrasIngresadas.length === 4) {
            // Comprobar si los dos arrays son iguales
            if (arraysIguales(palabrasIngresadas, palabrasMostradas)) {
                window.location.href = 'winner.html';
            } else {
                window.location.href = 'loser.html';
            }
        }
    } else {
        alert('Por favor, ingresa una palabra válida o ya se han ingresado las 3 palabras.');
    }
    const input = document.querySelector('.txtFacil');
    input.focus();
}


window.addEventListener("keydown",(e)=> {
    if (e.keyCode===13) {
        agregarPalabra();
        const input = document.querySelector('.txtFacil');
        input.focus();
    }
})


// Función para enviar las palabras ingresadas (simplemente las muestra en la consola en este ejemplo)
function enviarPalabras() {
    console.log('Palabras ingresadas:', palabrasIngresadas);
}


// Función para verificar si dos arrays son iguales
function arraysIguales(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


// Función para volver al Menu
function VolverMenu() {
    window.location.href = '../../index-en.html';
}


// Función para volver a Jugar
function VolverJugar() {
    window.location.href = 'expert.html';
}