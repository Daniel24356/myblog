       import '../style/A-hero.css'

      function AHero(){
        return (
            <>
              <div className='hero-div'>
                <div className="heros-indiv">
                <div>
                    <img src="blue-img.PNG" alt="" />
                </div>
                <div>
                    <p className='heros-rate'>178+</p>
                    <p className='saves-hero'>save products</p>
                </div>
                </div>
                <div className="hero-indiv">
                <div>
                    <img src="sec-img.PNG" alt="" />
                </div>
                <div>
                    <p className='hero-rate'>2000+</p>
                    <p className='save-hero'>stock products</p>
                </div>
                </div>
                <div className="hero-indiv">
                    <div>
                        <img src="third-img.PNG" alt="" />
                    </div>
                    <div>
                    <p className='hero-rate'>190+</p>
                    <p className='save-hero'>sales products</p>
                    </div>
                </div>
                <div className="hero-indiv">
                    <div>
                        <img src="fourth-img.PNG" alt="" />
                    </div>
                    <div>
                    <p className='hero-rate'>12+</p>
                    <p className='save-hero'>job application</p>
                    </div>
                </div>
              </div>
            </>
        )
      }

      export default AHero