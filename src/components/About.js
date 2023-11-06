import React from 'react'

export default function About(props) {
    return (
        <div className='container text-center w-75' 
            style={{color: props.mode === 'light'? 'black':'white'}}
        >
            <div className="card border border-0">
                <div className="card-header " 
                style={{backgroundColor: props.mode === 'light'? '#FFD898':'#050A30'}}
                >
                    About Us
                </div>
                <div className="card-body"
                    style={{backgroundColor: props.mode === 'light'? 'white':'#B9B7BD', color: 'black'}}
                >
                    <h5 className="card-title">Text utility app</h5>
                    <p className="card-text">I've designed a minimalistic text analysis app with great potential, and I am dedicated to enhancing your experience with it. Your feedback is invaluable to me as I work on making this app even more enjoyable and useful for you. I am committed to evolving and improving the features to ensure that you get the most out of your text analysis experience. Please feel free to share any thoughts, suggestions, or ideas you have, as your input plays a crucial role in shaping the future of this app. Thank you for being a part of my journey towards excellence.</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Me</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Contact Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start ">
                            <p><strong>Mobile: </strong>7358087797</p>
                            <p><strong>Email: </strong><a type='email' href='mailto:hornetg30@gmail.com'>hornetg30@gmail.com</a></p>
                            <p><strong>Portfolio: </strong><a href='https://gleeful-meerkat-4a4cc4.netlify.app/'>My Portfolio</a></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
