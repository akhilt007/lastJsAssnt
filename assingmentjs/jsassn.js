
var toggleFlag = false
function getCountries(){
    if (toggleFlag === false) {
        toggleFlag = true
        fetch ("https://restcountries.com/v3.1/all")
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            
            
                console.log(result, toggleFlag);
                
                result.forEach((cnty)=>{
                    const cntyBox=document.createElement('div')
                    cntyBox.className='Box'
        
                    const heading=document.createElement('h3')
                    heading.innerHTML=cnty.name.common
        
        
                    const img=document.createElement('img')
                    img.className='imgtag'
                    img.src=cnty.flags.png
        
                    cntyBox.appendChild(heading)
                    cntyBox.appendChild(img)
                    document.getElementById('container').appendChild(cntyBox)
                })
                console.log(toggleFlag)
            
            
        })
        .catch(err=>{
            console.log(err);
        })
    }else{
        toggleFlag = false;
        container.innerHTML = '';

}}