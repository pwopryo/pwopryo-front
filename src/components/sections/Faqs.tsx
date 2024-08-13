import FaqsCard from "../cards/FaqsCard"

const Faqs = () => {
    const faqsList = [
        {
            q: "How do I create an account?",
            a: "To create an eccount, click on the Sign Up button on the top right corner of the page. Fill in the required information and click 'Create Account. You will receive a confirmation email to activate your account."
        },
        {
            q: "How can I post a property?",
            a: "To post a property, log in to your account and click on 'Post property' button. Fill in the details of your property, upload photos and click Submit. Your property will be reviewed and dublished within 24 hours."
        },
        {
            q: "How do I contact the owner?",
            a: "To contact the owner of a property go to the property detalls page and click on the 'Contact Owner' button. Fill in your message and click 'Send'. The owner will receive your meresge and get back to you."
        },
        {
            q: "How can I edit my property?",
            a: "To edit your property, log in to your account and go to the dashboard. Find your property in the list and click on the 'Edit' button. Make the necessary changes and click 'Save' your property will be updated."
        },
        {
            q: "How do I delete my property?",
            a: "To delete your property, log in to your account and go to the dashboard. Find your property in the list and click on the 'Delete' button. Confirm the deletion and your property will be permanently removed."
        }
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto">
                    Find answers to frequently asked questions about Pwopryo and how it works.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faqs