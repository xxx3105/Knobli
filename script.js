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

    // Добавляем подсказку о формате ответа для деления с остатком
    if (operation === "division" && divisionRest === "mit-rest") {
        const hint = document.createElement("div");
        hint.style.color = "#666";
        hint.style.marginBottom = "10px";
        hint.style.fontStyle = "italic";
        hint.textContent = "Hinweis: Bei Division mit Rest bitte das Ergebnis im Format 'Quotient Rest Restwert' eingeben (z.B. 52÷7 = '7 Rest 3').";
        liste.appendChild(hint);
    }

    let aufgabenDaten = [];

    // --- Генерация задач ---
    for (let i = 0; i < anzahlAufgaben; i++) {
        let aufgabe = "";
        let korrekteAntwort = null;

        if (operation === "division") {
            if (divisionRest === "ohne-rest") {
                // Для деления без остатка с огромными числами
                let divisor = randNum(2, Math.floor(max / 100)); // Делитель не должен быть слишком большим
                let quotient = randNum(Math.ceil(min / divisor), Math.floor(max / divisor));
                let dividend = divisor * quotient;
                
                // Гарантируем, что числа находятся в нужном диапазоне
                while (dividend < min || dividend > max) {
                    divisor = randNum(2, Math.floor(max / 100));
                    quotient = randNum(Math.ceil(min / divisor), Math.floor(max / divisor));
                    dividend = divisor * quotient;
                }
                
                aufgabe = dividend + " ÷ " + divisor;
                korrekteAntwort = quotient;
            } else {
                // Для деления с остатком
                let divisor = randNum(2, Math.floor(max / 100));
                let quotient = randNum(Math.ceil(min / divisor), Math.floor(max / divisor));
                let rest = randNum(1, divisor - 1); // Остаток должен быть меньше делителя
                let dividend = divisor * quotient + rest;
                
                // Гарантируем, что числа находятся в нужном диапазоне
                while (dividend < min || dividend > max) {
                    divisor = randNum(2, Math.floor(max / 100));
                    quotient = randNum(Math.ceil(min / divisor), Math.floor(max / divisor));
                    rest = randNum(1, divisor - 1);
                    dividend = divisor * quotient + rest;
                }
                
                aufgabe = dividend + " ÷ " + divisor;
                korrekteAntwort = quotient + " Rest " + rest;
            }
        } else if (operation === "mischung") {
            let zahlen = [];
            for (let j = 0; j < anzahlZahlen; j++) zahlen.push(randNum(min, max));
            
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
            let zahlen = [];
            for (let j = 0; j < anzahlZahlen; j++) zahlen.push(randNum(min, max));

            // Для вычитания: результат положительный
            if (operation === "subtraktion" && zahlen.length === 2 && zahlen[0] < zahlen[1]) {
                [zahlen[0], zahlen[1]] = [zahlen[1], zahlen[0]];
            }

            let zeichen = {addition:" + ", subtraktion:" − ", multiplikation:" × ", division:" ÷ "}[operation];
            aufgabe = zahlen.join(zeichen);
            korrekteAntwort = Function('"use strict";return (' + aufgabe.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-") + ')')();
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
        input.size = operation === "division" && divisionRest === "mit-rest" ? 15 : 10;

        input.addEventListener("input", function() {
            const val = input.value.trim();
            if (val === "") { 
                input.style.backgroundColor = ""; 
                return; 
            }
            
            // Для деления с остатком сравниваем строки, для остальных операций - числа
            if (operation === "division" && divisionRest === "mit-rest") {
                input.style.backgroundColor = val === item.korrekteAntwort ? "#c8f7c5" : "#f7c5c5";
            } else {
                input.style.backgroundColor = (val === String(item.korrekteAntwort) || Number(val) === item.korrekteAntwort) ? "#c8f7c5" : "#f7c5c5";
            }

            // Проверка всех ответов
            const allCorrect = [...liste.querySelectorAll("input")].every(inp => {
                if (inp.value.trim() === "") return false;
                
                const index = [...liste.querySelectorAll("input")].indexOf(inp);
                const correctAnswer = aufgabenDaten[index].korrekteAntwort;
                
                if (operation === "division" && divisionRest === "mit-rest") {
                    return inp.value.trim() === correctAnswer;
                } else {
                    return inp.value.trim() === String(correctAnswer) || Number(inp.value.trim()) === correctAnswer;
                }
            });
            
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
            }, 600);
        }, 800);
    }
});
// ***********************ENDE Generator


// //TEXTAUFGABE GENERATO
 

async function loadTemplates() {
    try {
        // Пробуем загрузить шаблоны из внешнего файла
        const response = await fetch('aufgaben.html');
        if (!response.ok) {
            throw new Error('File not found');
        }
        
        const html = await response.text();
        
        // Создаем временный элемент для парсинга HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        
        // Ищем шаблоны
        const templates = tempDiv.querySelector('#geschwindigkeit-templates');
        if (templates) {
            // Добавляем шаблоны в DOM
            document.body.appendChild(templates.cloneNode(true));
            console.log('Templates aus aufgaben.html geladen');
            return true;
        } else {
            throw new Error('Templates nicht in Datei gefunden');
        }
    } catch (error) {
         console.warn('Kann aufgaben.html nicht laden:', error.message, '- Erstelle Fallback-Templates');
        
        // Создаем fallback шаблоны
        const fallbackTemplates = document.createElement('div');
        fallbackTemplates.id = 'geschwindigkeit-templates';
        fallbackTemplates.style.display = 'none';
        fallbackTemplates.innerHTML = `
            <!-- Template 1 -->
            <div class="aufgabe-template" data-id="1" data-type="geschwindigkeit">
                Ein Rennwagen fährt {strecke} km in {zeit} Stunden. Wie hoch ist seine Durchschnittsgeschwindigkeit?
            </div>
            
            <!-- Template 2 -->
            <div class="aufgabe-template" data-id="2" data-type="geschwindigkeit">
                Ein Mountainbiker benötigt {zeit} Stunden für die {strecke} Kilometer lange Abfahrt. Berechne seine Geschwindigkeit.
            </div>
            
            <!-- Template 3 -->
            <div class="aufgabe-template" data-id="3" data-type="strecke">
                Bei konstanten {geschwindigkeit} km/h, wie weit kommt eine Wanderin in {zeit} Stunden?
            </div>
            
            <!-- Template 4 -->
            <div class="aufgabe-template" data-id="4" data-type="strecke">
                Ein Hochgeschwindigkeitszug fährt {geschwindigkeit} km/h. Welche Strecke legt er in {zeit} Stunden zurück?
            </div>
            
            <!-- Template 5 -->
            <div class="aufgabe-template" data-id="5" data-type="zeit">
                Wie lange braucht ein Segelschiff für {strecke} km bei einer Geschwindigkeit von {geschwindigkeit} km/h?
            </div>
            
            <!-- Template 6 -->
            <div class="aufgabe-template" data-id="6" data-type="zeit">
                Bei Reisegeschwindigkeit von {geschwindigkeit} km/h, wie lange dauert die Fahrt über {strecke} km?
            </div>
            
            <!-- Template 7 -->
            <div class="aufgabe-template" data-id="7" data-type="geschwindigkeit">
                Ein E-Roller fährt {strecke} km in {zeit} Stunden. Welche Geschwindigkeit hat he
            </div>
            
            <!-- Template 8 -->
            <div class="aufgabe-template" data-id="8" data-type="strecke">
                Ein Kreuzfahrtschiff fährt {geschwindigkeit} km/h. Wie weit kommt es in {zeit} Stunden?
            </div>
            
            <!-- Template 9 -->
            <div class="aufgabe-template" data-id="9" data-type="zeit">
                Ein Sportflugzeug fliegt {geschwindigkeit} km/h. Wie lange braucht es für die {strecke} km lange Strecke?
            </div>
            
            <!-- Template 10 -->
            <div class="aufgabe-template" data-id="10" data-type="geschwindigkeit">
                {strecke} km in {zeit} Stunden zurückgelegt. Wie schnell war der Läufer?
            </div>

            <!-- Template 11 -->
            <div class="aufgabe-template" data-id="11" data-type="geschwindigkeit">
                Ein Rettungswagen legt {strecke} km in {zeit} Stunden zurück. Wie hoch war seine Durchschnittsgeschwindigkeit?
            </div>
            
            <!-- Template 12 -->
            <div class="aufgabe-template" data-id="12" data-type="strecke">
                Ein Rennradfahrer fährt {geschwindigkeit} km/h. Welche Strecke schafft er in {zeit} Stunden?
            </div>
            
            <!-- Template 13 -->
            <div class="aufgabe-template" data-id="13" data-type="zeit">
                Wie lange braucht ein Güterzug für {strecke} km bei {geschwindigkeit} km/h?
            </div>
            
            <!-- Template 14 -->
            <div class="aufgabe-template" data-id="14" data-type="geschwindigkeit">
                Ein Motorrad fährt {strecke} km in {zeit} Stunden. Berechne die Geschwindigkeit.
            </div>
            
            <!-- Template 15 -->
            <div class="aufgabe-template" data-id="15" data-type="strecke">
                Bei {geschwindigkeit} km/h, wie weit fährt ein Schulbus in {zeit} Stunden?
            </div>
            
            <!-- Template 16 -->
            <div class="aufgabe-template" data-id="16" data-type="zeit">
                Ein U-Boot taucht {geschwindigkeit} km/h. Wie lange braucht es für {strecke} km?
            </div>
            
            <!-- Template 17 -->
            <div class="aufgabe-template" data-id="17" data-type="geschwindigkeit">
                Ein Skateboarder fährt {strecke} km in {zeit} Stunden. Wie schnell ist er?
            </div>
            
            <!-- Template 18 -->
            <div class="aufgabe-template" data-id="18" data-type="strecke">
                Ein Formel-1-Wagen fährt {geschwindigkeit} km/h. Welche Distanz legt er in {zeit} Stunden zurück?
            </div>
            
            <!-- Template 19 -->
            <div class="aufgabe-template" data-id="19" data-type="zeit">
                Ein Helikopter fliegt {geschwindigkeit} km/h. Wie lange benötigt er für {strecke} km?
            </div>
            
            <!-- Template 20 -->
            <div class="aufgabe-template" data-id="20" data-type="geschwindigkeit">
                {strecke} km in {zeit} Stunden geschafft. Wie schnell war die Radtour?
            </div>

            <!-- Template 21 -->
            <div class="aufgabe-template" data-id="21" data-type="geschwindigkeit">
                Ein Lieferwagen fährt {strecke} km in {zeit} Stunden. Wie hoch ist seine Geschwindigkeit?
            </div>
            
            <!-- Template 22 -->
            <div class="aufgabe-template" data-id="22" data-type="strecke">
                Ein Schneemobil fährt {geschwindigkeit} km/h. Wie weit kommt es in {zeit} Stunden?
            </div>
            
            <!-- Template 23 -->
            <div class="aufgabe-template" data-id="23" data-type="zeit">
                Wie lange braucht ein Eisbrecher für {strecke} km bei {geschwindigkeit} km/h?
            </div>
            
            <!-- Template 24 -->
            <div class="aufgabe-template" data-id="24" data-type="geschwindigkeit">
                Ein Kanu fährt {strecke} km in {zeit} Stunden. Berechne die Geschwindigkeit.
            </div>
            
            <!-- Template 25 -->
            <div class="aufgabe-template" data-id="25" data-type="strecke">
                Bei {geschwindigkeit} km/h, wie weit kommt ein Moped in {zeit} Stunden?
            </div>
            
            <!-- Template 26 -->
            <div class="aufgabe-template" data-id="26" data-type="zeit">
                Ein Heißluftballon treibt mit {geschwindigkeit} km/h. Wie lange dauert {strecke} km?
            </div>
            
            <!-- Template 27 -->
            <div class="aufgabe-template" data-id="27" data-type="geschwindigkeit">
                Ein Snowboarder fährt {strecke} km in {zeit} Stunden. Welche Geschwindigkeit hat er?
            </div>
            
            <!-- Template 28 -->
            <div class="aufgabe-template" data-id="28" data-type="strecke">
                Ein Rettungsboot fährt {geschwindigkeit} km/h. Welche Strecke legt es in {zeit} Stunden zurück?
            </div>
            
            <!-- Template 29 -->
            <div class="aufgabe-template" data-id="29" data-type="zeit">
                Ein Düsenjet fliegt {geschwindigkeit} km/h. Wie lange braucht er für {strecke} km?
            </div>
            
            <!-- Template 30 -->
            <div class="aufgabe-template" data-id="30" data-type="geschwindigkeit">
                {strecke} km in {zeit} Stunden zurückgelegt. Wie schnell war das Motorboot?
            </div>
        `;
        document.body.appendChild(fallbackTemplates);
        console.log('Fallback-Templates erstellt');
        return true;
    }
}

// Функция генерации задач Geschwindigkeit с использованием HTML шаблонов
function generateGeschwindigkeitAufgaben(anzahl, operation, schwierigkeit) {
    const aufgabenListe = document.getElementById('aufgaben-liste');
    if (!aufgabenListe) {
        console.error('Aufgabenliste nicht gefunden');
        return;
    }
    
    aufgabenListe.innerHTML = '';
    
    // Получаем все шаблоны из HTML
    const allTemplates = document.querySelectorAll('#geschwindigkeit-templates .aufgabe-template');
    if (allTemplates.length === 0) {
        console.error('Keine Templates gefunden');
        alert('Fehler: Templates konnten nicht geladen werden');
        return;
    }
    
    // Фильтруем шаблоны по выбранному типу операции
    let filteredTemplates = Array.from(allTemplates);
    if (operation !== 'mischung') {
        filteredTemplates = filteredTemplates.filter(t => t.getAttribute('data-type') === operation);
    }
    
    if (filteredTemplates.length === 0) {
        alert('Keine Aufgaben für den ausgewählten Typ verfügbar');
        return;
    }
    
    // Перемешиваем шаблоны для случайного выбора
    const shuffledTemplates = [...filteredTemplates].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < anzahl; i++) {
        // Выбираем случайный шаблон
        const templateIndex = i % shuffledTemplates.length;
        const template = shuffledTemplates[templateIndex];
        const templateText = template.textContent.trim();
        const templateType = template.getAttribute('data-type');
        
        // Генерируем случайные значения в зависимости от сложности
        let geschwindigkeit, strecke, zeit;
        let correctAnswer;
        
        switch(schwierigkeit) {
            case 'einfach':
                // Простые числа, целые результаты
                geschwindigkeit = Math.floor(Math.random() * 10) + 1; // 1-10
                strecke = Math.floor(Math.random() * 10) + 1; // 1-10
                zeit = Math.floor(Math.random() * 5) + 1; // 1-5
                break;
                
            case 'mittel':
                geschwindigkeit = Math.floor(Math.random() * 20) + 5; // 5-25
                strecke = Math.floor(Math.random() * 50) + 10; // 10-60
                zeit = Math.floor(Math.random() * 6) + 1; // 1-6
                break;
                
            case 'schwer':
                geschwindigkeit = Math.floor(Math.random() * 50) + 10; // 10-60
                strecke = Math.floor(Math.random() * 100) + 20; // 20-120
                zeit = Math.floor(Math.random() * 8) + 2; // 2-10
                break;
        }
        
        // Вычисляем правильный ответ и подготавливаем текст
        let aufgabeText = templateText;
        
        switch(templateType) {
            case 'geschwindigkeit':
                // Для простого уровня гарантируем целое число
                if (schwierigkeit === 'einfach') {
                    correctAnswer = Math.round(strecke / zeit);
                    strecke = correctAnswer * zeit; // Подгоняем значения
                } else {
                    correctAnswer = (strecke / zeit).toFixed(2);
                }
                aufgabeText = aufgabeText.replace('{strecke}', strecke).replace('{zeit}', zeit);
                break;
                
            case 'strecke':
                correctAnswer = geschwindigkeit * zeit;
                if (schwierigkeit !== 'einfach') {
                    correctAnswer = correctAnswer.toFixed(2);
                }
                aufgabeText = aufgabeText.replace('{geschwindigkeit}', geschwindigkeit).replace('{zeit}', zeit);
                break;
                
            case 'zeit':
                // Для простого уровня гарантируем целое число
                if (schwierigkeit === 'einfach') {
                    correctAnswer = Math.round(strecke / geschwindigkeit);
                    strecke = correctAnswer * geschwindigkeit; // Подгоняем значения
                } else {
                    correctAnswer = (strecke / geschwindigkeit).toFixed(2);
                }
                aufgabeText = aufgabeText.replace('{strecke}', strecke).replace('{geschwindigkeit}', geschwindigkeit);
                break;
        }
        
        // Создаем элемент задачи
        const li = document.createElement('li');
        
        const aufgabeSpan = document.createElement('span');
        aufgabeSpan.className = 'aufgabe-text';
        aufgabeSpan.textContent = `${i+1}) ${aufgabeText}`;
        
        const answerContainer = document.createElement('div');
        answerContainer.className = 'answer-container';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.size = 10;
        input.dataset.correctAnswer = correctAnswer;
        
        input.addEventListener('input', function() {
            checkAnswer(this);
        });
        
        const solution = document.createElement('span');
        solution.textContent = ` (${correctAnswer})`;
        solution.style.display = 'none';
        solution.classList.add('solution');
        
        answerContainer.appendChild(input);
        answerContainer.appendChild(solution);
        
        li.appendChild(aufgabeSpan);
        li.appendChild(answerContainer);
        aufgabenListe.appendChild(li);
    }
}

// Функция проверки ответа
function checkAnswer(input) {
    const val = input.value.trim();
    const correctAnswer = input.dataset.correctAnswer;
    
    if (val === '') {
        input.style.backgroundColor = '';
        return;
    }
    
    // Проверяем числовой ответ (допускаем небольшую погрешность)
    const userValue = parseFloat(val.replace(',', '.'));
    const correctValue = parseFloat(correctAnswer);
    
    if (!isNaN(userValue) && Math.abs(userValue - correctValue) < 0.01) {
        input.style.backgroundColor = '#c8f7c5';
    } else {
        input.style.backgroundColor = '#f7c5c5';
    }
    
    // Проверка всех ответов
    checkAllAnswers();
}

// Проверка всех ответов
function checkAllAnswers() {
    const inputs = document.querySelectorAll('#aufgaben-liste input');
    const allCorrect = Array.from(inputs).every(input => {
        return input.style.backgroundColor === 'rgb(200, 247, 197)';
    });
    
    if (allCorrect && inputs.length > 0) {
        showGratulationAndAnimateLogo();
    }
}

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
        msg.style.zIndex = "1";
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

// Функция для скрытия всех фильтров и сброса задач
function hideAllFiltersAndReset() {
    // Скрываем все фильтры
    const rechenFilter = document.getElementById('rechenarten-filter');
    const geschwindigkeitFilter = document.getElementById('geschwindigkeit-filter');
    if (rechenFilter) rechenFilter.style.display = 'none';
    if (geschwindigkeitFilter) geschwindigkeitFilter.style.display = 'none';
    
    // Очищаем список задач
    const aufgabenListe = document.getElementById('aufgaben-liste');
    if (aufgabenListe) aufgabenListe.innerHTML = '';
    
    // Скрываем контейнер с задачами
    const aufgabenContainer = document.getElementById('aufgaben-container');
    if (aufgabenContainer) aufgabenContainer.style.display = 'none';
    
    // Удаляем кнопки управления, если они есть
    const showAnswersBtn = document.getElementById('show-answers-inline');
    const printBtn = document.getElementById('print-aufgaben');
    if (showAnswersBtn) showAnswersBtn.remove();
    if (printBtn) printBtn.remove();
}

// Функция добавления кнопки управления
function addControlButtons() {
    // Удаляем старые кнопки, если они есть
    const oldShowBtn = document.getElementById('show-answers-inline');
    const oldPrintBtn = document.getElementById('print-aufgaben');
    if (oldShowBtn) oldShowBtn.remove();
    if (oldPrintBtn) oldPrintBtn.remove();
    
    // Кнопка "Alle Antworten zeigen"
    const showBtn = document.createElement('button');
    showBtn.textContent = 'Alle Antworten zeigen';
    showBtn.className = 'tab-link';
    showBtn.id = 'show-answers-inline';
    showBtn.addEventListener('click', () => {
        document.querySelectorAll('.solution').forEach(el => {
            el.style.display = 'inline';
        });
    });
    
    // Кнопка "Drucken"
    const printBtn = document.createElement('button');
    printBtn.textContent = 'Drucken';
    printBtn.className = 'tab-link';
    printBtn.id = 'print-aufgaben';
    printBtn.addEventListener('click', function() {
        const printContents = document.getElementById('aufgaben-container').innerHTML;
        const iframe = document.createElement('iframe');
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = '0';
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write('<html><head><title>Drucken</title></head><body>' + printContents + '</body></html>');
        doc.close();
        iframe.contentWindow.focus();
        iframe.contentWindow.print();
        setTimeout(() => document.body.removeChild(iframe), 1000);
    });
    
    // Добавляем кнопки в контейнер
    const container = document.getElementById('aufgaben-container');
    const buttonContainer = document.createElement('div');
    buttonContainer.style.marginTop = '20px';
    buttonContainer.appendChild(showBtn);
    buttonContainer.appendChild(printBtn);
    container.appendChild(buttonContainer);
}

// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем шаблоны при запуске
    loadTemplates().then(() => {
        console.log('Templates erfolgreich geladen');
    }).catch(error => {
        console.error('Fehler beim Laden der Templates:', error);
    });

    // Обработчик для кнопки Geschwindigkeit / Zeit
    const geschwindigkeitLink = document.getElementById('text-geschwindigkeit-link');
    if (geschwindigkeitLink) {
        geschwindigkeitLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Сначала скрываем все фильтры
            hideAllFiltersAndReset();
            
            // Показываем фильтр Geschwindigkeit
            const geschwindigkeitFilter = document.getElementById('geschwindigkeit-filter');
            if (geschwindigkeitFilter) {
                geschwindigkeitFilter.style.display = 'block';
            }
        });
    }

    // Обработчики для основных навигационных ссылок
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            hideAllFiltersAndReset();
        });
    });

    // Обработчики для вкладок Rechenbeispiele и Textaufgaben
    const rechenTab = document.getElementById('rechen-tab');
    const textTab = document.getElementById('text-tab');
    
    if (rechenTab) {
        rechenTab.addEventListener('click', () => {
            hideAllFiltersAndReset();
        });
    }
    
    if (textTab) {
        textTab.addEventListener('click', () => {
            hideAllFiltersAndReset();
        });
    }

    // Обработчик для кнопки Generieren
   const generateButton = document.getElementById('generate-geschwindigkeit');
if (generateButton) {
    generateButton.addEventListener('click', function(e) {
        e.preventDefault();
        let anzahl = document.getElementById('anzahl-geschwindigkeit-aufgaben').value;
        let operation = document.getElementById('geschwindigkeit-operation').value;
        let schwierigkeit = document.getElementById('geschwindigkeit-schwierigkeit').value;
        
        // Если какое-то поле не выбрано - выбираем случайное значение
        if (!anzahl) {
            const anzahlOptions = [5, 10, 15, 20];
            anzahl = anzahlOptions[Math.floor(Math.random() * anzahlOptions.length)];
            document.getElementById('anzahl-geschwindigkeit-aufgaben').value = anzahl;
        }
        
        if (!operation) {
            const operationOptions = ['geschwindigkeit', 'strecke', 'zeit', 'mischung'];
            operation = operationOptions[Math.floor(Math.random() * operationOptions.length)];
            document.getElementById('geschwindigkeit-operation').value = operation;
        }
        
        if (!schwierigkeit) {
            const schwierigkeitOptions = ['einfach', 'mittel', 'schwer'];
            schwierigkeit = schwierigkeitOptions[Math.floor(Math.random() * schwierigkeitOptions.length)];
            document.getElementById('geschwindigkeit-schwierigkeit').value = schwierigkeit;
        }
        
        // Показываем общий контейнер с задачами
        document.getElementById('aufgaben-container').style.display = 'block';
        
        // Генерация задач Geschwindigkeit
        generateGeschwindigkeitAufgaben(parseInt(anzahl), operation, schwierigkeit);
        
        // Добавляем кнопки управления
        addControlButtons();
    });
}
});



//БАБОЧКИ
// Функция создания бабочек

function createButterflies(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Создаем 12-15 бабочек
    const butterflyCount = 12 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < butterflyCount; i++) {
        setTimeout(() => {
            createButterfly(centerX, centerY);
        }, i * 100); // Задержка между созданием бабочек
    }
}

function createButterfly(startX, startY) {
    const butterfly = document.createElement('div');
    butterfly.className = 'butterfly';
    butterfly.innerHTML = '🦋';
    
    // Случайное направление и расстояние
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 300;
    
    // Точки траектории
    const x1 = Math.cos(angle) * distance * 0.3;
    const y1 = Math.sin(angle) * distance * 0.3 - 50;
    const x2 = Math.cos(angle) * distance * 0.6;
    const y2 = Math.sin(angle) * distance * 0.6 - 80;
    const x3 = Math.cos(angle) * distance * 0.8;
    const y3 = Math.sin(angle) * distance * 0.8 - 100;
    const x4 = Math.cos(angle) * distance;
    const y4 = Math.sin(angle) * distance - 120;
    
    // Устанавливаем CSS переменные для анимации
    butterfly.style.setProperty('--x1', `${x1}px`);
    butterfly.style.setProperty('--y1', `${y1}px`);
    butterfly.style.setProperty('--x2', `${x2}px`);
    butterfly.style.setProperty('--y2', `${y2}px`);
    butterfly.style.setProperty('--x3', `${x3}px`);
    butterfly.style.setProperty('--y3', `${y3}px`);
    butterfly.style.setProperty('--x4', `${x4}px`);
    butterfly.style.setProperty('--y4', `${y4}px`);
    
    // Начальная позиция
    butterfly.style.left = `${startX}px`;
    butterfly.style.top = `${startY}px`;
    
    // Случайный размер
    const size = 0.8 + Math.random() * 0.7;
    butterfly.style.fontSize = `${size}em`;
    
    // Случайный цветовой оттенок
    const hue = Math.random() * 360;
    butterfly.style.filter = `hue-rotate(${hue}deg) brightness(1.2)`;
    
    document.body.appendChild(butterfly);
    
    // Удаляем бабочку после анимации
    setTimeout(() => {
        if (butterfly.parentNode) {
            butterfly.parentNode.removeChild(butterfly);
        }
    }, 3000);
}

// Добавляем обработчик к кнопке
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const generateButtonTwo = document.getElementById('generate-geschwindigkeit');
    if (generateButton) {
        generateButton.addEventListener('click', createButterflies);
    }

    if (generateButtonTwo) {
        generateButtonTwo.addEventListener('click', createButterflies);
    }


});




