const React = require ('react')
const Default = require('./layouts/default')

function Show({bread, index}) {
    console.log(bread.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>

            <p>
                {
                    bread.hasGluten 
                    ? <span>DOES </span>
                    : <span>DOES NOT </span>
                }
                have Gluten.
            </p>
            
            <img src={bread.image} alt={bread.name}></img>
            <br/>
            <br/>

            <a href={`/breads/${index}/edit`}><button>Edit</button></a>

            <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE'></input>
            </form>

            <br></br>
            <br></br>
            <a href="/breads">Go Home</a>
        </Default>
    )
}

module.exports = Show