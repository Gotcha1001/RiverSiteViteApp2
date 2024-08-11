import React from 'react';

const PayNowButton = () => {
    const merchantId = '15698630'; // Your PayFast Merchant ID
    const merchantKey = '1cvcshjyq3bz4'; // Your PayFast Merchant Key
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const returnUrl = `${baseUrl}/payment-success`;
    const cancelUrl = `${baseUrl}/payment-cancel`;
    const notifyUrl = `${baseUrl}/payment-notify`;

    return (
        <div className="flex justify-center mt-8">
            <form name="PayFastPayNowForm" action="https://payment.payfast.io/eng/process" method="post">
                <input type="hidden" name="cmd" value="_paynow" />
                <input type="hidden" name="merchant_id" value={merchantId} />
                <input type="hidden" name="merchant_key" value={merchantKey} />
                <input type="hidden" name="receiver" pattern="[0-9]" value="15698630" />
                <input type="hidden" name="return_url" value={returnUrl} />
                <input type="hidden" name="cancel_url" value={cancelUrl} />
                <input type="hidden" name="notify_url" value={notifyUrl} />

                <div className="flex items-center justify-center space-x-4">
                    <label htmlFor="PayFastAmount" className="text-white">Amount:</label>
                    <input
                        required
                        id="PayFastAmount"
                        type="number"
                        step=".01"
                        name="amount"
                        min="5.00"
                        placeholder="Enter amount"
                        defaultValue=""
                        style={{
                            width: '200px', // Increased width to 200px
                            padding: '8px',
                            fontSize: 'inherit',
                            backgroundColor: '#000', // Black background
                            color: '#fff', // White text
                            border: '1px solid #ccc', // Optional: Add border for visibility
                            borderRadius: '4px', // Optional: Rounded corners
                            textAlign: 'center', // Center text inside input
                        }}
                    />
                </div>

                <input type="hidden" name="item_name" maxLength="255" value="Tithes" />
                <input type="hidden" name="item_description" maxLength="255" value="Tithes or Offerings" />

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 zoom"
                        style={{ minWidth: '200px' }}
                    >
                        Pay Tithes or Offerings
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PayNowButton;
