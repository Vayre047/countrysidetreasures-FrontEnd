function SignUpPage(){
	return(
		<div className="w-full max-w-xs flex flex-col justify-center items-center positionForm">
			<h1 className="text-center text-4xl pt-5">Registo</h1>
			<form className="signUpField block text-xl text-black text-left text-sm font-bold mb-2">
				<label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
					Name:
					<input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
				</label>
				<label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
					Email:
					<input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
				</label>
				<label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
					Password:
					<input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
				</label>
				<label className="block text-xl text-black text-left text-sm font-bold mb-2 pb-3">
					Corfirmar Password:
					<input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
				</label>
				<button type="submit" className="border border-green-500 bg-green-500 hover:border-green-500 hover:bg-green-700 text-slate-100 rounded text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">Sign Up</button>
			</form>
		</div>
	);
}

export default SignUpPage;