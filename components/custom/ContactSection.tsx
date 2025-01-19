export function ContactSection() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div>
                <p>Business Information:</p>
                <p>Email: business@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Business St, City, Country</p>
            </div>
        </section>
    );
}
