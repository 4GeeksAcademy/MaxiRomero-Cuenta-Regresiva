import React, { useEffect, useState } from "react";

function Home() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setContador(prevContador => prevContador + 1);
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{Math.floor(contador / 1000) % 10}</div>
            <div className="three">{Math.floor(contador / 100) % 10}</div>
            <div className="two">{Math.floor(contador / 10) % 10}</div>
            <div className="one">{Math.floor(contador / 1) % 10}</div>
        </div>
    );
}

export default Home;