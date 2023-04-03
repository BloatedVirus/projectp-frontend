import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div class="container--footer">
        <div class="container d-flex">
                    <article class="col">
                        <h2 class="row" >Project P</h2>
                        <ul class="row">
                            <li class="padding"><a href="#" class="light">Ons Verhaal</a></li>
                            <li class="padding"><a href="#" class="light">Al Opgehaald</a></li>
                            <li class="padding"><a href="#" class="light">Steun Ons</a></li>
                            <li class="padding"><a href="#" class="light">Onze Acties</a></li>
                            <li class="padding"><a href="#" class="light">De Muur</a></li>
                        </ul>
                    </article>
                    
                    <article class="col items">
                        <h2 class="row" >Bosfeesten</h2>
                        <ul class="row">
                            <li class="padding items"><a href="#" class="light">Website</a></li>
                            <li class="padding items"><a href="#" class="light">Instagram</a></li>
                            <li class="padding items"><a href="#" class="light">Facebook</a></li>
                        </ul>
                    </article>
                    
                    <article class="col">
                        <h2 class="row">Chirov Popov</h2>
                        <ul class="row">
                            <li class="padding"><a href="#" class="light">Website</a></li>
                            <li class="padding"><a href="#" class="light">Instagram</a></li>
                            <li class="padding"><a href="#" class="light">Facebook</a></li>
                        </ul>
                    </article>
                
                    <article class="col">
                
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.6961217947405!2d4.0570212159136885!3d50.98480725659813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3970a1430fa49%3A0x9737e92cfa0f6b47!2sChiro%20Popov%20vzw!5e0!3m2!1sen!2sbe!4v1679579175416!5m2!1sen!2sbe"
                    width="100%"
                    height="100%"
                    style={{border:0, borderRadius: 2 + 'vw'}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                    </article>
            
        </div>
    </div>
</footer>
  )
}

export default Footer