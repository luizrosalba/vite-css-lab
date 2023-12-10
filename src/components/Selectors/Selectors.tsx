import './selectors.scss'
export default function Selectors() {
    return (
        <>
            <h2>Selectors</h2>
            <p className='text'>Selectors Examples . </p>
            <a href="https://www.w3schools.com/cssref/css_selectors.php">Reference </a>
            <div className="class-example">
                <div className="class-example1">
                    I'm descendant
                </div>
                I'm red
            </div>
            <div className="class-example2"> I'm blue </div>
        </>
    )
}
