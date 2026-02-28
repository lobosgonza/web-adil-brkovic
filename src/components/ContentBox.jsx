import React from 'react';

export const ContentBox = ({ title, subtitle, icon: Icon, borderColor = 'border-[#2c3e50]', children }) => {
	return (
		<div className={`bg-white p-10 md:p-14 shadow-sm border-t-4 ${borderColor} h-full`}>
			<div className='mb-10'>
				<div className='flex items-center gap-3 mb-2'>
					{Icon && <Icon size={16} className='text-[#e67e22]' />}
					<h2 className='text-2xl font-display font-semibold text-[#2c3e50] uppercase tracking-tighter'>{title}</h2>
				</div>
				{subtitle && <p className='text-[#778696] text-xs uppercase tracking-widest font-light'>{subtitle}</p>}
			</div>

			<div className='divide-y divide-gray-100'>{children}</div>
		</div>
	);
};
