// warning: terrible code ahead

var roots = false;
const wordList = [{"root":"omni", "meaning":"all", "example":"omniscient", "definition":"all-knowing"},{"root":"cide", "meaning":"kill", "example":"regicide", "definition":"to kill a king"},{"root":"mono", "meaning":"one", "example":"monochromatic", "definition":"having only one color"},{"root":"frac", "meaning":"break", "example":"fractious", "definition":"rebellious"},{"root":"morph", "meaning":"shape", "example":"amorphous", "definition":"lacking shape"},{"root":"hyper", "meaning":"too much", "example":"hyperbole", "definition":"an exaggeration"},{"root":"greg", "meaning":"group", "example":"gregarious", "definition":"sociable"},{"root":"ben", "meaning":"good", "example":"benevolent", "definition":"kind; friendly; likeable"},{"root":"loq", "meaning":"speech", "example":"colloquial", "definition":"casual speech"},{"root":"chron", "meaning":"time", "example":"anachronism", "definition":"something misplaced in time"},{"root":"migr", "meaning":"move", "example":"emigrant", "definition":"a person who leaves their home country"},{"root":"mal", "meaning":"bad", "example":"malevolent", "definition":"mean; hateful"},{"root":"fort", "meaning":"strengthen", "example":"fortitude", "definition":"courage; grit"},{"root":"neo", "meaning":"new", "example":"neophyte", "definition":"beginner; novice"},{"root":"multi", "meaning":"many", "example":"multifarious", "definition":"many different"}];
var topic = wordList[Math.floor(Math.random()*wordList.length)];

function nextPrompt() {
	toggleRoots()
	topic = wordList[Math.floor(Math.random()*wordList.length)];
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
