let mode;
let mode2;
let quiz = [];

let eredmeny = [];



function modeSelect(selectedmode) {
    mode = selectedmode;

    document.getElementById("modeSelector").innerHTML =
    `
        <div onclick="modeSelect2('valasztott')">Választott tétel</div>
        <div onclick="modeSelect2('osszes')">Öszes tétel</div>
    `;
}

function modeSelect2(selectedmode) {
    mode2 = selectedmode;

    if (mode2 == "valasztott") {
        document.getElementById("modeSelector").style.display = "flex";
        document.getElementById("modeSelector").style.flexDirection = "column";
        document.getElementById("modeSelector").style.gap = "15px";

        document.getElementById("modeSelector").innerHTML =
        `
            <h2>Válassz tételt a listából</h2>
        `;

        let sel = document.createElement("select");
        sel.setAttribute("id", "tetelvalaszto");
        
        for (const key in DATA) {
            let tetelcim = DATA[key].cim;
            let tetelszam = parseInt(DATA[key].cim.split("]")[0].split("[")[1]);
            
            let opt = document.createElement("option");
            opt.innerHTML = tetelcim;
            opt.value = tetelszam

            sel.appendChild(opt);
        }
        document.getElementById("modeSelector").appendChild(sel)

        document.getElementById("modeSelector").innerHTML += 
        `
            <button type="button" onclick="generateQuiz()">Indítás</button>
        `;
    }
    else {
        generateQuiz();
    }
}




function generateOptions(num, data) {
    let options = []

    data[`tetel${num}`].kerdesek.forEach(element => {
        options.push(element.meghatB);
    });

    return options;
}

function generateQuiz() {
    let num = document.getElementById("tetelvalaszto").value;
    // else {
    //     const shuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].sort(() => 0.5 - Math.random());
    //     let nums = shuffled.slice(0, 6);
    //     let num = nums[0];
    // }
    let data = DATA;

    let tempcounter = 0;
    let tempkerdes = "";
    let tempvalasz = "";
    let tempimages = []
    let tempoptions = generateOptions(num, data);
    
    data[`tetel${num}`].kerdesek.forEach(element => {
        tempkerdes = element.meghatA;
        tempvalasz = element.meghatB;
        tempimages = element.kepek;

        const shuffled = tempoptions.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 6);

        if (!selected.includes(tempvalasz)) {
            selected.pop(0);
            selected.push(tempvalasz)
        }

        const shuffled2 = tempoptions.sort(() => 0.5 - Math.random());
        
        quiz.push({
            "cim": data[`tetel${num}`].cim,
            "kerdesszam": tempcounter + 1,
            "kerdes": tempkerdes,
            "valasz": tempvalasz,
            "kepek": tempimages,
            "valaszok": shuffled2
        })
    });

    document.getElementById("modeSelector").style.display = "none";
    document.getElementById("quiz").style.display = "flex";
    showNext(0, num);
}

function showNext(num, tetelszam) {
    if (quiz.length == num) {
        endGame();
    } else {
        let htmlcode = "";
        let quizobj = quiz[num];

        htmlcode += `<h2 id="quizTitle">${quizobj.cim}</h2>`;
        htmlcode += `<h2 id="quizQuestion">${quizobj.kerdes}</h2>`;
        htmlcode += '<div id="quizImages">';

        quizobj.kepek.forEach(kep => {
            htmlcode += `<img src="Images/${kep}" alt="">`;
        });

        htmlcode += '</div>'
        htmlcode += '<div id="quizOptions">'

        quizobj.valaszok.forEach(option => {
            let bool = option == quizobj.valasz;

            htmlcode += `<button type="button" onclick="quizSelectOption(${bool}, ${num}, ${tetelszam})">${option}</button>`;
        });

        htmlcode += '</div>'

        document.getElementById("quiz").innerHTML = htmlcode;  
    }
}

function quizSelectOption(bool, num, data, tetelszam) {
    eredmeny.push({
        "kerdesszam": num + 1,
        "talalt": bool,
        "megadott": num,
        "helyes": num
    })
    showNext(num + 1, data, tetelszam)
}

function endGame() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('result').style.display = "flex";

    let truecount = 0;

    eredmeny.forEach(element => {
        if (element.talalt) {
            truecount++;
        }
    });

    document.getElementById('numofquestions').innerHTML = eredmeny.length.toString();
    document.getElementById('numofcorrect').innerHTML = truecount.toString();
    document.getElementById('percentage').innerHTML = (truecount / eredmeny.length).toFixed(2);
}

function reset() {
    location.reload();
}

function CSVtoJSON() {
    
}