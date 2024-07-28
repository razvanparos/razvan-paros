import './Contact.css';

function Contact() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    console.log(currentYear)
  return (
    <div className="contact-div padding" name='contact'>
       <div className='contact-content'>
            <div className='contact-line'>
                <div className='line'></div>
                <p>razvanparos.</p>
                <div className='line'></div>
            </div>
            <p>© Copyright {currentYear} | Razvan Paros | All rights reserved</p>
       </div>
    </div>
  );
}

export default Contact;
