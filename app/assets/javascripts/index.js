function change_state(state) {
    var xhr = new XMLHttpRequest();
    var params = 'state=' + encodeURIComponent(state);
    xhr.open("GET", "/change_state?" + params)

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('states').style.display = 'none';
            document.getElementById('state').innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" class=\"bi bi-circle-fill ${xhr.responseText}\" viewBox=\"0 0 16 16\"> <circle cx=\"8\" cy=\"8\" r=\"8\"/> </svg> ${xhr.responseText}`
            document.getElementById('state').style.display = 'block';
        }
    }
    xhr.send()
}

function show_states() {
    document.getElementById('state').style.display = 'none';
    document.getElementById('states').style.display = 'block';
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function show_user(name, surname, state, mood, info, role, mail, contacts, time, avatar) {
    document.getElementById('user_title').innerHTML = `Пользователь ${surname} ${name} ${role} ${state}`;
    document.getElementById('user-mood').innerHTML = `${mood}`;
    document.getElementById('info').innerHTML = `${info}`;
    document.getElementById('mail').innerHTML = `${mail}`;
    document.getElementById('time').innerHTML = `В YouCrm с ${time}`;
    contacts = contacts.split('#')
    document.getElementById('contact_list').innerHTML = ''

    if (contacts == '')
        return

    for(i = 0; i < contacts.length; i++) {
        site = contacts[i].split('-')[0]
        nick = contacts[i].split('-')[1]
        if (['telegram', 'slack' , 'whatsapp' , 'phone', 'github'].indexOf( site ) == -1)
            site2 = 'another'
        else
            site2 = site
        document.getElementById('contact_list').innerHTML += `<img class="icons" src="../assets/white-${site2}.svg"` +
            `title="${site}"> ${nick} <br>`;
    }

    value = getRandomInt(6)+1
    document.getElementById('user_avatar').src = `../assets/avatar${value}.jpeg`

    if (avatar !== ''){
        document.getElementById('user_avatar').src = avatar
    } else {
        value = getRandomInt(6)+1
        document.getElementById('user_avatar').src = `../assets/avatar${value}.jpeg`
    }
}

function inactive(id){
    if (!confirm('Вы уверены, что хотите сделать задачу неактивной?')){
        return
    }

    var xhr = new XMLHttpRequest();
    params = 'id=' + encodeURIComponent(id);
    xhr.open("GET", "/inactive?" + params)

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(`task_${id}`).style.display = 'none'
        }
    }
    xhr.send()
}

function change_icon(){
    document.getElementById('for_icon').innerHTML =  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-check-circle" viewBox="0 0 16 16">'+
        '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
        '<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>'+
        '</svg>'

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/not_new")

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('good')
        }
    }
    xhr.send()
}

function add_text(subject, body, creator, date, tag, is_new){
    document.getElementById('exampleModalLabel').innerText = `Задача от ${creator}`
    document.getElementById('task-subject').innerText = `${subject}`
    document.getElementById('task-body').innerText = `${body}`
    document.getElementById('task-tag').innerText = `${tag}`
    document.getElementById('task-time').innerText = `Срок до ${date}`
    if (is_new == 'false'){
        document.getElementById('task-new').innerText = `Новая`
    }
}
