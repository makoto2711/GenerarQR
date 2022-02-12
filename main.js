!function() 
{
   window.addEventListener("DOMContentLoaded", main )

    function main() 
    {
        const FORM = document.getElementById("form")
        const QR = document.getElementById("qr")
        const TAM = document.getElementById("tamanos")
        
        const CONTENEDOR = document.getElementById("contenedor")
    
       
        const TEMPLATE = document.getElementById("template").content
        const FRAGMENTO = document.createDocumentFragment()
    
        const SPINNER = `
        <div class="d-flex justify-content-center align-items-center mt-5" id="sp">
            <div class="spinner-border" role="status">
            </div>
        </div>`
    
        const SIZES = [100,150,200,250,300]
    
            function AgregarTam() 
            {
                SIZES.forEach(item => 
                    {
                        const CLONE = TEMPLATE.cloneNode(true)
                        CLONE.querySelector(".op").textContent = `${item}x${item}`
                        CLONE.querySelector(".op").value = item
                        FRAGMENTO.appendChild(CLONE)
                    });
            
                    TAM.appendChild(FRAGMENTO) 
            }
    
            AgregarTam();  
    
    
        function SetQR(tam = 100, data) 
        {
            const API = `https://chart.googleapis.com/chart?cht=qr&chs=${tam}x${tam}&chl=${data}`
            return API    
        }
    
    
        FORM.addEventListener("submit", e=> 
        {
            e.preventDefault();
            
            QR.src = "";
          
            const NuevoForm = new FormData(FORM),
                  DataQR = NuevoForm.get("data"), 
                  SizeQR = NuevoForm.get("size")
    
            if (SizeQR == 0) 
            {
                alert("Escoger una opción")
                return
            }    
            
            const linkQR = SetQR(SizeQR ,DataQR)
            
            CONTENEDOR.insertAdjacentHTML("afterBegin",SPINNER)
           
            QR.src = linkQR; QR.alt = linkQR;
    
            QR.addEventListener("load", e => 
            {  
               const SP = document.getElementById("sp");
               if (SP) SP.remove();
            });
    
          
        });
            
    }

}();






/* 
 ///////////////////////////////////////    
 // INICIO CODIGO COMENTADO PARA MAS TARDE //
 //////////////////////////////////////
*/

/*const $tiempo = document.getElementById("tiempo")
const $enviar = document.getElementById("enviar")


$enviar.addEventListener("click", ()=> 
{
    const saveText = $tiempo.value
    
    const fecha =  saveText.slice(0, 10);
    const hora = saveText.slice(11, 16);
    
    console.log("Fecha:" , fecha);
    console.log("Hora:" , hora);
}) */


/* 
const $valor = document.getElementById("valor"),
      $enviar = document.getElementById("enviar"),
      $body = document.getElementById("body")

const spin = `<div class="spinner-border" role="status" style="postion:absolute">
<span class="sr-only"></span>
</div>`

$enviar.addEventListener("click", ()=> 
{
    $body.innerHTML = spin
    personaje($valor.value)
}) 




const imagen = document.createElement("img")


function personaje(value) 
{
    fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(data => data.json())
    .then(data => 
    {
        $body.innerHTML = ""
        imagen.src = data.image
        $body.appendChild(imagen)
    })
    
} */



/* 
 ///////////////////////////////////////    
 // FIN CODIGO COMENTADO PARA MAS TARDE //
 //////////////////////////////////////
*/









