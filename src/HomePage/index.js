import './index.css';

function Landing(){
    return(
        <div className='body'>
        
        <div id='txt'>
        <b>Together we bring ideas to life</b>
        <br/>
            <b>Unlock the full spectrum <br/>of our creative output</b>
           
            </div>
            <div className="imgs">
                <div className='first'>
                <div>
                <img id='leila' src='/Images/Leila.jpg' alt='' />
                </div>
                <div>
                <img id='nje' src='/Images/Nje.jpg' alt=''/></div>
                </div>
                <div>
                <img id='vee' src='/Images/Vee.jpg' alt=''/></div>
                <div className='second'>
                <div>
                <img id='wachira' src='/Images/Faith.jpg' alt=''/>
                </div>
                <div>
                <img id='rach' src='/Images/Racheal.jpg' alt=''/>
                </div>
                </div>
            </div>
            <p id='present'>Presented by your favorite squad.<br/>
                  Kishya</p>
                  <div id='Access'>
                    <div>
                    <img  id='pod' src='/Images/micp.jpg' alt=''/>
                    <div>
                    <p>Podcast</p>
                    </div>
                    </div>
                    <div>
                    <img  id='port' src='/Images/portfolios.jpg' alt=''/>
                    <div>
                    <p>Portfolio</p>
                    </div>
                    </div>
                    <div>
                    <img  id='loom' src='/Images/loom.png' alt=''/>
                    <div>
                    <p>Loom</p>
                    </div>
                    </div>
                    <div>
                    <img id='jr' src='/Images/JIra.png' alt=''/>
                    <div>
                    <p>Jira</p>
                    </div>
                    </div>
                  </div>
        </div>
    )
}
export default Landing;