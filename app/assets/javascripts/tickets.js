function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function show_ticket(id, close = false) {
    document.getElementById('client').style.display='block'
    var xhr = new XMLHttpRequest();
    var params = 'id=' + encodeURIComponent(id);
    xhr.open("GET", "/show_ticket?" + params)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('nothing_selected').style.display = 'none'
            document.getElementById('ticket_info').innerHTML = ''
            document.getElementById('product_info').innerHTML = ''
            document.getElementById('another_tickets').innerHTML = ''
            document.getElementById('client_info').innerHTML = ''
            data = JSON.parse(xhr.responseText)

            ticket = data['ticket']
            product = data['product']
            i = getRandomInt(4) + 1
            client_info = data['client']

            if (close) {
                document.getElementById('client_info').innerHTML += `<img id="avatar_client" src="../assets/client_avatar${i}.png"><div id="client_name_block"><span id="client_name">${client_info.name}</span> <span id="client_surname">${client_info.surname}</span><br><span id="client_patronymic">${client_info.patronymic}</span></div><br><div id="client_description_block"><span id="client_description">${client_info.description}</span></div>` +
                    `<div id="client_contacts"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>`+
                    `</svg> ${client_info.phone} </span><br><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>` +
                    `</svg> ${client_info.email} </span><br><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/></svg> ${client_info.address} </span><br><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">` +
                    `<path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/><path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> ${client_info.password} </span></div><span id="client_manager">менеджер fhhfhfhfhj</span><div id="client_attach"><span ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#848484" class="bi bi-coin" viewBox="0 0 16 16">` +
                    `<path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg> ${client_info.points}</span><a href="#win5000000" onclick="load_files('${ticket.id}')"><svg id="client_attach_svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-paperclip" viewBox="0 0 16 16">` +
                    `<path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/></svg></a></div></div>`
                document.getElementById('ticket_info').innerHTML += `<span id="id">#${ticket.id}</span> <span id="subject">${ticket.subject}</span><br><div id="description">${ticket.description}</div><div id="status_category"><span id="status">оплачен</span><span id="category">белые</span><br></div><span id="created_at">вчера</span> <span id="manager">менеджер</span></div>`
                if (product) {
                    document.getElementById('product_info').innerHTML += `<div id="product"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-boxes" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/></svg>` +
                        `<div id="product_name">${product.name}</div></div><div id="product_description">${product.description}</div><div id="product_details"> <span id="product_date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">` +
                        `<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>` +
                        `<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg> дата</span><br>` +
                        `<span id="product_type"><span class="mini">тип </span>${product.type_service}</span><br><span id="product_duration"><span class="mini">продолжтительность</span> ${product.duration}</span><br><span id="executor"><span class="mini">исполнитель</span> олег</span><br></div>` +
                        `<div id="price_block"><span id="product_price" title="Цена"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>` +
                        `<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>` +
                        `<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/><path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/></svg> 1000 </span>` +
                        `<span id="product_discount" title="Скидка"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16"><path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg> 5 </span>` +
                        `<span title="Важный заказ"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-exclamation-triangle" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg> </span></div>`
                }
            } else {
                document.getElementById('client_info').innerHTML += `<img id="avatar_client" src="../assets/client_avatar${i}.png"><div id="client_name_block"><span id="client_name" type_object='client' id_ticket='${ticket.id}' contenteditable="true" name='name'>${client_info.name}</span> <span id="client_surname" id_ticket='${ticket.id}' contenteditable="true" name='surname' type_object='client'>${client_info.surname}</span><br><span id="client_patronymic" name='patronymic' type_object='client' id_ticket='${ticket.id}' contenteditable="true">${client_info.patronymic}</span></div><br><div id="client_description_block"><span id="client_description" type_object='client' name='description' id_ticket='${ticket.id}' contenteditable="true">${client_info.description}</span></div>` +
                    `<div id="client_contacts"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>`+
                    `</svg> <span id_ticket='${ticket.id}' contenteditable="true" name='phone' type_object='client'>${client_info.phone}</span> </span><br><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>` +
                    `</svg> <span id_ticket='${ticket.id}' contenteditable="true" name='email' type_object='client'>${client_info.email}</span></span><br><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/></svg> <span name='address' id_ticket='${ticket.id}' contenteditable="true" type_object='client'>${client_info.address}</span></span><br><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">` +
                    `<path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/><path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg> <span name='password' id_ticket='${ticket.id}' contenteditable="true" type_object='client'>${client_info.password}</span></span></div><span id="client_manager">менеджер fhhfhfhfhj</span><div id="client_attach"><span ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#848484" class="bi bi-coin" viewBox="0 0 16 16">` +
                    `<path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg> <span id_ticket='${ticket.id}' contenteditable="true" name='points' type_object='client'>${client_info.points}</span></span><a href="#win5000000" onclick="load_files('${ticket.id}')"><svg id="client_attach_svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-paperclip" viewBox="0 0 16 16">` +
                    `<path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/></svg></a></div></div>`
                document.getElementById('ticket_info').innerHTML += `<span id="id">#${ticket.id}</span> <span id="subject" type_object='ticket' id_ticket='${ticket.id}' contenteditable="true" name='subject'>${ticket.subject}</span><br><div id="description" type_object='ticket' id_ticket='${ticket.id}' contenteditable="true" name='description'>${ticket.description}</div><div id="status_category"><span id="status">оплачен</span><span id="category">белые</span><br></div><span id="created_at">вчера</span> <span id="manager">менеджер</span>` +
                    `<a title="Закрыть тикет" onclick="close_ticket('${ticket.id}')" id="icon_${ticket.id}" class="icon_close"><svg id="icon_close"  xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#848484" class="bi bi-eye-slash-fill" viewBox="0 0 16 16"><path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/><path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/></svg></a></div>`
                if (product) {
                    document.getElementById('product_info').innerHTML += `<div id="product"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-boxes" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/></svg>` +
                        `<div id="product_name" id_ticket='${ticket.id}' contenteditable="true" name='name' type_object='product'>${product.name}</div></div><div id="product_description" id_ticket='${ticket.id}' contenteditable="true" name='description' type_object='product'>${product.description}</div><div id="product_details"> <span id="product_date"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-date" viewBox="0 0 16 16">` +
                        `<path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"/>` +
                        `<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg> дата</span><br>` +
                        `<span id="product_type"><span class="mini">тип </span><span id_ticket='${ticket.id}' contenteditable="true" name='type_service' type_object='product'>${product.type_service}</span></span><br><span id="product_duration"><span class="mini">продолжтительность</span> <span id_ticket='${ticket.id}' contenteditable="true" name='duration' type_object='product'>${product.duration}</span></span><br><span id="executor"><span class="mini">исполнитель</span> олег</span><br></div>` +
                        `<div id="price_block"><span id="product_price" title="Цена"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>` +
                        `<path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>` +
                        `<path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/><path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/></svg> <span id_ticket='${ticket.id}' contenteditable="true" name='price' type_object='product'>${product.price}</span> </span>` +
                        `<span id="product_discount" title="Скидка"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16"><path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg> <span id_ticket='${ticket.id}' contenteditable="true" name='discount' type_object='product'>${product.discount}</span> </span>` +
                        `<span title="Важный заказ"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-exclamation-triangle" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"/></svg> </span></div>`
                } else {
                    document.getElementById('product_info').innerHTML += '<button>Добавить продукт</button>'
                }
            }
            another_tickets = data['another_tickets']
            for(i = 0; i< another_tickets.length; i++ ){
                document.getElementById('another_tickets').innerHTML += `<section id="ticket_" class="ticket" onclick="show_ticket('${another_tickets[i].id }', ${another_tickets[i].is_closed})"><div class="manager">Нина Гендина</div><div class="subject">${another_tickets[i].subject }</div>` +
                    `<div class="product"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-boxes" viewBox="0 0 16 16">` +
                    `<path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>` +
                    `</svg></div>` +
                    `<div class="status_category"><span>статус</span> <span>категория</span></div><div class="client_product"><span>Клиент: </span><br><span>Заказ: </span></div><span class="create_at">вчера </span></section>`
            }
            document.getElementById('email_button').innerHTML = `<button class="mail_calendar" onclick="show_emails('${ticket.id}')"><a href="#win1010">Переписка</a></button><button class="mail_calendar"><a href="#win2020">Календарь</a></button>`
            document.getElementById('ticket_id_for_note').value = ticket.id;
            document.getElementById('log').classList.remove('hidden');

            notes = data['notes']
            document.getElementById('notes2').innerHTML = ''
            for (j = 0; j < notes.length; j++){
                document.getElementById('notes2').innerHTML += `<li id="note_${notes[j][0]}"><p ${notes[j][3] ? 'contenteditable="true"' : 'title="Нельзя редактировать не свои заметки"'} id_ticket='${notes[j][0]}' name='body' type_object='note'>${notes[j][1]}</p><span style="cursor: pointer" onclick="delete_note('${notes[j][0]}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#848484" class="bi bi-x-circle" viewBox="0 0 16 16">` +
                    `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>` +
                    `<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></span>` +
                    `<span class="note_manager">${notes[j][3] ? 'Вы' : notes[j][2]}</span></li>`;
            }

            logs = data['logs']
            document.getElementById('logs').innerHTML = ''
            for (q = 0; q < logs.length; q++) {
                document.getElementById('logs').innerHTML += `<div class="log_${logs[q][2]}">${logs[q][0]}<br>${logs[q][1]}</div>`
            }
        }
    }
    xhr.send()
}

function sort_tickets(value = false){
    var xhr = new XMLHttpRequest();
    params = 'all=' + encodeURIComponent(value);

    xhr.open("GET", "/sort_ticket?" + params)

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText)
            document.getElementById('tickets').innerHTML = ''
            for (i = 0; i< data.length; i++) {
                document.getElementById('tickets').innerHTML += `<div id="ticket_${data[i][0]}" class="ticket" onclick="show_ticket('${data[i][0]}')">` +
                    `<div class="subject">${data[i][1]}</div><div class="status_category2">` +
                    `<span title="Статус">${data[i][7] !== null ? data[i][7] : '' }</span> <span title="Категория">${data[i][6] !== null ? data[i][6] : '' }</span></div><div class="client_product">` +
                    `<span>Клиент: ${data[i][2]}</span><br><span> ${data[i][3] !== null ? 'Заказ: ' + data[i][3] : '' }</span></div><span class="manager" title="Менеджер">${data[i][4] !== null ? data[i][4] : '' }</span><span class="create_at" title="Дата создания"> ${data[i][5]}</span>`;
                if (data[i][8] == 'Product') {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-boxes" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/></svg>` +
                        `</div></div>`
                } else if (data[i][8] == 'Service') {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484"className="bi bi-pin-map" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 10-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>` +
                        `<path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/></svg></div></div>`
                } else {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="#848484"className="bi bi-pin-map" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 10-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>` +
                        `<path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/></svg></div></div>`
                }
            }
        }
    }
    xhr.send()
}

function show_close_tickets(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/ticket_close")

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText)
            document.getElementById('tickets').innerHTML = ''
            for (i = 0; i< data.length; i++) {
                document.getElementById('tickets').innerHTML += `<div id="ticket_${data[i][0]}" class="ticket" onclick="show_ticket('${data[i][0]}', true)">` +
                    `<div class="subject">${data[i][1]}</div><div class="status_category2">` +
                    `<span title="Статус">${data[i][7] !== null ? data[i][7] : '' }</span> <span title="Категория">${data[i][6] !== null ? data[i][6] : '' }</span></div><div class="client_product">` +
                    `<span>Клиент: ${data[i][2]}</span><br><span> ${data[i][3] !== null ? 'Заказ: ' + data[i][3] : '' }</span></div><span class="manager" title="Менеджер">${data[i][4] !== null ? data[i][4] : '' }</span><span class="create_at" title="Дата создания"> ${data[i][5]}</span>`;
                if (data[i][8] == 'Product') {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484" class="bi bi-boxes" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/></svg>` +
                        `</div></div>`
                } else if (data[i][8] == 'Service') {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#848484"className="bi bi-pin-map" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 10-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>` +
                        `<path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/></svg></div></div>`
                } else {
                    document.getElementById('tickets').innerHTML += `<div class="product2" id="product_${data[i][0]}"><svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" fill="#848484"className="bi bi-pin-map" viewBox="0 0 16 16">` +
                        `<path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 10-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>` +
                        `<path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/></svg></div></div>`
                }
            }
        }
    }
    xhr.send()
}

$('body').on('focus', '[contenteditable]', function() {
    const $this = $(this);
    $this.data('before', $this.html());

}).on('blur', '[contenteditable]', function() {
    const $this = $(this);
    if ($this.data('before') !== $this.html()) {
        $this.data('before', $this.html());
        $this.trigger('change');

        update_object($this.attr('name'), $this.html(), $this.attr('id_ticket'), $this.attr('type_object'));
    }
});

function update_object(name, value, id, type_object) {
    var xhr = new XMLHttpRequest();

    switch(type_object) {
        case 'client':
            xhr.open("POST", "/update_client.json");
            break
        case 'product':
            xhr.open("POST", "/update_product.json");
            break
        case 'ticket':
            xhr.open("POST", "/update_ticket.json");
            break
        case 'note':
            xhr.open("POST", "/update_note.json");
            break
    }

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    body = name + '=' + encodeURIComponent(value) +
        '&id=' + id +
        '&authenticity_token=' + document.getElementById('token').value;

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('alert_update').style.display = 'block'
            setTimeout(hidden_alert, 1000)
        }
    }
    xhr.send(body)

}

function hidden_alert(){
    document.getElementById('alert_update').style.display = 'none'
}

function close_ticket(id){
    if (!confirm('Вы уверены, что хотите закрыть тикет? Это необратимый процесс.')){
        return
    }
    var xhr = new XMLHttpRequest();
    params = 'id=' + encodeURIComponent(id);
    xhr.open("GET", "/update_close_ticket?" + params)

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
        }
    }
    xhr.send()
    document.getElementById(`icon_${id}`).style.display = 'none'
    document.getElementById(`ticket_${id}`).style.display = 'none'
    document.getElementById(`product_${id}`).style.display = 'none'
}

function create_ticket(type_product) {
    var subject = document.forms.ticketForm.subject.value;
    var description = document.forms.ticketForm.description.value;
    var status = document.forms.ticketForm.status.value;
    var category = document.forms.ticketForm.category.value;
    var client = document.forms.ticketForm.client.value;
    var manager = document.forms.ticketForm.manager.value;
    var token = document.forms.ticketForm.authenticity_token.value

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "/create_ticket")
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    body = 'subject=' + encodeURIComponent(subject) +
        '&description=' + encodeURIComponent(description) +
        '&status_id=' + encodeURIComponent(status) +
        '&category_id=' + encodeURIComponent(category) +
        '&client=' + encodeURIComponent(client) +
        '&manager_id=' + encodeURIComponent(manager) +
        '&authenticity_token=' + encodeURIComponent(token);
    if (type_product === 'product') {
        var product_name = document.forms.ticketForm.product_name.value;
        var product_type = document.forms.ticketForm.product_type.value;
        var product_date = document.forms.ticketForm.product_date.value;
        var product_number = document.forms.ticketForm.product_number.value;
        var product_description = document.forms.ticketForm.product_description.value;
        var product_price = document.forms.ticketForm.product_price.value;
        var product_discount = document.forms.ticketForm.product_discount.value;
        var product_important = !!document.forms.ticketForm.product_important.checked;

        body += '&type=product' +
            '&product[name]=' + encodeURIComponent(product_name) +
            '&product[type_product]=' + encodeURIComponent(product_type) +
            '&product[date]=' + encodeURIComponent(product_date) +
            '&product[number]=' + encodeURIComponent(product_number) +
            '&product[description]=' + encodeURIComponent(product_description) +
            '&product[price]=' + encodeURIComponent(product_price) +
            '&product[discount]=' + encodeURIComponent(product_discount) +
            '&product[important]=' + encodeURIComponent(product_important);
    } else {
        var service_name = document.forms.ticketForm.service_name.value;
        var service_type = document.forms.ticketForm.service_type.value;
        var service_date = document.forms.ticketForm.service_date.value;
        var service_duration = document.forms.ticketForm.service_duration.value;
        var service_description = document.forms.ticketForm.service_description.value;
        var service_price = document.forms.ticketForm.service_price.value;
        var service_discount = document.forms.ticketForm.service_discount.value;
        var service_executor = document.forms.ticketForm.service_executor.value;
        var service_important = !!document.forms.ticketForm.service_important.checked;

        body += '&type=service' +
            '&product[name]=' + encodeURIComponent(service_name) +
            '&product[type_service]=' + encodeURIComponent(service_type) +
            '&product[date]=' + encodeURIComponent(service_date) +
            '&product[duration]=' + encodeURIComponent(service_duration) +
            '&product[description]=' + encodeURIComponent(service_description) +
            '&product[price]=' + encodeURIComponent(service_price) +
            '&product[discount]=' + encodeURIComponent(service_discount) +
            '&product[executor]=' + encodeURIComponent(service_executor) +
            '&product[important]=' + encodeURIComponent(service_important);
    }

    xhr.onreadystatechange = function (){
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText)
        }
    }
    xhr.send(body)
}
