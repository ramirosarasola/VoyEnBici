import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import { Routing } from "./routes/Routing";

function App() {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
			<Routing />
		</div>
	);
}

export default App;
