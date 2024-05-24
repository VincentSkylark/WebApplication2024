import './Loading.style.css';


const LoadingComponent = () => {
    return (
        <div className="spinner-container">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <h3>Loading...</h3>
        </div>
    );
};

export { LoadingComponent };