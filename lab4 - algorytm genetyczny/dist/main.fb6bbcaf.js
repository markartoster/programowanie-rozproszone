// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/main.js":[function(require,module,exports) {
// Ściany
var wallPosition = [{
  r: 0,
  c: 0
}, {
  r: 0,
  c: 1
}, {
  r: 0,
  c: 2
}, {
  r: 0,
  c: 3
}, {
  r: 0,
  c: 4
}, {
  r: 0,
  c: 5
}, {
  r: 0,
  c: 6
}, {
  r: 0,
  c: 7
}, {
  r: 0,
  c: 8
}, {
  r: 0,
  c: 9
}, {
  r: 0,
  c: 10
}, {
  r: 0,
  c: 11
}, {
  r: 1,
  c: 0
}, {
  r: 1,
  c: 4
}, {
  r: 1,
  c: 8
}, {
  r: 1,
  c: 11
}, {
  r: 2,
  c: 0
}, {
  r: 2,
  c: 1
}, {
  r: 2,
  c: 2
}, {
  r: 2,
  c: 6
}, {
  r: 2,
  c: 8
}, {
  r: 2,
  c: 9
}, {
  r: 2,
  c: 11
}, {
  r: 3,
  c: 0
}, {
  r: 3,
  c: 4
}, {
  r: 3,
  c: 6
}, {
  r: 3,
  c: 11
}, {
  r: 4,
  c: 0
}, {
  r: 4,
  c: 2
}, {
  r: 4,
  c: 4
}, {
  r: 4,
  c: 5
}, {
  r: 4,
  c: 8
}, {
  r: 4,
  c: 9
}, {
  r: 4,
  c: 11
}, {
  r: 5,
  c: 0
}, {
  r: 5,
  c: 3
}, {
  r: 5,
  c: 4
}, {
  r: 5,
  c: 8
}, {
  r: 5,
  c: 11
}, {
  r: 6,
  c: 0
}, {
  r: 6,
  c: 6
}, {
  r: 6,
  c: 11
}, {
  r: 7,
  c: 0
}, {
  r: 7,
  c: 2
}, {
  r: 7,
  c: 5
}, {
  r: 7,
  c: 6
}, {
  r: 7,
  c: 8
}, {
  r: 7,
  c: 11
}, {
  r: 8,
  c: 0
}, {
  r: 8,
  c: 2
}, {
  r: 8,
  c: 3
}, {
  r: 8,
  c: 4
}, {
  r: 8,
  c: 8
}, {
  r: 8,
  c: 9
}, {
  r: 8,
  c: 11
}, {
  r: 9,
  c: 0
}, {
  r: 9,
  c: 2
}, {
  r: 9,
  c: 4
}, {
  r: 9,
  c: 5
}, {
  r: 9,
  c: 7
}, {
  r: 9,
  c: 9
}, {
  r: 9,
  c: 11
}, {
  r: 10,
  c: 0
}, {
  r: 10,
  c: 2
}, {
  r: 10,
  c: 11
}, {
  r: 11,
  c: 0
}, {
  r: 11,
  c: 1
}, {
  r: 11,
  c: 2
}, {
  r: 11,
  c: 3
}, {
  r: 11,
  c: 4
}, {
  r: 11,
  c: 5
}, {
  r: 11,
  c: 6
}, {
  r: 11,
  c: 7
}, {
  r: 11,
  c: 8
}, {
  r: 11,
  c: 9
}, {
  r: 11,
  c: 10
}, {
  r: 11,
  c: 11
}];
var exit = {
  r: 10,
  c: 10
};
var player = {
  r: 1,
  c: 1
};
/*
Tabela stanów typy ruchów moveTypes
00 - Lewo
01 - Prawo
10 - Góra
11 - Dół
*/

var agentArray = [];
var winnerArray = [];
var winnerIndex = 0;
var isWinner = false;
var moveTypes = ['00', '01', '10', '11'];
var agentsMoves = [];
var agentsPositions = [];
var generation = 1; // Paramtery

var maxMoves = 40; // Długość chromosomu 80, maksymalnie mozna wykonać 40 ruchów

var population = 200; // rozmiar populacji

var probabilityOfCrossbreed = 0.7; // Prawdopodobieństwo krzyzowania 

var probabilityOfMutation = 0.7; // Prawdopodobieństwo mutacji

var max = 3; // Maksymalna ilość typów

var min = 0; // Minimalna ilość typów
//

var endingPositions = []; // Tablica pozycji końcowych wszytkich agentów

var BreakException = {}; //Inicjacja tablicy ruchów

var init = function init() {
  for (var counter = 0; counter < population; counter++) {
    agentsMoves.push([]);
    agentsPositions.push([]);
    agentArray.push({
      id: 0,
      agentsMoves: [],
      manhattan: []
    });
    winnerArray.push({
      id: 0,
      agentsPositions: [],
      manhattan: []
    });
  }
}; // Losowanie populacji początkowej


var generateStartingPopulation = function generateStartingPopulation() {
  agentsMoves = agentsMoves.map(function (agent) {
    var moves = []; // Pomocnicza wewnętrzna tablica

    for (var counter = 0; counter < maxMoves; counter++) {
      moves.push(moveTypes[Math.round(Math.random() * (max - min) + min)]);
    }

    agent = moves; // console.log(agent);

    return agent;
  });
  agentsPositions.forEach(function (test) {
    for (var index = 0; index < maxMoves; index++) {
      test.push({
        r: 0,
        c: 0
      });
    }
  });
  var tempAgentsPositionsArray = [];

  for (var index = 0; index < population; index++) {
    tempAgentsPositionsArray.push([]);
  }

  tempAgentsPositionsArray.forEach(function (test) {
    for (var _index = 0; _index < maxMoves; _index++) {
      test.push({
        r: 0,
        c: 0
      });
    }
  });
  var currentPosition = {
    r: player.r,
    c: player.c
  };
  agentsMoves.map(function (agentMove, indexMove) {
    agentMove.map(function (agentMoveInside, indexMoveInside) {
      if (agentMoveInside === moveTypes[0]) {
        currentPosition.c--;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[1]) {
        currentPosition.c++;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[2]) {
        currentPosition.r--;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[3]) {
        currentPosition.r++;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      }
    });
    currentPosition.r = player.r;
    currentPosition.c = player.c;
  });
  agentsPositions.map(function (agentPositions, indexOut) {
    agentPositions.map(function (agent, index) {
      agent.r = tempAgentsPositionsArray[indexOut][index].r;
      agent.c = tempAgentsPositionsArray[indexOut][index].c;
    });
  });
}; // Faza selekcji


var selection = function selection() {};

var manhattanJudge = function manhattanJudge() {
  var xi; // współrzędna końcowa agenta x  

  var yi; // współrzędna końcowa agenta y

  var xg = exit.c; // współrzędna x wyjścia/mety

  var yg = exit.r; // Współrzędna y wyjścia/,ety 

  var manhattan = []; //(1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))

  endingPositions.forEach(function (endingPosition, index) {
    xi = endingPosition.c;
    yi = endingPosition.r;
    manhattan.push(1 / (Math.abs(xi - xg) + Math.abs(yi - yg) + 1));
  }); //    console.log(manhattan);
  //    console.log(`Generacja ${generation}, odległość agent ${agent} do celu  : ${manhattan[agent]}`);

  for (var index = 0; index < population; index++) {
    agentArray[index].id = index;
    agentArray[index].agentsMoves = agentsMoves[index];
    agentArray[index].manhattan = manhattan[index];
  }

  agentArray = agentArray.sort(function (a, b) {
    // non-anonymous as you ordered...
    return b.manhattan < a.manhattan ? 1 // if b should come earlier, push a to end
    : b.manhattan > a.manhattan ? -1 // if b should come later, push a to begin
    : 0; // a and b are equal
  });
  var agents70 = [];
  var agents30 = [];
  agents70 = agentArray.slice(0, (population + 1) * 0.7); //console.log(agents70);

  agents30 = agentArray.slice((population + 1) * 0.7, population); //console.log(agents30);

  var startArray = [];
  var endArray = [];
  var startEndArray = [];
  agents70.forEach(function (agent) {
    startArray.push(agent.agentsMoves.slice(0, maxMoves / 2));
    endArray.push(agent.agentsMoves.slice(maxMoves / 2, maxMoves));
  }); // console.log(startArray);
  //console.log(endArray);
  //console.log(endArray[0]);
  //TUTAJ LOSUJEMY

  var help;

  for (var _index2 = 0; _index2 < endArray.length; _index2++) {
    endArray[_index2] = endArray[_index2].sort(function () {
      return Math.random() - 0.5;
    }).slice(0);
  } //----------------TUTAJ SKONCZYLISMY - CZYTAJ KOMENTARZE--------------

  /*
      Krzyzowanie startowych z koncowymi ruchami(jak na schemacie) do nowej TABLICY startEndArray
  */


  for (var _index3 = 0; _index3 < Math.floor((population + 1) * 0.7); _index3 = _index3 + 2) {
    try {
      startEndArray.push(startArray[_index3].concat(endArray[_index3 + 1])); //pierwszy startowy z nastepnym koncowym

      startEndArray.push(startArray[_index3 + 1].concat(endArray[_index3])); //nastepny startowy z pierwszym koncowym
    } catch (error) {
      console.log(_index3);
      console.log("population: ".concat((population + 1) * 0.7));
    }
  } //PODMIENIAMY TE 140 tablic ruchow agentow za 140 wymieszanych ruchow z tablicy startEndArray!


  for (var _index4 = 0; _index4 < agents70.length; _index4++) {
    for (var indexInside = 0; indexInside < maxMoves; indexInside++) {
      var a = {};
      agents70[_index4].agentsMoves[indexInside] = startEndArray[_index4][indexInside]; //PODMIANA

      var b = {};
    }
  } //W DUZEJ TABLICY AGENTOW agentArray Podmnieniamy pierwszych 140 agentow za tych zmutowanych z agents70


  for (var _index5 = 0; _index5 < agents70.length; _index5++) {
    var _a = {};
    agentArray[_index5].agentsMoves = agents70[_index5].agentsMoves.slice(0);
    var _b = {};
  } //GENERACJA + 1


  generation += 1;
};

searchRoute = function searchRoute() {
  var currentPosition = {
    r: player.r,
    c: player.c
  }; //NOWA TYMCZASOW TABLIC NA POZYCJE

  var tempAgentsPositionsArray = [];

  for (var index = 0; index < population; index++) {
    tempAgentsPositionsArray.push([]);
  }

  tempAgentsPositionsArray.forEach(function (test) {
    for (var _index6 = 0; _index6 < maxMoves; _index6++) {
      test.push({
        r: 0,
        c: 0
      });
    }
  }); //LICZYMY POZYCJE KORZYSTAJAC JUZ Z !!!!TABLICY OBIEKTOW AGENTOW!!!!

  agentArray.map(function (agentMove, indexMove) {
    agentMove.agentsMoves.map(function (agentMoveInside, indexMoveInside) {
      if (agentMoveInside === moveTypes[0]) {
        currentPosition.c--;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[1]) {
        currentPosition.c++;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[2]) {
        currentPosition.r--;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      } else if (agentMoveInside === moveTypes[3]) {
        currentPosition.r++;
        tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
        tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c;
      }
    });
    currentPosition.r = player.r;
    currentPosition.c = player.c;
  }); //MODYFIKUJEMY NA NOWO TABLICE POZYCJI

  agentsPositions.map(function (agentPositions, indexOut) {
    agentPositions.map(function (agent, index) {
      agent.r = tempAgentsPositionsArray[indexOut][index].r;
      agent.c = tempAgentsPositionsArray[indexOut][index].c;
    });
  }); //REFRESHUJEMY TABLICE KONCOWYCH POZYCJI

  endingPositions = []; //ZNOWU WRZUCAMY DO TEJ TABLICY OBIEKTY Z ROW I COLUMN POCZATKOWEJ POZYCJI

  for (var _index7 = 0; _index7 < population; _index7++) {
    endingPositions.push({
      r: 1,
      c: 1
    });
  } //SPRAWDZAMY SCIANY I WYLICZAMY POZYCJE KONCOWE


  agentsPositions.forEach(function (agentPosition, indexOut) {
    try {
      agentPosition.forEach(function (agent, index) {
        wallPosition.map(function (wall) {
          if (agent.r === wall.r && agent.c === wall.c) {
            if (index === 0) {
              endingPositions[indexOut].r = player.r;
              endingPositions[indexOut].c = player.c;
            } else {
              endingPositions[indexOut].r = agentPosition[index - 1].r;
              endingPositions[indexOut].c = agentPosition[index - 1].c;
            }

            throw BreakException;
          } else if (agent.r === exit.r && agent.c === exit.c) {
            /*
                WARUNEK ZNALEZIENIA WYJSCIA - DODAJEMY TABLICE POZYCJI DLA ZWYCIEZCY - zmienaimy isWinner an true i wychodzimy z petli
            */
            winnerArray[winnerIndex].id = winnerIndex;
            winnerArray[winnerIndex].agentsPositions = agentPosition.slice(0);
            winnerIndex++;
            isWinner = true;
          }
        });
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  });
  var xi; // współrzędna końcowa agenta x  

  var yi; // współrzędna końcowa agenta y

  var xg = exit.c; // współrzędna x wyjścia/mety

  var yg = exit.r; // Współrzędna y wyjścia/,ety 

  var manhattan = []; //(1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))

  endingPositions.forEach(function (endingPosition, index) {
    xi = endingPosition.c;
    yi = endingPosition.r;
    manhattan.push(1 / (Math.abs(xi - xg) + Math.abs(yi - yg) + 1));
  }); //    console.log(manhattan);
  //odmieniamy tylko manhattany

  for (var _index8 = 0; _index8 < population; _index8++) {
    agentArray[_index8].manhattan = manhattan[_index8];
  } //SORTOWANIE po MANHATTANACH


  agentArray = agentArray.sort(function (a, b) {
    // non-anonymous as you ordered...
    return b.manhattan < a.manhattan ? 1 // if b should come earlier, push a to end
    : b.manhattan > a.manhattan ? -1 // if b should come later, push a to begin
    : 0; // a and b are equal
  });
  console.log("Generacja ".concat(generation, ", odleg\u0142o\u015B\u0107 najlepszego agenta: ").concat(agentArray[population - 1].manhattan)); //ROZDZIALKA NA 70 i 30

  var agents70 = [];
  var agents30 = [];
  agents70 = agentArray.slice(0, (population + 1) * 0.7); //console.log(agents70);

  agents30 = agentArray.slice((population + 1) * 0.7, population); //console.log(agents30);

  var startArray = [];
  var endArray = [];
  var startEndArray = [];
  agents70.forEach(function (agent) {
    startArray.push(agent.agentsMoves.slice(0, maxMoves / 2));
    endArray.push(agent.agentsMoves.slice(maxMoves / 2, maxMoves));
  }); // console.log(startArray);
  //console.log(endArray);
  //console.log(endArray[0]);
  //TUTAJ LOSUJEMY

  var help;

  for (var _index9 = 0; _index9 < endArray.length; _index9++) {
    endArray[_index9] = endArray[_index9].sort(function () {
      return Math.random() - 0.5;
    }).slice(0);
  } //----------------TUTAJ SKONCZYLISMY - CZYTAJ KOMENTARZE--------------

  /*
      Krzyzowanie startowych z koncowymi ruchami(jak na schemacie) do nowej TABLICY startEndArray
  */


  for (var _index10 = 0; _index10 < Math.floor((population + 1) * 0.7); _index10 = _index10 + 2) {
    try {
      startEndArray.push(startArray[_index10].concat(endArray[_index10 + 1])); //pierwszy startowy z nastepnym koncowym

      startEndArray.push(startArray[_index10 + 1].concat(endArray[_index10])); //nastepny startowy z pierwszym koncowym
    } catch (error) {
      console.log(_index10);
      console.log("population: ".concat((population + 1) * 0.7));
    }
  } //PODMIENIAMY TE 140 tablic ruchow agentow za 140 wymieszanych ruchow z tablicy startEndArray!


  for (var _index11 = 0; _index11 < agents70.length; _index11++) {
    for (var indexInside = 0; indexInside < maxMoves; indexInside++) {
      var a = {};
      agents70[_index11].agentsMoves[indexInside] = startEndArray[_index11][indexInside]; //PODMIANA

      var b = {};
    }
  } //W DUZEJ TABLICY AGENTOW agentArray Podmnieniamy pierwszych 140 agentow za tych zmutowanych z agents70


  for (var _index12 = 0; _index12 < agents70.length; _index12++) {
    var _a2 = {};
    agentArray[_index12].agentsMoves = agents70[_index12].agentsMoves.slice(0);
    var _b2 = {};
  } //GENERACJA + 1


  generation += 1;
};

document.getElementById("start").addEventListener("click", function () {
  console.log("Start");
  init();
  generateStartingPopulation(); // console.log('agentsMoves: ');
  // console.log(agentsMoves);
  // agentsPositions.forEach((agent, index)=> {
  //     // console.log(agent[maxMoves-1]);
  //     if()
  //     endingPositions[index] =  agent[maxMoves-1];
  // })

  for (var index = 0; index < population; index++) {
    endingPositions.push({
      r: 1,
      c: 1
    });
  }

  agentsPositions.forEach(function (agentPosition, indexOut) {
    try {
      agentPosition.forEach(function (agent, index) {
        wallPosition.map(function (wall) {
          if (agent.r === wall.r && agent.c === wall.c) {
            if (index === 0) {
              endingPositions[indexOut].r = player.r;
              endingPositions[indexOut].c = player.c;
            } else {
              endingPositions[indexOut].r = agentPosition[index - 1].r;
              endingPositions[indexOut].c = agentPosition[index - 1].c;
            }

            throw BreakException;
          }
        });
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  }); //console.log(endingPositions);

  manhattanJudge();

  while (!isWinner) {
    searchRoute();
  } //console.log(endArray[0]);
  //
  // console.log(endingPositions);

  /*
      (1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))
  */
  // console.log('agentsPositions: ' + agentsPositions);

});
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49415" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.map