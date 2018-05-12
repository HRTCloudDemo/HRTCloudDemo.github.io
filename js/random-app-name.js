const RANDOM_APP_NAME = "random-app-name";
const CSS_CLASS_APP_NAME = "app_name";

/* ported from  https://github.com/moby/moby/blob/master/pkg/namesgenerator/names-generator.go */
function randomAppName() {
  const LEFT = ["admiring", "adoring", "affectionate", "agitated", "amazing", "angry", "awesome", "blissful", "boring", "brave", "clever", "cocky", "compassionate", "competent", "condescending", "confident", "cranky", "dazzling", "determined", "distracted", "dreamy", "eager", "ecstatic", "elastic", "elated", "elegant", "eloquent", "epic", "fervent", "festive", "flamboyant", "focused", "friendly", "frosty", "gallant", "gifted", "goofy", "gracious", "happy", "hardcore", "heuristic", "hopeful", "hungry", "infallible", "inspiring", "jolly", "jovial", "keen", "kind", "laughing", "loving", "lucid", "mystifying", "modest", "musing", "naughty", "nervous", "nifty", "nostalgic", "objective", "optimistic", "peaceful", "pedantic", "pensive", "practical", "priceless", "quirky", "quizzical", "relaxed", "reverent", "romantic", "sad", "serene", "sharp", "silly", "sleepy", "stoic", "stupefied", "suspicious", "tender", "thirsty", "trusting", "unruffled", "upbeat", "vibrant", "vigilant", "vigorous", "wizardly", "wonderful", "xenodochial", "youthful", "zealous", "zen"];

  const RIGHT = ["albattani", "allen", "almeida", "agnesi", "archimedes", "ardinghelli", "aryabhata", "austin", "babbage", "banach", "bardeen", "bartik", "bassi", "beaver", "bell", "benz", "bhabha", "bhaskara", "blackwell", "bohr", "booth", "borg", "bose", "boyd", "brahmagupta", "brattain", "brown", "carson", "chandrasekhar", "shannon", "clarke", "colden", "cori", "cray", "curran", "curie", "darwin", "davinci", "dijkstra", "dubinsky", "easley", "edison", "einstein", "elion", "engelbart", "euclid", "euler", "fermat", "fermi", "feynman", "franklin", "galileo", "gates", "goldberg", "goldstine", "goldwasser", "golick", "goodall", "haibt", "hamilton", "hawking", "heisenberg", "hermann", "heyrovsky", "hodgkin", "hoover", "hopper", "hugle", "hypatia", "jackson", "jang", "jennings", "jepsen", "johnson", "joliot", "jones", "kalam", "kare", "keller", "kepler", "khorana", "kilby", "kirch", "knuth", "kowalevski", "lalande", "lamarr", "lamport", "leakey", "leavitt", "lewin", "lichterman", "liskov", "lovelace", "lumiere", "mahavira", "mayer", "mccarthy", "mcclintock", "mclean", "mcnulty", "meitner", "meninsky", "mestorf", "minsky", "mirzakhani", "morse", "murdock", "neumann", "newton", "nightingale", "nobel", "noether", "northcutt", "noyce", "panini", "pare", "pasteur", "payne", "perlman", "pike", "poincare", "poitras", "ptolemy", "raman", "ramanujan", "ride", "montalcini", "ritchie", "roentgen", "rosalind", "saha", "sammet", "shaw", "shirley", "shockley", "sinoussi", "snyder", "spence", "stallman", "stonebraker", "swanson", "swartz", "swirles", "tesla", "thompson", "torvalds", "turing", "varahamihira", "visvesvaraya", "volhard", "wescoff", "wiles", "williams", "wilson", "wing", "wozniak", "wright", "yalow", "yonath"];

  var left = LEFT[Math.floor(Math.random() * LEFT.length)];
  var right = RIGHT[Math.floor(Math.random() * RIGHT.length)];

  return left + '-' + right;
}

function resetRandomAppName() {
  Cookies.remove(RANDOM_APP_NAME, { path: '' });
  location.reload();
}

function moveResetRandomAppName() {
  var reset_button = document.getElementById('reset-random-app-name');
  var footer_menu = document.getElementById('footer-menu');

  if (!reset_button || !footer_menu) {
    // https://swizec.com/blog/how-to-properly-wait-for-dom-elements-to-show-up-in-modern-browsers/swizec/6663
    window.requestAnimationFrame(moveResetRandomAppName);
  } else {
     footer_menu.appendChild(reset_button);
   }
}

function replaceRandomAppName() {
  app_name = Cookies.get(RANDOM_APP_NAME, { path: '' });

  if (app_name === undefined) {
    app_name = randomAppName();
    Cookies.set(RANDOM_APP_NAME, app_name,{ path: '' });
  }

  var elements = document.getElementsByClassName(CSS_CLASS_APP_NAME);

  while (elements.length > 0) {
    var element = elements[0];

    switch (element.nodeName) {
      case 'A':
        element.href = "https://" + app_name + ".eu-de.mybluemix.net"
        element.classList.remove('app_name')
        break;
      case 'SPAN':
        element.parentNode.replaceChild(document.createTextNode(app_name), element);
        break;
      default:
        throw new Error("Don't know how to handle element " + element.outerHTML);
    }

    elements = document.getElementsByClassName(CSS_CLASS_APP_NAME);
  }
}
