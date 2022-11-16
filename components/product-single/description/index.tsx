type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Detalhes e descrição do produto</h4>
        <p>
          Pensando em vocês, universitarios(a),tornamos possível a aquisição de
          um produto para sua jornada acadêmica, a partir de uma peça, com
          disponibilidade em estoque e envio imediato. <br></br>Com um toque de
          moda e estilo sua nova camiseta de uniforme são confeccionadas em
          malha 100% algodão fio 30.1 <br /> Com estampas em resolução
          fotográfica e toque super leve e macio Disponível em modelagem baby
          look feminina E modelagem tradicional
        </p>
      </div>
      {/*
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>
          White Summer Vibes T-shirt in the uiKit line with a colorful print.{" "}
          <br></br>Made of jersey cotton. T-shirt fits perfectly with jeans,
          pants or shorts.
        </p>
      </div>
      */}
    </section>
  );
};

export default Description;
