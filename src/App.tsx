import { useState } from "react";
import Counter from "./component/Counter";
import IncreaseButton from "./component/IncreaseButton";

function App() {
	return (
		<div>
			<h1>Extern Store</h1>
			<h1>
				https://blog.saeloun.com/2021/12/30/react-18-usesyncexternalstore-api
			</h1>
			<div>
				<div>
					<Counter></Counter> <IncreaseButton></IncreaseButton>
				</div>
				<div>
					<Counter></Counter> <IncreaseButton></IncreaseButton>
				</div>
				<div>
					<Counter></Counter> <IncreaseButton></IncreaseButton>
				</div>
				<div>
					<Counter></Counter> <IncreaseButton></IncreaseButton>
				</div>
			</div>
		</div>
	);
}

export default App;
