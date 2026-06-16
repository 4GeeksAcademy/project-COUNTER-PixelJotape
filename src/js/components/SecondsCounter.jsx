const SecondsCounter = ({ seconds }) => {

    const totalSeconds = seconds;

    const one = Math.floor(totalSeconds / 1) % 10;
    const ten = Math.floor(totalSeconds / 10) % 10;
    const hundred = Math.floor(totalSeconds / 100) % 10;
    const thousand = Math.floor(totalSeconds / 1000) % 10;
    const tenThousand = Math.floor(totalSeconds / 10000) % 10;
    const hundredThousand = Math.floor(totalSeconds / 100000) % 10;

    return (
        <div className="d-flex justify-content-center bg-black py-3 my-4 rounded">
            
            <div className="bg-dark text-white m-1 p-3 rounded display-4 justify-content-center align-items-center d-flex" style={{ width: "70px", height: "90px" }}>
                <i className="far fa-clock"></i>
            </div>
            
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{hundredThousand}</div>
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{tenThousand}</div>
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{thousand}</div>
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{hundred}</div>
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{ten}</div>
            <div className="bg-dark text-white m-1 p-3 rounded display-4 text-center" style={{ width: "70px", height: "90px" }}>{one}</div>
            
        </div>
    );
};

export default SecondsCounter;