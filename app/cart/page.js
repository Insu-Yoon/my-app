import 나이 from "./data.js";
export default function Cart() {
  let cart = ["토마토", "파스타"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {cart.map((data, i) => {
        return <CartItem data={data} key={i} />;
      })}
      <div
        className="p-2.5 flex justify-around border-b border-gray-500 leading-none"
        key="포도"
      >
        <p>포도</p>
        <p>$40</p>
        <p>2개</p>
        <Button color="blue" />
      </div>
    </div>
  );
}

function CartItem(props) {
  return (
    <div
      className="p-2.5 flex justify-around border-b border-gray-500 leading-none"
      key={props.data}
    >
      <p>{props.data}</p>
      <p>$40</p>
      <p>2개</p>
      <Button color="blue" />
    </div>
  );
}

function Button(props) {
  return <button className={`btn ${props.color}`}>버튼</button>;
}
