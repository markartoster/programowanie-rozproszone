// Ściany
const wallPosition = [
    {r: 0, c: 0}, {r: 0, c: 1}, {r: 0, c: 2}, {r: 0,c:3}, {r:0,c:4}, {r:0,c:5}, {r:0,c:6}, {r:0,c:7}, {r:0,c:8}, {r:0,c:9}, {r: 0,c: 10}, {r: 0,c: 11},
    {r: 1, c: 0}, {r: 1, c: 4}, {r: 1, c: 8}, {r: 1,c: 11},
    {r: 2, c: 0}, {r: 2, c: 1}, {r: 2, c: 2}, {r: 2, c: 6}, {r: 2, c: 8}, {r: 2, c: 9}, {r: 2, c: 11},
    {r: 3, c: 0}, {r: 3, c: 4}, {r: 3, c: 6}, {r: 3,c: 11} ,
    {r: 4, c: 0}, {r: 4, c: 2}, {r: 4, c: 4}, {r: 4,c: 5}, {r: 4, c: 8}, {r: 4,c: 9}, {r: 4,c: 11},
    {r: 5, c: 0}, {r: 5, c: 3}, {r: 5, c: 4}, {r: 5, c: 8}, {r: 5, c: 11},
    {r: 6, c: 0}, {r: 6, c: 6}, {r: 6, c: 11}, 
    {r: 7, c: 0}, {r: 7, c: 2}, {r: 7, c: 5}, {r: 7,c: 6}, {r: 7, c: 8}, {r: 7 ,c: 11},
    {r: 8, c: 0}, {r: 8, c: 2}, {r: 8, c: 3}, {r: 8,c: 4}, {r: 8, c: 8}, {r: 8, c: 9}, {r: 8, c: 11},
    {r: 9, c: 0}, {r: 9, c: 2}, {r: 9, c: 4}, {r: 9,c: 5}, {r: 9,c: 7}, {r: 9,c: 9}, {r: 9,c: 11},
    {r: 10, c: 0}, {r: 10, c: 2},{r: 10, c: 11},
    {r: 11, c: 0}, {r: 11, c: 1},{r: 11, c: 2},{r: 11, c:3}, {r: 11, c:4}, {r: 11, c:5}, {r: 11, c:6}, {r: 11, c:7}, {r: 11, c:8}, {r: 11, c:9}, {r: 11, c: 10}, {r: 11, c: 11}
];
const exit = {r: 10, c: 10};
const player = {r: 1, c: 1};

/*
Tabela stanów typy ruchów moveTypes
00 - Lewo
01 - Prawo
10 - Góra
11 - Dół
*/
var agentArray = []
var winnerArray = []
var winnerIndex = 0;
var isWinner = false;

const moveTypes = ['00', '01', '10', '11'];
let agentsMoves = [];
let agentsPositions = [];
let generation = 1;

// Paramtery
const maxMoves = 40; // Długość chromosomu 80, maksymalnie mozna wykonać 40 ruchów
const population = 200; // rozmiar populacji
const probabilityOfCrossbreed = 0.7; // Prawdopodobieństwo krzyzowania 
const probabilityOfMutation = 0.7; // Prawdopodobieństwo mutacji
const max = 3; // Maksymalna ilość typów
const min = 0; // Minimalna ilość typów

//
let endingPositions = []; // Tablica pozycji końcowych wszytkich agentów
var BreakException = {};

//Inicjacja tablicy ruchów
const init = () => {
    for(let counter = 0; counter < population; counter++){
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
        })
    }
    
};

// Losowanie populacji początkowej
const generateStartingPopulation = () => {

    agentsMoves = agentsMoves.map((agent) => {
        
        let moves = []; // Pomocnicza wewnętrzna tablica
        
        for(let counter = 0; counter < maxMoves; counter++){
            
            moves.push(moveTypes[Math.round(Math.random()* (max - min) + min)])
        }
        
        agent = moves;
        // console.log(agent);
        return agent
    });

    agentsPositions.forEach(test => {
        for (let index = 0; index < maxMoves; index++) {
            test.push({r: 0, c: 0});           
        }
    })

    let tempAgentsPositionsArray = []
    for (let index = 0; index < population; index++) {
        tempAgentsPositionsArray.push([]);      
    }

    tempAgentsPositionsArray.forEach(test => {
        for (let index = 0; index < maxMoves; index++) {
            test.push({r: 0, c: 0});           
        }
    })

    
    let currentPosition = {r: player.r, c: player.c}; 
     

    agentsMoves.map((agentMove, indexMove) => {
        
        agentMove.map((agentMoveInside, indexMoveInside) => {
            
            
            
            if(agentMoveInside === moveTypes[0]){
                currentPosition.c--; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[1]){
                currentPosition.c++; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[2]){
                currentPosition.r--; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[3]){
                currentPosition.r++; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
        })
        currentPosition.r = player.r;
        currentPosition.c = player.c;

    })
    
    agentsPositions.map((agentPositions, indexOut) => {
        agentPositions.map((agent, index) => {
            agent.r = tempAgentsPositionsArray[indexOut][index].r;
            agent.c = tempAgentsPositionsArray[indexOut][index].c;
        })
    })
    
    
}



// Faza selekcji
const selection = () => {

}

const manhattanJudge = () => {
    var xi; // współrzędna końcowa agenta x  
   var yi; // współrzędna końcowa agenta y
   const xg = exit.c; // współrzędna x wyjścia/mety
   const yg = exit.r; // Współrzędna y wyjścia/,ety 
   var manhattan = []; //(1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))
   endingPositions.forEach((endingPosition, index) => {
       xi = endingPosition.c;
       yi = endingPosition.r;
       manhattan.push((1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 )));
       
   }) 
//    console.log(manhattan);
   
//    console.log(`Generacja ${generation}, odległość agent ${agent} do celu  : ${manhattan[agent]}`);
   for (let index = 0; index < population; index++) {
        agentArray[index].id = index;
        agentArray[index].agentsMoves = agentsMoves[index];
        agentArray[index].manhattan = manhattan[index];  
   }

    agentArray = agentArray.sort((a, b) => { // non-anonymous as you ordered...
    return b.manhattan < a.manhattan ?  1 // if b should come earlier, push a to end
         : b.manhattan > a.manhattan ? -1 // if b should come later, push a to begin
         : 0;                   // a and b are equal
    });

    
    var agents70 = [];
    var agents30 = [];
    agents70 = agentArray.slice(0,((population+1)*0.7));
    //console.log(agents70);
    agents30 = agentArray.slice(((population+1)*0.7), population);
    //console.log(agents30);
    var startArray = []
    var endArray = []
    var startEndArray = []
    agents70.forEach(agent => {    
        startArray.push(agent.agentsMoves.slice(0, maxMoves/2))       
        endArray.push(agent.agentsMoves.slice(maxMoves/2, maxMoves))
    })
    // console.log(startArray);
    //console.log(endArray);
    //console.log(endArray[0]);

    //TUTAJ LOSUJEMY
    var help;
    for (let index = 0; index < endArray.length; index++) {
        endArray[index] = endArray[index].sort(() => Math.random() - 0.5).slice(0);
        
    }

    //----------------TUTAJ SKONCZYLISMY - CZYTAJ KOMENTARZE--------------
    
    /*
        Krzyzowanie startowych z koncowymi ruchami(jak na schemacie) do nowej TABLICY startEndArray
    */
    for (let index = 0; index < Math.floor(((population+1)*0.7)); index = index+2) {
        try {
            startEndArray.push(startArray[index].concat(endArray[index+1])) //pierwszy startowy z nastepnym koncowym
            startEndArray.push(startArray[index+1].concat(endArray[index])) //nastepny startowy z pierwszym koncowym
        } catch (error) {
            console.log(index);
            console.log(`population: ${((population+1)*0.7)}`);
            
        }
        
    }

    
    //PODMIENIAMY TE 140 tablic ruchow agentow za 140 wymieszanych ruchow z tablicy startEndArray!

    for (let index = 0; index < agents70.length; index++) {
        for (let indexInside = 0; indexInside < maxMoves; indexInside++) {
            
            const a = {}
            agents70[index].agentsMoves[indexInside] = startEndArray[index][indexInside]; //PODMIANA
            const b = {}
            
        }
    }


    //W DUZEJ TABLICY AGENTOW agentArray Podmnieniamy pierwszych 140 agentow za tych zmutowanych z agents70

    for (let index = 0; index < agents70.length; index++) {
        const a = {}
        agentArray[index].agentsMoves = agents70[index].agentsMoves.slice(0)
        const b = {}
        
    }

    //GENERACJA + 1

   generation +=1 ;
}

searchRoute = () => {

    
    let currentPosition = {r: player.r, c: player.c}; 

    //NOWA TYMCZASOW TABLIC NA POZYCJE

    let tempAgentsPositionsArray = []
    
    for (let index = 0; index < population; index++) {
        tempAgentsPositionsArray.push([]);      
    }

    tempAgentsPositionsArray.forEach(test => {
        for (let index = 0; index < maxMoves; index++) {
            test.push({r: 0, c: 0});           
        }
    })

    //LICZYMY POZYCJE KORZYSTAJAC JUZ Z !!!!TABLICY OBIEKTOW AGENTOW!!!!
    
    agentArray.map((agentMove, indexMove) => {
        
        agentMove.agentsMoves.map((agentMoveInside, indexMoveInside) => {
            
            
            
            if(agentMoveInside === moveTypes[0]){
                currentPosition.c--; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[1]){
                currentPosition.c++; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[2]){
                currentPosition.r--; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
            else if (agentMoveInside === moveTypes[3]){
                currentPosition.r++; 
                tempAgentsPositionsArray[indexMove][indexMoveInside].r = currentPosition.r;
                tempAgentsPositionsArray[indexMove][indexMoveInside].c = currentPosition.c; 
            }
        })
        currentPosition.r = player.r;
        currentPosition.c = player.c;
    })

    //MODYFIKUJEMY NA NOWO TABLICE POZYCJI
    agentsPositions.map((agentPositions, indexOut) => {
        agentPositions.map((agent, index) => {
            agent.r = tempAgentsPositionsArray[indexOut][index].r;
            agent.c = tempAgentsPositionsArray[indexOut][index].c;
        })
    })

    //REFRESHUJEMY TABLICE KONCOWYCH POZYCJI
    endingPositions = [];

    //ZNOWU WRZUCAMY DO TEJ TABLICY OBIEKTY Z ROW I COLUMN POCZATKOWEJ POZYCJI
    for (let index = 0; index < population; index++) {
        endingPositions.push({r: 1, c: 1});           
    }

    //SPRAWDZAMY SCIANY I WYLICZAMY POZYCJE KONCOWE
    agentsPositions.forEach((agentPosition, indexOut) => {
        try {
            agentPosition.forEach((agent, index) => {
                
                    wallPosition.map(wall => {
                        if(agent.r === wall.r && agent.c === wall.c ){
                            
                            if(index === 0){
                                endingPositions[indexOut].r=player.r;
                                endingPositions[indexOut].c=player.c;
                            } else {

                                endingPositions[indexOut].r=agentPosition[index-1].r;
                                endingPositions[indexOut].c=agentPosition[index-1].c;
                            }      
                            throw BreakException
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
    const xg = exit.c; // współrzędna x wyjścia/mety
    const yg = exit.r; // Współrzędna y wyjścia/,ety 
    var manhattan = []; //(1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))
    endingPositions.forEach((endingPosition, index) => {
        xi = endingPosition.c;
        yi = endingPosition.r;
        manhattan.push((1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 )));
        
    }) 
 //    console.log(manhattan);
    

    //odmieniamy tylko manhattany

    for (let index = 0; index < population; index++) {
        
        agentArray[index].manhattan = manhattan[index];  
   }

   //SORTOWANIE po MANHATTANACH

   agentArray = agentArray.sort((a, b) => { // non-anonymous as you ordered...
    return b.manhattan < a.manhattan ?  1 // if b should come earlier, push a to end
         : b.manhattan > a.manhattan ? -1 // if b should come later, push a to begin
         : 0;                   // a and b are equal
    });

    
 
    console.log(`Generacja ${generation}, odległość najlepszego agenta: ${agentArray[population-1].manhattan}`);    
    
    
    //ROZDZIALKA NA 70 i 30

    var agents70 = [];
    var agents30 = [];
    agents70 = agentArray.slice(0,((population+1)*0.7));
    //console.log(agents70);
    agents30 = agentArray.slice(((population+1)*0.7), population);
    //console.log(agents30);
    var startArray = []
    var endArray = []
    var startEndArray = []
    agents70.forEach(agent => {    
        startArray.push(agent.agentsMoves.slice(0, maxMoves/2))       
        endArray.push(agent.agentsMoves.slice(maxMoves/2, maxMoves))
    })
    // console.log(startArray);
    //console.log(endArray);
    //console.log(endArray[0]);

    //TUTAJ LOSUJEMY
    var help;
    for (let index = 0; index < endArray.length; index++) {
        endArray[index] = endArray[index].sort(() => Math.random() - 0.5).slice(0);
        
    }

    //----------------TUTAJ SKONCZYLISMY - CZYTAJ KOMENTARZE--------------
    
    /*
        Krzyzowanie startowych z koncowymi ruchami(jak na schemacie) do nowej TABLICY startEndArray
    */
    for (let index = 0; index < Math.floor(((population+1)*0.7)); index = index+2) {
        try {
            startEndArray.push(startArray[index].concat(endArray[index+1])) //pierwszy startowy z nastepnym koncowym
            startEndArray.push(startArray[index+1].concat(endArray[index])) //nastepny startowy z pierwszym koncowym
        } catch (error) {
            console.log(index);
            console.log(`population: ${((population+1)*0.7)}`);
            
        }
        
    }

    
    //PODMIENIAMY TE 140 tablic ruchow agentow za 140 wymieszanych ruchow z tablicy startEndArray!

    for (let index = 0; index < agents70.length; index++) {
        for (let indexInside = 0; indexInside < maxMoves; indexInside++) {
            
            const a = {}
            agents70[index].agentsMoves[indexInside] = startEndArray[index][indexInside]; //PODMIANA
            const b = {}
            
        }
    }


    //W DUZEJ TABLICY AGENTOW agentArray Podmnieniamy pierwszych 140 agentow za tych zmutowanych z agents70

    for (let index = 0; index < agents70.length; index++) {
        const a = {}
        agentArray[index].agentsMoves = agents70[index].agentsMoves.slice(0)
        const b = {}
        
    }

    //GENERACJA + 1

   generation +=1 ;
}

document.getElementById("start").addEventListener("click",() => {
    console.log("Start")
    init();
    generateStartingPopulation();
    // console.log('agentsMoves: ');
    // console.log(agentsMoves);
    // agentsPositions.forEach((agent, index)=> {
    //     // console.log(agent[maxMoves-1]);
    //     if()

    //     endingPositions[index] =  agent[maxMoves-1];
        
    // })
    for (let index = 0; index < population; index++) {
        endingPositions.push({r: 1, c: 1});           
    }

    agentsPositions.forEach((agentPosition, indexOut) => {
        try {
            agentPosition.forEach((agent, index) => {
                
                    wallPosition.map(wall => {
                        if(agent.r === wall.r && agent.c === wall.c ){
                            
                            if(index === 0){
                                endingPositions[indexOut].r=player.r;
                                endingPositions[indexOut].c=player.c;
                            } else {

                                endingPositions[indexOut].r=agentPosition[index-1].r;
                                endingPositions[indexOut].c=agentPosition[index-1].c;
                            }      
                            throw BreakException
                        }    
                    });
                
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    });

    
    //console.log(endingPositions);
    manhattanJudge();
    
    while(!isWinner){
        searchRoute();
    }
    


    //console.log(endArray[0]);
    
    //
    // console.log(endingPositions);
    
    
    /*
        (1/(Math.abs(xi-xg) + Math.abs(yi-yg) +1 ))
    */
   
    // console.log('agentsPositions: ' + agentsPositions);
})

 

