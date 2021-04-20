// warning: terrible code ahead

var roots = false;
var ordered = false;
var idx = 0;
var didRoot = false;
const wordList = [{"root":"omni", "meaning":"all", "example":"omniscient", "definition":"all-knowing"},{"root":"cide", "meaning":"kill", "example":"regicide", "definition":"to kill a king"},{"root":"mono", "meaning":"one", "example":"monochromatic", "definition":"having only one color"},{"root":"frac", "meaning":"to break", "example":"fractious", "definition":"rebellious"},{"root":"morph", "meaning":"shape", "example":"amorphous", "definition":"lacking shape"},{"root":"hyper", "meaning":"too much", "example":"hyperbole", "definition":"an exaggeration"},{"root":"greg", "meaning":"group", "example":"gregarious", "definition":"sociable"},{"root":"ben", "meaning":"good", "example":"benevolent", "definition":"kind; friendly; likeable"},{"root":"loq", "meaning":"speech", "example":"colloquial", "definition":"casual speech"},{"root":"chron", "meaning":"time", "example":"anachronism", "definition":"something misplaced in time"},{"root":"migr", "meaning":"move", "example":"emigrant", "definition":"a person who leaves their home country"},{"root":"mal", "meaning":"bad", "example":"malevolent", "definition":"mean; hateful"},{"root":"fort", "meaning":"strengthen", "example":"fortitude", "definition":"courage; grit"},{"root":"neo", "meaning":"new", "example":"neophyte", "definition":"beginner; novice"},{"root":"multi", "meaning":"many", "example":"multifarious", "definition":"many different"},{"root":"culp", "meaning":"to blame", "example":"culpable", "definition":"guilty"},{"root":"sac", "meaning":"holy","example":"sacrilegious", "definition":"disrespectful to the sacred"},{"root":"am","meaning":"love", "example":"amicable", "definition":"nice; kind; loving"},{"root":"rupt","meaning":"broken", "example":"bankrupt", "definition":"broke; lost assets"},{"root":"term","meaning":"end", "example":"interminable", "definition":"never ending"},{"root":"cred", "meaning":"believable", "example":"incredulous", "definition":"unbelievable"},{"root":"mort", "meaning":"death", "example":"mortify", "definition":"to embarrass or scare to death"},{"root":"phobia", "meaning":"fear", "example":"xenophobia", "definition":"fear/dislike of foreigners"},{"root":"inter", "meaning":"between", "example":"interloper", "definition":"someone who is in another's business"},{"root":"anthro", "meaning":"human", "example":"misanthrope", "definition":"one who hates humans; antisocial"}];
var topic = wordList[Math.floor(Math.random()*wordList.length)];

function nextPrompt() {
	toggleRoots();
	topic = ordered ? wordList[idx] : wordList[Math.floor(Math.random()*wordList.length)];
	if (didRoot) { idx++; if (idx >= wordList.length) { idx = 0; } didRoot = false; } else { didRoot = true; }
	document.getElementById("content").innerHTML = roots ? "Guess the root by the meaning: <b>" + topic.meaning.toString() + "</b>" : "Guess the example by the definition: <b>" + topic.definition.toString() + "</b>";
}

function submit(guessOBJ) {
	var guess = guessOBJ.value;
	if (roots) {
		if (guess == topic.root) {
			guessOBJ.value = '';
			nextPrompt();
		}
	} else {
		if (guess == topic.example) {
			guessOBJ.value = '';
			nextPrompt();
		}
	}
}

function toggleRoots() {
	roots = roots ? false : true;
}

function toggleOrdered() {
	ordered = ordered ? false : true;
	if (!ordered) {
		idx = 0;
		didRoot = false;
	}
}
