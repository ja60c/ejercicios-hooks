import useCounter from "../hooks/useCounter";

function Contador() {
    // let {count} = useCounter();
    const {count, incrementar, decrementar} = useCounter(10);

    return(
        <div>
            <button onClick={decrementar}>Decrementar</button>
                <p>You clicked {count} times</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;