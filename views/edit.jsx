const React = require ('react')
const Default = require('./layouts/default')

function Edit({bread, index}) {
    return (
        <Default>
            <h2>Edit Bread Page</h2>

            <form action={`/breads/${index}?_method=PUT`} method='POST'>
                <label htmlFor='name'>Name</label>
                <input 
                        type='text' 
                        name='name' 
                        id='name' 
                        required 
                        defaultValue={bread.name}>
                    </input>

                <label htmlFor='image'Image>Image</label>
                <input 
                    type='text' 
                    name='image' 
                    id='image'
                    defaultValue={bread.image}></input>

                <label htmlFor='hasGluten'Has Gluten></label>
                <input 
                    type='checkbox' 
                    name='hasGluten' 
                    id='hadGluten'
                    defaultChecked={bread.hasGluten}>
                </input> <br></br>

                <input type='submit'></input>
            </form>

            <div className='homeButton'>
                <a href='/breads'>
                    <button>Back Home</button>
                    </a>
            </div>
        </Default>
    )
}

module.exports = Edit