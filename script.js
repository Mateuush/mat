const questions = [
    {
        "name": "Czym jest ciąg arytmetyczny?",
        "answers": {
            "1": "Ciąg, w którym każdy element jest iloczynem poprzedniego elementu",
            "2": "Ciąg, w którym każdy kolejny element różni się o stałą wartość od poprzedniego elementu"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli pierwszy wyraz ciągu arytmetycznego to 3, a różnica wynosi 5, jaki będzie szósty wyraz tego ciągu?",
        "answers": {
            "1": "27",
            "2": "28"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jeśli wyraz ogólny ciągu arytmetycznego jest określony jako a_n = a_1 + (n - 1) * r, co oznacza r w tym wzorze?",
        "answers": {
            "1": "Różnicę",
            "2": "Pierwszy wyraz ciągu"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu arytmetycznym ostatni wyraz wynosi 35, pierwszy wynosi 5, a liczba wyrazów to 7, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "5",
            "2": "6"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jak obliczyć sumę n pierwszych wyrazów ciągu arytmetycznego?",
        "answers": {
            "1": "n/2 * (a_1 + a_n)",
            "2": "n * (a_1 + a_n)"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli w ciągu arytmetycznym a_1 = 10 i a_4 = 22, jaka jest różnica tego ciągu?",
        "answers": {
            "1": "3",
            "2": "4"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jaki jest 20. wyraz ciągu arytmetycznego o pierwszym elemencie równym 7 i różnicy równej 4?",
        "answers": {
            "1": "83",
            "2": "87"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeśli a_1 = 2, a_4 = 14, jaki jest piąty wyraz tego ciągu arytmetycznego?",
        "answers": {
            "1": "16",
            "2": "18"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Czym jest ciąg geometryczny?",
        "answers": {
            "1": "Ciąg, w którym każdy kolejny element jest sumą poprzednich elementów",
            "2": "Ciąg, w którym każdy kolejny element jest iloczynem poprzedniego elementu i pewnej stałej"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Jak nazywa się stała między dowolnymi dwoma kolejnymi wyrazami w ciągu geometrycznym?",
        "answers": {
            "1": "Różnicą",
            "2": "Ilorazem"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Który z podanych wzorów służy do liczenia sumy n początkowych wyrazów ciągu geometrycznego?",
        "answers": {
            "1": "a_1 * 1 - q^n / 1 - q",
            "2": "a_1 * q^(n - 1)"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jaki jest 10. wyraz ciągu geometrycznego o pierwszym elemencie równym 4 i ilorazie równym 2?",
        "answers": {
            "1": "8192",
            "2": "2048"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Ciąg an jest określony wzorem a_n=(−3)n⋅(9−n2) dla n≥1. Wynika stąd, że",
        "answers": {
            "1": "a3=−27",
            "2": "B.a3=0 "
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Ile wyrazów ujemnych ma ciąg (an) określony wzorem an=2n2−9 dla n≥1?",
        "answers": {
            "1": "1",
            "2": "2"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Miary kątów trójkąta są trzema kolejnymi wyrazami ciągu arytmetycznego. Najmniejszy kąt tego trójkąta ma miarę 40∘. Różnica ciągu arytmetycznego wynosi:",
        "answers": {
            "1": "10∘",
            "2": "20∘"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "W ciągu arytmetycznym (an) dane są: a3=13 i a5=39. Wtedy wyraz a1 jest równy:",
        "answers": {
            "1": "0",
            "2": "-13"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Ciąg (an) jest określony wzorem an=2n+4−−−−−√ dla n≥1. Wówczas",
        "answers": {
            "1": "a8=2–√5",
            "2": "a8=5–√2"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Czternasty wyraz ciągu arytmetycznego jest równy 8, a różnica tego ciągu jest równa  .Siódmy wyraz tego ciągu jest równy:",
        "answers": {
            "1": "37/2",
            "2": "5/2"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Ciąg (x,2x+3,4x+3) jest geometryczny. Pierwszy wyraz tego ciągu jest równy:",
        "answers": {
            "1": "-4",
            "2": "-1"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Ile musi wynosić różnica ciągu arytmetycznego, aby ciąg był stały?",
        "answers": {
            "1": "0",
            "2": "1"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Ile musi wynosić iloraz ciągu geometrycznego, aby ciąg był stały?",
        "answers": {
            "1": "0",
            "2": "1"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Czy ciąg może być jednocześnie arytmetyczny i geometryczny?",
        "answers": {
            "1": "tak",
            "2": "nie"
        },
        "correct": 1,
        "selected": undefined
    },
    {
        "name": "Jeżeli różnica pewnego wyrazu ciągu i wyrazu następującego po nim jest mniejsza od zera to...",
        "answers": {
            "1": "ciąg jest rosnący",
            "2": "ciąg jest malejący"
        },
        "correct": 2,
        "selected": undefined
    },
    {
        "name": "Który z ciągów jest ciągiem arytmetycznym",
        "answers": {
            "1": "2, 4, 6, 8, ...",
            "2": "-3, -6, -12, -24, ..."
        },
        "correct": 1,
        "selected": undefined
    }
]

const randomNumber = (minimum, maximum) => { return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; }

const holder = document.querySelector('.holder')
let temp = holder.innerHTML

let openedWindows = 0

function openWindow(id) {
    if (id > 1) {
        if (questions[id - 2].selected === undefined) {
            return;
        }
    }

    if (openedWindows + 1 !== id) return;
    openedWindows++

    const card = document.getElementById(id)

    // zmiana wyglądu karty
    card.innerHTML = `<span onclick="displayModal(${id})">zobacz</span>`
    card.style.color = 'black'
    card.style.backgroundColor = 'bisque'
    temp = holder.innerHTML
}

function back() {
    holder.innerHTML = temp
}

function handle(contentId) {
    let i1 = document.getElementById('in_1').checked
    let i2 = document.getElementById('in_2').checked

    if (i1) {
        questions[contentId - 1].selected = 1
    }

    if (i2) {
        questions[contentId - 1].selected = 2
    }

    if (!i1 && !i2) {
        questions[contentId - 1].selected = 3
    }

    back()

    const card = document.getElementById(contentId)

    if (questions[contentId - 1].correct === 1 && i1) {
        card.style.backgroundColor = '#527853'
        card.innerHTML = 'dobrze'

    } else if (questions[contentId - 1].correct === 2 && i2) {
        card.style.backgroundColor = '#527853'
        card.innerHTML = 'dobrze'

    } else {
        card.style.backgroundColor = '#F55050'
        card.innerHTML = 'źle'
    }

    if (contentId === questions.length) {
        holder.innerHTML = `
            <div style="z-index: 2">
                <h2 style="text-align: center">Koniec gry</h2>
                <p style="text-align: center; z-index: 2">Dobre odpowiedzi: ${questions.filter(q => q.correct === q.selected).length} / ${questions.length}</p>
            </div>
        `
    }
}

function displayModal(contentId) {

    holder.innerHTML = `
        <div style="background-color: #b01b2e; padding: 10px; z-index: 2">
            <h2>Pytanie nr ${contentId}</h2>
            <span>${questions[contentId-1].name}</span><br>
            <label>
                <input type="radio" name="answer" id="in_1" value="1" style="margin-top: 10px">${questions[contentId-1].answers[1]}<br>
            </label>
            <label>
                <input type="radio" name="answer" id="in_2" value="2">${questions[contentId-1].answers[2]}<br>
            </label>
            <button onclick="handle(${contentId}) " style="background-color: #fabc02; padding: 5px; border: none; cursor: pointer; margin-top: 10px">Zatwierdź odpowiedź</button>
        </div>
    `
}
