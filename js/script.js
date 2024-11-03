document.addEventListener("DOMContentLoaded", () =>{
    let txtIP = document.getElementById("txtIP");
    let btnBuscar = document.getElementById("btnBuscar");
    let mostrar = document.getElementById("mostrar");
    btnBuscar.addEventListener("click", ()=>{
        if(txtIP.value !== ""){
            inicio(txtIP.value, mostrar)
        }else{
            mostrar.innerHTML = "Rellena el campo";
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
        Object.freeze(json);
        console.log(json);
        mostrar.innerHTML = `
        <p class="lista">IP: ${json.ip}</p>
        <p class="lista">ABUSE</p>
        <p class="lista">Address:    ${json.abuse.address}</p>
        <p class="lista">Country:    ${json.abuse.country}</p>
        <p class="lista">Email:      ${json.abuse.email}</p>
        <p class="lista">Name:       ${json.abuse.name}</p>
        <p class="lista">Network:    ${json.abuse.network}</p>
        <p class="lista">Phone:      ${json.abuse.phone}</p>
        <p class="lista">ASN</p>
        <p class="lista">Asn:        ${json.asn.asn}</p>
        <p class="lista">Domain:     ${json.asn.domain}</p>
        <p class="lista">Name:       ${json.asn.name}</p>
        <p class="lista">Route:      ${json.asn.route}</p>
        <p class="lista">Type:       ${json.asn.type}</p>
        <p class="lista">City:       ${json.city}</p>
        <p class="lista">COMPANY</p>
        <p class="lista">Domain:     ${json.company.domain}</p>
        <p class="lista">Name:       ${json.company.name}</p>
        <p class="lista">Type:       ${json.company.type}</p>
        <p class="lista">Country:    ${json.country}</p>
        <p class="lista">DOMAINS</p>
        <p class="lista">Domains:     ${json.domains.domains}</p>
        <p class="lista">Page:        ${json.domains.page}</p>
        <p class="lista">Total:       ${json.domains.total}</p>
        <p class="lista">Hostname:    ${json.hostname}</p>
        <p class="lista">Ip:          ${json.ip}</p>
        <p class="lista">Loc:         ${json.loc}</p>
        <p class="lista">Postal:      ${json.postal}</p>
        <p class="lista">Region:      ${json.region}</p>
        <p class="lista">Timezone:      ${json.timezone}</p>
        `;
    }catch(error){
        console.log("error: "+error)
        mostrar.innerHTML = error;
    }
}
