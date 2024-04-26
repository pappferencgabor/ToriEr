let mode;
let mode2;
let quiz = [];
let eredmeny = [];




function modeSelect(selectedmode) {
    mode = selectedmode;

    document.getElementById("modeSelector").innerHTML =
        `
        <div onclick="modeSelect2('valasztott')">Választott tétel</div>
        <div onclick="modeSelect2('osszes')">Összes tétel</div>
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

        let temptetelek = [];
        DATA.forEach(tetel => {
            // console.log(tetel)
            if (!temptetelek.includes(tetel.Tétel)) {
                let tetelcim = tetel.Tétel;
                let tetelszam = tetel.Tétel.split("]")[0].split("[")[1];

                let opt = document.createElement("option");
                opt.innerHTML = tetelcim;
                opt.value = tetelszam

                sel.appendChild(opt);

                temptetelek.push(tetel.Tétel);
            }
        });
        document.getElementById("modeSelector").appendChild(sel)

        if (mode == "szamonkeres") {
            document.getElementById("modeSelector").innerHTML +=
            `
                <button type="button" onclick="generateQuiz()">Indítás</button>
            `;
        } else {
            document.getElementById("modeSelector").innerHTML +=
            `
                <button type="button" onclick="loadLearning('valasztott')">Indítás</button>
            `;
        }
    }
    else {
        if (mode == "tanulas") {
            console.log("asd");
            loadLearning("osszes");
            return;
        }
        generateQuiz();
    }
}




function generateOptions(num) {
    let tempoptions = []
    let options = []

    if (num == -1) {
        DATA.forEach(element => {
            tempoptions.push(element);
        })
    }
    else {
        tempoptions = DATA.filter((x) => x.Tétel.startsWith(`[${num}]`))
    }

    console.log(tempoptions);
    tempoptions.forEach(element => {
        options.push(element.Dátum);
    });

    return options;
}

function generateQuiz() {
    let num = -1;
    if (document.getElementById("tetelvalaszto")) {
        num = document.getElementById("tetelvalaszto").value;
    }

    let tempcounter = 0;
    let tempkerdes = "";
    let tempvalasz = "";
    let tempimages = []

    DATA.forEach(element => {
        if (element.Tétel.startsWith(`[${num}]`)) {
            let tempoptions = generateOptions(num);
            tempkerdes = element.Esemény;
            tempvalasz = element.Dátum;
            tempimages = []

            for (const key in element) {
                console.log(key);
                if (key.startsWith("Kép")) {
                    if (element[key] != "") {
                        tempimages.push(element[key]);
                    }
                }
            }
            const shuffled = tempoptions.sort(() => 0.5 - Math.random());

            let selected = shuffled.slice(0, 5);

            if (!selected.includes(tempvalasz)) {
                selected.pop(0);
                selected.push(tempvalasz)
            }

            const shuffled2 = selected.sort(() => 0.5 - Math.random());

            quiz.push({
                "cim": element.Tétel,
                "kerdesszam": tempcounter + 1,
                "kerdes": tempkerdes,
                "valasz": tempvalasz,
                "kepek": tempimages,
                "valaszok": shuffled2
            })
        }
        else if (num == -1) {
            let tempoptions = generateOptions(-1);

            tempkerdes = element.Esemény;
            tempvalasz = element.Dátum;
            tempimages = []

            for (const key in element) {
                if (key.startsWith("Kép")) {
                    if (element[key] != "") {
                        tempimages.push(element[key]);
                    }
                }
            }
            const shuffled = tempoptions.sort(() => 0.5 - Math.random());
            
            let selected = shuffled.slice(0, 5);

            if (!selected.includes(tempvalasz)) {
                selected.pop(0);
                selected.push(tempvalasz)
            }

            const shuffled2 = selected.sort(() => 0.5 - Math.random());
            console.log(shuffled2);

            quiz.push({
                "cim": element.Tétel,
                "kerdesszam": tempcounter + 1,
                "kerdes": tempkerdes,
                "valasz": tempvalasz,
                "kepek": tempimages,
                "valaszok": shuffled2
            })
        }
    });

    quiz = quiz.sort(() => 0.5 - Math.random())
    quiz = quiz.slice(0, 20)

    document.getElementById("modeSelector").style.display = "none";
    document.getElementById("quiz").style.display = "flex";
    showNext(0);
}

function showNext(num) {
    if (quiz.length == num) {
        endGame();
    } else {
        let htmlcode = "";
        let quizobj = quiz[num];

        console.log(quizobj);

        htmlcode += `<h2 id="quizTitle">${quizobj.cim}</h2>`;
        htmlcode += `<h3>${num+1}/${quiz.length}</h3>`;
        htmlcode += `<h2 id="quizQuestion">${quizobj.kerdes}</h2>`;
        htmlcode += '<div id="quizImages">';

        quizobj.kepek.forEach(kep => {
            htmlcode += `<img src="Images/${kep}" alt="">`;
        });

        htmlcode += '</div>'
        htmlcode += '<div id="quizOptions">'

        quizobj.valaszok.forEach(option => {
            let bool = option == quizobj.valasz;

            htmlcode += `<button type="button" onclick="quizSelectOption(${bool}, ${num}, this)">${option}</button>`;
        });

        htmlcode += '</div>'

        document.getElementById("quiz").innerHTML = htmlcode;
    }
}

function quizSelectOption(bool, num, elem) {
    eredmeny.push({
        "kerdesszam": num + 1,
        "talalt": bool,
        "kerdes": quiz[num].kerdes,
        "helyes": quiz[num].valasz,
        "megadott": elem.innerHTML
    })
    showNext(num + 1)
}




function loadLearning(mod) {
    if (mod == "valasztott") {
        let num = -1;

        if (document.getElementById("tetelvalaszto")) {
            num = document.getElementById("tetelvalaszto").value;
        }
        num = num.toString().length == 2 ? num : `0${num}`
        let elements = DATA.filter((x) => x.Tétel.startsWith(`[${num}]`))


        let learningdiv = document.getElementById("learning");

        let h1 = document.createElement("h1");
        h1.innerHTML = elements[0].Tétel;
        learningdiv.appendChild(h1);

        let table = document.createElement("table");
        table.innerHTML = 
        `
        <tr>
            <th>Kérdés</th>
            <th>Válasz</th>
        </tr>
        `

        elements.forEach(element => {
            table.innerHTML += 
            `
            <tr>
                <th>${element.Esemény}</th>
                <td class="blurtd" onclick="changeblur(this)">${element.Dátum}</td>
            </tr>
            `
        });

        learningdiv.appendChild(table);
        document.getElementById("modeSelector").style.display = "none";
        document.getElementById("learning").style.display = "flex";
    } else if (mod == "osszes") {
        let temp = "";
        let learningdiv = document.getElementById("learning");
        let table = document.createElement("table");

        DATA.forEach(element => {
            if (temp != element.Tétel) {
                let h1 = document.createElement("h1");
                h1.innerHTML = `${element.Tétel} ▶`;
                h1.setAttribute("id", `tabletitle${element.Tétel.split("[")[1].split("]")[0]}`);
                h1.onclick = function() {
                    changeTableVisibility(element.Tétel.split("[")[1].split("]")[0]);
                };
                learningdiv.appendChild(h1);

                table = document.createElement("table");
                table.style.display = "none";
                table.setAttribute("id", `table${element.Tétel.split("[")[1].split("]")[0]}`);

                table.innerHTML = 
                `
                <tr>
                    <th>Kérdés</th>
                    <th>Válasz</th>
                </tr>
                `;

                table.innerHTML += 
                `
                <tr>
                    <th>${element.Esemény}</th>
                    <td class="blurtd" onclick="changeblur(this)">${element.Dátum}</td>
                </tr>
                `;

                learningdiv.appendChild(table);
                temp = element.Tétel;
            } else {
                table.innerHTML += 
                `
                <tr>
                    <th>${element.Esemény}</th>
                    <td class="blurtd" onclick="changeblur(this)">${element.Dátum}</td>
                </tr>
                `;
            }
        });

        document.getElementById("modeSelector").style.display = "none";
        document.getElementById("learning").style.display = "flex";
        document.getElementById("learning").style.justifyContent = "flex-start";
    }
}




function changeblur(elem) {
    if (elem.style.filter == "blur(0px)") {
        elem.style.filter = "blur(5px)"
    } else {
        elem.style.filter = "blur(0px)"
    }
    
}
function changeTableVisibility(num) {
    const contentDiv = document.getElementById(`table${num}`);
    const contentTitle = document.getElementById(`tabletitle${num}`);

    if (contentDiv.style.display === 'none') {
        contentDiv.style.display = 'table';
        contentTitle.innerHTML = contentTitle.innerHTML.split(" ▶")[0]
        contentTitle.innerHTML = contentTitle.innerHTML += " ▼"
    } else {
        contentDiv.style.display = 'none';
        contentTitle.innerHTML = contentTitle.innerHTML.split(" ▼")[0]
        contentTitle.innerHTML = contentTitle.innerHTML += " ▶"
    }
}




function endGame() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('result').style.display = "flex";

    let truecount = 0;
    let tableelem = document.getElementById("resulttable");
    tableelem.innerHTML = 
    `
        <tr>
            <th>Sorszám</th>
            <th>Kérdés</th>
            <th>Adott</th>
            <th>Helyes</th>
        </tr>
    `

    eredmeny.forEach(element => {
        let cssselector = element.talalt ? "correct" : "incorrect";

        if (element.talalt) {
            truecount++;

            tableelem.innerHTML += 
            `
                <tr class="${cssselector}">
                    <td>${element.kerdesszam}</td>
                    <td>${element.kerdes}</td>
                    <td colspan="2">${element.helyes}</td>
                </tr>
            `
        }
        else {
            tableelem.innerHTML += 
            `
                <tr class="${cssselector}">
                    <td>${element.kerdesszam}</td>
                    <td>${element.kerdes}</td>
                    <td>${element.helyes}</td>
                    <td>${element.megadott}</td>
                </tr>
            `
        }        
    });

    document.getElementById('numofquestions').innerHTML = eredmeny.length.toString();
    document.getElementById('numofcorrect').innerHTML = truecount.toString();
    document.getElementById('percentage').innerHTML = (truecount / eredmeny.length).toFixed(2) * 100;
}

function reset() {
    location.reload();
}