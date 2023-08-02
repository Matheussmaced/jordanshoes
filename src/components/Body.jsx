import tenis1 from '../assets/img/tenis1.svg'

const Body = () => {
    return(
        <>
            <div id="containerBody">
                <h2 className='bodyName'>Destaques</h2>
                <p className='bodyName'>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </p>
            
                <div id="tennis">
                    <div id="colum1">
                        <div className="coluns" id='tennis1'></div>

                        <div className="coluns" id='tennis2'></div>

                        <div className="coluns" id='tennis3'></div>

                        <div className="coluns" id='tennis4'></div>        
                    </div>

                    <div id="colum2">
                        <div className="coluns" id='tennis5'></div>

                        <div className="coluns" id='tennis6'></div>

                        <div className="coluns" id='tennis7'></div>

                        <div className="coluns" id='tennis8'></div> 
                    </div>

                </div>
            
            </div>
        </>
    )
}

export default Body
