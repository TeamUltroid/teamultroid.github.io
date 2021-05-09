import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

const InitialData = {
    API_ID: '',
    API_HASH: '',
    PHONE_NO: '',
    OTP: '',
    TwoFA: ''
}


const XD = () => {
    const [data, setData] = useState(InitialData);
    const [step, setStep] = useState(1);

    const Step = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <input
                            type="number"
                            name="API_ID"
                            placeholder="API ID"
                            value={data.API_ID}
                            onChange={(e) => setData({ ...data, API_ID: e.target.value })}
                        />
                        <input
                            type="text"
                            name="API_HASH"
                            placeholder="API HASH"
                            value={data.API_HASH}
                            onChange={(e) => setData({ ...data, API_HASH: e.target.value })}
                        />
                        <button onClick={() => setStep(2)}>Next</button>
                    </>
                )
            case 2:
                return (
                    <>
                        <input
                            type="number"
                            name="PHONE_NO"
                            placeholder="Phone No"
                            value={data.PHONE_NO}
                            onChange={(e) => setData({ ...data, PHONE_NO: e.target.value })}
                        />
                        <button onClick={() => setStep(3)}>Send OTP</button>
                    </>
                )
            case 3:
                return (
                    <>
                        <input
                            type="number"
                            name="OTP"
                            placeholder="OTP"
                            value={data.OTP}
                            onChange={(e) => setData({ ...data, OTP: e.target.value })}
                        />
                        <button onClick={() => setStep(4)}>Next</button>
                    </>
                )
            case 4:
                return (
                    <>
                        <input
                            type="text"
                            name="2FA"
                            placeholder="2FA"
                            value={data.TwoFA}
                            onChange={(e) => setData({ ...data, TwoFA: e.target.value })}
                        />
                        <button onClick={() => setStep(0)}>Submit</button>
                    </>
                )
            default:
                return (
                    <h2>Succes, Session has been sent to your SAVED MESSAGES</h2>
                )
        }
    }

    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <Step />
            </div>
        </Layout>
    )
}

export default XD;