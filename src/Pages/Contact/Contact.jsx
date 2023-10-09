/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto   text-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="flex gap-10 py-5 items-center px-5 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-serif font-bold">
              Contact Us
            </h1>
            <p className="py-6">
              Your feedback matters to us! Whether you have questions,
              suggestions, or just want to say hello, we're here to listen. Our
              dedicated team is eager to assist you in any way we can. Don't
              hesitate to reach out via the contact form on the left side of the
              page, and we'll get back to you as soon as possible.
              Alternatively, you can connect with us through our social media
              channels or reach out via email or phone. We value your input and
              look forward to hearing from you. Let's start a conversation and
              make your experience with us even better!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="input input-bordered py-2 h-20"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
