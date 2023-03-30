const React = require ('react')
const Default = require('./layouts/default')

function New({ bakers }) {
    return (
        <Default>
            <h2>New Bread Page</h2>

            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required></input>

                <label htmlFor='image'Image>Image</label>
                <input type='text' name='image' id='image'></input>

                <label htmlFor="baker">Baker</label>
                <select name="baker" id="baker">
                    {
                        bakers.map((baker) => {
                            return(
                                <option value={baker.id} key={baker.id}>{baker.name}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor='hasGluten' Has Gluten></label>
                <input type='checkbox' name='hasGluten' id='hadGluten'
                    defaultChecked></input> <br></br>

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

module.exports = New