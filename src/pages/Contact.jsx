export default function Contact() {
  return (
    <div className="contactPageContainer">
      <form id="contact">
        <label for="name">Name</label>
        <input className="input contactForm" type="text" id="name" />
        <label for="email">Email</label>
        <input className="input contactForm" type="email" id="email" />
        <label for="message">Message</label>
        <textarea
          className="input contactForm"
          name="Message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="button contactBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
