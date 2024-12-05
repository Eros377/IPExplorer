document.addEventListener("DOMContentLoaded", () =>{
    let txtIP = document.getElementById("txtIP");
    let btnBuscar = document.getElementById("btnBuscar");
    let mostrar = document.getElementById("mostrar");
    btnBuscar.addEventListener("click", ()=>{
        if(txtIP.value !== ""){
            inicio(txtIP.value, mostrar)
        }else{
            mostrar.innerHTML = `
            <section class="information vidrio">
            <p class="information__vacio">Rellena el campo</p>
            </section>`;
        }
    })
})
async function inicio(ip, mostrar){
    const token = 'c5724bbeac7bff';
    Object.freeze(token);
    const url = `https://ipinfo.io/${ip}?token=${token}`;
    Object.freeze(url);
    try{
        const result = await fetch(url);
        Object.freeze(result);
        const json = await result.json();
        console.log(json);
        mostrar.innerHTML = `
        <section class="information vidrio">
            <p class="information__lista">IP:           ${json.ip}</p>
            <p class="information__lista">City:         ${json.city}</p>
            <p class="information__lista">Country:      ${json.country}</p>
            <p class="information__lista">Hostname:     ${json.hostname}</p>
            <p class="information__lista">Loc:          ${json.loc}</p>
            <p class="information__lista">Org:          ${json.org}</p>
            <p class="information__lista">Postal:       ${json.postal}</p>
            <p class="information__lista">Region:       ${json.region}</p>
            <p class="information__lista">Timezone:     ${json.timezone}</p>
        <section>
        `;
    }catch(error){
        console.log("error: "+error)
        mostrar.innerHTML = error;
    }
}
