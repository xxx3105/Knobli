const projektLink = document.querySelector('nav a[href="#projekt"]');
const aufgabeLink = document.querySelector('nav a[href="#aufgabe"]');
const kontakteLink = document.querySelector('nav a[href="#kontakte"]');
const übermichLink = document.querySelector('nav a[href="#übermich"]');

  // Получаем блоки
  const grus = document.querySelector('.grus');
  const aufgabe = document.querySelector('.aufgabe');
const kont = document.querySelector('.kont');
const übermich = document.querySelector('.übermich');

  // Функция для скрытия всех блоков
  function hideAll() {
    grus.style.display = 'none';
    aufgabe.style.display = 'none';
    kont.style.display = 'none';
    übermich.style.display = 'none';
  }

  // События клика
  projektLink.addEventListener('click', (e) => {
    e.preventDefault(); // чтобы страница не прыгала
    hideAll();
    grus.style.display = 'block';
  });

  aufgabeLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    aufgabe.style.display = 'block';
  });

  kontakteLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    kont.style.display = 'block';
  });

  übermichLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideAll();
    übermich.style.display = 'block';
  });
  
  // По умолчанию показываем первый блок
  hideAll();
grus.style.display = 'block';
  

// *******

// submenu

const rechenTab = document.getElementById('rechen-tab');
const rechenSubmenu = document.getElementById('rechen-submenu');
const textTab = document.getElementById('text-tab');
const textSubmenu = document.getElementById('text-submenu');

rechenTab.addEventListener('click', (e) => {
    e.preventDefault();
    // Показать/скрыть подменю Rechenbeispiele
    rechenSubmenu.style.display = rechenSubmenu.style.display === 'flex' ? 'none' : 'flex';
    // При открытии скрываем Textaufgaben
    const textSubmenu = document.getElementById('text-submenu');
    if (textSubmenu) textSubmenu.style.display = 'none';
    
    const optRechnebeisp = document.getElementById('rechenarten-filter');
    if(optRechnebeisp) optRechnebeisp.style.display = 'none';

});


// *************
 
textTab.addEventListener('click', (e) => {
    e.preventDefault();
    // Показать/скрыть подменю Textaufgaben
    textSubmenu.style.display = textSubmenu.style.display === 'flex' ? 'none' : 'flex';
    // При открытии скрываем Rechenbeispiele
    const rechenSubmenu = document.getElementById('rechen-submenu');
    if (rechenSubmenu) rechenSubmenu.style.display = 'none';
    
    const optRechnebeisp = document.getElementById('rechenarten-filter');
    if(optRechnebeisp) optRechnebeisp.style.display = 'none';
});

//******Open und schliessen filter für grundrechnen***

document.getElementById("toggle-filters").addEventListener("click", function(e) {
    e.preventDefault(); // чтобы не прыгал к якорю
    const filterBox = document.getElementById("rechenarten-filter");
    if (filterBox.style.display === "none" || filterBox.style.display === "") {
        filterBox.style.display = "block";
    } else {
        filterBox.style.display = "none";
    }
});


// aktiver Knopf

const tabLinks = document.querySelectorAll('.tab-link');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    tabLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});


//ANIMATION VON KNOBLI

// const logo = document.querySelector('.head-logo');
// const bergen = document.querySelector('.bergen-santis');

// document.addEventListener('mousemove', (e) => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;

//     const offsetX = (e.clientX - centerX) / centerX; // -1..1
//     const offsetY = (e.clientY - centerY) / centerY; // -1..1

//     // фон движется медленно
//     const bgX = offsetX * 650;
//     bergen.style.backgroundPosition = `calc(50% + ${bgX}px) center`;

//     // логотип: быстрое колебание вперед + вверх/вниз
//     const now = Date.now();
//     const rotateAngle = offsetX * 20 + Math.sin(now / 50) * 5;      // быстрое вращение ±5°
//     const translateX = offsetX * 50 + Math.abs(Math.sin(now / 50)) * 15; // только вперед, без отката
//     const translateY = offsetY * 20 + Math.sin(now / 40) * 5;        // мелкое движение вверх/вниз

//     logo.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotateAngle}deg)`;
// });
 
const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    // Убираем класс для повторного запуска
    logo.classList.remove('rotate');
    void logo.offsetWidth; // перезапуск анимации
    logo.classList.add('rotate');
});
// function animate() {
//     if (!paused) {
//         // применяем скорость
//         posX += velocityX;
//         posY += velocityY;

//         // трение (затухание)
//         velocityX *= 0.95;
//         velocityY *= 0.95;

//         // фон
//         const maxShift = 650;
//         const bgX = Math.max(-maxShift, Math.min(maxShift, posX));
//         bergen.style.backgroundPosition = `${bgX}px center`;

//         // лого (та же траектория)
//         const translateX = posX * 0.2;
//         const translateY = posY * 0.1;
//         const rotateAngle = posX * 0.05;
//         logo.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotateAngle}deg)`;
//     }

//     requestAnimationFrame(animate);
// }

// animate();


// ***********************Generator

  
// document.getElementById("generate").addEventListener("click", function(e) {
//     e.preventDefault();

//     const opSelect = document.getElementById("operationen-filter");
//     const operation = opSelect?.value || randomChoice(["addition","subtraktion","multiplikation","division","mischung"]);

//     const anzZahlenSelect = document.getElementById("anzahl-zahlen-filter");
//     const anzahlZahlen = anzZahlenSelect?.value ? parseInt(anzZahlenSelect.value) : randomChoice([2,3]);

//     const schwierigSelect = document.getElementById("schwierigkeit-filter");
//     const schwierig = schwierigSelect?.value || randomChoice(["einfach","mittel","gross"]);

//     const divisionRest = document.getElementById("division-rest-filter")?.value || "ohne-rest";

//     const anzAufgabenSelect = document.getElementById("anzahl-aufgaben-filter");
//     const anzahlAufgaben = anzAufgabenSelect?.value ? parseInt(anzAufgabenSelect.value) : 5;

//     let min = 1, max = 10;
//     switch(schwierig) {
//         case "einfach":        min = 1; max = 10; break;
//         case "mittel":         min = 10; max = 100; break;
//         case "gross":          min = 100; max = 1000; break;
//         case "sehr-gross":     min = 1000; max = 10000; break;
//         case "riesig":         min = 10000; max = 100000; break;
//     }

//     function randNum() { return Math.floor(Math.random() * (max - min + 1)) + min; }
//     function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

//     const liste = document.getElementById("aufgaben-liste");
//     liste.innerHTML = "";

//     let aufgabenDaten = [];

//     for (let i=0; i<anzahlAufgaben; i++) {
//         let zahlen = [];
//         for (let j=0; j<anzahlZahlen; j++) {
//             zahlen.push(randNum());
//         }

//         let aufgabe = "";
//         let korrekteAntwort = null;

//         if (operation === "mischung") {
//             const ops = ["+", "−", "×", "÷"];
//             let expr = "" + zahlen[0];
//             for (let k=1; k<zahlen.length; k++) {
//                 let zufallOp = ops[Math.floor(Math.random() * ops.length)];
//                 expr += " " + zufallOp + " " + zahlen[k];
//             }
//             aufgabe = expr;
//             korrekteAntwort = Function('"use strict";return (' + expr.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
//         } else {
//             let zeichen = "";
//             switch(operation) {
//                 case "addition": zeichen = " + "; break;
//                 case "subtraktion": zeichen = " − "; break;
//                 case "multiplikation": zeichen = " × "; break;
//                 case "division": zeichen = " ÷ "; break;
//             }
//             aufgabe = zahlen.join(zeichen);

//             if (operation === "division") {
//                 if (divisionRest === "ohne-rest") {
//                     let divisor = Math.floor(Math.random() * 12) + 1;
//                     let quotient = Math.floor(Math.random() * 12) + 1;
//                     let dividend = divisor * quotient;
//                     aufgabe = dividend + " ÷ " + divisor;
//                     korrekteAntwort = quotient;
//                 } else {
//                     let divisor = Math.floor(Math.random() * 12) + 2;
//                     let dividend = Math.floor(Math.random() * 90) + 10;
//                     let quotient = Math.floor(dividend / divisor);
//                     let rest = dividend % divisor;
//                     aufgabe = dividend + " ÷ " + divisor;
//                     korrekteAntwort = quotient + " Rest " + rest;
//                 }
//             } else {
//                 korrekteAntwort = Function('"use strict";return (' + aufgabe.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
//             }
//         }

//         aufgabenDaten.push({aufgabe, korrekteAntwort});
//     }

//     // создаём список заданий
//     aufgabenDaten.forEach((item,i) => {
//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.textContent = (i+1) + ") " + item.aufgabe + " = ";

//         const input = document.createElement("input");
//         input.type = "text";
//         input.size = 6;

//         input.addEventListener("input", function() {
//             let val = input.value.trim();
//             if (val === "") {
//                 input.style.backgroundColor = "";
//                 return;
//             }
//             if (val === String(item.korrekteAntwort) || Number(val) === item.korrekteAntwort) {
//                 input.style.backgroundColor = "#c8f7c5";
//             } else {
//                 input.style.backgroundColor = "#f7c5c5";
//             }
//         });

//         const solution = document.createElement("span");
//         solution.textContent = " (" + item.korrekteAntwort + ")";
//         solution.style.display = "none";
//         solution.classList.add("solution");

//         li.appendChild(span);
//         li.appendChild(input);
//         li.appendChild(solution);
//         liste.appendChild(li);
//     });

//     document.getElementById("aufgaben-container").style.display = "block";

//     // кнопка показать все ответы внутри контейнера
//     let showBtn = document.createElement("button");
//     showBtn.textContent = "Alle Antworten zeigen";
//     showBtn.addEventListener("click", function() {
//         document.querySelectorAll(".solution").forEach(el => el.style.display = "inline");
//     });

//     // убираем старую кнопку
//     const oldBtn = document.getElementById("show-answers-inline");
//     if(oldBtn) oldBtn.remove();

//     showBtn.id = "show-answers-inline";
//     document.getElementById("aufgaben-container").appendChild(showBtn);
// });


// document.getElementById("generate").addEventListener("click", function(e) {
//     e.preventDefault();

//     const opSelect = document.getElementById("operationen-filter");
//     const operation = opSelect?.value || randomChoice(["addition","subtraktion","multiplikation","division","mischung"]);

//     const anzZahlenSelect = document.getElementById("anzahl-zahlen-filter");
//     const anzahlZahlen = anzZahlenSelect?.value ? parseInt(anzZahlenSelect.value) : randomChoice([2,3]);

//     const schwierigSelect = document.getElementById("schwierigkeit-filter");
//     const schwierig = schwierigSelect?.value || randomChoice(["einfach","mittel","gross"]);

//     const divisionRest = document.getElementById("division-rest-filter")?.value || "ohne-rest";

//     const anzAufgabenSelect = document.getElementById("anzahl-aufgaben-filter");
//     const anzahlAufgaben = anzAufgabenSelect?.value ? parseInt(anzAufgabenSelect.value) : 5;

//     let min = 1, max = 10;
//     switch(schwierig) {
//         case "einfach":        min = 1; max = 10; break;
//         case "mittel":         min = 10; max = 100; break;
//         case "gross":          min = 100; max = 1000; break;
//         case "sehr-gross":     min = 1000; max = 10000; break;
//         case "riesig":         min = 10000; max = 100000; break;
//     }

//     function randNum() { return Math.floor(Math.random() * (max - min + 1)) + min; }
//     function randomChoice(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

//     const liste = document.getElementById("aufgaben-liste");
//     liste.innerHTML = "";

//     let aufgabenDaten = [];

//     for (let i=0; i<anzahlAufgaben; i++) {
//         let zahlen = [];
//         for (let j=0; j<anzahlZahlen; j++) {
//             zahlen.push(randNum());
//         }

//         let aufgabe = "";
//         let korrekteAntwort = null;

//         if (operation === "mischung") {
//             const ops = ["+", "−", "×", "÷"];
//             let expr = "" + zahlen[0];
//             for (let k=1; k<zahlen.length; k++) {
//                 let zufallOp = ops[Math.floor(Math.random() * ops.length)];
//                 expr += " " + zufallOp + " " + zahlen[k];
//             }
//             aufgabe = expr;
//             korrekteAntwort = Function('"use strict";return (' + expr.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
//         } else {
//             let zeichen = "";
//             switch(operation) {
//                 case "addition": zeichen = " + "; break;
//                 case "subtraktion": zeichen = " − "; break;
//                 case "multiplikation": zeichen = " × "; break;
//                 case "division": zeichen = " ÷ "; break;
//             }
//             aufgabe = zahlen.join(zeichen);

//             if (operation === "division") {
//                 if (divisionRest === "ohne-rest") {
//                     let divisor = Math.floor(Math.random() * 12) + 1;
//                     let quotient = Math.floor(Math.random() * 12) + 1;
//                     let dividend = divisor * quotient;
//                     aufgabe = dividend + " ÷ " + divisor;
//                     korrekteAntwort = quotient;
//                 } else {
//                     let divisor = Math.floor(Math.random() * 12) + 2;
//                     let dividend = Math.floor(Math.random() * 90) + 10;
//                     let quotient = Math.floor(dividend / divisor);
//                     let rest = dividend % divisor;
//                     aufgabe = dividend + " ÷ " + divisor;
//                     korrekteAntwort = quotient + " Rest " + rest;
//                 }
//             } else {
//                 korrekteAntwort = Function('"use strict";return (' + aufgabe.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
//             }
//         }

//         aufgabenDaten.push({aufgabe, korrekteAntwort});
//     }

//     // создаём список заданий
//     aufgabenDaten.forEach((item,i) => {
//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.textContent = (i+1) + ") " + item.aufgabe + " = ";

//         const input = document.createElement("input");
//         input.type = "text";
//         input.size = 6;

//         input.addEventListener("input", function() {
//             let val = input.value.trim();
//             if (val === "") {
//                 input.style.backgroundColor = "";
//                 return;
//             }
//             if (val === String(item.korrekteAntwort) || Number(val) === item.korrekteAntwort) {
//                 input.style.backgroundColor = "#c8f7c5";
//             } else {
//                 input.style.backgroundColor = "#f7c5c5";
//             }

//             // проверка всех ответов
//             const allCorrect = [...liste.querySelectorAll("input")].every(inp => {
//                 return inp.value.trim() === "" ? false : inp.style.backgroundColor === "rgb(200, 247, 197)";
//             });
//             if(allCorrect) animateLogo();
//         });

//         const solution = document.createElement("span");
//         solution.textContent = " (" + item.korrekteAntwort + ")";
//         solution.style.display = "none";
//         solution.classList.add("solution");

//         li.appendChild(span);
//         li.appendChild(input);
//         li.appendChild(solution);
//         liste.appendChild(li);
//     });

//     document.getElementById("aufgaben-container").style.display = "block";

//     // кнопка показать все ответы внутри контейнера
//     let showBtn = document.createElement("button");
//     showBtn.textContent = "Alle Antworten zeigen";
//     showBtn.addEventListener("click", function() {
//         document.querySelectorAll(".solution").forEach(el => el.style.display = "inline");
//     });
//     const oldBtn = document.getElementById("show-answers-inline");
//     if(oldBtn) oldBtn.remove();
//     showBtn.id = "show-answers-inline";
//     document.getElementById("aufgaben-container").appendChild(showBtn);

//     // кнопка печать
//     let printBtn = document.createElement("button");
//     printBtn.textContent = "Drucken";
//     printBtn.addEventListener("click", function() {
//         window.print();
//     });
//     const oldPrint = document.getElementById("print-aufgaben");
//     if(oldPrint) oldPrint.remove();
//     printBtn.id = "print-aufgaben";
//     document.getElementById("aufgaben-container").appendChild(printBtn);

//     // функция анимации логотипа
//     function animateLogo() {
//         const logo = document.querySelector('.head-logo');
//         const rect = logo.getBoundingClientRect();
//         const centerX = window.innerWidth/2 - rect.width/2;
//         const centerY = window.innerHeight/2 - rect.height/2;

//         logo.style.transition = "all 1s";
//         logo.style.position = "fixed";
//         logo.style.left = rect.left + "px";
//         logo.style.top = rect.top + "px";
//         logo.style.transform = "rotate(0deg)";

//         setTimeout(()=>{
//             logo.style.left = centerX + "px";
//             logo.style.top = centerY + "px";
//             logo.style.transform = "rotate(360deg)";
//         }, 50);

//         setTimeout(()=>{
//             logo.style.left = rect.left + "px";
//             logo.style.top = rect.top + "px";
//             logo.style.transform = "rotate(0deg)";
//         }, 1100);
//     }
// });

document.getElementById("generate").addEventListener("click", function(e) {
    e.preventDefault();

    // --- Вспомогательные функции ---
    function randomChoice(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
    function randNum(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

    // --- Параметры задач ---
    const operation = document.getElementById("operationen-filter")?.value || randomChoice(["addition","subtraktion","multiplikation","division","mischung"]);
    const anzahlZahlen = parseInt(document.getElementById("anzahl-zahlen-filter")?.value) || randomChoice([2,3]);
    const schwierig = document.getElementById("schwierigkeit-filter")?.value || randomChoice(["einfach","mittel","gross"]);
    const divisionRest = document.getElementById("division-rest-filter")?.value || "ohne-rest";
    const anzahlAufgaben = parseInt(document.getElementById("anzahl-aufgaben-filter")?.value) || 5;

    let min = 1, max = 10;
    switch(schwierig) {
        case "einfach": min = 1; max = 10; break;
        case "mittel": min = 10; max = 100; break;
        case "gross": min = 100; max = 1000; break;
        case "sehr-gross": min = 1000; max = 10000; break;
        case "riesig": min = 10000; max = 100000; break;
    }

    const liste = document.getElementById("aufgaben-liste");
    liste.innerHTML = "";

    let aufgabenDaten = [];

    // --- Генерация задач ---
    for (let i = 0; i < anzahlAufgaben; i++) {
        let zahlen = [];
        for (let j = 0; j < anzahlZahlen; j++) zahlen.push(randNum(min, max));

        // Для вычитания: результат положительный
        if ((operation === "subtraktion" || operation === "mischung") && zahlen.length === 2 && zahlen[0] < zahlen[1]) {
            [zahlen[0], zahlen[1]] = [zahlen[1], zahlen[0]];
        }

        let aufgabe = "";
        let korrekteAntwort = null;

        if (operation === "mischung") {
            const ops = ["+", "−", "×", "÷"];
            let expr = "" + zahlen[0];
            for (let k = 1; k < zahlen.length; k++) {
                let zufallOp = ops[Math.floor(Math.random() * ops.length)];
                if (zufallOp === "−" && Number(expr) < zahlen[k]) [expr, zahlen[k]] = [zahlen[k], Number(expr)];
                expr += " " + zufallOp + " " + zahlen[k];
            }
            aufgabe = expr;
            korrekteAntwort = Function('"use strict";return (' + expr.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
        } else {
            let zeichen = {addition:" + ", subtraktion:" − ", multiplikation:" × ", division:" ÷ "}[operation];
            aufgabe = zahlen.join(zeichen);

            if (operation === "division") {
                if (divisionRest === "ohne-rest") {
                    let divisor = randNum(1,12), quotient = randNum(1,12);
                    let dividend = divisor * quotient;
                    aufgabe = dividend + " ÷ " + divisor;
                    korrekteAntwort = quotient;
                } else {
                    let divisor = randNum(2,12), dividend = randNum(10,99);
                    let quotient = Math.floor(dividend / divisor);
                    let rest = dividend % divisor;
                    aufgabe = dividend + " ÷ " + divisor;
                    korrekteAntwort = quotient + " Rest " + rest;
                }
            } else {
                korrekteAntwort = Function('"use strict";return (' + aufgabe.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
            }
        }

        aufgabenDaten.push({aufgabe, korrekteAntwort});
    }

    // --- Отображение задач ---
    aufgabenDaten.forEach((item,i) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = (i+1) + ") " + item.aufgabe + " = ";

        const input = document.createElement("input");
        input.type = "text";
        input.size = 6;

        input.addEventListener("input", function() {
            const val = input.value.trim();
            if (val === "") { input.style.backgroundColor = ""; return; }
            input.style.backgroundColor = (val === String(item.korrekteAntwort) || Number(val) === item.korrekteAntwort) ? "#c8f7c5" : "#f7c5c5";

            // Проверка всех ответов
            const allCorrect = [...liste.querySelectorAll("input")].every(inp => inp.value.trim() !== "" && inp.style.backgroundColor === "rgb(200, 247, 197)");
            if(allCorrect) showGratulationAndAnimateLogo();
        });

        const solution = document.createElement("span");
        solution.textContent = " (" + item.korrekteAntwort + ")";
        solution.style.display = "none";
        solution.classList.add("solution");

        li.appendChild(span);
        li.appendChild(input);
        li.appendChild(solution);
        liste.appendChild(li);
    });

    document.getElementById("aufgaben-container").style.display = "block";

    // --- Кнопки ---
    const showBtn = document.createElement("button");
    showBtn.textContent = "Alle Antworten zeigen";
    showBtn.className = "tab-link";
    showBtn.addEventListener("click", ()=> document.querySelectorAll(".solution").forEach(el=>el.style.display="inline"));
    document.getElementById("show-answers-inline")?.remove();
    showBtn.id = "show-answers-inline";
    document.getElementById("aufgaben-container").appendChild(showBtn);

    const printBtn = document.createElement("button");
    printBtn.textContent = "Drucken";
    printBtn.className = "tab-link";
    printBtn.addEventListener("click", function() {
        const printContents = document.getElementById("aufgaben-container").innerHTML;
        const iframe = document.createElement('iframe');
        iframe.style.position='absolute'; iframe.style.width='0'; iframe.style.height='0'; iframe.style.border='0';
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write('<html><head><title>Drucken</title></head><body>'+printContents+'</body></html>');
        doc.close();
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(()=>document.body.removeChild(iframe),1000);
    });
    document.getElementById("print-aufgaben")?.remove();
    printBtn.id="print-aufgaben";
    document.getElementById("aufgaben-container").appendChild(printBtn);

    // --- Функция поздравления и анимации логотипа ---
    function showGratulationAndAnimateLogo() {
        // создаём надпись
        if (!document.getElementById("gratulation-msg")) {
            const msg = document.createElement("div");
            msg.id = "gratulation-msg";
            msg.textContent = "Gratulation! Du bist ein Genie!";
            msg.style.position = "fixed";
            msg.style.top = "50%";
            msg.style.left = "50%";
            msg.style.transform = "translate(-50%, -50%) scale(0.1)";
            msg.style.fontSize = "2em";
            msg.style.fontWeight = "bold";
            msg.style.color = "#f39c12";
            msg.style.backgroundColor = "rgba(255,255,255,0.9)";
            msg.style.padding = "20px 40px";
            msg.style.borderRadius = "10px";
            msg.style.textAlign = "center";
            msg.style.transition = "transform 0.8s ease";
            document.body.appendChild(msg);
    
            setTimeout(() => msg.style.transform = "translate(-50%, -50%) scale(1)", 50);
            setTimeout(() => msg.remove(), 3000);
        }
    
        const logo = document.querySelector(".head-logo");
        if (!logo) return;
    
        // сохраняем исходные стили
        const originalStyle = {
            position: logo.style.position || "",
            top: logo.style.top || "",
            left: logo.style.left || "",
            transform: logo.style.transform || "",
            transition: logo.style.transition || ""
        };
    
        const rect = logo.getBoundingClientRect();
        const initialTop = rect.top + window.scrollY;
        const initialLeft = rect.left + window.scrollX;
    
        logo.style.position = "fixed";
        logo.style.left = initialLeft + "px";
        logo.style.top = initialTop + "px";
        logo.style.transition = "top 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.6s ease";
    
        const centerY = window.innerHeight / 2 - logo.offsetHeight / 2;
    
        // падение вниз с вращением
        setTimeout(() => {
            logo.style.top = centerY + "px";
            logo.style.transform = "rotate(360deg)";
        }, 50);
    
        // возврат в исходное положение с восстановлением стилей
        setTimeout(() => {
            logo.style.top = initialTop + "px";
            logo.style.transform = "rotate(0deg)";
            setTimeout(() => {
                logo.style.position = originalStyle.position;
                logo.style.top = originalStyle.top;
                logo.style.left = originalStyle.left;
                logo.style.transform = originalStyle.transform;
                logo.style.transition = originalStyle.transition;
            }, 600); // ждём окончания анимации
        }, 800);
    }
});
// ***********************ENDE Generator