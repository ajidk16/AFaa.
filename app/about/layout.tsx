export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        {children}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolore, dolorem, commodi recusandae cumque nobis ratione ab deleniti
        illo exercitationem sint voluptatibus numquam laudantium inventore harum
        error adipisci porro mollitia esse itaque! Totam, error ipsa molestias,
        assumenda doloremque illo, officia sed modi qui cum repudiandae maxime
        obcaecati incidunt! Laboriosam ipsum similique, pariatur voluptatum
        necessitatibus quisquam distinctio non, nisi aut perferendis eaque nihil
        perspiciatis? Fugiat doloremque cupiditate id quia, eius nesciunt maxime
        et nisi corporis ea placeat nulla incidunt dignissimos ipsum ad
        consequuntur expedita minus commodi ab dolor natus dicta? Quis ab quam
        illum eos cum ut dolorum quo earum iste.
      </div>
    </section>
  );
}
