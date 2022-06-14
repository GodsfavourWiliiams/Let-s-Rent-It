import React from 'react';

const Profile = () => {

  return (
    <section className="p-6 bg-white rounded ">
	<form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		
		<fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm">
			<div className="space-y-3 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Admin</p>
          <div className="flex flex-col space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-40 h-40 rounded-full bg-gray-200 mb-4" />
					</div>
          <button className="px-4 py-2 rounded-md bg-primary-100 text-white ">Change</button>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm uppercase font-semibold">Username</label>
					<input id="username" type="text" placeholder="Username" className="w-full px-3 mt-1 py-2 rounded-md outline-none bg-indigo-50 " />
				</div>

				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm uppercase font-semibold">Position</label>
					<input id="website" type="text" placeholder="manager" className="w-full mt-1 px-3 py-2 rounded-md outline-none bg-indigo-50 " />
				</div>

        <div className="col-span-full">
					<label htmlFor="website" className="text-sm uppercase font-semibold"></label>
					<input id="website" type="text" placeholder="something" className="w-full mt-1 px-3 py-2 rounded-md outline-none bg-indigo-50 " />
				</div>
			
				<div className="col-span-full space-y-3 mt-6">
					<label className="text-sm">Change Password</label>
					<div className="flex items-center space-x-2">
            <div className="col-span-full sm:col-span-3">
                <label htmlFor="username" className="text-sm mb-1 uppercase font-semibold">New Password</label>
                <input id="username" type="text" placeholder="new" className="w-full mt-1 px-3 py-2 rounded-md outline-none bg-indigo-50 " />
           </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm uppercase font-semibold">Comfirm</label>
              <input id="website" type="text" placeholder="confirm" className="w-full mt-1 px-3 py-2 rounded-md outline-none bg-indigo-50 " />
            </div>
						
					</div>
          <button className="px-4 py-2 text-white rounded-md bg-primary-100">Change</button>
				</div>
			</div>
		</fieldset>
	</form>
</section>
  )
}

export default Profile