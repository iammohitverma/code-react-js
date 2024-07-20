export const DeleteAll = ({ setTodoArr }) => {
    const deleteAll = () => {
        setTodoArr([]);
    }
    return (
        <>
            <button className="deleteAllBtn" onClick={deleteAll}>DeleteAll</button>
        </>
    )
}