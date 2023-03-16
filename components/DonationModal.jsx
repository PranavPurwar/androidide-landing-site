function DonationModal() {
  return (
    <>
      <input type="checkbox" id="modal-donation" className="modal-toggle" />
      <label
        htmlFor="modal-donation"
        className="modal modal-bottom md:modal-middle cursor-pointer"
      >
        <label htmlFor="" className="modal-box">
          <h3 className="font-bold text-lg">Support AndroidDE</h3>
          <p className="py-4">
            Support Android app development by donating to the AndroidIDE
            project.
          </p>
          <a
            href="https://opencollective.com/androidide/donate"
            target="_blank"
          >
            <img
              src="https://opencollective.com/webpack/donate/button@2x.png"
              width="300"
              className="mx-auto"
            />
          </a>
          <div className="divider">OR</div>
          <iframe
            src="https://github.com/sponsors/AndroidIDEOfficial/button"
            title="Sponsor AndroidIDEOfficial"
            className="mx-auto"
            height="32"
            width="114"
            style={{
              border: 0,
              borderRadius: "6px",
            }}
          ></iframe>
          <div className="modal-action">
            <label htmlFor="modal-donation" className="btn btn-ghost btn-sm">
              done
            </label>
          </div>
        </label>
      </label>
    </>
  );
}

export default DonationModal;
