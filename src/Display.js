import './Display.css';

const Display = ({ name }) => {
    // return JSX component
    return (
        <div id="display">
            <p>{name}</p>
        </div>
    );
};

export default Display;

