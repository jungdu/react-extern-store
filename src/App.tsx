import Counter from "./component/Counter";
import PlusButton from "./component/PlusButton";

// https://blog.saeloun.com/2021/12/30/react-18-usesyncexternalstore-api
function App() {
	console.log("render App");
	return (
		<div>
			<h1>Using Extern Store</h1>
			<div>
				<div>
					<Counter></Counter> <PlusButton></PlusButton>
				</div>
				<div>
					<Counter></Counter> <PlusButton></PlusButton>
				</div>
				<div>
					<Counter></Counter> <PlusButton></PlusButton>
				</div>
				<div>
					<Counter></Counter> <PlusButton></PlusButton>
				</div>
			</div>
		</div>
	);
}

export default App;
