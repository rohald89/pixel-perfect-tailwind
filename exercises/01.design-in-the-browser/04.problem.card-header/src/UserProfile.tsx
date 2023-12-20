import profileImage from './assets/avatar.png'

// User data
const user = {
	name: 'Jessy Styles',
	avatarUrl: profileImage,
	registerDate: '10/31/2023',
	bio: 'Jessy is passionate about designing visually stunning and highly functional web applications, with code. She really enjoys using Tailwind CSS.',
}

export default function UserProfile() {
	return (
		<div className="pb-20 pt-48">
			{/* Card container */}
			<div className="mx-auto max-w-md rounded-3xl bg-slate-100 px-8 shadow-lg ring-1 ring-slate-300">
				{/* 
          🐨 Wrap the header + user bio in a `div`. 
          This wrapper should have the following visual aspects:
          
          1. a 8rem offset (margin-top) from the top of the card
          2. a border at the top that's 1px thick and the color `slate-300`
        */}

				{/* 
          🐨 Notice the 8rem offset not working? This is due to collapsing margins.
					You can fix it with the `overflow-auto` class on the card container.
        */}
				<header className="flex flex-col items-center">
					<img
						src={user.avatarUrl}
						alt={`avatar for ${user.name}`}
						className="-mt-20 h-40 w-40 rounded-full object-cover shadow-lg ring-1 ring-slate-300 ring-offset-[6px]"
					/>
					<h1 className="mt-8 text-center text-3xl">{user.name}</h1>
					<p className="mt-2 text-center text-slate-500">
						Joined on {user.registerDate}
					</p>
				</header>
				<p className="mt-8 text-lg text-slate-900">{user.bio}</p>
				<footer className="py-16 text-center">
					<a
						href="#"
						className="ring-ring inline-flex h-10 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white outline-none ring-offset-2 ring-offset-white transition-colors focus-within:ring-4 hover:bg-slate-900/80 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50"
					>
						Read notes
					</a>
				</footer>
			</div>
		</div>
	)
}
