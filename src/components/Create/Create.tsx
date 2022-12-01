const Create: () => JSX.Element = () => {
    return (<div className="create">
        <form>
            <label>Title:</label>
            <input type="text" required/>
            <label>Author:</label>
            <input type="text" required/>
            <label>Body:</label>
            <textarea required/>
            <button>Post!</button>
        </form>
    </div>);
}

export default Create;