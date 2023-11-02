import employees from "./data/employees.json";
import dayjs from "dayjs";
import * as config from "./config";
import cityscape from './images/cityscape.jpg';

function App() {
	const title = "Employee Directory";
	const introText =
		"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";

	return (
		<>
			<h1 className="text-3xl mb-3 text-blue-800">{title}</h1>
			<p className="mb-3">
				You are in the group{" "}
				<span className="italic">{config.userAccessGroup}</span>.
			</p>
			<img className="mb-3 rounded" src={cityscape}/>
			<p className="max-w-lg">{introText}</p>
			<div>
				{employees.map((employee) => {
					return (
						<div
							key={employee.employeeID}
							className="bg-slate-800 mt-3 text-slate-200 p-3 rounded max-w-lg"
						>
							<div className="flex gap-3">
								<img
									className="w-28 rounded"
									src={`images/employees/employee_${employee.employeeID}.jpg`}
								/>
								<div>
									<div className="text-[1.2rem]">
										{employee.firstName} {employee.lastName}
									</div>
									<div className="text-yellow-200">
										{employee.title}
									</div>
									{config.userAccessGroup ===
										"administrators" && (
										<>
											<div className="text-orange-600">
												Tel: {employee.address.phone}
											</div>
											<div className="text-orange-600">
												Birthday:{" "}
												{dayjs(
													employee.birthDate
												).format("MMM DD, YYYY")}
											</div>
										</>
									)}
								</div>
							</div>
							<div className="mt-2 italic text-slate-400">
								{employee.notes}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
