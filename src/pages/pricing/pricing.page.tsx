import React from 'react'
import Subscription from "../../components/Subscription/subscription.component";

const Pricing = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md'>
                    <Subscription title='Free' price={0} description='You will get alot of benefits'/>
                </div>
                <div className='col-md'>
                    <Subscription title='VIP' price={5} description='You will get alot many of benefits'/>
                </div>
                <div className='col-md'>
                    <Subscription title='Big Baba' price={15} description='You will get all benefits'/>
                </div>
            </div>
        </div>
    )
}

export default Pricing