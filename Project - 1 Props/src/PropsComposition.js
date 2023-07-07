//props.children

const PropsComposition = ({children}) => {
    return (
        <>
       <div style={{border: "1px solid red"}}>{children}</div>
        </>
    )
};

export default PropsComposition;