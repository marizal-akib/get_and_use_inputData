/* eslint-disable react/prop-types */

import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>{asset && <Special asset={asset}></Special>}</section>
      {name=== 'Marjan' && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
