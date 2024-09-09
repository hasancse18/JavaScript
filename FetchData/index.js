

async function fetchData()
{
    try{
        const pockemoName = document.getElementById("pockemoName").value.toLowerCase();

        const response =await fetch(`https://pokeapi.co/api/v2/pokemon/${pockemoName}`);

        //console.log(response);

        if(!response.ok)
        {
            throw new error("Could Not Fetch Resource");
        }
        else
        {
            const data = await response.json();
            console.log(data);

            const pockemonSprite = data.sprites.front_default;

            const imgElement = document.getElementById("image");

            imgElement.src =pockemonSprite;
            imgElement.style.display="block";
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

fetchData()