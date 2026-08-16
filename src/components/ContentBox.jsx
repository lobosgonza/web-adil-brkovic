import React from 'react';

export const ContentBox = ({ title, subtitle, icon: Icon, borderColor = 'border-[#2c3e50]', children }) => {
	return (
		<div className={`md:my-8 bg-white py-12 px-8 sm:shadow-sm sm:border-t-4 ${borderColor} h-full`}>
			<div className='mb-6'>
				<div className='flex items-center gap-3'>
					{Icon && <Icon size={16} className='text-[#e67e22]' />}
					<h2 className='text-2xl uppercase'>{title}</h2>
				</div>
				{subtitle && <p className='text-[#778696] text-xs uppercase'>{subtitle}</p>}
			</div>

			<div className='divide-y divide-gray-100'>{children}</div>
		</div>
	);
};
