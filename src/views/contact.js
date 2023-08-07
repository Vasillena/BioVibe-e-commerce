import { html } from "../../node_modules/lit-html/lit-html.js";

export const contactTemplate = () =>
  html` <section class="contact-section">
    <h3>NEED ANSWERS</h3>
    <div class="contact-container">

      <div class="contact-text">
        <p>
          If you have a question, no matter how big or small, our awesome
          customer support team will get back to you as soon as possible – you
          can usually expect a response within 24 hours.
        </p>
      </div>

      <div class="contact-form">
        <form id="contact">
          <div class="container">
            <div class="form-elements">
              <label for="name" />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
              />
            </div>
            <div class="form-elements">
              <label for="email" />
              <input type="email" id="email" name="email" placeholder="Email" />
            </div>
            <div class="form-elements">
              <label for="message" />
              <textarea id="message" name="message" cols="50" rows="3"
              placeholder="Hi..."></textarea>
            </div>
            <div class="form-elements">
              <input
                type="submit"
                class="submit-button"
                defaultValue="SEND"
              />
            </div>
          </div>
        </form>
      </div>
      
    </div>
</div>`;

export async function contactPage(ctx) {
  ctx.render(contactTemplate());
}
