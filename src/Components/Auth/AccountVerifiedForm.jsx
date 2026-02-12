

const AccountVerifiedForm = () => {
    return (
       
        <div className="flex justify-center items-center min-h-screen ">
            <div className="bg-white shadow-xl rounded-md p-8 m-6 text-center max-w-md w-full ">

                <img
                    src="/image7.png"
                    alt="Verify Account"
                    className="w-40 mx-auto mb-6"
                />

                <p className="font-bold text-lg">
                    Account Verified Successfully
                    <a href="/login" className="text-blue-500 underline ml-2">
                        Login now
                    </a>
                </p>

            </div>
        </div>
       

    )
}

export default AccountVerifiedForm
