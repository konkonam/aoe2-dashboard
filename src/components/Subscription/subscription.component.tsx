import React from "react"
import { Link } from "react-router-dom"
import SubscriptionProps from "./subscription.interface";
import './subscription.css'

const Subscription = (props: SubscriptionProps) => {
    return (
        <div className='subscription card'>
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{props.title}</h4>
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">${props.price}<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                    {props.description}
                </ul>
                <Link to="/contact" className="w-100 btn btn-lg btn-outline-primary">Contact us</Link>
            </div>
        </div>
    )
}

export default Subscription