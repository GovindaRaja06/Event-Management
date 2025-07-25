import React from 'react'
import {Link} from 'react-router-dom'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div className="faq-top">
                <h2 className='faq-heading'>Frequently Asked Question</h2>
                <ul>
                    <li className='list-item'>
                        How do I Book an Event <br />
                        Go to the event page and see the Details , after that "Book Now".
                    </li >
                    <li className='list-item'>
                        How can I cancel my booking? <br />
                        No, Bookings are non refundable at this moment.
                    </li>
                    <li className='list-item'>
                        Where Can I see my Booked Events? <br />
                        Go to Booked Events Section in the Header.
                    </li>
                    <li className='list-item'>
                        Do I need to have an account to Book an event <br />
                        Yes, you are supposed to have an account either by login or signup method.
                    </li>
                    <li className='list-item'>
                        How will I receive my ticket? <br />
                        After a successful payment , you receive ticket in the Ticket page.
                    </li>
                    <li className='list-item'>
                        can I request an event ? <br />
                        Yes, ofcourse you can able to request an event by using the Event-Request form. 
                    </li>
                    <li className='list-item'>
                        what happens if the event is cancelled ? <br />
                        No worries that you have notified by the email and full refund will be available.
                    </li>
                    <Link to="/">
                        <button className='faq-btn'>Done</button>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Faq