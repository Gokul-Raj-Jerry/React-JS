const Child = (props) => {
    const msg="I am Kanishka";
return (
    <>
    <button onClick={() => {props.parentFunction(msg) }}>Change Message</button>
    </>
)

}

export default Child;