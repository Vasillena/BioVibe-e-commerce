import { html } from "../../node_modules/lit-html/lit-html.js";

export const aboutTemplate = () =>
  html` <section class="about-text">
    <h3>BE THE CHANGE YOU WISH TO SEE IN THE WORLD</h3>
    <div class="about-img"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur
      eos voluptatem esse, vero voluptas quas nemo, mollitia cum expedita qui,
      doloribus doloremque iure quam. Ullam a obcaecati nemo atque aperiam
      expedita quibusdam nobis, quidem culpa voluptas. Distinctio qui nisi nulla
      quidem possimus, laboriosam minus, reiciendis iusto atque vero nostrum
      obcaecati vitae! Illo laudantium asperiores quis expedita cupiditate, odit
      sunt impedit dignissimos. Doloremque esse amet harum, saepe ipsa
      repellendus qui commodi, labore cupiditate itaque optio. Voluptates nobis,
      dolore, numquam reprehenderit fuga quo eaque recusandae cupiditate totam
      doloremque amet, quae iusto pariatur qui necessitatibus quisquam.
    </p>
    <p>
      Obcaecati nemo ab quod natus temporibus in tenetur, aspernatur debitis
      animi. Officiis quis earum fuga quaerat id illum eum, obcaecati a
      perferendis pariatur, hic saepe. Laboriosam quasi molestias possimus vero
      officiis amet iure recusandae, autem, non sapiente at soluta asperiores?
      Nostrum doloribus doloremque molestiae minus facilis omnis voluptate
      quidem voluptates laudantium fugit ipsum placeat eveniet saepe dolorum, ex
      perferendis inventore officia quo harum pariatur! Saepe vel expedita quod
      vero facere error ex deleniti sapiente officiis, dicta esse dolorem eos
      corrupti qui iste blanditiis cumque nulla, possimus incidunt? Tempora quas
      qui in odit suscipit aspernatur iusto iure? Placeat error ipsa, sunt
      assumenda reprehenderit totam ab consequatur qui.
    </p>
  </section>`;

export async function aboutPage(ctx) {
  ctx.render(aboutTemplate());
}
