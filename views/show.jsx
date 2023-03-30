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
            <p>{bread.getBakedBy()}</p>
            <br/>
            <br/>

            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>

            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE'></input>
            </form>

            <br></br>
            <br></br>
            <a href="/breads">Go Home</a>
        </Default>
    )
}

module.exports = Show