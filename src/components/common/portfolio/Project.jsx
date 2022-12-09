import React from 'react';

export default function Project(props) {
//   const cardStyle = {
//     width: '18rem',
//   };

  // Helper function that generates a random width for our placeholder images
//   const randomWidth = () => {
//     const number = Math.random() * (300 - 200) + 200;
//     return number.toString().split('.')[0];
//   };

  return (
    <div className="p-4">
	<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
		<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.image} alt="blog"/>
		<div className="p-6">
			<h1 className="title-font text-lg font-medium text-white mb-4">{props.title}</h1>
			<a href={props.link} className="text-white leading-relaxed mb-4 text-center">Link to application
            </a>
			<div className="">
				<a href={props.github} className="text-white leading-relaxed mb-4 text-center"> Link to github
				</a>
			</div>
		</div>
	</div>
</div>
  );
}
