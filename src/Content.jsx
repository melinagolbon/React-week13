function Content({ contentShow, contentNumer }) {
  return (
    <div className="content">
      {contentShow ? (
        <>
          <h2>Content {contentNumer}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            cumque eius dicta autem ad distinctio minus tempora possimus non eum
            quas aliquid voluptate, dolores eaque quis suscipit nam, quibusdam
            voluptatem doloribus hic necessitatibus nesciunt? Ducimus,
            aspernatur fugit! Distinctio, est dolorum.
          </p>
        </>
      ) : null}
    </div>
  );
}

export default Content;
